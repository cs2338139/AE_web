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
      // console.log(document.body.scrollHeight);

      for (let i = 0; i < target.childNodes.length; i++) {
        target.childNodes[i].style.display = "block";
        const y = target.childNodes[i].getBoundingClientRect().top + window.scrollY;

        if (y > h) target.childNodes[i].style.display = "none";
      }
    },
  },
};
</script>
<!-- rotate-45 -->
<template>
  <div ref="target">
    <div class="right-16 star top-280 w-8 rotate-45"></div>
    <div class="right-80 star top-300 w-10"></div>
    <div class="right-40 star top-340 w-8 rotate-45"></div>
    <div class="right-124 star top-360 w-10 xl:right-32"></div>
    <div class="right-24 star top-440 w-4"></div>
    <div class="right-100 star top-480 w-10 rotate-45 xl:right-44"></div>
    <div class="right-40 star top-560 w-5"></div>
    <div class="right-146 star top-520 w-6 xl:right-32"></div>
    <div class="right-80 star top-600 w-7 rotate-45 xl:right-52"></div>
    <div class="right-60 star top-640 w-10"></div>
    <div class="right-104 star top-680 w-5 xl:right-20"></div>
    <div class="right-40 star top-700 w-7"></div>
    <div class="right-116 star top-760 w-8 xl:right-24"></div>
    <div class="right-56 star top-800 w-6 rotate-45"></div>
    <div class="right-162 star top-820 w-5 xl:right-10"></div>
    <div class="right-16 star top-860 w-6 rotate-45"></div>

    <div class="left-104 star top-260 w-8 xl:left-32"></div>
    <div class="left-56 star top-340 w-7 rotate-45"></div>
    <div class="left-64 star top-380 w-5 rotate-45"></div>
    <div class="left-146 star top-420 w-5 xl:left-20"></div>
    <div class="left-24 star top-440 w-8"></div>
    <div class="left-72 star top-460 w-10"></div>
    <div class="left-72 star top-520 w-7"></div>
    <div class="left-150 star top-540 w-10 rotate-45 xl:left-12"></div>
    <div class="left-36 star top-580 w-9"></div>
    <div class="left-72 star top-620 w-6 rotate-45"></div>
    <div class="left-170 star top-660 w-6 xl:left-16"></div>
    <div class="left-112 star top-680 w-7 xl:left-24"></div>
    <div class="left-52 star top-740 w-5"></div>
    <div class="left-142 star top-760 w-6 rotate-45 xl:left-36"></div>
    <div class="left-186 star top-780 w-7 xl:left-32"></div>
    <div class="left-64 star top-800 w-8 rotate-45"></div>
    <div class="left-24 star top-840 w-9"></div>
    <div class="left-80 star top-900 w-10 rotate-45 xl:left-28"></div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .image {
    @apply absolute bg-no-repeat bg-w100%  sm:scale-50;;
    /* @apply border; */
  }
  .star {
    @apply bg-Star-image h-11 image;
  }
}
</style>
