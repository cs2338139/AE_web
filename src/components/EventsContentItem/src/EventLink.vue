<script setup>
defineProps({
  link: String,
  needKnew: Boolean,
  needLink: Boolean,
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
    <div v-if="needLink" class="panel">
      <button :href="link" v-if="link === ''">
        <div class="text bg-slate-400 text-bg-0-Color">尚未開放</div>
      </button>

      <a :href="link" v-if="link != ''" target="_blank">
        <div class="text bg-text-1-Color text-bg-0-Color">點我報名</div>
      </a>
    </div>

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
