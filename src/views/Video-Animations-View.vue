<script setup>
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import ElementPanel from "../components/ElementPanel/ElementPanel.vue";
defineProps({});
</script>
<script>
export default {
  data() {},
  methods: {
    GetTargetHeight() {
      const h = document.body.scrollHeight - (this.$refs.target.getBoundingClientRect().top + window.scrollY);
      const bg = this.$refs.bg;
      const leaves = this.$refs.leaves;
      const leaves2 = this.$refs.leaves2;
      const bear = this.$refs.bear;
      bg.style.height = h + "px";
      leaves.style.bottom = h + "px";
      leaves2.style.bottom = h + "px";
      bear.style.bottom = h + "px";
    },
  },
  mounted() {
    interval=setInterval(() => {
      const h = document.body.scrollHeight - (this.$refs.target.getBoundingClientRect().top + window.scrollY);
      const bg = this.$refs.bg;
      if (bg.clientHeight != h) {
        this.GetTargetHeight();
      }
    }, 100);
  },
  updated() {
    if (this.$refs.element) this.$refs.element.ReSet();
  },
};
</script>
<template>
  <ElementPanel ref="element"/>
  <div class="wrap">
    <Road class="mb-10">
      <RoadItem>宣導影片</RoadItem>
      <RoadItem>繪本小動畫</RoadItem>
      <template #title>繪本小動畫</template>
    </Road>

    <div class="bgCloud sm:mt-10 flex items-center justify-center mx-auto mt-20 mb-12">
      <div class="sm:text-sm text text-bg-3-Color w-3/5 text-lg text-center">
        <div class="sm:text-xl mb-2 text-3xl">夢境漫遊：繪本藝術展 繪本小動畫</div>
        <div class="sm:text-sm text-xl">這三個繪本小動畫可是代表了臺灣參與波隆納世界插畫大展的繪本呢～<br />來自25個國家共77位插畫家，為讀者帶來各種有趣的繪本故事。</div>
      </div>
    </div>
  </div>

  <div class="max-w-5xl mx-auto mt-20 text-center">
    <div class="sm:text-lg text-bg-3-Color mb-5 text-4xl">繪本：一個像海的地方</div>
    <div class="aspect-video mb-28 sm:mb-5 relative w-full">
      <iframe src="https://www.youtube.com/embed/f9BHeGL3xK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>

  <div class="mt-20">
    <div class="absolute bg-no-repeat bg-w100% h-36 bg-Coral-1-image left-48 -translate-y-20 -z-10 w-48"></div>
    <div class="absolute bg-no-repeat bg-w100% h-44 bg-Coral-2-image right-48 -translate-y-28 -z-10 w-56"></div>
    <div class="absolute bg-no-repeat bg-w100% h-36 bg-Ghost-image right-64 translate-y-10 w-32"></div>
    <div class="bg-bg-0-image h-8"></div>
    <div class="bg-bg-2-Color pt-10 pb-20">
      <div class="max-w-5xl mx-auto text-center">
        <div class="sm:text-lg text-bg-3-Color mb-5 text-4xl">繪本：哪邊是哪邊</div>
        <div class="aspect-video sm:mb-5 relative w-full">
          <iframe src="https://www.youtube.com/embed/nbV87xkNblY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <div class="absolute bg-no-repeat bg-w100% h-32 bg-Rabbit-2-image right-20 -translate-y-40 w-44 -rotate-60"></div>
    <div class="absolute bg-no-repeat bg-w100% h-44 bg-Boy-image right-48 translate-y-6 w-44 rotate-180"></div>
    <div class="bg-bg-0-image mb-28 h-8 bg-bottom"></div>
  </div>

  <div class="max-w-5xl mx-auto mt-20 mb-20 text-center">
    <div class="sm:text-lg text-bg-3-Color mb-5 text-4xl">繪本：夢遊</div>
    <div class="aspect-video sm:mb-5 relative w-full">
      <iframe src="https://www.youtube.com/embed/SjkFgKlbtWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>

  <div class="text-bg-0-Color sm:text-sm sm:-mb-10 text-center" ref="target">
    <div class="my-10">動畫授權：文化內容策進院</div>
  </div>

  <div class="-z-50 absolute bottom-0 w-full">
    <div class="absolute bg-no-repeat bg-w100% h-44 bg-Leaves-image right-72 w-32 rotate-90 bottom-0 -z-10" ref="leaves"></div>
    <div class="absolute bg-no-repeat bg-w100% h-32 bg-Bear-image left-80 w-20 bottom-0 -z-10" ref="bear"></div>
    <div class="absolute bg-no-repeat bg-w100% h-56 bg-Leaves-image left-20 w-48 rotate-90 translate-y-10 bottom-0 -scale-y-100 -z-10" ref="leaves2"></div>
    <div class="bg-bg-1-image h-8"></div>
    <div class="bg-bg-1-Color h-0" ref="bg"></div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .bgCloud {
    background-size: 100% 100%;
    max-width: 1134px;
    height: 288px;
    @apply bg-bg-cloud-image sm:bg-bg-cloud-m-image sm:pt-2;
  }
}

@layer utilities {
  .h-720px {
    height: 720px;
  }
}
@layer base {
  hr {
    @apply my-20 border border-zinc-400;
  }
}

iframe {
  @apply w-full h-full;
}
</style>
