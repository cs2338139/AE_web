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
    this.GetTargetHeight();
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
      <RoadItem>線上展覽</RoadItem>
      <RoadItem>策展人線上導覽</RoadItem>
      <template #title>策展人線上導覽</template>
    </Road>

    <div class="max-w-5xl mx-auto">
      <div class="relative w-full mb-20 aspect-video sm:mb-5">
        <iframe src="https://www.youtube.com/embed/6kkuh11bDiyOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="max-w-3xl pt-10 mx-auto mt-16" ref="target">
        <div class="mb-3 text-3xl sm:text-lg">夢境漫遊：繪本藝術展 線上導覽影片</div>
        <div class="mb-3 text-xl sm:text-sm">策展人：吳文君</div>
        <div class="mb-6">由策展人與策展團隊帶領著大家一起在展間漫遊，一起聊聊關於繪本的故事。</div>

        <hr class="mb-6 border border-zinc-600" />

        <div class="mb-14 sm:text-sm">
          <div>夢境漫遊：繪本藝術展</div>
          <div>展覽日期：2022.06.28 – 09.25</div>
          <div>展覽地點：國立臺灣藝術教育館 第1、2展覽廳</div>
        </div>
      </div>
    </div>
  </div>

  <div class="absolute bottom-0 w-full -z-50">
    <div class="h-8 bg-bg-0-image"></div>
    <div class="h-0 bg-bg-2-Color" ref="bg"></div>
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
