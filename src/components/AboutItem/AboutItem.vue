<script setup>
defineProps({
  img: String,
  href: String,
});
</script>

<template>
  <div>
    <div class="relative max-w-6xl mx-auto  flex justify-between">
      <div class="w-40 "><img :src="img" class="rounded-full w-full" /></div>

      <div class="w-3/4 ">
        <div class="mb-3 text-xl font-bold ">
          <slot name="name">閱讀盪鞦韆</slot>
        </div>

        <div class="">
          <slot name="info">文涵養的工作坊、課程、講座與文章，引領大眾進入不同視野的繪本奇幻世界。 </slot>
        </div>

        <template v-if="href != 'none'">
          <br />
          <br />
          <a :href="href" target="_blank" class="bottom-0 right-0 absolute font-bold underline ">→ 臉書專頁</a>
        </template>
      </div>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
