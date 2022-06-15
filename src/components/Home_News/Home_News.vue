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
      visibleNewsList: [],
    };
  },
  methods: {
    LoadJson() {
      axios
        .get("Data/News/NewsList.json")
        .then((response) => {
          this.$newsList = response.data;
          this.newsList = this.$newsList;

          if (this.newsList.length > 6) {
            this.visibleNewsList = this.newsList.slice(this.newsList.length - 6, this.newsList.length).reverse();
          } else {
            this.visibleNewsList = this.newsList.slice().reverse();
          }
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
  <div class="relative w-full h-full md:py-3 text-white">
    <div class="mb-5">
      <span class="px-4 py-1 text-xl bg-white rounded-full sm:text-base text-text-0-Color">最新消息 News</span>
    </div>
    <ul>
      <NewsListItem v-for="(i, index) in visibleNewsList" :href="'/news/' + (newsList.length - 1 - index)">
        <template #date>{{ i.date }}</template>
        <template #title>{{ i.title }}</template>
      </NewsListItem>
    </ul>
    <div class="absolute bottom-20 right-0 hover:scale-110 md:bottom-0">
      <RouterLink to="/news">
        <span class="px-3 py-1 text-base bg-yellow-400 rounded-full text-text-0-Color sm:text-sm"> more</span>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
@layer components {
  .dev {
    @apply border border-solid box-border  border-red-500;
  }
}
</style>
