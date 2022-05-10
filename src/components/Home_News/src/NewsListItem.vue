<script setup>
defineProps({
    href: String,
    target: String
});
</script>

<template>
    <li class="text-base font-normal">
        <a :href="href" :target="target" class="hover:text-slate-400">
            <span>
                <slot></slot>
            </span>
        </a>
    </li>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>