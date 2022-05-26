<script setup>
import axios from "axios";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import RoadItemRouter from "../components/Road/src/RoadItemRouter.vue";
import ImageBox from "../components/ImageBox/ImageBox.vue";
</script>

<script>
export default {
  data() {
    return {
      forumData: null,
    };
  },
  methods: {
    LoadJson() {
      let activityID = this.$route.params.activityID;
      let eventID = this.$route.params.eventID;
      if (activityID && eventID) {
        axios
          .get("Data/Activities/" + activityID + "/" + eventID + "/ForumContent.json")
          .then((response) => {
            this.forumData = response.data;
          })
          .catch((response) => {
            console.log(response);
            this.ToNotFound();
          });
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
};
</script>

<template>
  <template v-if="forumData != null">
    <div class="wrap">
      <Road class="mb-10">
        <RoadItem>推廣活動</RoadItem>
        <RoadItemRouter href="/activities/Forums">專題演講</RoadItemRouter>
        <RoadItem>{{ forumData.title }}</RoadItem>
      </Road>
      <div class="grid grid-cols-5 gap-x-16 gap-y-10 h-1080px">
        <div></div>

        <div class="col-start-1 col-end-4 row-start-1 row-end-4">
          <ImageBox :path="'Activities/' + this.$route.params.activityID + '/' + this.$route.params.eventID" :img="forumData.imgs" :time="3000" :auto="false" />
        </div>

        <div class="col-start-4 col-end-6 row-start-1 row-end-4 col-start">
          <div class="w-4/5 h-full">
            <div class="mt-3 mb-16">
              <div class="mb-3 text-4xl font-bold">{{ forumData.date }}</div>
              <div class="text-3xl font-normal">{{ forumData.time }}</div>
            </div>

            <ul class="text-lg list-disc list-outside max-w-sm">
              <li class="my-1">上課地點：參與對象：對兒童教育有興趣民眾、學校藝文相關教師皆可報名。</li>
              <li class="my-1">上課地點：{{ forumData.place }}</li>
            </ul>

            <hr class="my-20 border-black" />

            <div class="mb-16">
              <div class="my-2 text-2xl font-bold">連結</div>
              <a :href="forumData.link" target="_blank" class="my-2 text-xl font-bold text-zinc-500"><div>報名表單｜點我報名</div></a>
            </div>

            <div class="text-red-800">
              <div>聯絡人 | 蔡春陣 | 02-25957656 #331</div>
              <div>教育服務組 | 02-25957656 #307</div>
              <div>edu_info-TFAM@mail.taipei.gov.tw</div>
            </div>
          </div>
        </div>

        <div class="col-start-1 col-end-4 row-start-4 row-end-6">
          <div class="text-3xl font-bold">{{ forumData.title }}</div>
          <br />
          <template v-for="i in forumData.info">
            <div class="text-lg">{{ i }}</div>
          </template>
          <hr class="my-8 border-zinc-400" />
          <div class="text-lg font-bold mb-3">演講者 | {{ forumData.teacher }}</div>
          <template v-for="i in forumData.teacherInfo">
            <div class="text-lg">{{ i }}</div>
          </template>
        </div>
      </div>
    </div>
  </template>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .h-1080px {
    height: 1080px;
  }

  .bg-black-05 {
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
