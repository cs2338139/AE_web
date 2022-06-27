<script setup>
import { defineAsyncComponent } from "vue";
import ElementStar0 from "./src/Element-Star-0.vue";
import ElementStar1 from "./src/Element-Star-1.vue";
defineProps({
  keyName: {
    default: "Star-0",
    type: String,
  },
});
</script>

<script>
export default {
  expose: ["ReSet"],
  data() {
    return {
      pageComponent: null,
      enable: false,
    };
  },
  methods: {
    ReSet() {
      if (this.enable) {
        let target = this.$refs.target;
        let foot = document.getElementById("foot");
        const h = foot.getBoundingClientRect().top + window.scrollY;

        for (let i = 0; i < target.childNodes.length; i++) {
          target.childNodes[i].style.display = "block";
          const y = target.childNodes[i].getBoundingClientRect().top + window.scrollY;

          if (y > h) target.childNodes[i].style.display = "none";
        }
        this.$refs.child.ReSet();
      }
    },
    SwitchElement() {
      this.enable = this.$windowWidth > this.$2xl;
      if (this.keyName === "Star-0") this.pageComponent = ElementStar0;
      if (this.keyName === "Star-1") this.pageComponent = ElementStar1;
    },
  },
  created() {
    this.SwitchElement();
  },
  mounted() {
    this.ReSet();
  },
  updated() {},
};
</script>

<template>
  <template v-if="enable">
    <div>
      <div class="absolute w-full">
        <div ref="target">
          <div class="image h-11 bg-Star-image right-16 top-10 w-8"></div>
          <div class="image h-11 bg-Star-image right-64 top-120 w-8 rotate-45"></div>
          <div class="image h-11 bg-Star-image left-28 top-48 w-8"></div>
          <div class="h-80 image bg-Rain-1-image right-24 top-64 w-48"></div>
          <div class="h-96 image w-36 bg-Rain-image left-16 top-14"></div>
          <div class="image w-36 bg-Leaves-image top-182 right-0 h-48"></div>
          <div class="h-52 image bg-Truck-image left-8 top-146 -rotate-12 w-56"></div>
          <div class="image h-11 bg-Star-image right-96 top-212 w-8"></div>
          <div class="image h-11 bg-Star-image left-28 top-202 w-8"></div>
          <div class="image h-11 bg-Star-image left-64 top-240 w-8"></div>
        </div>
        <component :is="pageComponent" ref="child"></component>
      </div>
    </div>
  </template>
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
