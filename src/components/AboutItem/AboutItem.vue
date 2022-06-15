<script setup>
defineProps({
  img: String,
  href: String,
});
</script>

<template>
  <div>
    <div class="relative max-w-6xl mx-auto flex justify-between sm:flex-col sm:items-center">
      <div class="w-40 sm:w-30 sm:mb-5"><img :src="img" class="rounded-full w-full" /></div>

      <div class="w-3/4 sm:w-full">
        <div class="mb-3 text-xl sm:text-base sm:text-center">
          <slot name="name">閱讀盪鞦韆</slot>
        </div>

        <div class="dev sm:text-sm">
          <slot name="info">文涵養的工作坊、課程、講座與文章，引領大眾進入不同視野的繪本奇幻世界。 </slot>
        </div>

        <template v-if="href != 'none'">
          <br /><br />
          <a :href="href" target="_blank" class="bottom-0 right-0 absolute underline sm:text-sm sm:right-1/2 sm:translate-x-1/2">→ 臉書專頁</a>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
@layer components {
  .dev {
    /* @apply border border-solid box-border  border-red-500; */
  }
}
</style>
