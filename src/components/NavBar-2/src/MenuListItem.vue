<script setup>
import { RouterLink, RouterView } from "vue-router";
defineProps({
  href: String,
});
</script>

<template>
  <li class="mx-0 my-2 text-xl">
    <RouterLink :to="href" class="hover:text-slate-400">
      <span class="px-3 text-text-0-Color font-bold">
        <slot></slot>
      </span>
    </RouterLink>
  </li>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
