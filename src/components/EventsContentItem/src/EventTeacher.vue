<script setup>
defineProps({
  teacherInfo: Array,
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
  <div class="text-lg font-bold mb-3 sm:text-sm"><slot></slot></div>
  <template v-for="i in teacherInfo">
    <div class="text-lg sm:text-sm">{{ i }}</div>
  </template>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
