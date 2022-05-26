<script setup>
import { defineAsyncComponent } from "vue";
// import ExhibitionDreamView from "./Exhibition-List-Dream-View.vue";
// import ExhibitionGoodNightView from "./Exhibition-List-GoodNight-View.vue";
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
  components: {
    ExhibitionDreamView: defineAsyncComponent(() => import("./Exhibition-List-Dream-View.vue")),
    ExhibitionGoodNightView: defineAsyncComponent(() => import("./Exhibition-List-GoodNight-View.vue")),
  },
  methods: {
    SwitchViews() {
      let exhibitionID = this.$route.params.exhibitionID;
      if (exhibitionID) {
        if (exhibitionID === "Dream") {
          this.current = "ExhibitionDreamView";
        } else if (exhibitionID === "GoodNight") {
          this.current = "ExhibitionGoodNightView";
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
