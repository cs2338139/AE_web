<script setup>
defineProps({});
</script>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    ReSet() {
      let target = this.$refs.target;
      let foot = document.getElementById("foot");
      const h = foot.getBoundingClientRect().top + window.scrollY;
      console.log(document.body.scrollHeight);

      for (let i = 0; i < target.childNodes.length; i++) {
        target.childNodes[i].style.display = "block";
        const y = target.childNodes[i].getBoundingClientRect().top + window.scrollY;

        if (y > h) target.childNodes[i].style.display = "none";
      }
    },
  },
  components: {},
  created() {},
  mounted() {
    // this.ReSet();
  },
  updated() {},
};
</script>
<!-- rotate-45 -->
<template>
  <div ref="target" class="opacity-50">
    <div class="image h-11 bg-Star-image left-24 top-440 dev w-10"></div>
    <div class="image h-11 bg-Star-image left-124 top-40 dev w-10"></div>
    <div class="image h-11 bg-Star-image right-16 top-280 dev w-10"></div>
    <div class="image h-11 bg-Star-image right-116 top-830 dev w-10"></div>
    <div class="image h-11 bg-Star-image right-40 top-340 dev w-10"></div>
    <div class="image h-11 bg-Star-image right-40 top-440 dev w-10"></div>
    <div class="image h-11 bg-Star-image right-116 top-360 dev w-10"></div>
    <div class="image h-11 bg-Star-image right-124 top-460 dev w-10"></div>
    <div class="image h-11 bg-Star-image right-44 top-420 dev w-10"></div>
    <div class="image h-11 bg-Star-image right-146 top-520 dev w-10"></div>
    <div class="image h-11 bg-Star-image right-56 top-720 dev w-10"></div>
    <div class="image h-11 bg-Star-image right-162 top-820 dev w-10"></div>
    <div class="image h-11 bg-Star-image right-116 top-760 dev w-10"></div>
    <div class="image h-11 bg-Star-image right-16 top-860 dev w-10"></div>
    <div class="image h-11 bg-Star-image right-166 top-840 dev w-10"></div>

    <div class="image h-11 bg-Star-image left-16 top-260 dev w-10"></div>
    <div class="image h-11 bg-Star-image left-16 top-260 dev w-10"></div>
    <div class="image h-11 bg-Star-image left-48 top-360 dev w-10"></div>
    <div class="image h-11 bg-Star-image left-48 top-360 dev w-10"></div>
    <div class="image h-11 bg-Star-image left-24 top-440 dev w-10"></div>
    <div class="image h-11 bg-Star-image left-24 top-440 dev w-10"></div>
    <div class="image h-11 bg-Star-image left-10 top-580 dev w-10"></div>
    <div class="image h-11 bg-Star-image left-10 top-580 dev w-10"></div>
    <div class="image h-11 bg-Star-image left-16 top-740 dev w-10"></div>
    <div class="image h-11 bg-Star-image left-16 top-740 dev w-10"></div>
    <div class="image h-11 bg-Star-image left-64 top-800 dev w-10"></div>
    <div class="image h-11 bg-Star-image left-64 top-800 dev w-10"></div>
    <div class="image h-11 bg-Star-image left-36 top-860 dev w-10"></div>
    <div class="image h-11 bg-Star-image left-36 top-860 dev w-10"></div>
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
