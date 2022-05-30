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
  <NavBarMobile class="hidden xl:block" />

  <NavBar2 class="block xl:hidden" />

  <div class="min-h-screen pb-16 -mb-16 mt-44 xl:mt-24 ">
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
}

@layer base {
  body {
    @apply m-0 p-0;
  }
}

@layer components {
  .dev {
    @apply border border-solid box-border border-red-700;
  }

  .wrap {
    @apply relative my-0  mx-auto max-w-8xl 2xl:mx-10 xl:mx-20;
  }
}

@layer utilities {
  .w-1\/15 {
    width: 6.6666667%;
  }
}
</style>
