<script setup>
import { RouterLink, RouterView } from "vue-router";
defineProps({
  img: String,
  href: String,
  typeName: String,
});
</script>

<template>
  <RouterLink :to="href" class="mb-20 w-96 rounded-2xl bg-zinc-200">
    <div class="w-80 mx-auto mt-5">
      <img :src="img" class="w-80 text-center" />
      <div class="mt-2 font-medium">
        <slot name="date">日期時間</slot>
      </div>
      <div class="m-0 text-lg font-bold">
        <slot name="title">名稱</slot>
      </div>

      <template v-if="typeName != null">
        <div class="inline-block p-1 mt-1 mb-5 text-sm text-white bg-gray-400" v-if="typeName === 'science'">科學與創造</div>
        <div class="inline-block p-1 mt-1 mb-5 text-sm text-white bg-gray-400" v-if="typeName === 'literature'">繪本與人文</div>
      </template>

      <template v-else>
        <div class="mt-1 mb-5 font-medium">
          演講者：<slot name="teacher">演講者</slot>
        </div>
      </template>
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
