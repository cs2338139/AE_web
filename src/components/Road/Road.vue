<script setup>
import HomeIcon from "./src/HomeIcon.vue";
defineProps({

});
</script>

<template>
    <div class="flex">
        <div>
            <HomeIcon />
        </div>
        <div class="text-base">
            <slot></slot>
        </div>
    </div>

</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
