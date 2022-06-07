<script setup>
import { RouterLink, RouterView } from "vue-router";
defineProps({
  href: String,
});
</script>

<template>
  <li class="text-xl font-normal text-center max-h-7">
    <RouterLink :to="href" class="hover:text-slate-400">
      <span class="px-3 py-1 bg-white rounded-full text-text-0-Color font-bold">
        <slot> </slot>
      </span>
    </RouterLink>
  </li>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
