<script setup>
defineProps({
  img: String,
  width: String,
  href: String,
});
</script>

<template>
  <a :href="href" class="inline-block align-middle">
    <img :src="img" :style="width" />
  </a>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
