<script setup>
import HomeNews from '../components/Home_News/Home_News.vue'
import VisitInformation from '../components/Home_VisitInFormation/Home_VisitInformation.vue'
const Image = new URL('../../src/assets/Image/Home_Slide01.jpg', import.meta.url).href;
</script>

<template>
  <div class="wrap">
    <div class="mb-10">
      <img :src="Image" class="w-full" />
    </div>

    <div class="h-60 mb-5">
      <div class="w-2/3 h-full pr-10 float-left pt-3 border-r border-black">
        <HomeNews />
      </div>

      <div class="w-1/3 h-full pl-10 float-right pt-3">
        <VisitInformation />
      </div>

    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
