<script setup>
defineProps({
  menuListOffset: String,
});
</script>

<template>
  <li class="text-xl font-normal text-center max-h-7 group">
    <span class="px-3 cursor-pointer Menu-span-border-bottom">
      <slot name="menuName"> </slot>
    </span>
    <div class="absolute hidden h-40 p-0 mx-0 min-w-32 text-center group-hover:block hover:block" :class="menuListOffset">
      <ul class="p-0 mx-0 mt-5 text-center rounded-lg hover:block">
        <slot></slot>
      </ul>
    </div>
  </li>
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

@layer utilities
{
    .min-w-32
  {
      min-width: 128px;
  }
}
</style>
