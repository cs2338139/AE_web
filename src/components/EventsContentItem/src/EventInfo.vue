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
  <div class="text-3xl font-bold"><slot></slot></div>
  <br />
  <template v-for="i in info">
    <div class="text-lg">{{ i }}</div>
  </template>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
