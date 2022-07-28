<script setup>
import axios from "axios";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import AlbumItem from "../components/AlbumItem/AlbumItem.vue";
import ElementPanel from "../components/ElementPanel/ElementPanel.vue";
</script>

<script>
export default {
  data() {
    return {
      recordList: [],
    };
  },
  methods: {
    LoadJson() {
      axios
        .get("Data/Albums/" + this.$route.params.albumID + "/RecordList.json")
        .then((response) => {
          this.recordList = response.data;

          if (this.recordList.length != 0) {
            for (let i = 0; i < this.recordList.length; i++) {
              let name = this.recordList[i].title.split("：");
              if (name.length === 2) {
                this.recordList[i].title = name[0] + "：";
                this.recordList[i].title2 = name[1];
              } else {
                this.recordList[i].title2 = "";
              }
            }

            let colCount = 4;

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

            var mod = colCount - (this.recordList.length % colCount);
            if (mod === colCount) mod = 0;
            var template = {
              index: "0",
              title: "none",
              date: "",
              typeName: "",
            };

            for (var i = 0; i < mod; i++) {
              this.recordList.push(template);
            }
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
  <div class="wrap">
    <Road class="mb-10">
      <RoadItem>活動花絮</RoadItem>
      <RoadItem>活動紀錄</RoadItem>
      <template #title>活動紀錄</template>
    </Road>
    <template v-if="recordList.length != 0">
      <div class="flex flex-wrap justify-between xl:justify-around max-w-5xl mx-auto">
        <AlbumItem v-for="(i, index) in recordList" :href="'/Albums/' + $route.params.albumID + '/' + index" :img="'Data/Albums/' + $route.params.albumID + '/' + index + '/cover.jpg'" :class="{ invisible: i.title === 'none' }">
          <template #title>{{ i.title }}</template>
          <template #title2>{{ i.title2 }}</template>
          <template #date>{{ i.date }}</template>
        </AlbumItem>
      </div>
    </template>
    <template v-else>
      <div class="my-40 text-center text-9xl text-text-1-Color italic xl:text-6xl lg:text-3xl md:text-xl">Coming Soon...</div>
    </template>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
