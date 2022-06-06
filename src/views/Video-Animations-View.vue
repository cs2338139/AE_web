<script setup>
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
defineProps({});
</script>
<template>
  <div class="wrap">
    <Road class="mb-10">
      <RoadItem>宣導影片</RoadItem>
      <RoadItem>繪本小動畫</RoadItem>
      <template #title>繪本小動畫</template>
    </Road>

    <div class="max-w-4xl p-5 mx-auto mt-20 mb-12 bg-gray-100 rounded-3xl sm:mt-10">
      <div class="text-lg font-bold sm:text-sm">這三個繪本小動畫可是代表了臺灣參與波隆納世界插畫大展的繪本呢~來自25個國家共77位插畫家，為讀者帶來各種有趣的繪本故事。</div>
    </div>
    <div>
      <div class="w-full aspect-video relative mb-5 sm:mb-5">
        <iframe src="https://www.youtube.com/embed/6kkuhbDiyOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="font-bold text-3xl mb-3 sm:text-lg">繪本：一個像海的地方</div>

      <hr />

      <div class="w-full aspect-video relative mb-5 sm:mb-5">
        <iframe src="https://www.youtube.com/embed/6kkuhbDiyOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="font-bold text-3xl mb-3 sm:text-lg">繪本：哪邊是哪邊</div>

      <hr />

      <div class="w-full aspect-video relative mb-5 sm:mb-5">
        <iframe src="https://www.youtube.com/embed/6kkuhbDiyOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="font-bold text-3xl mb-3 sm:text-lg">繪本：夢遊</div>

      <hr />

      <div class="font-bold mb-14 sm:text-sm">
        <div>動畫授權：文策院</div>
      </div>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .dev-border-view {
    @apply border border-solid box-border;
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
