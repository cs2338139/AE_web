<script setup>
import { RouterLink, RouterView } from "vue-router";
defineProps({
  href: String,
  target: String,
});
</script>

<template>
  <li class="text-base font-normal">
      <RouterLink :to="href" class="hover:text-slate-400">
        <span class="mr-5">
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
