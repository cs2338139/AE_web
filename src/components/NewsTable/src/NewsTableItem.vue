<script setup>
import { RouterLink, RouterView } from "vue-router";
defineProps({
  href: String,
});
</script>

<script>
export default {
  methods: {
    router() {
      console.log(this.$props);
      this.$router.push({ path: this.$props.href });
    },
  },
};
</script>

<template>
  <tr class="text-center cursor-pointer hover:bg-zinc-200 text-text-1-Color" @click="router()">
    <td class="px-3 py-2 sm:px-0">
      <span class="px-3 py-1 font-medium border rounded-full border-text-1-Color box-content sm:px-0"><slot name="type"></slot></span>
    </td>
    <td class="px-3 py-2  whitespace-nowrap overflow-hidden text-ellipsis"><slot name="title"></slot></td>
    <td class="px-3 py-2 sm:px-0">
      <slot name="date"></slot>
    </td>
  </tr>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
