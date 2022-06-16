<script setup>
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
      if (activityID === "Meetings" && eventID) {
        axios
          .get("Data/Activities/" + activityID + "/" + eventID + "/MeetingContent.json")
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
        target = document.getElementById("info");
      } else {
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
  unmounted() {
    document.body.style.overflow = "scroll";
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
        <RoadItem>研習營</RoadItem>
        <template #title>研習營</template>
      </Road>
      <EventContentItem
        howTo="報名方式｜採線上報名。"
        :place="'活動地點｜' + Data.place + '。'"
        target="參與對象｜公務員、教師、一般民眾。"
        :tip="'研習時數｜' + Data.tip"
        :img="Data.imgs"
        :link="Data.link"
        :needKnew="false"
        :needLink="true"
        :MExpect="Data.meeting.expect"
        :MProcess="Data.meeting.process"
        :MTeacher="Data.meeting.teacher"
        ref="target"
      >
        <template #date>{{ Data.date }}</template>
        <template #time>{{ Data.time }}</template>

        <template #MTitle>研習營主題｜{{ Data.meeting.title }}</template>
        <template #MTarget>{{ Data.meeting.target }}</template>
      </EventContentItem>
    </div>

    <div class="absolute w-full bottom-0 -z-50">
      <div class="bg-bg-0-image h-8"></div>
      <div class="bg-bg-2-Color h-0" ref="bg"></div>
    </div>
  </template>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
