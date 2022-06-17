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
            this.pageComponent = "ABoutPageElement";
        }
      }
    },
  },
  components: {
    ABoutPageElement: defineAsyncComponent(() => import("./src/About-Page-Element.vue")),
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
        <div class="w-10 image h-11 bg-Star-image right-16 top-10"></div>
        <div class="w-10 rotate-45 image h-11 bg-Star-image right-64 top-120"></div>
        <div class="w-10 image h-11 bg-Star-image left-28 top-48"></div>
        <div class="h-96 image w-36 bg-Rain-image right-20 top-16"></div>
        <div class="h-96 image w-36 bg-Rain-image left-16 top-14"></div>
        <div class="right-0 h-48 image w-36 bg-Leaves-image top-182"></div>
        <div class="w-56 h-52 image bg-Truck-image left-8 top-146 -rotate-12"></div>
        <div class="w-10 image h-11 bg-Star-image right-96 top-212"></div>
        <div class="w-10 image h-11 bg-Star-image left-28 top-202"></div>
        <div class="w-10 image h-11 bg-Star-image left-64 top-240"></div>
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
