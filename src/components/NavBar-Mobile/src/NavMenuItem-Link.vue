<script setup>
defineProps({
  href: String,
  target: String,
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
      if (this.enable)this.$emitter.emit("CloseMenu");
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
    <a :href="hrefLink" :target="target" @click="EmitCloseMenu">
      <div class="w-full border-b h-10 bg-white relative font-bold flex items-center justify-between" :class="{ IsDisabled: enable === false }">
        <div class="mx-5">
          <slot> </slot>
        </div>
        <div class="mx-5"></div>
      </div>
    </a>
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
</style>