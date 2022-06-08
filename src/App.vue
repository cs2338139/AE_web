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
  <NavBarMobile v-if="$windowWidth < $xl" />

  <NavBar2 v-if="$windowWidth >= $xl" />

  <div class="min-h-screen pt-56 -mb-32 lg:pt-36 xl:-mb-36 sm:-mb-32">
    <RouterView />
  </div>

  <FootBar></FootBar>
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
