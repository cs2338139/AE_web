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
  <li class="mx-0 my-2">
    <RouterLink :to="hrefLink" class="">
      <span class="px-4  font-bold" :class="{ IsDisabled: enable === false },{ IsEnabled: enable === true }">
        <slot></slot>
      </span>
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

  .IsEnabled {
    @apply text-text-0-Color;
  }
}
</style>
