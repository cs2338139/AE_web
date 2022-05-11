<script setup>
import NewsTableItem from './src/NewsTableItem.vue';
defineProps({

});
</script>

<template>
    <h1 class="text-3xl font-bold">最新消息</h1>
    <br>
    <table class="w-full">
        <tr class="bg-zinc-300 border-y text-center">
            <th class="px-3 py-2 w-1/12">公告類別</th>
            <th class="px-3 py-2">標題</th>
            <th class="px-3 py-2 w-1/12">刊登日期</th>
        </tr>
        <slot></slot>
    </table>

</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
