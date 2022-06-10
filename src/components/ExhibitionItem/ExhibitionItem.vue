<script setup>
import { RouterLink, RouterView } from "vue-router";
const props = defineProps({
  img: String,
  href: String,
  info: Array,
  position: String,
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
    <div class="relative flex items-center justify-center mx-auto bgCloud rounded-2xl 2xl:w-2/3 sm:w-4/5 sm:p-2 dev" :style="position">
      <div class="flex flex-col items-end w-3/5 dev">
        <div class="flex dev">
          <img :src="img" class="mr-6 w-img shadow-img" />
          <div class="sm:w-full sm:p-2 top-1/2">
            <div class="mb-3 text-xl font-bold sm:text-sm">
              <slot name="title">閱讀盪鞦韆</slot>
            </div>
            <div class="sm:text-sm text-text-1-Color">{{ info[0] }}</div>
          </div>
        </div>

        <div class="hover:scale-110 dev my-1">
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
    @apply bg-bg-cloud-image;
  }
}

@layer components {
  .dev {
    @apply border border-solid box-border  border-red-500;
  }
}

@layer utilities {
  .w-img {
    width: 30%;
  }
}
</style>
