<script setup>
import axios from "axios";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import ActivityItem from "../components/ActivityItem/ActivityItem.vue";
</script>

<script>
export default {
  data() {
    return {
      ForumList: [],
    };
  },
  methods: {
    LoadJson() {
      axios
        .get("Data/Activities/" + this.$route.params.activityID + "/ForumList.json")
        .then((response) => {
          this.ForumList = response.data;

          let colCount = 3;

          if (this.$windowWidth <= this.$sm) {
            colCount = 1;
          } else if (this.$windowWidth <= this.$md) {
            colCount = 2;
          } else if (this.$windowWidth <= this.$lg) {
            colCount = 2;
          } else if (this.$windowWidth <= this.$xl) {
            colCount = 2;
          } else if (this.$windowWidth <= this.$2xl) {
            colCount = 3;
          }

          var mod = colCount - (this.ForumList.length % colCount);
          if (mod === colCount) mod = 0;
          var template = {
            title: "none",
            imgKey: "",
            date: "",
            teacher: "",
            path: "",
          };

          for (var i = 0; i < mod; i++) {
            this.ForumList.push(template);
          }
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
  <div class="wrap">
    <Road class="mb-10">
      <RoadItem>推廣活動</RoadItem>
      <RoadItem>專題講座</RoadItem>
      <template #title>專題講座</template>
    </Road>
    <div class="max-w-4xl p-5 mx-auto mt-20 mb-12 bg-gray-100 rounded-3xl sm:mt-10">
      <div class="text-lg font-bold sm:text-sm">可曾想過，孩子的夢，會有哪些？做夢和探索世界的能力，是孩子迎向未來和未知的勇氣。 透過與策展人面對面座談，藉由經驗分享一同探討繪本對兒童的影響，進而打開無限想像力和好奇心，啟發藝術興趣。</div>
    </div>
    <div class="flex flex-wrap justify-between xl:justify-around">
      <ActivityItem v-for="(i, index) in ForumList" :href="'/activities/' + $route.params.activityID + '/' + index" :img="'Data/Activities/' + $route.params.activityID + '/' + index + '/cover.jpg'" :class="{ invisible: i.title === 'none' }">
        <template #title>{{ i.title }}</template>
        <template #date>{{ i.date }}</template>
        <template #teacher>{{ i.teacher }}</template>
      </ActivityItem>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
