<script setup>
import { RouterLink, RouterView } from "vue-router";
defineProps({
  img: String,
  href: String,
});
</script>

<template>
  <RouterLink :to="href" class="mb-10 w-80 bg-zinc-300 dev-border-view">
    <div class="w-64 mx-auto mt-5 dev-border-view">
      <img :src="img" />
      <div class="mt-2 text-lg font-bold">漫遊城市：泥塑鏤空杯墊製作</div>
      <div class="my-0 font-medium">2022.07.10 10:30－12:00</div>
    </div>
  </RouterLink>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .dev-border-view {
    @apply border border-solid box-border;
  }
}
</style>
