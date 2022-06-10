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
          for (let i = 0; i < this.ForumList.length; i++) {
            let name = this.ForumList[i].title.split("：");
            if (name.length === 2) {
              this.ForumList[i].title = name[0] + "：";
              this.ForumList[i].title2 = name[1];
            } else {
              this.ForumList[i].title2 = "";
            }
          }
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
  <div class="wrap mb-20">
    <Road class="mb-5">
      <RoadItem>推廣活動</RoadItem>
      <RoadItem>分享會</RoadItem>
      <template #title>分享會</template>
    </Road>
    <div class="text-center text-3xl font-bold sm:text-xl">「夢境漫遊：繪本藝術」展之繪本美學分享會</div>
    <div class="max-w-4xl mx-auto mt-8 mb-24 sm:mt-5">
      <div class="text-base font-bold sm:text-sm text-center">
        <div class="mb-3">
          可曾想過，孩子的夢，會有哪些？<br />做夢和探索世界的能力，<br />是孩子迎向未來和未知的勇氣。<br />
          透過與策展人面對面座談，藉由經驗分享一同探討繪本對兒童的影響，進而打開無限想像力和好奇心，啟發藝術興趣。
        </div>
        <div>
          一、報名方式｜採線上報名<br />
          二、上課地點｜本館第3會議室。<br />
          三、參與對象｜公務人員、教師、學生、一般民眾
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-between xl:justify-around max-w-5xl mx-auto">
      <ActivityItem v-for="(i, index) in ForumList" :href="'/activities/' + $route.params.activityID + '/' + index" :img="'Data/Activities/' + $route.params.activityID + '/' + index + '/cover.jpg'" :class="{ invisible: i.title === 'none' }">
        <template #title>{{ i.title }}</template>
        <template #title2>{{ i.title2 }}</template>
        <template #date>{{ i.date }}</template>
      </ActivityItem>
    </div>
  </div>
  <div class="absolute w-full bottom-0 -z-10">
    <div class="bg-bg-0-image h-8"></div>
    <div class="bg-bg-2-Color h-80"></div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
