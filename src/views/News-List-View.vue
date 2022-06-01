<script setup>
import axios from "axios";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import NewsTable from "../components/NewsTable/NewsTable.vue";
import NewsTableItem from "../components/NewsTable/src/NewsTableItem.vue";
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
  <div class="wrap">
    <Road class="mb-10">
      <RoadItem>最新消息</RoadItem>
      <template #title>最新消息</template>
    </Road>
    <div class="mb-10">
      <NewsTable>
        <NewsTableItem v-for="(i, index) in newsList.slice().reverse()" :href="'/news/' + (newsList.length - 1 - index)">
          <template #type>{{ i.typeName }}</template>
          <template #title>{{ i.title }}</template>
          <template #date>{{ i.date }}</template>
        </NewsTableItem>
      </NewsTable>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
