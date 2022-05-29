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
      preExhibitionList: [],
    };
  },
  methods: {
    LoadJson() {
      axios
        .get("Data/Albums/" + this.$route.params.albumID + "/PreExhibitionList.json")
        .then((response) => {
          this.preExhibitionList = response.data;

          var mod = 3 - (this.preExhibitionList.length % 3);
          if (mod === 3) mod = 0;
          var template = {
            title: "none",
            tip: "",
          };

          for (var i = 0; i < mod; i++) {
            this.preExhibitionList.push(template);
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
      <RoadItem>展前花絮</RoadItem>
    </Road>

    <div class="flex flex-wrap justify-between xl:justify-around">
      <AlbumItem v-for="(i, index) in preExhibitionList" :href="'/Albums/' + $route.params.albumID + '/' + index" :img="'Data/Albums/' + $route.params.albumID + '/' + index + '/cover.jpg'" :class="{ invisible: i.title === 'none' }">
        <template #title>{{ i.title }}</template>
        <template #tip>{{ i.tip }}</template>
      </AlbumItem>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
