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
      workShopList: [],
    };
  },
  components: {

  },
  methods: {
    LoadJson() {
      axios
        .get("Data/Activities/" + this.$route.params.activityID + "/WorkShopList.json")
        .then((response) => {
          this.workShopList = response.data;

          for (let i = 0; i < this.workShopList.length; i++) {
            this.workShopList[i].index = i;
            let tempDate = this.workShopList[i].date.substring(0, 16).replaceAll(".", "/");
            tempDate = tempDate.replace("：", ":");
            this.workShopList[i].newDate = new Date(tempDate);

            let name = this.workShopList[i].title.split("：");
            if (name.length === 2) {
              this.workShopList[i].title = name[0] + "：";
              this.workShopList[i].title2 = name[1];
            } else {
              this.workShopList[i].title2 = "";
            }
          }

          this.workShopList.sort(function (a, b) {
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

          var mod = colCount - (this.workShopList.length % colCount);
          if (mod === colCount) mod = 0;
          var template = {
            index: "0",
            index: "0",
            title: "none",
            date: "",
            typeName: "",
            path: "",
          };

          for (var i = 0; i < mod; i++) {
            this.workShopList.push(template);
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
    console.log(this.$refs);
    if (this.$refs.element) this.$refs.element[0].GetTargetHeight();
  },

};
</script>

<template>
  <ElementPanel ref="element" />
  <div class="wrap mb-20">
    <Road class="mb-5">
      <RoadItem>推廣活動</RoadItem>
      <RoadItem>工作坊</RoadItem>
      <template #title>工作坊</template>
    </Road>
    <div class="text-center text-3xl sm:text-xl">「夢境漫遊：繪本藝術」展之工作坊</div>
    <div class="max-w-4xl mx-auto mt-8 mb-24 sm:mt-5">
      <div class="text-lg sm:text-sm text-center leading-6">
        <div class="mb-3">
          這次帶來的工作坊從10本繪本發想，分成分程是「繪本與人文」、「科學與創造」兩個主軸。繪本與人文由流寓工作室與果實玩樂生活實驗室兩個教育推廣團隊， 以「自然接觸」、「童趣手作」為課程精神，帶領以自然界的材料或觀察，帶領孩子與大人們進行手作課程。
        </div>
        <div>「科學與創造」則由光試所與Pixelight以「鏡面反射」 、 「電路電學」、「虛擬實境」為設計精神，帶領孩子與大人們進行科學與AR、VR的奇妙視覺體驗。</div>
      </div>
    </div>
    <div class="flex flex-wrap justify-between xl:justify-around max-w-5xl mx-auto">
      <ActivityItem
        v-for="i in workShopList"
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
