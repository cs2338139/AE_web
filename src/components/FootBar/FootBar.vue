<script setup>
import FootMenuItem from "./src/FootMenuItem.vue";
</script>

<template>
  <footer class="z-10 w-full h-16 md:h-36 bg-zinc-800">
        <ul class="flex flex-row items-center justify-around h-full mx-auto my-0 max-w-8xl md:flex-col md:items-start md:px-10 md:py-5">
          <FootMenuItem href="">指導單位：教育部</FootMenuItem>
          <FootMenuItem href="">主辦單位：國立臺灣藝術教育館</FootMenuItem>
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

