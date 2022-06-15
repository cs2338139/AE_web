<script setup>
defineProps({
  menuListOffset: String,
});
</script>

<template>
  <li class=" text-xl text-center max-h-7">
    <a href="javascript::" class="hover:text-slate-400">
      <span class="Menu-span-border-bottom px-3">
        <slot name="menuName"> </slot>
      </span>
    </a>
    <ul class="mt-10 mx-0 p-0 text-center absolute top-14" :class="menuListOffset">
      <slot></slot>
    </ul>
  </li>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
