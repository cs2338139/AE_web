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
  <div class="text-3xl font-bold mb-6 sm:mb-2 sm:text-xl"><slot></slot></div>
  <template v-for="i in info">
    <div class="text-lg sm:text-sm">{{ i }}</div>
  </template>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
