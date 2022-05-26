<script setup>
import { RouterLink, RouterView } from "vue-router";
import ActivityForumView from "./Activity-List-Forum-View.vue";
import ActivityWorkShopView from "./Activity-List-WorkShop-View.vue";
import ActivityChildrenArtView from "./Activity-List-ChildrenArt-View.vue";
import ActivityMeetingView from "./Activity-List-Meeting-View.vue";
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
          this.current = ActivityWorkShopView;
        } else if (activityID === "Forums") {
          this.current = ActivityForumView;
        } else if (activityID === "ChildrenArts") {
          this.current = ActivityChildrenArtView;
        } else if (activityID === "Meetings") {
          this.current = ActivityMeetingView;
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
