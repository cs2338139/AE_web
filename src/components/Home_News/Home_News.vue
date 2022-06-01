<script setup>
import axios from "axios";
import NewsListItem from "./src/NewsListItem.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<script>
export default {
  data() {
    return {
      newsList: [],
    };
  },
  methods: {
    LoadJson() {
      axios
        .get("Data/News/NewsList.json")
        .then((response) => {
          this.$newsList = response.data;
          this.newsList = this.$newsList;
        })
        .catch(function (response) {
          console.log(response);
        });
    },
  },
  created() {
    if (this.$newList === null) {
      this.LoadJson();
    } else {
      this._newsList = this.$newsList;
    }
  },
};
</script>

<template>
  <div class="relative w-full h-full md:py-3">
    <div class="mb-5 font-bold text-2xl sm:text-base">最新消息</div>
    <ul class="mb-5">
      <NewsListItem v-for="(i, index) in newsList.slice(newsList.length - 6, newsList.length).reverse()" :href="'/news/' + (newsList.length - 1 - index)">
        <template #date>{{ i.date }}</template>
        <template #title>{{ i.title }}</template>
      </NewsListItem>
    </ul>
    <div class="font-bold absolute bottom-0 right-0 sm:text-sm">
      <RouterLink to="/news" class="hover:text-slate-400">
        <span> more＞</span>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
