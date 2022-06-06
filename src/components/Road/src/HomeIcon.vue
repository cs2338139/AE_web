<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterLink to="/" class="hover:text-slate-400">
    <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.5 6.79815C1.5 6.18606 1.78029 5.60767 2.26071 5.22839L7.01071 1.47839C7.73733 0.90474 8.76267 0.90474 9.48929 1.47839L14.2393 5.22839C14.7197 5.60767 15 6.18606 15 6.79815V12.7105C15 13.8151 14.1046 14.7105 13 14.7105H12.3816C11.277 14.7105 10.3816 13.8151 10.3816 12.7105V12.4474C10.3816 11.3428 9.48615 10.4474 8.38158 10.4474H8.11842C7.01385 10.4474 6.11842 11.3428 6.11842 12.4474V12.7105C6.11842 13.8151 5.22299 14.7105 4.11842 14.7105H3.5C2.39543 14.7105 1.5 13.8151 1.5 12.7105V6.79815Z"
        fill="#333333"
        stroke="#333333"
        stroke-width="1.5"
        stroke-miterlimit="5.75877"
      />
    </svg>
  </RouterLink>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
