<script setup>
import { RouterLink, RouterView } from "vue-router";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import NewsTable from "../components/NewsTable/NewsTable.vue";
import NewsTableItem from "../components/NewsTable/src/NewsTableItem.vue";


</script>

<template>

  <Road class="mb-10">
    <RoadItem>最新消息</RoadItem>
  </Road>

  <NewsTable>
    <NewsTableItem>
      <template #type>展覽公告</template>
      <template #title>5月1日志工說事-一隻大象'</template>
      <template #date>2022/04/27</template>
    </NewsTableItem>
    <NewsTableItem>
      <template #type>展覽公告</template>
      <template #title>2022 墓灣地方特色歌謠創作比賽得獎名單公告</template>
      <template #date>2022/04/26</template>
    </NewsTableItem>
    <NewsTableItem>
      <template #type>展覽公告</template>
      <template #title>111年第九届教育部藝術教育貢献獎即日起開始受理推薦</template>
      <template #date>2022/03/31</template>
    </NewsTableItem>
    <NewsTableItem>
      <template #type>展覽公告</template>
      <template #title>4月24日志工說故事-魚帕怕牙醫怕怕</template>
      <template #date>2022/04/19</template>
    </NewsTableItem>
    <NewsTableItem>
      <template #type>展覽公告</template>
      <template #title>為兒童閱讀-歡慶423世界閱讀日</template>
      <template #date>2022/03/31</template>
    </NewsTableItem>
        <NewsTableItem>
      <template #type>展覽公告</template>
      <template #title>5月1日志工說事-一隻大象'</template>
      <template #date>2022/04/27</template>
    </NewsTableItem>
    <NewsTableItem>
      <template #type>展覽公告</template>
      <template #title>2022 墓灣地方特色歌謠創作比賽得獎名單公告</template>
      <template #date>2022/04/26</template>
    </NewsTableItem>
    <NewsTableItem>
      <template #type>展覽公告</template>
      <template #title>111年第九届教育部藝術教育貢献獎即日起開始受理推薦</template>
      <template #date>2022/03/31</template>
    </NewsTableItem>
    <NewsTableItem>
      <template #type>展覽公告</template>
      <template #title>4月24日志工說故事-魚帕怕牙醫怕怕</template>
      <template #date>2022/04/19</template>
    </NewsTableItem>
    <NewsTableItem>
      <template #type>展覽公告</template>
      <template #title>為兒童閱讀-歡慶423世界閱讀日</template>
      <template #date>2022/03/31</template>
    </NewsTableItem>
    <NewsTableItem>
      <template #type>展覽公告</template>
      <template #title>5月1日志工說事-一隻大象'</template>
      <template #date>2022/04/27</template>
    </NewsTableItem>
  </NewsTable>



</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
