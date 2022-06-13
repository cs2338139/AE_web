<script setup>
import NewsTableItem from "./src/NewsTableItem.vue";
defineProps({});
</script>

<template>
  <table class="w-full sm:text-xs table-fixed">
    <tr class="text-center w-full">
      <th class="px-3 py-2 w-1/6 sm:px-0"><span>公告類別</span></th>
      <th class="px-3 py-2"><span class="px-8">標題</span></th>
      <th class="px-3 py-2 w-1/6 sm:w-1/4"><span>刊登日期</span></th>
    </tr>
    <br />
    <slot></slot>
  </table>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  span {
    @apply font-medium px-3 py-2 bg-text-1-Color rounded-full  text-white sm:px-1;
  }
}
@layer components {
  .dev {
    @apply border border-solid box-border  border-blue-500;
  }
}
</style>
