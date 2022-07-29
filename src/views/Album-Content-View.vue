<script setup>
import { defineAsyncComponent } from "vue";
import AlbumListView from "./Album-List-View.vue";
import AlbumEventView from "./Album-Event-View.vue";

</script>

<script>
export default {
  data() {
    return {
      current: null,
      path: "",
    };
  },
  components: {
    // AlbumListView: defineAsyncComponent(() => import("./Album-List-View.vue")),
    // AlbumEventView: defineAsyncComponent(() => import("./Album-Event-View.vue")),
  },
  methods: {
    SwitchViews() {
      var albumId = this.$route.params.albumID;
      if (albumId == "Exhibition") {
        if (!this.$route.params.albumEventLv0ID) {
          this.current = "AlbumListView";
          this.path = albumId;
        }
        else {
          var albumEventLv0ID = this.$route.params.albumEventLv0ID;
          if (albumEventLv0ID == "Pre" || albumEventLv0ID == "Visit") {
            this.current = "AlbumEventView";
            this.path = albumId + "/" + albumEventLv0ID;
          }
          else if (albumEventLv0ID == "Reserve") {
            if (!this.$route.params.albumEventLv1ID) {
              this.current = "AlbumListView";
              this.path = albumId + "/" + albumEventLv0ID;
            } else {
              var albumEventLv1ID = this.$route.params.albumEventLv1ID;
              this.current = "AlbumEventView";
              this.path = albumId + "/" + albumEventLv0ID + "/" + albumEventLv1ID;
            }
          } else {
            this.ToNotFound();
          }
        }
      }
      else if (albumId == "Activity") {
        if (!this.$route.params.albumEventLv0ID) {
          this.current = "AlbumListView";
          this.path = albumId;
        }
        else {
          var albumEventLv0ID = this.$route.params.albumEventLv0ID;
          if (albumEventLv0ID == "Opening") {
            this.current = "AlbumEventView";
            this.path = albumId + "/" + albumEventLv0ID;
          }
          else if (albumEventLv0ID == "Promote") {
            if (!this.$route.params.albumEventLv1ID) {
              this.current = "AlbumListView";
              this.path = albumId + "/" + albumEventLv0ID;
            }
            else {
              var albumEventLv1ID = this.$route.params.albumEventLv1ID;
              if (albumEventLv1ID == "Meeting") {
                this.current = "AlbumEventView";
                this.path = albumId + "/" + albumEventLv0ID + "/" + albumEventLv1ID;
              } else if (albumEventLv1ID == "Child" || albumEventLv1ID == "WorkShops" || albumEventLv1ID == "Forums") {
                if (!this.$route.params.albumEventLv2ID) {
                  this.current = "AlbumListView";
                  this.path = albumId + "/" + albumEventLv0ID + "/" + albumEventLv1ID;
                } else {
                  var albumEventLv2ID = this.$route.params.albumEventLv2ID;
                  this.current = "AlbumEventView";
                  this.path = albumId + "/" + albumEventLv0ID + "/" + albumEventLv1ID + "/" + albumEventLv2ID;
                }
              } else {
                this.ToNotFound();
              }
            }
          } else {
            this.ToNotFound();
          }
        }
      } else {
        this.ToNotFound();
      }
    },
    ToNotFound() {
      this.$router.push({
        path: "NotFound",
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
  updated() {
    this.$refs.element.LoadJson(true);
  }
};
</script>

<template>
  <!-- <component :is="current"></component> -->
  <AlbumEventView v-if="current == 'AlbumEventView'" :path="path" ref="element" />
  <AlbumListView v-if="current == 'AlbumListView'" :path="path" ref="element" />
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {}
</style>
