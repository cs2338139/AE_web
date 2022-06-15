<script setup>
import { RouterLink, RouterView } from "vue-router";
defineProps({
  img: String,
  href: String,
  typeName: String,
});
</script>

<template>
  <RouterLink :to="href" class="relative mb-20 w-72 md:w-64 rounded-3xl bg-text-1-Color">
    <div class="w-4/5 mx-auto mt-5 md:w-52 sm:w-full sm:px-3">
      <img :src="img" class="text-center border-2 w-80 rounded-2xl border-bg-0-Color" />
      <template v-if="$route.params.albumID === 'Records'">
        <div class="mt-4 mb-2  text-center md:text-sm text-bg-0-Color">
          <slot name="date">日期時間</slot>
        </div>
      </template>
      <div class="flex flex-col items-center justify-center h-16 mt-2 text-lg text-center my-7 md:text-base text-bg-0-Color">
        <div class=""><slot name="title">名稱</slot></div>
        <div class=""><slot name="title2">名稱2</slot></div>
      </div>

      <template v-if="$route.params.albumID === 'Records'">
        <div
          v-if="typeName === 'WorkShop'"
          class="absolute flex items-center justify-center w-1/3 text-black bg-amber-800 border-2 rounded-full -top-10 -right-10 aspect-square border-bg-0-Color"
        >
          <div class="text-center">工作坊</div>
        </div>

        <div
          v-if="typeName === 'Forum'"
          class="absolute flex items-center justify-center w-1/3 text-black bg-orange-400 border-2 rounded-full -top-10 -right-10 aspect-square border-bg-0-Color"
        >
          <div class="text-center">分享會</div>
        </div>

        <div
          v-if="typeName === 'ChildrenArt'"
          class="absolute flex items-center justify-center w-1/3 text-black bg-pink-400 border-2 rounded-full -top-10 -right-10 aspect-square border-bg-0-Color"
        >
          <div class="text-center">兒童 <br />美學活動</div>
        </div>

        <div
          v-if="typeName === 'Meeting'"
          class="absolute flex items-center justify-center w-1/3 text-black bg-zinc-400 border-2 rounded-full -top-10 -right-10 aspect-square border-bg-0-Color"
        >
          <div class="text-center">研習營</div>
        </div>
      </template>
      <!-- <template v-if="$route.params.albumID === 'PreExhibitions'">
        <div class=" text-lg"><slot name="tip">2022.06.23-06.27 布展紀錄</slot></div>
      </template> -->
    </div>
  </RouterLink>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
