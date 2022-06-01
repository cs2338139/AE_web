<script setup>
defineProps({
  link: String,
  needKnew: Boolean,
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
    <a :href="link" target="_blank" class="panel">
      <div class="text">點我報名</div>
    </a>
    <button v-if="needKnew" @click="openModal" class="panel ml-5">
      <div class="text">報名須知</div>
    </button>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .panel {
    @apply text-xl font-bold text-zinc-500 inline-block sm:text-sm;
  }

  .text {
    @apply  px-3 py-2 text-white bg-zinc-400 rounded-3xl;
  }
}
</style>
