<script setup>
import { RouterLink, RouterView } from "vue-router";
defineProps({
    href: String,
});
</script>

<template>
    <span class="mx-5 font-bold">〉</span>
    <RouterLink :to="href" class="hover:text-slate-400">
        <span>
            <slot></slot>
        </span>
    </RouterLink>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
