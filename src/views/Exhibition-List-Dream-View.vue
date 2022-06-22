<script setup>
import axios from "axios";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import ExhibitionItem from "../components/ExhibitionItem/ExhibitionItem.vue";
import ElementPanel from "../components/ElementPanel/ElementPanel.vue";
</script>

<script>
export default {
  data() {
    return {
      dir: "Data/Exhibitions/" + this.$route.params.exhibitionID + "/",
      exhibitionData: null,
      infoState: "English",
      info: [],
    };
  },
  methods: {
    LoadJson() {
      axios
        .get(this.dir + "ExhibitionList.json")
        .then((response) => {
          this.exhibitionData = response.data;
          this.info = this.exhibitionData.info.cn;
        })
        .catch(function (response) {
          console.log(response);
        });
    },
    GetTargetHeight() {
      const h = document.body.scrollHeight - (this.$refs.target.getBoundingClientRect().top + window.scrollY);
      const bg = this.$refs.bg;
      bg.style.height = h + 15 + "px";
    },
    ChangeLang() {
      if (this.infoState === "English") {
        this.infoState = "中文";
        this.info = this.exhibitionData.info.en;
      } else {
        this.infoState = "English";
        this.info = this.exhibitionData.info.cn;
      }
    },
  },
  created() {
    this.LoadJson();
  },
  updated() {
    interval=setInterval(() => {
      const h = document.body.scrollHeight - (this.$refs.target.getBoundingClientRect().top + window.scrollY);
      const bg = this.$refs.bg;
      if (bg.clientHeight != h) {
        this.GetTargetHeight();
        if (this.$refs.element) this.$refs.element.ReSet();
      }
    }, 100);
  },
};
</script>

<template>
  <template v-if="exhibitionData != null">
    <ElementPanel ref="element" />
    <div class="wrap">
      <Road class="mb-10">
        <RoadItem>展覽介紹</RoadItem>
        <RoadItem>夢境房</RoadItem>
        <template #title>夢境房</template>
      </Road>

      <div class="w-full mb-20 overflow-hidden px-14 aspect-video lg:px-0">
        <img :src="dir + exhibitionData.image" />
      </div>

      <div class="mb-20 text-center">
        <div class="mb-6 sm:mb-10 sm:px-1">
          <template v-for="i in info">
            <div :class="{ my: i === '' }" class="contentFont">{{ i }}</div>
          </template>
        </div>
        <button class="px-5 py-1 rounded-full text-bg-0-Color bg-bg-1-Color hover:bg-text-1-Color" @click="ChangeLang()">{{ infoState }}</button>
      </div>

      <div ref="target" class="relative">
        <div class="mt-32 -mb-10 sm:mb-0 -translate-x-72 xl:-translate-x-52 lg:-translate-x-20 sm:-translate-x-1">
          <ExhibitionItem :img="dir + '0/cover.jpg'" :info="exhibitionData.books[0].info" :href="'Dream/' + 0">
            <div class="w-28 h-28 bg-no-repeat bg-w100% bg-Ghost-image absolute -right-4 top-5"></div>
            <template #title>{{ exhibitionData.books[0].title }}</template>
          </ExhibitionItem>
        </div>

        <div class="w-20 h-32 bg-no-repeat sm:bg-h100% bg-w100% bg-arrow-1-image mx-auto sm:h-20 sm:translate-x-14"></div>

        <div class="mt-0 mb-2 translate-x-24 sm:translate-x-1">
          <ExhibitionItem :img="dir + '1/cover.jpg'" :info="exhibitionData.books[1].info" :href="'Dream/' + 1">
            <div class="w-28 h-28 bg-no-repeat bg-w100% bg-Leaf-1-image absolute -right-4 top-5"></div>
            <template #title>{{ exhibitionData.books[1].title }}</template>
          </ExhibitionItem>
        </div>

        <div class="w-36 h-32 bg-no-repeat sm:bg-h100% bg-w100% bg-arrow-2-image mx-auto -translate-x-12 sm:h-20 sm:translate-x-0"></div>

        <div class="mt-0 mb-0 -translate-x-36 lg:-translate-x-20 sm:-translate-x-1">
          <ExhibitionItem :img="dir + '2/cover.jpg'" :info="exhibitionData.books[2].info" :href="'Dream/' + 2">
            <div class="w-36 h-20 bg-no-repeat bg-w100% bg-Leaf-2-image absolute -right-4 top-14"></div>
            <template #title>{{ exhibitionData.books[2].title }}</template>
          </ExhibitionItem>
        </div>

        <div class="w-24 h-28 bg-no-repeat bg-h100% bg-arrow-3-image mx-auto -translate-x-16 sm:h-20 sm:-translate-x-0 sm:rotate-12"></div>

        <div class="mt-2 mb-2 translate-x-32 lg:translate-x-20 sm:translate-x-1">
          <ExhibitionItem :img="dir + '3/cover.jpg'" :info="exhibitionData.books[3].info" :href="'Dream/' + 3">
            <div class="w-40 h-36 bg-no-repeat bg-w100% bg-Truck-image absolute right-0 -top-5"></div>
            <template #title>{{ exhibitionData.books[3].title }}</template>
          </ExhibitionItem>
        </div>

        <div class="w-36 h-32 bg-no-repeat sm:bg-h100% bg-w100% bg-arrow-4-image mx-auto sm:h-20 sm:translate-x-14 sm:-rotate-12"></div>

        <div class="mt-0 mb-2 -translate-x-28 sm:mb-8 md:-translate-x-20 sm:-translate-x-1">
          <ExhibitionItem :img="dir + '4/cover.jpg'" :info="exhibitionData.books[4].info" :href="'Dream/' + 4">
            <div class="w-40 h-36 bg-no-repeat bg-w100% bg-Coral-1-image absolute right-2 top-2"></div>
            <template #title>{{ exhibitionData.books[4].title }}</template>
          </ExhibitionItem>
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 w-full -z-50">
      <div class="h-8 bg-foot-1-image"></div>
      <div class="bg-gradient-to-b from-black to-bg-3-Color" ref="bg"></div>
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
    @apply text-xl  leading-9 sm:text-base sm:my-2;
  }
}

@layer components {
  .dev {
    @apply border border-solid box-border  border-red-500;
  }
}
</style>
