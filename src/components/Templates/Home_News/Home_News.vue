<script setup>
import NewsListItem from "./src/NewsListItem.vue";

</script>

<template>
    <div class="relative w-full h-full">
        <div class="mb-5 font-bold text-2xl">最新消息</div>
        <ul class="mb-5">
            <NewsListItem href="" target="">2022/04/27 5月1日志工說事-一隻大象'</NewsListItem>
            <NewsListItem href="" target="">2022/04/26 2022 墓灣地方特色歌謠創作比賽得獎名單公告</NewsListItem>
            <NewsListItem href="" target="">2022/03/31 111年第九届教育部藝術教育貢献獎即日起開始受理推薦</NewsListItem>
            <NewsListItem href="" target="">2022/04/19 4月24日志工說故事-魚帕怕牙醫怕怕</NewsListItem>
            <NewsListItem href="" target="">2022/03/31 為兒童閱讀-歡慶423世界閱讀日</NewsListItem>
        </ul>
        <div class="font-bold absolute bottom-0 right-0">
            <a href="" class="hover:text-slate-400">
                <span> more＞</span>
            </a>
        </div>
    </div>
</template>


<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>

