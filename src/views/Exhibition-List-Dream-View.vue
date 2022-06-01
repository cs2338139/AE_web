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
  },
  created() {
    this.LoadJson();
  },
};
</script>

<template>
  <template v-if="exhibitionData != null">
    <div class="wrap">
      <Road class="mb-10">
        <RoadItem>展覽介紹</RoadItem>
        <RoadItem>夢境房</RoadItem>
        <template #title>夢境房</template>
      </Road>

      <div class="w-full mb-10 overflow-hidden aspect-video dev "><img :src="dir + exhibitionData.image" /></div>

      <ExhibitionItem v-for="(i, index) in exhibitionData.books" :img="dir + index + '/cover.jpg'" position="transform: translate(0px);" :info="i.info" :href="'Dream/' + index" class="my-32 sm:my-10">
        <template #title>{{ i.title }}</template>
      </ExhibitionItem>
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
