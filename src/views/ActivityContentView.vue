<script setup>
import { RouterLink, RouterView } from "vue-router";
import ActivityForumView from "./ActivityForumView.vue";
import ActivityWorkShopView from "./ActivityWorkShopView.vue";
</script>

<script>
export default {
  data() {
    return {
      current: null,
    };
  },
  methods: {
    SwitchViews() {
      let activityID = this.$route.params.activityID;
      if (activityID) {
        if (activityID === "WorkShops") {
          this.current = "WorkShopComponent";
        } else if (activityID === "Forums") {
          this.current = "ForumComponent";
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
  components: {
    ForumComponent: ActivityForumView,
    WorkShopComponent: ActivityWorkShopView,
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
