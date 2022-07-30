<script setup>
import axios from "axios";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import AlbumItem from "../components/AlbumItem/AlbumItem.vue";
import ElementPanel from "../components/ElementPanel/ElementPanel.vue";
import RoadItemRouter from "../components/Road/src/RoadItemRouter.vue";
defineProps({
  dictionary: Array,
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
      path: [],
    };
  },
  methods: {
    CheckPath() {
      let temp = this.$route.fullPath.split("/");
      let title = temp.slice(2, temp.length - 1);
      for (let i = 0; i < title.length; i++) {
        let href = "";
        if (i != 0) {
          href = this.path[i - 1].href + '/' + title[i];
        }
        else {
          href = title[i];
        }
        var tempPath = {
          title: this.$props.dictionary[title[i]],
          href: href,
        }
        this.path.push(tempPath)
      }
    },
    LoadJson() {
      axios
        .get("Data" + this.$route.fullPath + "/List.json")
        .then((response) => {
          this.data = response.data;
          for (let i = 0; i < this.data.list.length; i++) {
            if (this.data.list[i].Enable === false) {
              this.href[i] = "";
              this.img[i] = "Data/Other/ComingSoon.jpg";
            } else {
              this.href[i] = this.$route.fullPath + "/" + this.data.list[i].href;
              this.img[i] = "Data" + this.$route.fullPath + "/" + this.data.list[i].href + "/cover.jpg";
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
          this.CheckPath();
        })
        .catch((response) => {
          console.log(response);
          this.ToNotFound();
        });
    },
    ToNotFound() {
      this.$router.push({
        name: "NotFound",
        params: { pathMatch: this.$route.path.substring(1).split("/") },
        query: this.$route.query,
        hash: this.$route.hash,
      });
    },
  },
  watch: {
    // $route: "LoadJson",
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
      <template v-for="i in path">
        <RoadItemRouter :href="'/Albums/' + i.href">{{ i.title }}</RoadItemRouter>
      </template>
      <RoadItem>{{ data.title }}</RoadItem>
      <template #title>{{ data.title }}</template>
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
