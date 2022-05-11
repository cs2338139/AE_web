<script setup>
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";

</script>

<template>
  <Road class="mb-10 ">
    <RoadItem>參觀資訊</RoadItem>
  </Road>

  <div class="">
    <div class="dev-border-view w-1/2 float-left flex-col justify-between">

      <div class="dev-border-view2 ">
        <div class="text-lg font-bold my-2">免費入場</div>
        <div class="text-base font-normal">周一休館</div>
        <div class="text-base font-normal">週二至週日 9:00-17:00</div>
        <div class="text-base font-normal">國定假日照常開館</div>
      </div>

      <div class="dev-border-view2 ">
        <div class="text-lg font-bold my-2">免費入場</div>
        <div class="text-base font-normal">周一休館</div>
        <div class="text-base font-normal">週二至週日 9:00-17:00</div>
        <div class="text-base font-normal">國定假日照常開館</div>
      </div>

      <div class="dev-border-view2 ">
        <div class="text-lg font-bold my-2">免費入場</div>
        <div class="text-base font-normal">周一休館</div>
        <div class="text-base font-normal">週二至週日 9:00-17:00</div>
        <div class="text-base font-normal">國定假日照常開館</div>
      </div>

    </div>

    <div class="dev-border-view w-1/2 float-right">

    </div>
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

  .dev-border-view2 {
    @apply border border-solid box-border border-green-700;
  }
}
</style>
