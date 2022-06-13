<script setup>
import { RouterLink, RouterView } from "vue-router";
const props = defineProps({
  img: String,
  href: String,
  info: Array,
});
</script>

<script>
export default {
  methods: {},
  mounted() {},
  updated() {},
};
</script>

<template>
  <div>
    <div class="relative flex items-center justify-center mx-auto bgCloud 2xl:w-2/3 sm:w-full">
      <div class="flex flex-col items-end w-3/5 sm:items-center sm:w-4/5 ">
        <div class="flex  md:flex-col md:items-center w-full sm:w-4/5">
          <img :src="img" class="mr-6 md:mr-0 md:mb-2 w-img shadow-img " />
          <div class="sm:w-full sm:p-2 top-1/2 ">
            <div class="mb-3 text-xl font-bold sm:text-lg md:mb-0 md:text-center ">
              <slot name="title">閱讀盪鞦韆</slot>
            </div>
            <div class="sm:text-sm text-text-1-Color decoration-navColor md:text-center">{{ info[0] }}</div>
          </div>
        </div>

        <div class="my-1 hover:scale-110 ">
          <RouterLink :to="href" class="">
            <span class="px-5 py-2 text-sm font-bold text-white rounded-full bg-text-1-Color shadow-button">了解繪本➜</span>
          </RouterLink>
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
  ion-icon {
    color: white;
    @apply text-2xl sm:text-3xl;
  }
}

@layer components {
  .shadow-img {
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.5);
  }
  .shadow-button {
    box-shadow: 2px 2px 2px 1px rgba(91, 98, 159, 0.5);
  }

  .bgCloud {
    background-size: 100% 100%;
    max-width: 650px;
    height: 288px;
    @apply bg-bg-cloud-image sm:bg-bg-cloud-m-image;
  }
}

@layer components {
  . {
    /* @apply border border-solid box-border  border-red-500; */
  }
}

@layer utilities {
  .w-img {
    width: 30%;
    @apply md:w-2/5
  }
}
</style>
