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
  created() {
  },
  mounted() {
    this.ReSet();
  },
  updated() {},
};
</script>

<template>
  <div ref="target">
    <div class="w-10 image h-11 bg-Star-image right-16 top-100"></div>
    <div class="w-10 rotate-45 image h-11 bg-Star-image right-64 top-120"></div>

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
