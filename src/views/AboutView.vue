<script setup>
import axios from "axios";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import AboutItem from "../components/AboutItem/AboutItem.vue";
</script>

<script>
export default {
  data() {
    return {
      dir: "Data/about/image/",
      aboutData: null,
    };
  },
  methods: {
    LoadJson() {
      axios
        .get("Data/about/about.json")
        .then((response) => {
          this.aboutData = response.data;
          console.log(this.aboutData);
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
  <template v-if="aboutData != null">
    <div class="wrap">
      <Road class="mb-10">
        <RoadItem>關於策展</RoadItem>
      </Road>
      <img :src="dir + aboutData.image" class="w-full mb-10" />
      <div class="mb-10 text-2xl font-bold">展覽論述</div>
      <div class="mb-20">
        <template v-for="i in aboutData.info">
          <div :class="{ my: i === '' }" class="contentFont">{{ i }}</div>
        </template>
      </div>

      <div class="mb-20">
        <div class="mb-10 text-2xl font-bold">策展人</div>
        <AboutItem :img="dir + aboutData.curator.image" :href="aboutData.curator.link">
          <template #name>{{ aboutData.curator.name }}</template>
          <template #info>{{ aboutData.curator.info }}</template>
        </AboutItem>
      </div>

      <div class="mb-20">
        <div class="mb-10 text-2xl font-bold">策展團隊</div>

        <div class="max-w-6xl p-5 mx-auto mt-20 mb-12 bg-gray-100 rounded-3xl">
          <div class="text-lg font-bold">
            {{ aboutData.teamTip }}
          </div>
        </div>

        <AboutItem v-for="i in aboutData.team" :img="dir + i.image" :href="i.link" class="my-32">
          <template #name>{{ i.name }}</template>
          <template #info>{{ i.info }}</template>
        </AboutItem>
      </div>
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
</style>
