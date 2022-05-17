<script setup>
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import RoadItemRouter from "../components/Road/src/RoadItemRouter.vue";
</script>

<script>
export default {};
</script>

<template>
  <Road class="mb-10">
    <RoadItem>推廣活動</RoadItem>
    <RoadItemRouter href="/workshop">工作坊</RoadItemRouter>
    <RoadItem>漫遊城市：泥塑鏤空杯墊製作 </RoadItem>
  </Road>
  <div>

    <div class="absolute left-0 w-3/5 h-full border-black bg-zinc-200">
      <img src="" alt="" />
    </div>

    <div class="absolute right-0 w-2/5 h-full border-blue-500">
      <div class="w-3/4 h-full ml-10">
        <div class="mt-3 mb-16">
          <div class="mb-3 text-4xl font-bold">2022.07.09（六）</div>
          <div class="text-3xl font-normal">14:00－15:30</div>
        </div>

        <ul class="text-lg list-disc list-outside">
          <li>參加人數：</li>
          <li>活動地點：</li>
        </ul>

        <hr class="my-20 border-black" />

        <div class="mb-16">
          <div class="my-2 text-2xl font-bold">連結</div>
          <a href="" class="my-2 text-xl font-bold text-zinc-500"><div>報名表單｜點我報名</div></a>
          <a href="" class="my-2 text-xl font-bold text-zinc-500"><div>報名須知｜點我了解</div></a>
        </div>

        <div class="text-red-800">
          <div>聯絡人 | 蔡春陣 | 02-25957656 #331</div>
          <div>教育服務組 | 02-25957656 #307</div>
          <div>edu_info-TFAM@mail.taipei.gov.tw</div>
        </div>
      </div>
    </div>

    <div>
      <div>漫遊城市：泥塑鏤空杯墊製作</div>
      <b>
        我們的房子是什麼樣子呢！ <br />
        課程會使用模具與各式小工具，在黏土上按壓出房子的形狀，製作出一幅屬於自己的城市風景杯墊。
      </b>
    </div>

  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  @layer utilities {
    .h-220 {
      height: 660px;
    }
  }
}
</style>
