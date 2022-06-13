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
      childrenArtList: [],
    };
  },
  methods: {
    LoadJson() {
      axios
        .get("Data/Activities/" + this.$route.params.activityID + "/ChildrenArtList.json")
        .then((response) => {
          this.childrenArtList = response.data;
          for (let i = 0; i < this.childrenArtList.length; i++) {
            this.childrenArtList[i].index = i;
            let tempDate = this.childrenArtList[i].date.substring(0, 16).replaceAll(".", "/");
            tempDate = tempDate.replace("：", ":");
            this.childrenArtList[i].newDate = new Date(tempDate);

            let name = this.childrenArtList[i].title.split("：");
            if (name.length === 2) {
              this.childrenArtList[i].title = name[0] + "：";
              this.childrenArtList[i].title2 = name[1];
            } else {
              this.childrenArtList[i].title2 = "";
            }
          }

          this.childrenArtList.sort(function (a, b) {
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

          var mod = colCount - (this.childrenArtList.length % colCount);
          if (mod === colCount) mod = 0;
          var template = {
            title: "none",
            date: "",
            typeName: "",
            path: "",
          };

          for (var i = 0; i < mod; i++) {
            this.childrenArtList.push(template);
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
      <RoadItem>兒童美學活動</RoadItem>
      <template #title>兒童美學活動</template>
    </Road>
    <div class="text-center text-3xl font-bold sm:text-xl">「夢境漫遊：繪本藝術」展之兒童美學活動</div>
    <div class="max-w-4xl mx-auto mt-8 mb-24 sm:mt-5">
      <div class="text-base font-bold sm:text-sm text-center leading-8">
        一、報名方式｜採預約報名(8/24-9/21)，每週三預約活動，共計5堂，額滿截止<br />
        二、上課地點｜本館第2展覽廳翻玩色彩區（落地窗旁）<br />
        三、參與對象｜兒童相關公益社團、組織、協會。身心障礙與弱勢團體優先受理報名<br />
        四、參與人數｜10人（須團體報名）
      </div>
    </div>
    <div class="flex flex-wrap justify-between xl:justify-around max-w-5xl mx-auto">
      <ActivityItem
        v-for="i in childrenArtList"
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
  <div class="absolute w-full bottom-0 -z-50">
    <div class="bg-bg-0-image h-8"></div>
    <div class="bg-bg-2-Color h-80"></div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
}
</style>
