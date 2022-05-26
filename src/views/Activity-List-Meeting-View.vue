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
      meetingList: [],
    };
  },
  methods: {
    LoadJson() {
      axios
        .get("Data/" + this.$route.params.activityID + "/MeetingList.json")
        .then((response) => {
          this.meetingList = response.data;

          var mod = 3 - (this.meetingList.length % 3);
          if (mod === 3) mod = 0;
          var template = {
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
};
</script>

<template>
  <div class="wrap">
    <Road class="mb-10">
      <RoadItem>推廣活動</RoadItem>
      <RoadItem>研習營</RoadItem>
    </Road>
    <div class="max-w-4xl p-5 mx-auto mt-20 mb-12 bg-gray-100 rounded-3xl">
      <div class="text-lg font-bold">這次帶來的工作坊從10本繪本發想，分成分程是「繪本與人文」、「科學與創造」兩個主軸。繪本與人文由流寓工作室與果實玩樂生活實驗室兩個教育推廣團隊， 以「自然接觸」、「童趣手作」為課程精神，帶領以自然界的材料或觀察，帶領孩子與大人們進行手作課程。「科學與創造」則由光試所與Pixelight以「鏡面反射」 、 「電路電學」、「虛擬實境」為設計精神，帶領孩子與大人們進行科學與AR、VR的奇妙視覺體驗。</div>
    </div>
    <div class="flex flex-wrap justify-between">
      <ActivityItem v-for="(i, index) in meetingList" :href="'/activities/' + $route.params.activityID + '/' + index" :img="'Data/' + $route.params.activityID + '/' + index + '/cover.jpg'" :typeName="i.typeName" :class="{ invisible: i.title === 'none' }">
        <template #title>{{ i.title }}</template>
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
