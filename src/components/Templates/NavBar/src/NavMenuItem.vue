<script setup>
defineProps({
  href: String,
});
</script>

<template>
  <li class="font-normal text-xl text-center max-h-7">
    <a :href="href" class="hover:text-slate-400">
      <span class="px-3">
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
