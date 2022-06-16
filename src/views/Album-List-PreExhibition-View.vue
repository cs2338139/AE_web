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
      preExhibitionList: [],
      href: [],
      img: [],
    };
  },
  methods: {
    LoadJson() {
      axios
        .get("Data/Albums/" + this.$route.params.albumID + "/PreExhibitionList.json")
        .then((response) => {
          this.preExhibitionList = response.data;
          for (let i = 0; i < this.preExhibitionList.length; i++) {
            if (this.preExhibitionList[i].Enable === false) {
              this.href[i] = "";
              this.img[i] = "Data/Other/ComingSoon.jpg";
            } else {
              this.href[i] = "/Albums/" + this.$route.params.albumID + "/" + i;
              this.img[i] = "Data/Albums/" + this.$route.params.albumID + "/" + i + "/cover.jpg";
            }
          }

          for (let i = 0; i < this.preExhibitionList.length; i++) {
            let name = this.preExhibitionList[i].title.split("：");
            if (name.length === 2) {
              this.preExhibitionList[i].title = name[0] + "：";
              this.preExhibitionList[i].title2 = name[1];
            } else {
              this.preExhibitionList[i].title2 = "";
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

          var mod = colCount - (this.preExhibitionList.length % colCount);
          if (mod === colCount) mod = 0;
          var template = {
            index: "0",
            title: "none",
            tip: "",
          };

          for (var i = 0; i < mod; i++) {
            this.preExhibitionList.push(template);
            this.href.push("");
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
      <RoadItem>展覽花絮</RoadItem>
      <template #title>展覽花絮</template>
    </Road>

    <div class="flex flex-wrap justify-between xl:justify-around max-w-5xl mx-auto">
      <AlbumItem v-for="(i, index) in preExhibitionList" :href="href[index]" :img="img[index]" :class="{ invisible: i.title === 'none' }">
        <template #title>{{ i.title }}</template>
        <template #title2>{{ i.title2 }}</template>
      </AlbumItem>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
