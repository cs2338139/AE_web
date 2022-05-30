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
        <ImageBox path="Home" imgStyle="w-full h-550px" :img="homeData.imgs" :time="3000" :auto="true" />
      </div>

      <div class="h-60 mb-5">
        <div class="w-2/3 h-full pr-10 float-left pt-3 border-r border-black">
          <HomeNews />
        </div>

        <div class="w-1/3 h-full pl-10 float-right pt-3">
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
</style>
