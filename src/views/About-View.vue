<script setup>
import axios from "axios";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import AboutItem from "../components/AboutItem/AboutItem.vue";
import ElementPanel from "../components/ElementPanel/ElementPanel.vue";
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
    GetTargetHeight() {
      let target = this.$refs.target;
      const h = document.body.scrollHeight - (target.getBoundingClientRect().top + window.scrollY);
      const bg = this.$refs.bg;
      bg.style.height = h + "px";
    },
  },
  created() {
    this.LoadJson();
  },
  updated() {
    this.GetTargetHeight();
  },
};
</script>

<template>
  <template v-if="aboutData != null">
    <ElementPanel ref="element" />
    <div class="wrap">
      <Road class="mb-10">
        <RoadItem>關於策展</RoadItem>
        <template #title>關於策展</template>
      </Road>
      <div class="w-full mb-20 overflow-hidden px-20 md:px-0">
        <img :src="dir + aboutData.image" class="w-full aspect-image" />
      </div>
      <div>
        <button class="absolute right-0 px-5 py-1 rounded-full text-bg-0-Color bg-bg-1-Color hover:bg-text-1-Color sm:text-xs xl:right-5" @click="ChangeLang()">{{ infoState }}</button>
        <div class="mb-5 sm:mb-3">
          <div class="inline mr-5 text-2xl sm:text-xl sm:mr-2 sm:block">{{ info.title }}</div>
          <div class="inline text-lg sm:text-xs text-zinc-500 sm:block">{{ info.curator }}</div>
        </div>

        <div class="mb-20 sm:mb-10">
          <template v-for="i in info.info">
            <div :class="{ my: i === '' }" class="contentFont">{{ i }}</div>
          </template>
        </div>
      </div>
    </div>

    <div class="mb-20">
      <div class="h-10 bg-bg-0-image"></div>
      <div class="bg-bg-2-Color">
        <div class="wrap">
          <div class="title">策展人</div>
          <AboutItem :img="dir + aboutData.curator.image" :href="aboutData.curator.link">
            <template #name>{{ aboutData.curator.name }}</template>
            <template #info>{{ aboutData.curator.info }}</template>
          </AboutItem>
          <br /><br />
        </div>
      </div>
      <div class="h-10 bg-bottom bg-bg-0-image"></div>
    </div>

    <div class="wrap">
      <div class="mb-20 sm:mb-10">
        <div class="title">策展團隊</div>

        <div class="mx-auto mt-20 mb-12 bgCloud sm:mt-10 flex items-center justify-center">
          <div class="w-3/5 text-lg sm:text-sm text text-center">
            {{ aboutData.curatorialTeamTip }}
          </div>
        </div>

        <AboutItem v-for="i in aboutData.curatorialTeam" :img="dir + i.image" :href="i.link" class="my-32 sm:my-20">
          <template #name>{{ i.name }}</template>
          <template #info>{{ i.info }}</template>
        </AboutItem>
      </div>

      <div class="sm:mb-10" ref="target">
        <div class="title">推廣團隊</div>

        <div class="mx-auto mt-20 mb-12 bgCloud sm:mt-10 flex items-center justify-center">
          <div class="w-3/5 text-lg sm:text-sm text text-center">
            {{ aboutData.promotionTeamTip }}
          </div>
        </div>

        <AboutItem v-for="i in aboutData.promotionTeam" :img="dir + i.image" :href="i.link" class="my-32 sm:my-20">
          <template #name>{{ i.name }}</template>
          <template #info>{{ i.info }}</template>
        </AboutItem>
      </div>
    </div>
    <div class="absolute w-full bottom-0 -z-50">
      <div class="bg-bg-0-image h-8"></div>
      <div class="bg-bg-2-Color h-0" ref="bg"></div>
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
  .dev {
    @apply border border-solid box-border  border-red-500;
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
    @apply mb-5 text-2xl  sm:text-base sm:mb-3;
  }
}
@layer components {
  .dev {
    @apply border border-solid box-border  border-red-500;
  }

  .bgCloud {
    background-size: 100% 100%;
    max-width: 1134px;
    height: 288px;
    @apply bg-bg-cloud-image sm:bg-bg-cloud-m-image sm:pt-2;
  }
}
</style>
