<script setup>
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import ElementPanel from "../components/ElementPanel/ElementPanel.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<script>
export default {};
</script>

<template>
  <ElementPanel ref="element" />
  <div class="wrap">
    <Road class="mb-10">
      <RoadItem>預約導覽</RoadItem>
      <template #title>預約導覽</template>
    </Road>
    <div class="left-0 right-0 max-w-2xl mx-auto mb-20">
      <!-- <div class="mb-10 text-3xl text-red-500 sm:text-xl">-目前配合防疫措施，不開放預約導覽-</div> -->

      <div class="text-xl sm:text-base">看展資訊</div>
      <ul>
        <li>服務對象：學校或機關、團體，均可預約導覽服務。</li>
        <li>導覽內容：每場次約20分鐘，包含展間藝術家及作品內容介紹。</li>
        <li>導覽時間：週六日上午11時，提供預約導覽服務。</li>
      </ul>

      <div class="text-xl sm:text-base">導覽申請注意事項</div>
      <ul>
        <li>受理團體人數限10人(含)以上，並不超過35人。</li>
        <li>團體導覽須於參觀日7天前，填寫申請表預約，申請方式可直接下載申請表單以電子郵件(service@linux.arte.gov.tw)或傳真方式((02)2389–4822)辦理。</li>
        <li>若欲更改來館時間、人數或取消參觀導覽，請於原定到館日，至少3個工作天前，可透過線上「查詢或修改申請資料」之功能或電子郵件告知。</li>
        <li>導覽當日，請提前10分鐘抵達。已預約而未能準時來館，請來電告知，本館保留15分鐘，逾時不候。</li>
        <li>本館收到您的預約申請，將於三日內主動以您所留的電話跟您連繫，如未接到本館連繫，麻煩您打電話詢問。</li>
      </ul>

      <div class="mb-20 text-lg sm:text-sm">洽詢電話：(02)2311–0574 轉234 王小姐 / 傳真號碼：(02)2389–4822</div>

      <!-- <div class="mb-6 text-center  hover:scale-110">
        <RouterLink to="">
          <span class="px-3 py-2 text-white rounded-full bg-text-1-Color"> 點我預約 </span>
        </RouterLink>
      </div> -->
      <div class="mb-6 text-center">
          <button class="px-3 py-2 text-white rounded-full bg-zinc-400"> 點我預約 </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
@layer components {
  .dev {
    @apply border border-solid box-border  border-red-500;
  }
}

@layer base {
  ul {
    @apply list-disc list-inside my-2 mb-8;
  }

  ul li {
    @apply my-2 even:text-zinc-500 text-lg last:mb-0 sm:text-sm;
  }
}
</style>
