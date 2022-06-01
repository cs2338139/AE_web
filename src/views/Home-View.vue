<script setup>
import axios from "axios";
import HomeNews from "../components/Home_News/Home_News.vue";
import VisitInformation from "../components/Home_VisitInFormation/Home_VisitInformation.vue";
import ImageBox from "../components/ImageBox/ImageBox.vue";
// const Image = new URL("../../src/assets/Image/Home_Slide01.jpg", import.meta.url).href;
</script>

<script>
export default {
  data() {
    return {
      homeData: null,
    };
  },
  methods: {
    LoadJson() {
      axios
        .get("Data/Home/Home.json")
        .then((response) => {
          this.homeData = response.data;
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
  created() {
    this.LoadJson();
  },
};
</script>

<template>
  <template v-if="homeData != null">
    <div class="wrap">
      <div class="mb-10">
        <ImageBox path="Home" imgStyle="w-full aspect-homeimage" :img="homeData.imgs" :time="3000" :auto="true" />
      </div>

      <div class="mb-5 h-300px md:h-480px">
        <div class="float-left w-2/3 h-full pt-3 pr-10 border-r border-black md:border-r-0 md:border-t md:border-b md:w-full md:pr-0 md:py-2 md:h-1/2">
          <HomeNews />
        </div>

        <div class="float-right w-1/3 h-full pt-3 pl-10 md:float-left md:w-full md:pl-0 md:h-1/2 md:pt-5">
          <VisitInformation />
        </div>
      </div>
    </div>
  </template>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .h-480px {
    height: 480px;
  }
  .h-300px {
    height: 300px;
  }
}
</style>
