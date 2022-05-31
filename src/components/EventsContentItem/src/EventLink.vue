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
  <div >
    <a :href="link" target="_blank" class="text-xl font-bold text-zinc-500"><div class="inline-block px-3 py-2 text-white bg-zinc-400 rounded-3xl">點我報名</div></a>
    <button v-if="needKnew" @click="openModal" class="text-xl font-bold text-zinc-500"><div class="inline-block px-3 py-2 ml-5 text-white bg-zinc-400 rounded-3xl">報名須知</div></button>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
