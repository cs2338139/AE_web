<script setup>
import { RouterLink, RouterView } from "vue-router";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
</script>

<template>
  <div class="wrap">
    <Road class="mb-10">
      <RoadItem>參觀資訊</RoadItem>
      <template #title>參觀資訊</template>
    </Road>

    <div class="mb-10 h-nor md:h-lg sm:h-sm text-text-1-Color">
      <div class="flex flex-col justify-between float-left w-1/2 h-full xl:pr-16 md:w-full md:pr-0 md:h-1/2 md:pb-10">
        <div>
          <div class="title"><span>本館資訊</span></div>
          <ul class="pl-3">
            <li>本館地址：臺北市中正區南海路43號</li>
            <li>開放時間：週二至週日9：00 - 17：00 （免費參觀，週一休館）</li>
            <li>聯絡電話：（02）2311－0574轉110</li>
          </ul>
        </div>

        <div>
          <div class="title"><span>展覽資訊</span></div>
          <ul class="pl-3">
            <li>展覽日期：2022.06.28 – 09.25</li>
            <li>展覽地點：第1、2展覽廳</li>
            <li>票價：免費參觀</li>
            <li>地點：國立臺灣藝術教育館 第1、2展覽廳</li>
            <li class="text-base font-bold text-red-900">即日起須配戴口罩且額溫未超過37.5度者，始得入館，詳情請見最新消息。</li>
          </ul>
        </div>

        <div>
          <div class="title"><span>觀展須知</span></div>
          <ul class="list-disc list-inside">
            <li>展場內請勿攜帶食物、飲料、雨傘、寵物入場。</li>
            <li>展場內禁止觸摸展品。</li>
            <li>入館參觀請遵守參觀秩序，共同維持參觀品質。</li>
            <li>為維護展場參觀品質及安全，入場參觀前請收妥您的自拍設備。</li>
            <li>展覽作品除特殊聲明外，原則上同意在不使用閃光燈及腳架之情況下適度開放拍照。</li>
            <li>展演活動觀展詳情即時公告於<RouterLink to="/News" class="font-bold underline dec">最新消息 </RouterLink>。</li>
          </ul>
        </div>
      </div>

      <div class="relative float-right w-1/2 h-full md:w-full md: -scroll-mt-10 md:h-1/2">
        <div class="title"><span>交通方式</span></div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14460.1568496027!2d121.5120648!3d25.0327433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd65b56c15052fd6b!2z5ZyL56uL6Ie654Gj6Jed6KGT5pWZ6IKy6aSo!5e0!3m2!1szh-TW!2stw!4v1652287018607!5m2!1szh-TW!2stw" class="w-full mb-5 border border-solid rounded-lg h-1/2 lg:h-2/5 md:h-1/2 sm:h-2/5 border-zinc-600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"> </iframe>

        <div class="absolute bottom-0 flex flex-col justify-between list-decimal list-inside h-2/5 lg:h-1/2 md:h-2/5 sm:h-1/2">
          <div>
            <div class="mb-2">
              <span class="px-5 py-1 text-lg font-medium  border rounded-full sm:text-base border-text-1-Color">搭公車</span>
            </div>
            <ul class="pl-3 list-disc list-inside">
              <li>243、248、262、304、706於「中正二分局站」下車。</li>
              <li>1、204、630於「建國中學站」下車。</li>
              <li>3、5、18、38、227、235、241、243、295、662、663於「南昌路站」下車。</li>
              <li>羅斯福路各線公車於「南門市場站」下車。</li>
              <li>1、204、630、242、624、907、和平幹線、藍28於「植物園站」下車。</li>
            </ul>
          </div>

          <div>
            <div class="mb-2">
              <span class="px-5 py-1 text-lg font-medium  border rounded-full sm:text-base border-text-1-Color">搭捷運</span>
            </div>
            <ul class="pl-3 list-disc list-inside">
              <li>淡水線中正紀念堂站1、2號出口</li>
              <li>小南門線小南門站下車3號出口</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  .title span {
    @apply text-lg font-medium sm:text-base px-3 py-1 bg-text-1-Color rounded-full text-white;
  }
  li {
    @apply text-base font-medium xl:my-1 sm:text-sm sm:my-2 leading-7;
  }
}

@layer utilities {
  .h-nor {
    height: 720px;
  }

  .h-lg {
    height: 1300px;
  }

  .h-sm {
    height: 1500px;
  }
}

@layer components {
  .title {
    @apply my-2;
  }
}
</style>
