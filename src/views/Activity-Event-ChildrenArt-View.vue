<script setup>
import { RouterLink, RouterView } from "vue-router";
import axios from "axios";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import RoadItemRouter from "../components/Road/src/RoadItemRouter.vue";
import EventModal from "../components/EventsContentItem/EventModal.vue";
import EventContentItem from "../components/EventsContentItem/EventContentItem.vue";
import ElementPanel from "../components/ElementPanel/ElementPanel.vue";
</script>

<script>
export default {
  data() {
    return {
      Data: null,
    };
  },
  methods: {
    LoadJson() {
      let activityID = this.$route.params.activityID;
      let eventID = this.$route.params.eventID;
      if (activityID === "ChildrenArts" && eventID) {
        axios
          .get("Data/Activities/" + activityID + "/" + eventID + "/ChildrenArtContent.json")
          .then((response) => {
            this.Data = response.data;
          })
          .catch((response) => {
            console.log(response);
            this.ToNotFound();
          });
      }
    },
    GetTargetHeight() {
      let target = null;
      if (this.$windowWidth > this.$lg) {
        // target = this.$refs.target.$refs.info;
        target = document.getElementById("info");
      } else {
        // target = this.$refs.target.$refs.place;
        target = document.getElementById("place");
      }
      const h = document.body.scrollHeight - (target.getBoundingClientRect().top + window.scrollY);
      const bg = this.$refs.bg;
      bg.style.height = h + "px";
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
    $route: "LoadJson",
  },
  created() {
    this.LoadJson();
  },
  updated() {
    this.GetTargetHeight();
    if (this.$refs.element) this.$refs.element.ReSet();
  },
};
</script>

<template>
  <template v-if="Data != null">
    <ElementPanel ref="element" />
    <div class="wrap mb-20">
      <Road class="mb-10">
        <RoadItem>推廣活動</RoadItem>
        <RoadItemRouter href="/activities/ChildrenArts">兒童美學活動</RoadItemRouter>
        <RoadItem>{{ Data.title }}</RoadItem>
      </Road>

      <EventContentItem
        howTo="報名方式｜本項活動採團體預約報名(8/24-9/21)，每週三預約活動，共計5堂，額滿為止。"
        :place="'活動地點｜' + Data.place + '。'"
        target="參與對象｜兒童相關公益社團、組織、協會。身心障礙與弱勢團體優先受理報名。"
        money="課程費用｜新臺幣200元整。"
        :people="'參加人數｜正取' + Data.people"
        :img="Data.imgs"
        :link="Data.link"
        :info="Data.info"
        :needKnew="false"
        :needLink="false"
        :teacherInfo="Data.teacherInfo"
        ref="target"
      >
        <template #date>{{ Data.date }}</template>
        <template #time>{{ Data.time }}</template>

        <template #title>{{ Data.title }}</template>
        <template #teacher>授課講師｜{{ Data.teacher }}</template>
      </EventContentItem>
    </div>
    <div class="absolute w-full bottom-0 -z-50">
      <div class="bg-bg-0-image h-8"></div>
      <div class="bg-bg-2-Color h-0" ref="bg"></div>
    </div>
    <EventModal></EventModal>
  </template>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
ion-icon {
  color: black;
  font-size: 48px;
}
@layer utilities {
  .h-960px {
    height: 960px;
  }

  .bg-black-05 {
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
