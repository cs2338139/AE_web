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
  <tr class="hover:bg-zinc-100 border-y text-center cursor-pointer" @click="router()">
    <td class="px-3 py-2 sm:px-0">
      <slot name="type"></slot>
    </td>
    <td class="px-3 py-2">
      <slot name="title"></slot>
    </td>
    <td class="px-3 py-2">
      <slot name="date"></slot>
    </td>
  </tr>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
