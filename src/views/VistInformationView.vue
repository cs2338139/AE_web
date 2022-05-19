<script setup>
import { RouterLink, RouterView } from "vue-router";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
</script>

<template>
<div class="wrap">
    <Road class="mb-10">
      <RoadItem>參觀資訊</RoadItem>
    </Road>

    <div class="h-660px mb-10">
      <div class="flex flex-col justify-between float-left w-1/2 h-full">

        <div>
          <div class="my-2 text-lg font-bold">本館資訊</div>
          <div class="text-base font-normal">本館地址：臺北市中正區南海路43號 </div>
          <div class="text-base font-normal">開放時間：週二至週日9：00 - 17：00 （免費參觀，週一休館） </div>
          <div class="text-base font-normal">聯絡電話：（02）2311－0574轉110</div>
        </div>

        <div>
          <div class="my-2 text-lg font-bold">展覽資訊</div>
          <div class="text-base font-normal">展覽日期：2022.06.28 – 09.25</div>
          <div class="text-base font-normal">展覽地點：第1、2展覽廳</div>
          <div class="text-base font-normal">票價：免費參觀</div>
          <div class="text-base font-normal">地點：國立臺灣藝術教育館 第1、2展覽廳</div>
          <div class="text-base font-normal text-red-900">即日起須配戴口罩且額溫未超過37.5度者，始得入館，詳情請見最新消息。</div>
        </div>

        <div>
          <div class="my-2 text-lg font-bold">觀展須知</div>
          <ul class="list-disc list-outside ">
            <li class="text-base font-normal">展場內請勿攜帶食物、飲料、雨傘、寵物入場。</li>
            <li class="text-base font-normal">展場內禁止觸摸展品。</li>
            <li class="text-base font-normal">入館參觀請遵守參觀秩序，共同維持參觀品質。</li>
            <li class="text-base font-normal">為維護展場參觀品質及安全，入場參觀前請收妥您的自拍設備。</li>
            <li class="text-base font-normal">展覽作品除特殊聲明外，原則上同意在不使用閃光燈及腳架之情況下適度開放拍照。</li>
            <li class="text-base font-normal">展演活動觀展詳情即時公告於<RouterLink to="/News" class="font-bold dec underline">最新消息
              </RouterLink>。</li>
          </ul>
        </div>

      </div>

      <div class="relative float-right w-1/2 h-full ">
        <div class="my-2 text-lg font-bold">交通方式</div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14460.1568496027!2d121.5120648!3d25.0327433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd65b56c15052fd6b!2z5ZyL56uL6Ie654Gj6Jed6KGT5pWZ6IKy6aSo!5e0!3m2!1szh-TW!2stw!4v1652287018607!5m2!1szh-TW!2stw"
          class="w-full mb-5 border border-solid rounded-lg h-1/2 border-zinc-600" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>

        <div class="absolute bottom-0 flex flex-col justify-between list-decimal list-inside h-2/5">

          <div>
            <div class="mb-2 text-lg font-bold">搭公車</div>
            <ul class="list-disc list-inside">
              <li>243、248、262、304、706於「中正二分局站」下車。</li>
              <li>1、204、630於「建國中學站」下車。</li>
              <li>3、5、18、38、227、235、241、243、295、662、663於「南昌路站」下車。</li>
              <li>羅斯福路各線公車於「南門市場站」下車。</li>
              <li>1、204、630、242、624、907、和平幹線、藍28於「植物園站」下車。</li>
            </ul>
          </div>

          <div>
            <div class="mb-2 text-lg font-bold">搭捷運</div>
            <ul class="list-disc list-inside">
              <li>淡水線中正紀念堂站1、2號出口</li>
              <li>小南門線小南門站下車3號出口</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
</div>

</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;


@layer utilities {
  .h-660px {
    height: 660px;
  }
}
</style>
