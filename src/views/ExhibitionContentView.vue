<script setup>
import { RouterLink, RouterView } from "vue-router";
import ExhibitionDreamView from "./ExhibitionDreamView.vue";
import ExhibitionGoodNightView from "./ExhibitionGoodNightView.vue";
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
    SwitchViews(id) {
      if (id === "Dream") {
        this.current = "DreamComponent";
      } else if (id === "GoodNight") {
        this.current = "GoodNightComponent";
      } else {
        this.ToNotFound();
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
  components: {
    DreamComponent: ExhibitionDreamView,
    GoodNightComponent: ExhibitionGoodNightView,
  },
  created() {
    this.SwitchViews(this.$route.params.exhibitionID);
  },
  updated() {
    this.SwitchViews(this.$route.params.exhibitionID);
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
