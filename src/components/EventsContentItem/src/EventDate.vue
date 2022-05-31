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
    <div class="mb-3 text-4xl font-bold"> <slot name="date"></slot></div>
    <div class="text-3xl font-normal"><slot name="time"></slot></div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
