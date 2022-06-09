<script setup>
import axios from "axios";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import ExhibitionItem from "../components/ExhibitionItem/ExhibitionItem.vue";
</script>

<script>
export default {
  data() {
    return {
      dir: "Data/Exhibitions/" + this.$route.params.exhibitionID + "/",
      exhibitionData: null,
    };
  },
  methods: {
    LoadJson() {
      axios
        .get(this.dir + "ExhibitionList.json")
        .then((response) => {
          this.exhibitionData = response.data;
          console.log(this.exhibitionData);
        })
        .catch(function (response) {
          console.log(response);
        });
    },
    GetTargetHeight() {
      const h = document.body.scrollHeight - (this.$refs.target.getBoundingClientRect().top + window.scrollY);
      const bg = this.$refs.bg;
      bg.style.height = h + 15 + "px";
      console.log(bg.style.height);
    },
  },
  created() {
    this.LoadJson();
  },
  updated() {
    setTimeout(() => {
      this.GetTargetHeight();
    }, 200);
  },
};
</script>

<template>
  <template v-if="exhibitionData != null">
    <div class="wrap">
      <Road class="mb-10">
        <RoadItem>展覽介紹</RoadItem>
        <RoadItem>晚安屋</RoadItem>
        <template #title>晚安屋</template>
      </Road>

      <div class="w-full mb-20 overflow-hidden aspect-video">
        <img :src="dir + exhibitionData.image" />
      </div>
      <div ref="target"></div>
      <ExhibitionItem v-for="(i, index) in exhibitionData.books" :img="dir + index + '/cover.jpg'" position="transform: translate(0px);" :info="i.info" :href="'GoodNight/' + index" class="my-32 sm:my-10">
        <template #title>{{ i.title }}</template>
      </ExhibitionItem>
    </div>
    <div class="absolute w-full bottom-0 -z-50">
      <div class="bg-bg-0-image h-8"></div>
      <div class="bg-gradient-to-t from-black via-navColor to-bg-2-Color" ref="bg"></div>
    </div>
  </template>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .my {
    @apply my-5;
  }
  .contentFont {
    @apply text-lg leading-6;
  }
}

@layer utilities {
  .h-550px {
    height: 550px;
  }
}
@layer components {
  .dev {
    @apply border border-solid box-border  border-red-500;
  }
}
</style>
