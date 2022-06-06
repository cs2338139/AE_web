<script setup>
import { defineAsyncComponent } from "vue";
// import ActivityForumView from "./Activity-List-Forum-View.vue";
// import ActivityWorkShopView from "./Activity-List-WorkShop-View.vue";
// import ActivityChildrenArtView from "./Activity-List-ChildrenArt-View.vue";
// import ActivityMeetingView from "./Activity-List-Meeting-View.vue";
</script>

<script>
export default {
  data() {
    return {
      current: null,
    };
  },
  components: {
    VideoPreVideoView: defineAsyncComponent(() => import("./Video-PreVideo-View.vue")),
    VideoListAnimationsView: defineAsyncComponent(() => import("./Video-Animations-View.vue")),
    VideoRecordVideoView: defineAsyncComponent(() => import("./Video-RecordVideo-View.vue")),
  },
  methods: {
    SwitchViews() {
      let videoID = this.$route.params.videoID;
      if (videoID) {
        if (videoID === "PreVideos") {
          this.current = "VideoPreVideoView";
        } else if (videoID === "RecordVideos") {
          this.current = "VideoRecordVideoView";
        } else if (videoID === "Animations") {
          this.current = "VideoListAnimationsView";
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
