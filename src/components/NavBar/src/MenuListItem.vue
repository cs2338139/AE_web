<script setup>
import { RouterLink, RouterView } from "vue-router";
defineProps({
  href: String,
  target: String
});
</script>

<template>
  <li class="font-light text-xl my-6 mx-0">
    <RouterLink :to="href" :target="target" class="hover:text-slate-400">
      <span class="px-3">
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
