<script setup>
import { RouterLink, RouterView } from "vue-router";
defineProps({
  href: String,
  enable: { type: Boolean, default: true },
});
</script>

<script>
export default {
  data() {
    return {
      hrefLink: "",
    };
  },
  methods: {
    EmitCloseMenu() {
      if (this.enable) this.$emitter.emit("CloseMenu");
    },
    IsEnable() {
      if (this.enable) {
        this.hrefLink = this.href;
      } else {
        this.hrefLink = "";
      }
    },
  },
  created() {
    this.IsEnable();
  },
};
</script>

<template>
  <li>
    <RouterLink :to="hrefLink" @click="EmitCloseMenu">
      <div class="relative flex items-center justify-start w-full h-10 font-bold border-b bg-zinc-100" :class="{ IsDisabled: enable === false }">
        <div class="ml-10 mr-2 ">
          <slot> </slot>
        </div>
        <div class="text-sm font-bold ">
          <slot name="en"></slot>
        </div>
      </div>
    </RouterLink>
  </li>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer component {
  .IsDisabled {
    @apply text-slate-400;
  }
}

@layer components {
  .dev {
    @apply border border-solid box-border  border-red-500;
  }
}
</style>
