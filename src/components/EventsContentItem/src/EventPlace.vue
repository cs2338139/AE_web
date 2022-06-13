<script setup>
defineProps({
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
  <ul class="text-lg xl:text-sm font-semibold text-zinc-600">
    <li class="my-2"><slot name="howto"></slot></li>
    <li class="my-2"><slot name="place"></slot></li>
    <li class="my-2"><slot name="for"></slot></li>
    <li class="my-2"><slot name="money"></slot></li>
    <li class="my-2"><slot name="tip"></slot></li>
    <li class="my-2"><slot name="people"></slot></li>
  </ul>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
