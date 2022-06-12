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
      <!-- <ExhibitionItem v-for="(i, index) in exhibitionData.books" :img="dir + index + '/cover.jpg'" position="transform: translate(0px);" :info="i.info" :href="'GoodNight/' + index" class="my-32 sm:my-10">
        <template #title>{{ i.title }}</template>
      </ExhibitionItem> -->
      <ExhibitionItem :img="dir + '0/cover.jpg'" position="transform: translate(0px);" :info="exhibitionData.books[0].info" :href="'GoodNight/' + 0" class="my-32 sm:my-10">
        <template #title>{{ exhibitionData.books[0].title }}</template>
      </ExhibitionItem>

      <ExhibitionItem :img="dir + '1/cover.jpg'" position="transform: translate(0px);" :info="exhibitionData.books[1].info" :href="'GoodNight/' + 1" class="my-32 sm:my-10">
        <template #title>{{ exhibitionData.books[1].title }}</template>
      </ExhibitionItem>

      <ExhibitionItem :img="dir + '2/cover.jpg'" position="transform: translate(0px);" :info="exhibitionData.books[2].info" :href="'GoodNight/' + 2" class="my-32 sm:my-10">
        <template #title>{{ exhibitionData.books[2].title }}</template>
      </ExhibitionItem>

      <ExhibitionItem :img="dir + '3/cover.jpg'" position="transform: translate(0px);" :info="exhibitionData.books[3].info" :href="'GoodNight/' + 3" class="my-32 sm:my-10">
        <template #title>{{ exhibitionData.books[3].title }}</template>
      </ExhibitionItem>

      <ExhibitionItem :img="dir + '4/cover.jpg'" position="transform: translate(0px);" :info="exhibitionData.books[4].info" :href="'GoodNight/' + 4" class="my-32 sm:my-10">
        <template #title>{{ exhibitionData.books[4].title }}</template>
      </ExhibitionItem>

      <ExhibitionItem :img="dir + '5/cover.jpg'" position="transform: translate(0px);" :info="exhibitionData.books[5].info" :href="'GoodNight/' + 5" class="my-32 sm:my-10">
        <template #title>{{ exhibitionData.books[5].title }}</template>
      </ExhibitionItem>
    </div>
    <div class="absolute w-full bottom-0 -z-50">
      <div class="bg-bg-0-image h-8"></div>
      <div class="bg-gradient-to-b from-bg-2-Color via-navColor to-black" ref="bg"></div>
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

  .bgCloud {
    background-size: 100% 100%;
    max-width: 1134px;
    height: 288px;
    @apply bg-bg-cloud-image;
  }
}
</style>
