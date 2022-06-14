<script setup>
import axios from "axios";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import ExhibitionItem from "../components/ExhibitionItem/ExhibitionItem.vue";
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
      console.log(bg.style.height);
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
    setTimeout(() => {
      this.GetTargetHeight();
    }, 200);
  },
};
</script>

<template>
  <template v-if="exhibitionData != null">
    <div class="wrap">
      <Road class="mb-10">
        <RoadItem>展覽介紹</RoadItem>
        <RoadItem>晚安屋</RoadItem>
        <template #title>晚安屋</template>
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
        <ExhibitionItem :img="dir + '0/cover.jpg'" :info="exhibitionData.books[0].info" :href="'GoodNight/' + 0" class="mt-32 -mb-10 sm:mb-0 -translate-x-72 xl:-translate-x-52 lg:-translate-x-20 sm:-translate-x-1">
          <template #title>{{ exhibitionData.books[0].title }}</template>
        </ExhibitionItem>

        <div class="w-20 h-32 bg-no-repeat sm:bg-h100% bg-w100% bg-arrow-1-image mx-auto sm:h-20 sm:translate-x-14"></div>

        <ExhibitionItem :img="dir + '1/cover.jpg'" :info="exhibitionData.books[1].info" :href="'GoodNight/' + 1" class="mt-0 mb-2 translate-x-24 sm:translate-x-1">
          <template #title>{{ exhibitionData.books[1].title }}</template>
        </ExhibitionItem>

        <div class="w-36 h-32 bg-no-repeat sm:bg-h100% bg-w100% bg-arrow-2-image mx-auto -translate-x-12 sm:h-20 sm:translate-x-0"></div>

        <ExhibitionItem :img="dir + '2/cover.jpg'" :info="exhibitionData.books[2].info" :href="'GoodNight/' + 2" class="mt-0 mb-0 -translate-x-36 lg:-translate-x-20 sm:-translate-x-1">
          <template #title>{{ exhibitionData.books[2].title }}</template>
        </ExhibitionItem>

        <div class="w-24 h-28 bg-no-repeat bg-h100% bg-arrow-3-image mx-auto -translate-x-16 sm:h-20 sm:-translate-x-0 sm:rotate-12"></div>

        <ExhibitionItem :img="dir + '3/cover.jpg'" :info="exhibitionData.books[3].info" :href="'GoodNight/' + 3" class="mt-2 mb-2 translate-x-32 lg:translate-x-20 sm:translate-x-1">
          <template #title>{{ exhibitionData.books[3].title }}</template>
        </ExhibitionItem>

        <div class="w-36 h-32 bg-no-repeat sm:bg-h100% bg-w100% bg-arrow-4-image mx-auto sm:h-20 sm:translate-x-14 sm:-rotate-12"></div>

        <ExhibitionItem :img="dir + '4/cover.jpg'" :info="exhibitionData.books[4].info" :href="'GoodNight/' + 4" class="mt-0 mb-2 -translate-x-28 sm:mb-8 md:-translate-x-20 sm:-translate-x-1">
          <template #title>{{ exhibitionData.books[4].title }}</template>
        </ExhibitionItem>

        <div class="w-36 h-32 bg-no-repeat sm:bg-h100% bg-w100% bg-arrow-5-image mx-auto sm:h-20 sm:rotate-45"></div>

        <ExhibitionItem :img="dir + '5/cover.jpg'" :info="exhibitionData.books[5].info" :href="'GoodNight/' + 5" class="mt-0 mb-2 sm:translate-x-1">
          <template #title>{{ exhibitionData.books[5].title }}</template>
        </ExhibitionItem>
      </div>
    </div>
    <div class="absolute bottom-0 w-full -z-50">
      <div class="h-8 bg-bg-0-image"></div>
      <div class="bg-gradient-to-b from-bg-2-Color via-navColor to-black" ref="bg"></div>
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
    @apply text-xl font-bold leading-9 sm:text-base sm:my-2;
  }
}

@layer utilities {
  .h-550px {
    height: 550px;
  }
}
@layer components {
  . {
    @apply border border-solid box-border  border-red-500;
  }

  .bgCloud {
    background-size: 100% 100%;
    max-width: 1134px;
    height: 288px;
    @apply bg-bg-cloud-image;
  }
}

@layer components {
  . {
    @apply border border-solid box-border  border-red-500;
  }
}
</style>
