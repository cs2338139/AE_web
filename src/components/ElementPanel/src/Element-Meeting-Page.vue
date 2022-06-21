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

<template>
  <div ref="target">
    <div class="image h-11 bg-Star-image right-16 top-280 w-10 rotate-45"></div>
    <div class="image h-11 bg-Star-image right-194 top-300 w-10"></div>
    <div class="image h-11 bg-Star-image right-40 top-340 w-10 rotate-45"></div>
    <div class="image h-11 bg-Star-image right-10 top-360 w-10"></div>
    <div class="image h-11 bg-Star-image right-174 top-380 w-10 rotate-45"></div>

    <div class="image h-11 bg-Star-image left-16 top-260 w-10"></div>
    <div class="image h-11 bg-Star-image left-48 top-360 w-10 rotate-45"></div>

    <div class="image h-36 bg-Horse-image right-162 top-190 w-36"></div>
    <div class="image h-52 bg-Boy-image right-108 top-260 w-52"></div>
    <div class="image h-32 bg-Bear-image right-142 top-340 w-20 rotate-12"></div>
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
