<script setup>
import { RouterLink, RouterView } from "vue-router";
defineProps({
  img: String,
  href: String,
  typeName: String,
});
</script>

<template>
  <RouterLink :to="href" class="mb-20 w-96 md:w-60  rounded-2xl bg-zinc-200 sm:w-80">
    <div class="w-80 mx-auto mt-5 md:w-52 sm:w-60">
      <img :src="img" class="w-80 text-center" />

      <template v-if="$route.params.albumID === 'Records'">
        <div class="mt-2 font-medium md:text-sm">
          <slot name="date">日期時間</slot>
        </div>
        <div class="m-0 text-lg font-bold md:text-base">
          <slot name="title">名稱</slot>
        </div>
        <div class="inline-block p-1 mt-1 mb-5 text-sm text-white bg-red-400" v-if="typeName === 'WorkShop'">工作坊</div>
        <div class="inline-block p-1 mt-1 mb-5 text-sm text-white bg-blue-400" v-if="typeName === 'Forum'">專題演講</div>
        <div class="inline-block p-1 mt-1 mb-5 text-sm text-white bg-green-400" v-if="typeName === 'ChildrenArt'">兒童美學活動</div>
        <div class="inline-block p-1 mt-1 mb-5 text-sm text-white bg-yellow-400" v-if="typeName === 'Meeting'">研習營</div>
      </template>

      <template v-if="$route.params.albumID === 'PreExhibitions'">
        <div class="mt-2 text-lg font-bold">
          <slot name="title">名稱</slot>
        </div>
        <div class="mt-1 mb-5 font-medium text-lg"><slot name="tip">2022.06.23-06.27 布展紀錄</slot></div>
      </template>
    </div>
  </RouterLink>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
