<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar/NavBar.vue";
import FootBar from "./components/FootBar/FootBar.vue";
</script>

<template>
  <NavBar></NavBar>

  <div class="min-h-screen pt-44 pb-16 -mb-16">
    <RouterView />
  </div>

  <FootBar></FootBar>
</template>

<style>
@import "./assets/css/base.css";
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply m-0 p-0;
  }
}

@layer components {
  .dev-border-view {
    @apply border border-solid box-border border-red-700;
  }

  .wrap {
    @apply relative my-0 mx-auto max-w-8xl;
  }
}

@layer utilities {

  .w-1\/15
  {
    width: 6.6666667%;
  }
}

</style>
