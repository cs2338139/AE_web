<script setup>
import FootMenuItem from "./src/FootMenuItem.vue";
</script>

<template>
  <footer>
    <div class="bg-foot-0-image h-32"></div>
    <div class="w-full relative h-24 xl:h-40 sm:h-48 bg-footColor">
      <ul class="flex flex-row items-center justify-between h-full mx-auto my-0 max-w-8xl 2xl:justify-around xl:flex-col xl:items-start xl:px-10 xl:py-5" >
        <div class="flex flex-col h-1/2 justify-between ">
          <FootMenuItem href="">指導單位：教育部</FootMenuItem>
          <FootMenuItem href="">協辦單位：Pixelight、文化內容策進院、光試所、流寓工作室、愛迪斯科技股份有限公司</FootMenuItem>
        </div>

        <div class="flex flex-col h-1/2 justify-between ">
          <FootMenuItem href="">主辦單位：國立臺灣藝術教育館</FootMenuItem>
          <FootMenuItem href="">©Copyright 2022國立臺灣藝術教育館</FootMenuItem>
        </div>

        <div class="flex flex-col h-1/2 justify-between  xl:justify-end">
          <FootMenuItem href="">承辦單位：可睿創意</FootMenuItem>
          <FootMenuItem href="">備註：本網站不支援IE</FootMenuItem>
        </div>
      </ul>
    </div>
  </footer>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
