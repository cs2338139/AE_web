<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="relative w-full h-full">
    <div class="font-bold text-2xl sm:text-base sm:my-1">參觀資訊</div>
    <div>-</div>
    <div class="font-bold sm:text-sm sm:my-1">免費入場</div>
    <div class="text-base font-normal sm:text-sm sm:my-1">周一休館</div>
    <div class="text-base font-normal sm:text-sm sm:my-1">週二至週日 9:00-17:00</div>
    <div class="text-base font-normal sm:text-sm sm:my-1">國定假日照常開館</div>

    <div class="font-bold absolute bottom-0 right-0 sm:text-sm">
      <RouterLink to="/vistInformation" class="hover:text-slate-400">
        <span> more＞</span>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
