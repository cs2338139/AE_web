<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="relative w-full h-full text-white">
    <div class="mb-5">
      <span class="px-3 py-1 text-xl font-bold bg-white rounded-full sm:text-base text-text-0-Color">參觀資訊</span>
    </div>

    <div class="font-bold sm:text-sm sm:my-1">免費入場</div>
    <div>-</div>
    <div class="text-base font-normal sm:text-sm sm:my-1">周一休館</div>
    <div class="text-base font-normal sm:text-sm sm:my-1">週二至週日 9:00-17:00</div>
    <div class="text-base font-normal sm:text-sm sm:my-1">國定假日照常開館</div>

    <div class="font-bold absolute bottom-0 right-0 hover:scale-110">
      <RouterLink to="/vistInformation">
        <span class="px-3 py-1 text-base font-bold bg-yellow-400 rounded-full text-text-0-Color sm:text-sm"> more</span>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
