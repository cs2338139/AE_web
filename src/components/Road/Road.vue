<script setup>
import HomeIcon from "./src/HomeIcon.vue";
defineProps({});
</script>

<template>
  <template v-if="$windowWidth > $sm">
    <div class="flex">
      <div>
        <HomeIcon />
      </div>
      <div class="text-base">
        <slot></slot>
      </div>
    </div>
  </template>
  <template v-else>
    <div class=" sm:text-xl sm:mt-4 sm:my-6"><slot name="title"></slot></div>
  </template>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
