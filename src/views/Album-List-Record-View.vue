<script setup>
import axios from "axios";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import AlbumItem from "../components/AlbumItem/AlbumItem.vue";
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
            title: "none",
            date: "",
            typeName: "",
          };

          for (var i = 0; i < mod; i++) {
            this.recordList.push(template);
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
      <RoadItem>活動花絮</RoadItem>
      <RoadItem>活動紀錄</RoadItem>
    </Road>
    <div class="flex flex-wrap justify-between xl:justify-around">
      <AlbumItem v-for="(i, index) in recordList"
      :href="'/Albums/' + $route.params.albumID + '/' + index"
      :img="'Data/Albums/' + $route.params.albumID + '/' + index + '/cover.jpg'"
      :typeName="i.typeName" :class="{ invisible: i.title === 'none' }">
        <template #title>{{ i.title }}</template>
        <template #date>{{ i.date }}</template>
      </AlbumItem>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
