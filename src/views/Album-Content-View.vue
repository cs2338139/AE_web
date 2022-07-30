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
      dictionary: {
        "Exhibition": '展覽花絮',
        "Activity": '活動紀錄',
        "Pre": '展前花絮',
        "Reserve": '預約導覽',
        "Visit": '參觀花絮',
        "Opening": '開幕花絮',
        "Promote": '推廣活動',
        "Meeting": '研習營',
        "Child": '兒童美學活動',
        "WorkShops": '工作坊',
        "Forums": '分享會',
      }
    };
  },
  components: {
    // AlbumListView: defineAsyncComponent(() => import("./Album-List-View.vue")),
    // AlbumEventView: defineAsyncComponent(() => import("./Album-Event-View.vue")),
  },
  methods: {
    SwitchViews() {
      if (this.$route.params.albumID) {
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
  updated() {
  }
};
</script>

<template>
  <!-- <component :is="current"></component> -->
  <AlbumEventView v-if="current === 'AlbumEventView'" :key="this.path" :dictionary="dictionary" />
  <AlbumListView v-if="current === 'AlbumListView'" :key="this.path" :dictionary="dictionary" />
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {}
</style>
