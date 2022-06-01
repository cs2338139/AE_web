<script setup>
import NewsTableItem from "./src/NewsTableItem.vue";
defineProps({});
</script>

<template>
  <table class="w-full sm:text-xs">
    <tr class="bg-zinc-300 border-y text-center">
      <th class="px-3 py-2 w-1/12 lg:w-1/6 sm:px-0">公告類別</th>
      <th class="px-3 py-2">標題</th>
      <th class="px-3 py-2 w-1/12">刊登日期</th>
    </tr>
    <slot></slot>
  </table>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
