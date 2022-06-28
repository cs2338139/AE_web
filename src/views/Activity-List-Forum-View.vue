<script setup>
import axios from "axios";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import ActivityItem from "../components/ActivityItem/ActivityItem.vue";
import ElementPanel from "../components/ElementPanel/ElementPanel.vue";
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
            this.ForumList[i].index = i;
            let tempDate = this.ForumList[i].date.substring(0, 16).replaceAll(".", "/");
            tempDate = tempDate.replace("：", ":");
            this.ForumList[i].newDate = new Date(tempDate);
            let name = this.ForumList[i].title.split("：");
            if (name.length === 2) {
              this.ForumList[i].title = name[0] + "：";
              this.ForumList[i].title2 = name[1];
            } else {
              this.ForumList[i].title2 = "";
            }
          }

          this.ForumList.sort(function (a, b) {
            return a.newDate < b.newDate ? -1 : 1;
          });

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
            index: "0",
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
  updated() {
    if (this.$refs.element) this.$refs.element.ReSet();
  },
};
</script>

<template>
  <ElementPanel ref="element" />
  <div class="wrap mb-20">
    <Road class="mb-5">
      <RoadItem>推廣活動</RoadItem>
      <RoadItem>分享會</RoadItem>
      <template #title>分享會</template>
    </Road>
    <div class="sm:text-xl text-3xl text-center">「夢境漫遊：繪本藝術」主題展之分享會系列活動</div>
    <div class="sm:mt-5 max-w-4xl mx-auto mt-8 mb-24">
      <div class="sm:text-sm text-base text-center">
        <div class="mb-10 sm:mb-5">透過與策展人面對面座談，藉由經驗分享一同探討繪本對兒童的影響，<br />進而打開無限想像力和好奇心，啟發藝術興趣。</div>
        <div>
          報名方式：採網路線上報名(詳各場次報名網址)，各場活動請分開報名。<br />
          參與對象：公務人員、教師、學生、一般民眾，凡有興趣者皆可報名。<br />
          研習時數：公務人員及教師全程參與者，分別核予終身學習認證時數。<br />
          上課地點：本館第3會議室。
        </div>
      </div>
    </div>
    <div class="xl:justify-around flex flex-wrap justify-between max-w-5xl mx-auto">
      <ActivityItem v-for="i in ForumList" :href="'/activities/' + $route.params.activityID + '/' + i.index" :img="'Data/Activities/' + $route.params.activityID + '/' + i.index + '/cover.jpg'" :class="{ invisible: i.title === 'none' }">
        <template #title>{{ i.title }}</template>
        <template #title2>{{ i.title2 }}</template>
        <template #date>{{ i.date }}</template>
      </ActivityItem>
    </div>
  </div>
  <div class="-z-10 absolute bottom-0 w-full">
    <div class="bg-bg-0-image h-8"></div>
    <div class="absolute bg-no-repeat bg-w100% h-40 bg-Boy-image left-72 translate-y-8 w-40"></div>
    <div class="bg-bg-2-Color h-80"></div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
