<script setup>
defineProps({
  href: String,
  target: String,
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
    <a :href="href" :target="target" @click="EmitCloseMenu">
      <div class="hover:text-slate-400 w-full border-b h-10 bg-white relative font-bold flex items-center justify-between">
        <div class="mx-5">
          <slot> </slot>
        </div>
        <div class="mx-5"></div>
      </div>
    </a>
  </li>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
