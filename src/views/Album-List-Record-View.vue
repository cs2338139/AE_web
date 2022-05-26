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

          var mod = 3 - (this.recordList.length % 3);
          if (mod === 3) mod = 0;
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
      <RoadItem>推廣活動</RoadItem>
      <RoadItem>活動紀錄</RoadItem>
    </Road>
    <div class="flex flex-wrap justify-between">
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
