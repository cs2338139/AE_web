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
      Data: {
        title: "",
        date: "",
        time: "",
        people: "",
        place: "",
        link: "",
        info: [],
        teacher: "",
        imgs: [],
      },
      interval: null,
    };
  },
  methods: {
    LoadJson() {
      let activityID = this.$route.params.activityID;
      let eventID = this.$route.params.eventID;
      if (activityID === "WorkShops" && eventID) {
        axios
          .get("Data/Activities/" + activityID + "/" + eventID + "/WorkShopContent.json")
          .then((response) => {
            this.Data = response.data;
          })
          .catch((response) => {
            console.log(response);
            this.ToNotFound();
          });
      }
    },
    GetTargetHeight(target, elements, elements2) {
      const h = Math.floor(document.body.scrollHeight - (target.getBoundingClientRect().top + window.scrollY));

      if (elements[0].main.clientHeight != h) {
        for (let i = 0; i < elements.length; i++) {
          elements[i].main.style.height = h + elements[i].offset + "px";
        }
        for (let i = 0; i < elements2.length; i++) {
          let offset;

          if (elements2[i].offset != 0) {
            offset = elements2[i].main.clientHeight / elements2[i].offset;
          } else {
            offset = 0;
          }
          elements2[i].main.style.bottom = h - offset + "px";
        }
        if (this.$refs.element) this.$refs.element.ReSet();
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
    $route: "LoadJson",
  },
  created() {
    this.LoadJson();
  },
  mounted() {
    let target = document.getElementById("place");
    if (this.$windowWidth > this.$lg) target = document.getElementById("info");

    let elements = [
      {
        main: this.$refs.bg,
        offset: 0,
      },
    ];
    let elements2 = [];

    this.interval = setInterval(() => {
      this.GetTargetHeight(target, elements, elements2);
    }, 100);
  },
  unmounted() {
    document.body.style.overflow = "scroll";
    clearInterval(this.interval);
  },
};
</script>

<template>
  <ElementPanel ref="element" />
  <div class="wrap mb-20">
    <Road class="mb-10">
      <RoadItem>推廣活動</RoadItem>
      <RoadItemRouter href="/activities/WorkShops">工作坊</RoadItemRouter>
      <RoadItem>{{ Data.title }}</RoadItem>
    </Road>
    <EventContentItem
      howTo="報名方式｜採線上報名。"
      :place="'活動地點｜' + Data.place + '。'"
      target="參與對象｜國小（含）以上學生（國小學生需家長陪同）、一般民眾。"
      money="課程費用｜新臺幣200元整。"
      :people="'參加人數｜正取' + Data.people + '人，備取5名，額滿為止。'"
      :img="Data.imgs"
      :link="Data.link"
      :info="Data.info"
      :needKnew="true"
      :needLink="true"
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

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
