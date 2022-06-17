<script setup>
import { defineAsyncComponent } from "vue";
</script>

<script>
export default {
  data() {
    return {
      current: null,
    };
  },
  components: {
    ActivityForumView: defineAsyncComponent(() => import("./Activity-List-Forum-View.vue")),
    ActivityWorkShopView: defineAsyncComponent(() => import("./Activity-List-WorkShop-View.vue")),
    ActivityChildrenArtView: defineAsyncComponent(() => import("./Activity-List-ChildrenArt-View.vue")),
    ActivityMeetingView: defineAsyncComponent(() => import("./Activity-List-Meeting-View.vue")),

    AlbumRecordView: defineAsyncComponent(() => import("./Album-List-Record-View.vue")),
    AlbumPreExhibitionView: defineAsyncComponent(() => import("./Album-List-PreExhibition-View.vue")),

    ExhibitionDreamView: defineAsyncComponent(() => import("./Exhibition-List-Dream-View.vue")),
    ExhibitionGoodNightView: defineAsyncComponent(() => import("./Exhibition-List-GoodNight-View.vue")),

    VideoPreVideoView: defineAsyncComponent(() => import("./Video-PreVideo-View.vue")),
    VideoListAnimationsView: defineAsyncComponent(() => import("./Video-Animations-View.vue")),
    VideoRecordVideoView: defineAsyncComponent(() => import("./Video-RecordVideo-View.vue")),
  },
  methods: {
    SwitchViews() {
      if (this.$route.params.activityID != null) {
        let activityID = this.$route.params.activityID;
        if (activityID) {
          if (activityID === "WorkShops") {
            this.current = "ActivityWorkShopView";
          } else if (activityID === "Forums") {
            this.current = "ActivityForumView";
          } else if (activityID === "ChildrenArts") {
            this.current = "ActivityChildrenArtView";
          } else if (activityID === "Meetings") {
            this.current = "ActivityMeetingView";
          } else {
            this.ToNotFound();
          }
        }
      } else if (this.$route.params.albumID != null) {
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
      } else if (this.$route.params.exhibitionID != null) {
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
      } else if (this.$route.params.videoID != null) {
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
