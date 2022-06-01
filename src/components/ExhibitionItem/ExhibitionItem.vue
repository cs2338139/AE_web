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
  methods: {
    PanelSize() {
      let nor = 256;
      let norfix = 100;

      if (this.$windowWidth > this.$sm) {
        nor = 256;
        norfix = 100;
      } else if (this.$windowWidth <= this.$sm) {
        nor = 150;
        norfix = 150;
      }

      let panel = this.$refs.panel;
      if (this.$props.info.length === 1) {
        panel.style.height = nor + "px";
      } else {
        let count = this.$props.info.length;
        let size = nor + (count - 1) * norfix;
        panel.style.height = size + "px";
      }
    },
  },
  mounted() {
    this.PanelSize();
  },
  updated() {
    // this.PanelSize();
  },
};
</script>

<template>
  <div>
    <div class="relative w-2/5 px-5 py-10 mx-auto bg-zinc-300 rounded-2xl 2xl:w-2/3 sm:w-4/5 sm:p-2" :style="position" ref="panel">
      <img :src="img" class="absolute top-0 bottom-0 w-1/3 my-auto rounded-lg" />

      <div class="absolute top-0 bottom-0 right-0 w-3/5 p-10 ">
        <div class="absolute left-0 w-3/4 -translate-y-1/2 sm:-translate-y-2/3 sm:w-full sm:p-2 top-1/2">
          <div class="mb-3 text-xl font-bold sm:text-sm">
            <slot name="title">閱讀盪鞦韆</slot>
          </div>
          <template v-if="info.length === 1">
            <div class="sm:text-sm">{{ info[0] }}</div>
          </template>
          <template v-else>
            <template v-for="(i, index) in info">
              <div class="p-3 mt-5 bg-zinc-200 rounded-xl sm:text-sm sm:p-2" :class="{ mb: index != info.length - 1 }">{{ i }}</div>
            </template>
          </template>
        </div>

        <RouterLink :to="href">
          <div class="absolute p-0 m-0 text-5xl right-8 bottom-5 sm:text-3xl sm:bottom-1">
            <ion-icon name="arrow-forward-circle-sharp" />
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

ion-icon {
  color: white;
}

@layer components {
  .mb {
    @apply mb-14 sm:mb-5;
  }
}
@layer components {
  .dev {
    /* @apply border border-solid box-border border-red-400; */
  }
}
</style>
