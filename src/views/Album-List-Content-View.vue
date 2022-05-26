<script setup>
import { defineAsyncComponent } from "vue";
// import AlbumRecordView from "./Album-List-Record-View.vue";
// import AlbumPreExhibitionView from "./Album-List-PreExhibition-View.vue";
</script>

<script>
export default {
  data() {
    return {
      current: null,
    };
  },
  components: {
    AlbumRecordView: defineAsyncComponent(() => import("./Album-List-Record-View.vue")),
    AlbumPreExhibitionView: defineAsyncComponent(() => import("./Album-List-PreExhibition-View.vue")),
  },
  methods: {
    SwitchViews() {
      let albumID = this.$route.params.albumID;
      if (albumID) {
        if (albumID === "PreExhibitions") {
          this.current = "AlbumPreExhibitionView";
        } else if (albumID === "Records") {
          this.current = "AlbumRecordView";
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
