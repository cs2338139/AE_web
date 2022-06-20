<script setup>
import { defineAsyncComponent } from "vue";
defineProps({
  keyName: String,
});
</script>

<script>
export default {
  expose: ["ReSet"],
  data() {
    return {
      pageComponent: null,
    };
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
    SwitchElement() {
      if (this.keyName != null) {
        switch (this.keyName) {
          case "About":
            this.pageComponent = "ElementAboutPage";
          case "Exhibition":
            this.pageComponent = "ElementExhibitionPage";
        }
      }
    },
  },
  components: {
    ElementAboutPage: defineAsyncComponent(() => import("./src/Element-About-Page.vue")),
    ElementExhibitionPage: defineAsyncComponent(() => import("./src/Element-Exhibition-Page.vue")),
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
  <div>
    <div class="absolute w-full">
      <div ref="target">
        <div class="image h-11 bg-Star-image right-16 top-10 w-10"></div>
        <div class="image h-11 bg-Star-image right-64 top-120 w-10 rotate-45"></div>
        <div class="image h-11 bg-Star-image left-28 top-48 w-10"></div>
        <div class="h-80 image bg-Rain-1-image right-24 top-64 w-48"></div>
        <div class="h-96 image w-36 bg-Rain-image left-16 top-14"></div>
        <div class="image w-36 bg-Leaves-image top-182 right-0 h-48"></div>
        <div class="h-52 image bg-Truck-image left-8 top-146 -rotate-12 w-56"></div>
        <div class="image h-11 bg-Star-image right-96 top-212 w-10"></div>
        <div class="image h-11 bg-Star-image left-28 top-202 w-10"></div>
        <div class="image h-11 bg-Star-image left-64 top-240 w-10"></div>
      </div>
      <component :is="pageComponent"></component>
    </div>
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
