<script setup>
defineProps({
  info: Array,
});
</script>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<template>
  <div class="text-3xl mb-1 sm:mb-0.5 sm:text-xl"><slot name="title"></slot></div>
  <div class="text-lg mb-6 sm:mb-2 sm:text-xs">繪本｜<slot name="ref"></slot></div>
  <template v-for="i in info">
    <div class="text-lg sm:text-sm text-zinc-700">{{ i }}</div>
  </template>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
