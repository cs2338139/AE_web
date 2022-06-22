<script setup>
defineProps({});
</script>

<script>
export default {
  expose: ["ReSet"],
  data() {
    return {};
  },
  methods: {
    ReSet() {
      let target = this.$refs.target;
      let foot = document.getElementById("foot");
      const h = foot.getBoundingClientRect().top + window.scrollY;

      for (let i = 0; i < target.childNodes.length; i++) {
        target.childNodes[i].style.display = "block";
        const y = target.childNodes[i].getBoundingClientRect().top + window.scrollY;

        if (y > h) target.childNodes[i].style.display = "none";
      }
    },
  },
};
</script>

<template>
  <div ref="target">
    <div class="image h-11 bg-Star-image left-24 top-440 w-8"></div>
    <div class="image h-11 bg-Star-image right-16 top-280 w-8 rotate-45"></div>
    <div class="image h-11 bg-Star-image right-40 top-340 w-8 rotate-45"></div>
    <div class="image h-11 bg-Star-image right-10 top-360 w-8"></div>
    <div class="image h-11 bg-Star-image right-44 top-420 w-8 rotate-45"></div>
    <div class="image h-11 bg-Star-image right-56 top-720 w-8"></div>
    <div class="image h-11 bg-Star-image right-16 top-760 w-8"></div>
    <div class="image h-11 bg-Star-image right-64 top-840 w-8"></div>
    <div class="image h-11 bg-Star-image right-36 top-960 w-8"></div>
    <div class="image h-11 bg-Star-image right-64 top-1020 w-8 rotate-45"></div>
    <div class="image h-11 bg-Star-image right-20 top-1080 w-8"></div>
    <div class="image h-11 bg-Star-image right-44 top-1140 w-8 rotate-45"></div>

    <div class="image h-11 bg-Star-image left-16 top-260 w-8"></div>
    <div class="image h-11 bg-Star-image left-48 top-360 w-8 rotate-45"></div>
    <div class="image h-11 bg-Star-image left-24 top-440 w-8"></div>
    <div class="image h-11 bg-Star-image left-10 top-580 w-8 rotate-45"></div>
    <div class="image h-11 bg-Star-image left-16 top-740 w-8"></div>
    <div class="image h-11 bg-Star-image left-64 top-800 w-8 rotate-45"></div>
    <div class="image h-11 bg-Star-image left-36 top-860 w-8"></div>
    <div class="image h-11 bg-Star-image left-40 top-980 w-8"></div>
    <div class="image h-11 bg-Star-image left-20 top-1040 w-8 rotate-45"></div>
    <div class="image h-11 bg-Star-image left-44 top-1160 w-8"></div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .image {
    @apply absolute bg-no-repeat bg-w100%;
  }
}
</style>
