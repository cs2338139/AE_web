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
      interval: null,
      dir: "Data/About/image/",
      aboutData: {
        image: "",
        info: [],
        curator: {
          image: "",
          name: "",
          info: "",
          link: "",
        },
        curatorialTeamTip: "",
        curatorialTeam: [],
        promotionTeamTip: "",
        promotionTeam: [],
      },
      infoState: "English",
      info: {
        title: "",
        curator: "",
        info: "",
      },
    };
  },
  methods: {
    LoadJson() {
      axios
        .get("Data/About/about.json")
        .then((response) => {
          this.aboutData = response.data;
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
    GetTargetHeight(target, elements, elements2) {
      const h = Math.floor(document.body.scrollHeight - (target.getBoundingClientRect().top + window.scrollY));

      if (elements[0].main.clientHeight != h) {
        for (let i = 0; i < elements.length; i++) {
          elements[i].main.style.height = h + elements[i].offset + "px";
        }
        for (let i = 0; i < elements2.length; i++) {
          let offset;

          if (elements2[i].offset != 0) {
            offset = elements2[i].main.clientHeight / elements2[i].offset;
          } else {
            offset = 0;
          }
          elements2[i].main.style.bottom = h - offset + "px";
        }
        if (this.$refs.element) this.$refs.element.ReSet();
      }
    },
  },
  created() {
    this.LoadJson();
  },
  mounted() {
    let target = this.$refs.target;

    let elements = [
      {
        main: this.$refs.bg,
        offset: 0,
      },
    ];
    let elements2 = [
      {
        main: this.$refs.horse,
        offset: 4,
      },
    ];

    this.interval = setInterval(() => {
      this.GetTargetHeight(target, elements, elements2);
    }, 100);
  },
  unmounted() {
    clearInterval(this.interval);
  },
};
</script>

<template>
  <ElementPanel keyName="Star-1" ref="element" />
  <div class="wrap">
    <Road class="mb-10">
      <RoadItem>關於策展</RoadItem>
      <template #title>關於策展</template>
    </Road>
    <div class="md:px-0 w-full px-20 mb-20 overflow-hidden">
      <img :src="dir + aboutData.image" class="aspect-image w-full" />
    </div>
    <div>
      <button class="text-bg-0-Color bg-bg-1-Color hover:bg-text-1-Color sm:text-xs xl:right-5 absolute right-0 px-5 py-1 rounded-full" @click="ChangeLang()">{{ infoState }}</button>
      <div class="sm:mb-3 mb-5">
        <div class="sm:text-xl sm:mr-2 sm:block inline mr-5 text-2xl">{{ info.title }}</div>
        <div class="sm:text-xs text-zinc-500 sm:block inline text-lg">{{ info.curator }}</div>
      </div>
      <!--  -->
      <div class="sm:mb-10 mb-20" v-html="info.info"></div>
    </div>
  </div>

  <div class="mb-20">
    <div class="bg-bg-0-image h-10"></div>
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
    <div class="image w-36 bg-Leaves-image -translate-y-24 -scale-x-100 left-0 h-48 sm:hidden"></div>
    <div class="image w-36 bg-Boy-image right-60 h-36 rotate-180  sm:hidden"></div>
    <div class="bg-bg-0-image h-10 bg-bottom"></div>
  </div>

  <div class="wrap">
    <div class="sm:mb-10 mb-20">
      <div class="title">策展團隊</div>

      <div class="bgCloud sm:mt-10 relative flex items-center justify-center mx-auto mt-5 mb-5">
        <div class="sm:text-sm text w-3/5 text-lg text-center">
          {{ aboutData.curatorialTeamTip }}
        </div>
        <div class="image w-24 bg-Bear-image 2xl:right-20 md:-bottom-10 -right-8 bottom-5 h-36"></div>
      </div>

      <AboutItem v-for="i in aboutData.curatorialTeam" :img="dir + i.image" :href="i.link" class="sm:my-20 my-32">
        <template #name>{{ i.name }}</template>
        <template #info>{{ i.info }}</template>
      </AboutItem>
    </div>

    <div class="sm:mb-10">
      <div class="title" ref="target">推廣團隊</div>

      <div class="bgCloud sm:mt-10 relative flex items-center justify-center mx-auto mt-5 mb-5">
        <div class="sm:text-sm text w-3/5 text-lg text-center">
          {{ aboutData.promotionTeamTip }}
        </div>
        <div class="image w-24 bg-Rabbit-1-image right-0 bottom-5 h-36 -scale-x-100 sm:hidden"></div>
      </div>

      <AboutItem v-for="i in aboutData.promotionTeam" :img="dir + i.image" :href="i.link" class="sm:my-20 my-32">
        <template #name>{{ i.name }}</template>
        <template #info>{{ i.info }}</template>
      </AboutItem>
    </div>
  </div>

  <div class="-z-50 absolute bottom-0 w-full">
    <div class="image w-36 bg-Horse-image left-20 2xl:left-60 h-36 bottom-0" ref="horse"></div>
    <div class="bg-bg-0-image h-8"></div>
    <div class="bg-bg-2-Color h-0" ref="bg"></div>
  </div>
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

  .image {
    @apply absolute bg-no-repeat bg-w100% sm:scale-75;
  }
}
</style>
