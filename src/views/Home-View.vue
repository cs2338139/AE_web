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
      imgs: null,
    };
  },
  methods: {
    LoadJson() {
      axios
        .get("Data/Home/Home.json")
        .then((response) => {
          this.homeData = response.data;

          if (this.$windowWidth > this.$md) {
            this.imgs = this.homeData.imgs;
          } else {
            let temp = [];
            for (let i = 0; i < this.homeData.phoneimgs.length; i++) {
              temp.push("phone/" + this.homeData.phoneimgs[i]);
            }
            this.imgs = temp;
          }
        })
        .catch((response) => {
          console.log(response);
          this.ToNotFound();
        });
    },
    GetTargetHeight() {
      const h = document.body.scrollHeight - (this.$refs.target.getBoundingClientRect().top + window.scrollY);
      const bg = this.$refs.bg;
      bg.style.height = h  + "px";
      console.log(bg.style.height);
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
  updated() {
    setTimeout(() => {
      this.GetTargetHeight();
    }, 200);
  },
};
</script>

<template>
  <template v-if="homeData != null">
    <div>
      <div class="wrap">
        <div class="mb-48 lg:mb-14">
          <ImageBox path="Home" imgStyle="w-full aspect-homeimage md:aspect-square" :img="imgs" :time="3000" :auto="true" />
        </div>

        <div class="flex flex-row h-300px md:h-480px md:flex-col px-20 md:px-10" ref="target">
          <div class="w-2/3 h-full pt-3 pr-10 md:border-white md:border-b md:w-full md:pr-0 md:py-2 md:h-1/2">
            <HomeNews />
          </div>

          <div class="w-1/3 h-full pt-3 pl-10 md:float-left md:w-full md:pl-0 md:h-1/2 md:pt-5">
            <VisitInformation />
          </div>
        </div>
      </div>
    </div>

    <div class="absolute w-full bottom-0 -z-50">
      <div class="bg-bg-1-image h-8"></div>
      <div class="bg-bg-1-Color h-96" ref="bg"></div>
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
