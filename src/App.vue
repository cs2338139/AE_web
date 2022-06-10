<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar2 from "./components/NavBar-2/NavBar-2.vue";
import NavBarMobile from "./components/NavBar-Mobile/NavBar-Mobile.vue";
import FootBar from "./components/FootBar/FootBar.vue";
</script>

<script>
export default {};
</script>

<template>
  <div class="relative z-20">
    <NavBarMobile v-if="$windowWidth < $2xl" />

    <NavBar2 v-if="$windowWidth >= $2xl" />
  </div>

  <div class="relative min-h-screen pt-56 pb-40 xl:pt-36 xl:pb-60 md:pb-72 sm:pb-80">
    <RouterView />
  </div>

  <div class="relative z-20 -mt-56 xl:-mt-72 sm:-mt-80">
    <FootBar></FootBar>
  </div>
</template>

<style>
@import "./assets/css/base.css";
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  touch-action: manipulation;
  @apply bg-bg-0-Color;
}

@layer base {
  body {
    @apply m-0 p-0;
  }
}

@layer utilities {
  .w-1\/15 {
    width: 6.6666667%;
  }
}
</style>
