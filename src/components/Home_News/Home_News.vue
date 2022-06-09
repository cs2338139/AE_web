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
  <div class="relative w-full h-full md:py-3 text-white">
    <div class="mb-5">
      <span class="px-3 py-1 text-xl font-bold bg-white rounded-full sm:text-base text-text-0-Color">最新消息</span>
    </div>
    <ul>
      <NewsListItem v-for="(i, index) in newsList.slice(newsList.length - 6, newsList.length).reverse()" :href="'/news/' + (newsList.length - 1 - index)">
        <template #date>{{ i.date }}</template>
        <template #title>{{ i.title }}</template>
      </NewsListItem>
    </ul>
    <div class="absolute bottom-20 right-0 font-bold hover:scale-110 md:bottom-0">
      <RouterLink to="/news">
        <span class="px-3 py-1 text-base font-bold bg-yellow-400 rounded-full text-text-0-Color sm:text-sm"> more</span>
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
