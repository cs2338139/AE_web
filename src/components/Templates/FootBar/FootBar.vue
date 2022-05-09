<script setup>
import FootMenuItem from "./src/FootMenuItem.vue";
</script>

<template>
  <footer class="w-full h-16 z-10 bg-zinc-800">
        <ul class="flex justify-around items-center max-w-8xl my-0 mx-auto h-full">
          <FootMenuItem href="">指導單位：教育部</FootMenuItem>
          <FootMenuItem href="">主辦單位：國立台灣藝術教育館</FootMenuItem>
          <FootMenuItem href="">承辦單位：可睿創意、愛迪斯科技</FootMenuItem>
          <FootMenuItem href="">©Copyright 2022國立台灣藝術教育館</FootMenuItem>
        </ul>
  </footer>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>

