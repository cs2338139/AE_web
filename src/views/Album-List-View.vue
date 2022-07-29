<script setup>
import axios from "axios";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import AlbumItem from "../components/AlbumItem/AlbumItem.vue";
import ElementPanel from "../components/ElementPanel/ElementPanel.vue";
defineProps({
  path: String,
});
</script>

<script>
export default {
  data() {
    return {
      flag: false,
      data: {
        title: "",
        list: [],
      },
      href: [],
      img: [],
    };
  },
  expose: ["LoadJson"],
  methods: {
    LoadJson(vi) {
      if ((!vi) && (this.flag)) return;
      axios
        .get("Data/Albums/" + this.$props.path + "/List.json")
        .then((response) => {
          this.data = response.data;
          for (let i = 0; i < this.data.list.length; i++) {
            if (this.data.list[i].Enable === false) {
              this.href[i] = "";
              this.img[i] = "Data/Other/ComingSoon.jpg";
            } else {
              this.href[i] = "/Albums/" + this.$props.path + "/" + this.data.list[i].href;
              this.img[i] = "Data/Albums/" + this.$props.path + "/" + this.data.list[i].href + "/cover.jpg";
            }
          }

          for (let i = 0; i < this.data.list.length; i++) {
            let name = this.data.list[i].title.split("：");
            if (name.length === 2) {
              this.data.list[i].title = name[0] + "：";
              this.data.list[i].title2 = name[1];
            } else {
              this.data.list[i].title2 = "";
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

          var mod = colCount - (this.data.list.length % colCount);
          if (mod === colCount) mod = 0;
          var template = {
            index: "0",
            title: "none",
            tip: "",
          };

          for (var i = 0; i < mod; i++) {
            this.data.list.push(template);
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
  mounted() {
    this.flag = true;
  }
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
      <AlbumItem v-for="(i, index) in data.list" :href="href[index]" :img="img[index]"
        :class="{ invisible: i.title === 'none' }">
        <template #date>{{ i.date }}</template>
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
