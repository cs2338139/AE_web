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
      bg.style.height = h + "px";
    },
  },
  mounted() {
        setTimeout(() => {
      this.GetTargetHeight();
    }, 100);
  },
  updated() {
    if (this.$refs.element) this.$refs.element.ReSet();
  },
};
</script>
<template>
  <ElementPanel ref="element" />
  <div class="wrap">
    <Road class="mb-10">
      <RoadItem>宣導影片</RoadItem>
      <RoadItem>繪本小動畫</RoadItem>
      <template #title>繪本小動畫</template>
    </Road>

    <div class="flex items-center justify-center mx-auto mt-20 mb-12 bgCloud sm:mt-10">
      <div class="w-3/5 text-lg text-center sm:text-sm text text-bg-3-Color">
        <div class="mb-2 text-3xl sm:text-xl">夢境漫遊：繪本藝術展 繪本小動畫</div>
        <div class="text-xl sm:text-sm">這三個繪本小動畫可是代表了臺灣參與波隆納世界插畫大展的繪本呢～<br />來自25個國家共77位插畫家，為讀者帶來各種有趣的繪本故事。</div>
      </div>
    </div>
  </div>

  <div class="max-w-5xl mx-auto mt-20 text-center">
    <div class="mb-5 text-4xl sm:text-lg text-bg-3-Color">繪本：一個像海的地方</div>
    <div class="relative w-full aspect-video mb-28 sm:mb-5">
      <iframe src="https://www.youtube.com/embed/f9BHeGL3xK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>

  <div class="mt-20">
    <div class="h-8 bg-bg-0-image"></div>
    <div class="pt-10 pb-20 bg-bg-2-Color">
      <div class="max-w-5xl mx-auto text-center">
        <div class="mb-5 text-4xl sm:text-lg text-bg-3-Color">繪本：哪邊是哪邊</div>
        <div class="relative w-full aspect-video sm:mb-5">
          <iframe src="https://www.youtube.com/embed/nbV87xkNblY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <div class="h-8 bg-bottom bg-bg-0-image mb-28"></div>
  </div>

  <div class="max-w-5xl mx-auto mt-20 mb-40 text-center">
    <div class="mb-5 text-4xl sm:text-lg text-bg-3-Color">繪本：夢遊</div>
    <div class="relative w-full aspect-video mb-28 sm:mb-5">
      <iframe src="https://www.youtube.com/embed/SjkFgKlbtWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>

  <div class="text-center text-bg-0-Color sm:text-sm sm:-mb-10" ref="target">
    <div>動畫授權：文化內容策進院</div>
  </div>

  <div class="absolute bottom-0 w-full -z-50">
    <div class="h-8 bg-bg-1-image"></div>
    <div class="h-0 bg-bg-1-Color" ref="bg"></div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .dev {
    @apply border border-solid box-border;
  }
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
