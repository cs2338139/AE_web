<script setup>
defineProps({
  link: String,
  needKnew: Boolean,
  needlink: Boolean,
});
</script>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    openModal() {
      this.$emitter.emit("OpenModal");
    },
  },
  created() {},
};
</script>
<template>
  <div>
    <a :href="link" v-if="needlink" target="_blank" class="panel">
      <div class="text bg-text-1-Color text-bg-0-Color">點我報名</div>
    </a>
    <button v-if="needKnew" @click="openModal" class="ml-5 panel">
      <div class="text bg-bg-2-Color text-text-1-Color lg:border-2 lg:border-bg-1-Color">報名須知</div>
    </button>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .panel {
    @apply inline-block;
  }

  .text {
    @apply px-6 py-1 rounded-3xl font-bold text-xl  sm:text-sm;
  }
}
</style>
