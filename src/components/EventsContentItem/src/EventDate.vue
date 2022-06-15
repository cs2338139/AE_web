<script setup>
defineProps({});
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
  <div class="mb-3 text-4xl sm:text-xl sm:mb-0"><slot name="date"></slot></div>
  <div class="text-3xl sm:text-lg"><slot name="time"></slot></div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
