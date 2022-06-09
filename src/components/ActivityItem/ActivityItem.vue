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
      <div class="mt-4 mb-2 font-medium text-center md:text-sm text-bg-0-Color">
        <slot name="date">日期時間</slot>
      </div>
      <div class="flex flex-col items-center justify-center h-16 mt-2 text-lg font-bold text-center my-7 md:text-base text-bg-0-Color">
        <div class=""><slot name="title">名稱</slot></div>
        <div class=""><slot name="title2">名稱2</slot></div>
      </div>

      <template v-if="$route.params.activityID === 'WorkShops'">
        <div v-if="typeName === 'science'" class="absolute flex items-center justify-center w-1/3 font-bold text-black bg-blue-400 border-2 rounded-full -top-10 -right-10 aspect-square border-bg-0-Color">
          <div class="text-center">科學 <br />與創造</div>
        </div>

        <div v-if="typeName === 'literature'" class="absolute flex items-center justify-center w-1/3 font-bold text-black bg-yellow-400 border-2 rounded-full -top-10 -right-10 aspect-square border-bg-0-Color">
          <div class="text-center">繪本 <br />與人文</div>
        </div>
      </template>

      <!-- <template v-if="$route.params.activityID === 'Forums'">
        <div class="mt-1 mb-5 font-medium">演講者：<slot name="teacher">演講者</slot></div>
      </template> -->

      <template v-if="$route.params.activityID === 'ChildrenArts'">
        <div v-if="typeName === 'science'" class="absolute flex items-center justify-center w-1/3 text-lg font-semibold text-black bg-blue-400 border-2 rounded-full -top-10 -right-10 aspect-square border-bg-0-Color">
          <div class="text-center">科學 <br />與創造</div>
        </div>

        <div v-if="typeName === 'literature'" class="absolute flex items-center justify-center w-1/3 text-lg font-semibold text-black bg-yellow-400 border-2 rounded-full -top-10 -right-10 aspect-square border-bg-0-Color">
          <div class="text-center">繪本 <br />與人文</div>
        </div>
      </template>

      <template v-if="$route.params.activityID === 'Meetings'">
        <div v-if="typeName === 'science'" class="absolute flex items-center justify-center w-1/3 text-lg font-semibold text-black bg-blue-400 border-2 rounded-full -top-10 -right-10 aspect-square border-bg-0-Color">
          <div class="text-center">科學 <br />與創造</div>
        </div>

        <div v-if="typeName === 'literature'" class="absolute flex items-center justify-center w-1/3 text-lg font-semibold text-black bg-yellow-400 border-2 rounded-full -top-10 -right-10 aspect-square border-bg-0-Color">
          <div class="text-center">繪本 <br />與人文</div>
        </div>
      </template>
    </div>
  </RouterLink>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .w-items {
    width: 28.27888%;
  }
}

@layer components {
  .dev {
    @apply border border-solid box-border  border-red-500;
  }

  .my {
    line-height: 54px;
  }
}
</style>
