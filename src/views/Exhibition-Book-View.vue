<script setup>
import axios from "axios";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import RoadItemRouter from "../components/Road/src/RoadItemRouter.vue";
import ImageBox from "../components/ImageBox/ImageBox.vue";
</script>

<script>
export default {
  data() {
    return {
      exhibitionsName: null,
      bookData: null,
    };
  },
  methods: {
    LoadJson() {
      let exhibitionID = this.$route.params.exhibitionID;
      let bookID = this.$route.params.bookID;
      if (exhibitionID && bookID) {
        axios
          .get("Data/Exhibitions/" + exhibitionID + "/" + bookID + "/BookContent.json")
          .then((response) => {
            this.bookData = response.data;
            switch (exhibitionID) {
              case "GoodNight":
                this.exhibitionsName = "晚安屋";
                break;
              case "Dream":
                this.exhibitionsName = "夢境房";
                break;
            }
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
  <template v-if="bookData != null">
    <div class="wrap">
      <Road class="mb-10">
        <RoadItem>展覽介紹</RoadItem>
        <RoadItemRouter :href="'/exhibitions/' + $route.params.exhibitionID">{{ exhibitionsName }}</RoadItemRouter>
        <RoadItem>{{ bookData.title }}</RoadItem>
      </Road>
      <div class="grid grid-cols-5 gap-x-16">
        <div></div>

        <div class="col-start-1 col-end-4 xl:col-end-6">
          <ImageBox :path="'Exhibitions/' + $route.params.exhibitionID + '/' + $route.params.bookID" :img="bookData.imgs" :time="3000" :auto="false" />
        </div>

        <div class="col-start-4 col-end-6 py-5 xl:col-start-1">
          <div class="mb-5 text-3xl font-bold">繪本：{{ bookData.title }}</div>
          <div class="mb-2 text-xl font-bold">作者介紹：{{ bookData.author }}</div>
          <template v-for="i in bookData.info">
            <div :class="{ my: i === '' }" class="contentFont">{{ i }}</div>
          </template>
        </div>
      </div>
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

@layer utilities {
  .h-960px {
    height: 960px;
  }
}
</style>
