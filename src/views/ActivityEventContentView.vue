<script setup>
import ActivityEventForumView from "./ActivityEventForumView.vue";
import ActivityEventWorkShopView from "./ActivityEventWorkShopView.vue";
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
          this.current = "EventForumComponent";
        } else if (activityID === "WorkShops") {
          this.current = "EventWorkShopComponent";
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
    EventForumComponent: ActivityEventForumView,
    EventWorkShopComponent: ActivityEventWorkShopView,
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
