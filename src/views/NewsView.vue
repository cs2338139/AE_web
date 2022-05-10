<script setup>
import { RouterLink, RouterView } from "vue-router";
import HomeIcon from '@/components/Road/HomeIcon.vue'
import RoadItem from '@/components/Road/RoadItem.vue'

</script>

<template>
  <div>
    <HomeIcon /><RoadItem>最新消息</RoadItem>
  </div>

</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
