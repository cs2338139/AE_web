<script setup>
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import ElementPanel from "../components/ElementPanel/ElementPanel.vue";
defineProps({});
</script>
<script>
export default {
  data() {
    interval: null;
  },
  methods: {
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
  mounted() {
    let target = this.$refs.target;

    let elements = [
      {
        main: this.$refs.bg,
        offset: 0,
      },
    ];
    let elements2 = [];

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
  <ElementPanel ref="element" />
  <div class="wrap">
    <Road class="mb-10">
      <RoadItem>宣導影片</RoadItem>
      <RoadItem>訪談紀錄片</RoadItem>
      <template #title>訪談紀錄片</template>
    </Road>

    <div class="max-w-5xl mx-auto">
      <div class="relative w-full mb-20 aspect-video sm:mb-5">
        <iframe src="https://www.youtube.com/embed/6kkuh11bDiyOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="max-w-3xl pt-10 mx-auto mt-16" ref="target">
        <div class="mb-3 text-3xl sm:text-lg">「夢境漫遊：繪本藝術展」訪談紀錄片</div>

        <hr class="mb-6 border border-zinc-600" />

        <div class="mb-14 sm:text-sm">
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
