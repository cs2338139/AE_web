<script setup>
import { RouterLink, RouterView } from "vue-router";
import ExhibitionDreamView from "./Exhibition-Dream-View.vue";
import ExhibitionGoodNightView from "./Exhibition-GoodNight-View.vue";
</script>

<script>
export default {
  data() {
    return {
      current: null,
      //   DreamComponent: null,
      //   GoodNightComponent: null,
    };
  },
  methods: {
    SwitchViews() {
      let exhibitionID = this.$route.params.exhibitionID;
      if (exhibitionID) {
        if (exhibitionID === "Dream") {
          this.current = ExhibitionDreamView;
        } else if (exhibitionID === "GoodNight") {
          this.current = ExhibitionGoodNightView;
        } else {
          this.ToNotFound();
        }
      }
    },
    ToNotFound() {
      this.$router.push({
        name: "NotFound",
        params: { pathMatch: this.$route.path.substring(1).split("/") },
        query: this.$route.query,
        hash: this.$route.hash,
      });
    },
  },
  watch: {
    $route: "SwitchViews",
  },
  created() {
    this.SwitchViews();
  },
};
</script>

<template>
  <component :is="current"></component>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
}
</style>
