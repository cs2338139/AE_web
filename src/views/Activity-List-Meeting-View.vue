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
      meetingList: [],
    };
  },
  methods: {
    LoadJson() {
      axios
        .get("Data/Activities/" + this.$route.params.activityID + "/MeetingList.json")
        .then((response) => {
          this.meetingList = response.data;

          for (let i = 0; i < this.meetingList.length; i++) {
            this.meetingList[i].index = i;
            let tempDate = this.meetingList[i].date.substring(0, 16).replaceAll(".", "/");
            tempDate = tempDate.replace("：", ":");
            this.meetingList[i].newDate = new Date(tempDate);

            let name = this.meetingList[i].title.split("：");
            if (name.length === 2) {
              this.meetingList[i].title = name[0] + "：";
              this.meetingList[i].title2 = name[1];
            } else {
              this.meetingList[i].title2 = "";
            }
          }

          this.meetingList.sort(function (a, b) {
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

          var mod = colCount - (this.meetingList.length % colCount);
          if (mod === colCount) mod = 0;
          var template = {
            index: "0",
            title: "none",
            date: "",
            typeName: "",
            path: "",
          };

          for (var i = 0; i < mod; i++) {
            this.meetingList.push(template);
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
  <ElementPanel ref="element"/>

  <div class="wrap">
    <Road class="mb-5">
      <RoadItem>推廣活動</RoadItem>
      <RoadItem>研習營</RoadItem>
      <template #title>研習營</template>
    </Road>
    <div class="text-center text-3xl">「夢境漫遊：繪本藝術」展之工作坊</div>
    <div class="max-w-4xl mx-auto mt-8 mb-12 sm:mt-10">
      <div class="text-lg sm:text-sm text-center">
        這次帶來的工作坊從10本繪本發想，分成分程是「繪本與人文」、「科學與創造」兩個主軸。繪本與人文由流寓工作室與果實玩樂生活實驗室兩個教育推廣團隊，
        以「自然接觸」、「童趣手作」為課程精神，帶領以自然界的材料或觀察，帶領孩子與大人們進行手作課程。「科學與創造」則由光試所與Pixelight以「鏡面反射」 、 「電路電學」、「虛擬實境」為設計精神，帶領孩子與大人們進行科學與AR、VR的奇妙視覺體驗。
      </div>
    </div>
    <div class="flex flex-wrap justify-between xl:justify-around max-w-5xl mx-auto">
      <ActivityItem
        v-for="i in meetingList"
        :href="'/activities/' + $route.params.activityID + '/' + i.index"
        :img="'Data/Activities/' + $route.params.activityID + '/' + i.index + '/cover.jpg'"
        :typeName="i.typeName"
        :class="{ invisible: i.title === 'none' }"
      >
        <template #title>{{ i.title }}</template>
        <template #title2>{{ i.title2 }}</template>
        <template #date>{{ i.date }}</template>
      </ActivityItem>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
