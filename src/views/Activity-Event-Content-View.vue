<script setup>
import ActivityEventForumView from "./Activity-Event-Forum-View.vue";
import ActivityEventWorkShopView from "./Activity-Event-WorkShop-View.vue";
import ActivityEventChildrenArtView from "./Activity-Event-ChildrenArt-View.vue";
import ActivityEventMeetingView from "./Activity-Event-Meeting-View.vue";
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
        if (activityID === "Forums") {
          this.current = ActivityEventForumView;
        } else if (activityID === "WorkShops") {
          this.current = ActivityEventWorkShopView;
        } else if (activityID === "ChildrenArts") {
          this.current = ActivityEventChildrenArtView;
        } else if (activityID === "Meetings") {
          this.current = ActivityEventMeetingView;
        }else {
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
