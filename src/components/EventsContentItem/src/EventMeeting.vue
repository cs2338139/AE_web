<script setup>
defineProps({
  MExpect: Array,
  MProcess: Array,
  MTeacher: Array,
});
</script>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<template>
  <div class="mb-6 text-3xl font-bold sm:mb-4 sm:text-xl text-text-1-Color"><slot name="MTitle"></slot></div>

  <div class="text-2xl font-bold text-text-1-Color sm:text-lg">課程目標</div>
  <div class="mb-5 text-xl font-bold mt-1 text-zinc-700 sm:text-base sm:mt-0"><slot name="MTarget"></slot></div>

  <div class="text-2xl font-bold text-text-1-Color sm:text-lg">預期成果</div>
  <ul class="mb-5 list-decimal list-inside">
    <li v-for="i in MExpect" class="text-xl font-bold my-1 text-zinc-700 sm:my-0 sm:text-base">{{ i }}</li>
  </ul>

  <div class="text-2xl font-bold text-text-1-Color sm:text-lg">流程</div>
  <ul>
    <li v-for="i in MProcess" class="text-xl font-bold my-1 text-zinc-700 sm:my-0 sm:text-base">{{ i }}</li>
  </ul>

  <hr class="my-8 border border-zinc-400 lg:border-0 sm:my-3" />

  <div class="mb-10" v-for="i in MTeacher">
    <div class="text-lg font-semibold sm:text-sm text-zinc-700">講師｜{{ i.teacher }}</div>
    <div class="text-lg font-semibold sm:text-sm text-zinc-500">{{ i.info }}</div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
