<script setup>
import { RouterLink, RouterView } from "vue-router";
defineProps({
  href: String,
});
</script>

<template>
  <li class="font-normal text-xl text-center max-h-7">
    <RouterLink :to="href" class="hover:text-slate-400">
      <span class="px-3">
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
