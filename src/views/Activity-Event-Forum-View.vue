<script setup>
import axios from "axios";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import RoadItemRouter from "../components/Road/src/RoadItemRouter.vue";
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
      if (activityID === "Forums" && eventID) {
        axios
          .get("Data/Activities/" + activityID + "/" + eventID + "/ForumContent.json")
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
        setTimeout(() => {
      this.GetTargetHeight();
    }, 100);
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
        <RoadItemRouter href="/activities/Forums">分享會</RoadItemRouter>
        <RoadItem>{{ Data.title }}</RoadItem>
      </Road>

      <EventContentItem
        howTo="報名方式｜採線上報名。"
        :place="'上課地點｜' + Data.place + '。'"
        target="參與對象｜對兒童教育有興趣民眾、學校藝文相關教師皆可報名。"
        :img="Data.imgs"
        :link="Data.link"
        :info="Data.info"
        :needLink="true"
        :teacherInfo="Data.teacherInfo"
        ref="target"
      >
        <template #date>{{ Data.date }}</template>
        <template #time>{{ Data.time }}</template>

        <template #title>{{ Data.title }}</template>
        <template #teacher>演講者｜{{ Data.teacher }}</template>
      </EventContentItem>
    </div>
    <div class="absolute w-full bottom-0 -z-50">
      <div class="bg-bg-0-image h-8"></div>
      <div class="bg-bg-2-Color h-0" ref="bg"></div>
    </div>
  </template>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
