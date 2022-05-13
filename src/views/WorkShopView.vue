<script setup>
import { RouterLink, RouterView } from "vue-router";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import WorkShopItem from "../components/WorkShopItem/WorkShopItem.vue";
const homeImage = new URL('../../public/Data/WorkShops/Home_ProjectCover01.jpg', import.meta.url).href;
</script>

<template>
    <Road class="mb-10 dev-border-view">
        <RoadItem>推廣活動</RoadItem>
        <RoadItem>工作坊</RoadItem>
    </Road>
    <div class="max-w-4xl mx-auto mt-20 mb-12 text-lg font-bold dev-border-view">
        這次帶來的工作坊從10本繪本發想，分成分程是「繪本與人文」、「科學與創造」兩個主軸。繪本與人文由流寓工作室與果實玩樂生活實驗室兩個教育推廣團隊，
        以「自然接觸」、「童趣手作」為課程精神，帶領以自然界的材料或觀察，帶領孩子與大人們進行手作課程。「科學與創造」則由光試所與Pixelight以「鏡面反射」、
        「電路電學」、「虛擬實境」為設計精神，帶領孩子與大人們進行科學與AR、VR的奇妙視覺體驗。
    </div>
    <div class="flex flex-wrap justify-between dev-border-view">
        <WorkShopItem href="/" :img="homeImage"/>
        <WorkShopItem href="/" :img="homeImage"/>
        <WorkShopItem href="/" :img="homeImage"/>
        <WorkShopItem href="/" :img="homeImage"/>
        <WorkShopItem href="/" :img="homeImage"/>
        <WorkShopItem href="/" :img="homeImage"/>
        <WorkShopItem href="/" :img="homeImage"/>
        <WorkShopItem href="/" :img="homeImage"/>
        <WorkShopItem href="/" :img="homeImage"/>

    </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
    .dev-border-view {
        @apply border border-solid box-border;
    }
}
</style>
