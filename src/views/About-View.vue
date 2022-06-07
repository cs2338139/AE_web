<script setup>
import axios from "axios";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import AboutItem from "../components/AboutItem/AboutItem.vue";
</script>

<script>
export default {
  data() {
    return {
      dir: "Data/About/image/",
      aboutData: null,
      infoState: "English",
      info: {
        title: null,
        curator: null,
        info: [],
      },
    };
  },
  methods: {
    LoadJson() {
      axios
        .get("Data/About/about.json")
        .then((response) => {
          this.aboutData = response.data;
          // console.log(this.aboutData);
          this.info = this.aboutData.info[0];
        })
        .catch(function (response) {
          console.log(response);
        });
    },
    ChangeLang() {
      if (this.infoState === "English") {
        this.infoState = "中文";
        this.info = this.aboutData.info[1];
      } else {
        this.infoState = "English";
        this.info = this.aboutData.info[0];
      }
    },
  },
  created() {
    this.LoadJson();
  },
};
</script>

<template>
  <template v-if="aboutData != null">
    <div class="wrap">
      <Road class="mb-10">
        <RoadItem>關於策展</RoadItem>
        <template #title>關於策展</template>
      </Road>
      <div class="w-full mb-10 overflow-hidden aspect-image"><img :src="dir + aboutData.image" class="w-full" /></div>
      <div class="">
        <button class="absolute right-0 px-5 py-1 text-white rounded-full bg-zinc-400 hover:bg-zinc-600 sm:text-xs" @click="ChangeLang()">{{ infoState }}</button>
        <div class="mb-5 font-bold sm:mb-3">
          <div class="inline mr-5 text-2xl font-bold sm:text-xl sm:mr-2 sm:block">{{ info.title }}</div>
          <div class="inline text-lg font-bold sm:text-xs text-zinc-500 sm:block">{{ info.curator }}</div>
        </div>

        <div class="mb-20 sm:mb-10">
          <template v-for="i in info.info">
            <div :class="{ my: i === '' }" class="contentFont">{{ i }}</div>
          </template>
        </div>
      </div>

      <div class="mb-20">
        <div class="title">策展人</div>
        <AboutItem :img="dir + aboutData.curator.image" :href="aboutData.curator.link">
          <template #name>{{ aboutData.curator.name }}</template>
          <template #info>{{ aboutData.curator.info }}</template>
        </AboutItem>
      </div>

      <div class="mb-20 sm:mb-10">
        <div class="title">策展團隊</div>

        <div class="max-w-6xl p-5 mx-auto mt-20 mb-12 bg-gray-100 sm:mt-10 rounded-3xl">
          <div class="text-lg font-bold sm:text-sm">
            {{ aboutData.curatorialTeamTip }}
          </div>
        </div>

        <AboutItem v-for="i in aboutData.curatorialTeam" :img="dir + i.image" :href="i.link" class="my-32 sm:my-20">
          <template #name>{{ i.name }}</template>
          <template #info>{{ i.info }}</template>
        </AboutItem>
      </div>

      <div class="mb-20 sm:mb-10">
        <div class="title">推廣團隊</div>

        <div class="max-w-6xl p-5 mx-auto mt-20 mb-12 bg-gray-100 sm:mt-10 rounded-3xl">
          <div class="text-lg font-bold sm:text-sm">
            {{ aboutData.promotionTeamTip }}
          </div>
        </div>

        <AboutItem v-for="i in aboutData.promotionTeam" :img="dir + i.image" :href="i.link" class="my-32 sm:my-20">
          <template #name>{{ i.name }}</template>
          <template #info>{{ i.info }}</template>
        </AboutItem>
      </div>
    </div>
  </template>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .h-550px {
    height: 550px;
  }
}

@layer components {
  .my {
    @apply my-5;
  }
  .contentFont {
    @apply text-lg leading-6 sm:text-sm;
  }
  .title {
    @apply mb-5 text-2xl font-bold sm:text-base sm:mb-3;
  }
}
@layer components {
  .dev {
    @apply border border-solid box-border  border-red-500;
  }
}
</style>
