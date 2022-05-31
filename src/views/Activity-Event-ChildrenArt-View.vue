<script setup>
import { RouterLink, RouterView } from "vue-router";
import axios from "axios";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import RoadItemRouter from "../components/Road/src/RoadItemRouter.vue";
import EventModal from "../components/EventsContentItem/EventModal.vue";
import EventContentItem from "../components/EventsContentItem/EventContentItem.vue";
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
      if (activityID && eventID) {
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
    openModal() {
      this.$refs.Modal.style.display = "block";
    },
    closeModal() {
      this.$refs.Modal.style.display = "none";
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
  <template v-if="Data != null">
    <div class="wrap">
      <Road class="mb-10">
        <RoadItem>推廣活動</RoadItem>
        <RoadItemRouter href="/activities/ChildrenArts">兒童美學活動</RoadItemRouter>
        <RoadItem>{{ Data.title }}</RoadItem>
      </Road>

      <EventContentItem :img="Data.imgs" :link="Data.link" :info="Data.info" :needKnew="true" :teacherInfo="Data.teacherInfo">
        <template #date>{{ Data.date }}</template>
        <template #time>{{ Data.time }}</template>
        <template #howto> 報名方式｜　採預約報名。 </template>
        <template #place> 活動地點｜　{{ Data.place }} 。</template>
        <template #for> 參與對象｜　兒童相關公益社團、組織、協會。身心障礙與弱勢團體優先受理報名。</template>
        <template #money> 課程費用｜　新臺幣200元整。 </template>
        <template #people> 參加人數｜　{{ Data.people }}</template>

        <template #title>{{ Data.title }}</template>
        <template #teacher>授課講師｜　{{ Data.teacher }}</template>
      </EventContentItem>

      <!-- <div class="grid grid-cols-5 gap-x-16 gap-y-10 h-960px">
        <div></div>

        <div class="col-start-1 col-end-4 row-start-1 row-end-4">
          <ImageBox :path="'Activities/' + $route.params.activityID + '/' + $route.params.eventID" :img="childrenArtData.imgs" :time="3000" :auto="false" />
        </div>

        <div class="col-start-4 col-end-6 row-start-1 row-end-4 col-start">
          <div class="w-4/5 h-full">
            <div class="mt-3 mb-16">
              <div class="mb-3 text-4xl font-bold">{{ childrenArtData.date }}</div>
              <div class="text-3xl font-normal">{{ childrenArtData.time }}</div>
            </div>

            <ul class="text-lg list-disc list-outside">
              <li class="my-2">參與對象：兒童相關公益社團、組織、協會。身心障礙與弱勢團體優先受理報名。</li>
              <li class="my-2">參加人數：{{ childrenArtData.people }}</li>
              <li class="my-2">活動地點：{{ childrenArtData.place }}</li>
            </ul>

            <hr class="mt-3 mb-20 border-black" />

            <div class="mb-16">
              <div class="my-2 text-2xl font-bold">連結</div>
              <a :href="childrenArtData.link" target="_blank" class="my-2 text-xl font-bold text-zinc-500"><div>報名表單｜點我報名</div></a>
              <button @click="openModal" class="my-2 text-xl font-bold text-zinc-500"><div>報名須知｜點我了解</div></button>
            </div>

            <div class="text-red-800">
              <div>聯絡人 | 蔡春陣 | 02-25957656 #331</div>
              <div>教育服務組 | 02-25957656 #307</div>
              <div>edu_info-TFAM@mail.taipei.gov.tw</div>
            </div>
          </div>
        </div>

        <div class="col-start-1 col-end-4 row-start-4 row-end-6 xl:row-start-3">
          <div class="text-3xl font-bold">{{ childrenArtData.title }}</div>
          <br />
          <template v-for="i in childrenArtData.info">
            <div class="text-lg">{{ i }}</div>
          </template>
          <hr class="my-8 border-zinc-400" />
          <div class="text-lg">授課講師 | {{ childrenArtData.teacher }}</div>
        </div>
      </div> -->
    </div>

    <EventModal></EventModal>
    <!-- <div ref="Modal" class="fixed bottom-0 left-0 z-50 w-full h-screen bg-black-05 hidden">
      <div class="absolute top-0 bottom-0 left-0 right-0 w-2/5 p-14 m-auto bg-white h-4/5 xl:w-3/5">
        <button @click="closeModal" class="absolute right-5 top-5">
          <ion-icon name="close-outline" />
        </button>
        <div class="text-4xl">報名須知</div>
        <ul class="leading-6">
          <li class="mt-10">
            (一)報名費
            <ul class="list-decimal list-inside">
              <li>每堂每名新臺幣200元整。</li>
              <li>身心障礙者費用全免，低收入戶高中（含）以下學生免費參加5堂，兩者均需出示相關證明。</li>
              <li>國小學生需家長陪同，報名費各150元整（材料每人1份）；前項所列身心障礙者及低收入戶者，如為國小學童其家長陪同限1位。</li>
            </ul>
          </li>

          <li class="mt-10">
            (二)關於退費
            <ul class="list-decimal list-inside">
              <li>報名並繳費者，如因故須退班退費者，需於上課前6天（不包含例假日）電話通知並填具退費申請表申辦退費，未於規定時間申請者，恕無法辦理退費。</li>
              <li>如因天災等不可抗力因素，將主動聯繫延期或退費。</li>
              <li>當天課程，未報到，視同放棄，恕無法辦理退費。</li>
            </ul>
          </li>

          <li class="mt-10">
            (三)其他注意事項︰
            <ul class="list-decimal list-inside">
              <li>請務必準時報到並全程參與。</li>
              <li>若有異動煩請來電告知，以免影響他人權益。</li>
              <li>家長必須自行接送兒童。</li>
              <li>敬請學員自行準備水壺或環保杯，共同為環保節能盡一份心力。</li>
              <li>為避免因課程將衣服弄髒，請穿著不怕髒之衣物或自備工作服(圍裙)。</li>
              <li>有關新冠肺炎防護，依「嚴重特殊傳染性肺炎」疫情防護措施處理原則，課程會以及依中央流行疫情指揮中心及公眾集會指引規定滾動式修正。</li>
            </ul>
          </li>
        </ul>
      </div>
    </div> -->
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
