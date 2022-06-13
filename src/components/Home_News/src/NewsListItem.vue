<script setup>
import { RouterLink, RouterView } from "vue-router";
defineProps({
  href: String,
  target: String,
});
</script>

<template>
  <li class="text-base font-normal sm:text-sm sm:my-1 whitespace-nowrap overflow-hidden text-ellipsis">
      <RouterLink :to="href" class="hover:text-slate-800">
        <span class="mr-5 sm:mr-2">
          <slot name="date"></slot>
        </span>
        <span>
          <slot name="title"></slot> </span
      ></RouterLink>
  </li>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
