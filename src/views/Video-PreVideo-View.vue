<script setup>
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
defineProps({});
</script>
<template>
  <div class="wrap">
    <Road class="mb-10">
      <RoadItem>宣導影片</RoadItem>
      <RoadItem>前導宣傳片</RoadItem>
      <template #title>前導宣傳片</template>
    </Road>

    <div>
      <div class="w-full aspect-video relative mb-10 sm:mb-5">
        <iframe src="https://www.youtube.com/embed/6kkuhbDiyOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="font-bold text-3xl mb-10 sm:text-lg">「夢境漫遊：繪本藝術展」前導宣傳片</div>

      <div class="font-bold mb-14 sm:text-sm">
        <div>展覽日期：2022.06.28 – 09.25</div>
        <div>展覽地點：國立臺灣藝術教育館 第1、2展覽廳</div>
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

iframe {
  @apply w-full h-full;
}
</style>
