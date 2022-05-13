<script setup>
import { RouterLink, RouterView } from "vue-router";
defineProps({
  img: String,
  href: String,
  typeName: String,
});
</script>

<!-- <script>
export default
    {
        components:
        {
            science: {
                template: `<div class="demo-tab">Home component</div>`,
            },
            literature: {
                template: `<div class="demo-tab">Post component</div>`,
            }
        }
    }

</script> -->

<template>
  <RouterLink :to="href" class="mb-10 w-80 rounded-2xl bg-zinc-200">
    <div class="w-64 mx-auto mt-5">
      <img :src="img" />
      <div class="mt-2 text-lg font-bold">
        <slot name="title">漫遊城市：泥塑鏤空杯墊製作</slot>
      </div>
      <div class="my-0 font-medium">
        <slot name="date">2022.07.10 10:30－12:00</slot>
      </div>
      <!-- <component :is="typeName" /> -->
      <div class="inline-block p-1 mt-1 mb-2 text-sm text-white bg-gray-400" v-if="typeName === 'science'">科學與創造</div>
      <div class="inline-block p-1 mt-1 mb-2 text-sm text-white bg-gray-400" v-if="typeName === 'literature'">繪本與人文</div>
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
