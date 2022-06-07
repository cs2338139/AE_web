<script setup>
defineProps({
  href: String,
  target: String,
  _class: String,
});
</script>

<template>
  <li class="font-normal text-xl text-center max-h-7">
    <a :href="href" :target="target" class="hover:text-slate-400">
      <span class="px-3 py-1 bg-white rounded-full text-text-0-Color font-bold " :class="_class">
        <slot> </slot>
      </span>
    </a>
  </li>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
