<script setup>

defineProps({

});
</script>

<template>
    <tr class="hover:bg-zinc-100 border-y text-center">
        <td class="px-3 py-2">
            <slot name="type"></slot>
        </td>
        <td class="px-3 py-2">
            <slot name="title"></slot>
        </td>
        <td class="px-3 py-2">
            <slot name="date"></slot>
        </td>
    </tr>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
