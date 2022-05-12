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
            <img :src="img"/>
            <div class="my-2 text-lg font-bold">彩虹色的漫遊日：采蓉染繳體驗</div>
        </div>
    </RouterLink>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .dev-border-view {
    @apply border border-solid box-border ;
  }
}
</style>
