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
    <div class="left-24 star top-440"></div>
    <div class="right-16 star top-280 rotate-45"></div>
    <div class="right-40 star top-340 rotate-45"></div>
    <div class="right-10 star top-360"></div>
    <div class="right-44 star top-420 rotate-45"></div>
    <div class="right-56 star top-720"></div>
    <div class="right-16 star top-760"></div>
    <div class="right-64 star top-840"></div>
    <div class="right-36 star top-960"></div>
    <div class="right-64 star top-1020 rotate-45"></div>
    <div class="right-20 star top-1080"></div>
    <div class="right-44 star top-1140 rotate-45"></div>

    <div class="left-16 star top-260"></div>
    <div class="left-48 star top-360 rotate-45"></div>
    <div class="left-24 star top-440"></div>
    <div class="left-10 star top-580 rotate-45"></div>
    <div class="left-16 star top-740"></div>
    <div class="left-64 star top-800 rotate-45"></div>
    <div class="left-36 star top-860"></div>
    <div class="left-40 star top-980"></div>
    <div class="left-20 star top-1040 rotate-45"></div>
    <div class="left-44 star top-1160"></div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .image {
    @apply absolute bg-no-repeat bg-w100%  sm:scale-50;;
  }
  .star {
    @apply bg-Star-image h-11  image;
  }
}
</style>
