<script setup>
import { RouterLink, RouterView } from "vue-router";
defineProps({
  href: String,
});
</script>
<script>
export default {
  methods: {
    EmitCloseMenu() {
      this.$emitter.emit("CloseMenu");
    },
  },
};
</script>

<template>
  <li>
    <RouterLink :to="href" @click="EmitCloseMenu" >
      <div class="hover:text-slate-400 w-full border-b h-10 bg-white relative font-bold flex items-center justify-between">
        <div class="mx-5">
          <slot> </slot>
        </div>
        <div class="mx-5"></div>
      </div>
    </RouterLink>
  </li>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
