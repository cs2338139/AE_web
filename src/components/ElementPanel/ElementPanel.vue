<script setup>
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
      // if (this.enable) {
      let target = this.$refs.target;
      let foot = document.getElementById("foot");
      const h = foot.getBoundingClientRect().top + window.scrollY;
      // let right = [];
      // let left = [];

      for (let i = 0; i < target.childNodes.length; i++) {
        target.childNodes[i].style.display = "block";
        // if (getComputedStyle(target.childNodes[i]).right != "0px") {
        //   console.log(getComputedStyle(target.childNodes[i]).background);
        //   console.log(getComputedStyle(target.childNodes[i]).right);
        //   target.childNodes[i].style.opacity = 0.4;
        // }
        const y = target.childNodes[i].getBoundingClientRect().top + window.scrollY;

        if (y > h) target.childNodes[i].style.display = "none";
      }
      this.$refs.child.ReSet();
      // }
    },
    SwitchElement() {
      // this.enable = this.$windowWidth > this.$2xl;
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
  <!-- <template v-if="enable"> -->
  <div>
    <div class="absolute w-full">
      <div ref="target">
        <div class="star right-16 top-10 2xl:opacity-50"></div>
        <div class="star right-64 top-120 2xl:opacity-50 rotate-45  3xl:right-104 3x"></div>
        <div class="rain-1 right-24 top-64 2xl:opacity-0 3xl:right-64"></div>
        <div class="leaves top-182 2xl:opacity-80 right-0"></div>
        <div class="star right-96 top-212 2xl:opacity-50"></div>

        <div class="star left-28 top-48 2xl:opacity-50  3xl:left-96"></div>
        <div class="rain left-16 top-14 2xl:opacity-0 3xl:left-52"></div>
        <div class="truck left-8 top-146 -rotate-12 2xl:opacity-0"></div>
        <div class="star left-28 top-202 2xl:opacity-50"></div>
        <div class="star left-64 top-240 2xl:opacity-50"></div>
      </div>
      <component :is="pageComponent" ref="child"></component>
    </div>
  </div>
</template>
<!-- </template> -->

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .image {
    @apply absolute bg-no-repeat bg-w100%;
  }
  .star {
    @apply bg-Star-image h-11 w-8 image 3xl:scale-150 sm:scale-50;
  }

  .rain {
    @apply h-96 image w-36 bg-Rain-image 3xl:scale-150;
  }

  .rain-1 {
    @apply h-80 image bg-Rain-1-image w-48 3xl:scale-150;
  }

  .leaves {
    @apply image w-36 bg-Leaves-image h-48 2xl:w-28 origin-right 3xl:scale-150;
  }

  .truck {
    @apply h-52 image bg-Truck-image w-56 origin-left 3xl:scale-150;
  }
}
</style>
