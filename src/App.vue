<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar/NavBar.vue";
import FootBar from "./components/FootBar/FootBar.vue";
</script>

<template>
  <NavBar></NavBar>

  <div class="wrap min-h-screen mt-44">
    <RouterView />
  </div>

  <FootBar></FootBar>
</template>

<style>
@import "./assets/css/base.css";
</style>
