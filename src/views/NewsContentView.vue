<script setup>
import axios from "axios";
import Road from "../components/Road/Road.vue";
import RoadItemRouter from "../components/Road/src/RoadItemRouter.vue";
</script>

<script>
export default {
  data() {
    return {
      newsData: null,
    };
  },
  methods: {
    LoadJson() {
      let newsID = this.$route.params.newsID;
      if (newsID) {
        axios
          .get("Data/News/" + newsID + "/NewsContent.json")
          .then((response) => {
            this.newsData = response.data;
          })
          .catch((response) => {
            console.log(response);
            this.ToNotFound();
          });
      }
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
    $route: "LoadJson",
  },
  created() {
    this.LoadJson();
  },
};
</script>

<template>
  <template v-if="newsData != null">
    <div class="wrap">
      <Road class="mb-10">
        <RoadItemRouter href="/news">最新消息</RoadItemRouter>
      </Road>

      <div class="text-3xl font-bold">{{ newsData.title }}</div>
      <div class="my-2">刊登日期：{{ newsData.date }}</div>
      <div class="mt-2 mb-6">公告類別：{{ newsData.typeName }}</div>
      <template v-for="i in newsData.content">
        <div :class="{ my: i === '' }" class="contentFont">{{ i }}</div>
      </template>
    </div>
  </template>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .my {
    @apply my-5;
  }
  .contentFont {
    @apply text-lg;
  }
}
</style>
