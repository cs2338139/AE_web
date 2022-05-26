<script setup>
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
defineProps({});
</script>
<template>
  <div class="wrap">
    <Road class="mb-10">
      <RoadItem>策展人線上導覽</RoadItem>
    </Road>

    <div>
      <div class="w-full h-720px relative dev-border-view mb-10">
        <iframe src="https://www.youtube.com/embed/6kkuhbDiyOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="font-bold text-3xl mb-3">夢境漫遊：繪本藝術展 線上導覽影片</div>
      <div class="mb-4 font-bold text-xl">策展人：吳文君</div>
      <div class="mb-6 text-red-800">「動漫藝次元」特展藉由跨界合作並融入科技創作，充分展現動漫跨次元的潮流精神。展區分成「新浪潮」與「跨世代」，全面詮釋動漫藝術的多元性及美學教育之未來發展。 此支影片由策展人趙瞬文老師和多位參展藝術家，一同帶領您進入動漫創作人的宇宙。</div>

      <div class="font-bold mb-14">
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
