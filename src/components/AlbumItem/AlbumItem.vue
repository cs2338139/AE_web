<script setup>
import { RouterLink, RouterView } from "vue-router";
defineProps({
  img: String,
  href: String,
});
</script>

<template>
  <RouterLink :to="href" class="relative mb-20 w-72 md:w-64 rounded-3xl bg-text-1-Color">
    <div class="w-4/5 mx-auto mt-5 md:w-52 sm:w-full sm:px-3">
      <img :src="img" class="text-center border-2 w-80 rounded-2xl border-bg-0-Color" />
      <div class="mt-4 mb-2  text-center md:text-sm text-bg-0-Color">
        <slot name="date">日期時間</slot>
      </div>
      <div class="flex flex-col items-center justify-center h-16 mt-2 text-lg text-center my-7 md:text-base text-bg-0-Color">
        <div class=""><slot name="title">名稱</slot></div>
        <div class=""><slot name="title2">名稱2</slot></div>
      </div>
    </div>
  </RouterLink>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
