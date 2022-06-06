<script setup>
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
defineProps({});
</script>
<template>
  <div class="wrap">
    <Road class="mb-10">
      <RoadItem>宣導影片</RoadItem>
      <RoadItem>訪談紀錄片</RoadItem>
      <template #title>訪談紀錄片</template>
    </Road>

    <div>
      <div class="w-full aspect-video relative mb-10 sm:mb-5 ">
        <iframe src="https://www.youtube.com/embed/6kkuhbDiyOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="font-bold text-3xl mb-3 sm:text-lg">夢境漫遊：繪本藝術展 訪談紀錄片</div>
      <div class="mb-4 font-bold text-xl sm:text-sm">策展人：吳文君</div>
      <div class="mb-6 text-red-800">這是一趟夢的旅遊，讓我們一起漫遊在5本國外經典繪本x5本國內原創繪本的奇幻世界內，由策展人、繪本創作者與策展團隊光試所、Pixelight一起聊聊關於晚安屋與夢境房的故事吧~</div>

      <div class="font-bold mb-14 sm:text-sm">
        <div>夢境漫遊：繪本藝術展</div>
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
