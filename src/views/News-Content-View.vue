<script setup>
import axios from "axios";
import Road from "../components/Road/Road.vue";
import RoadItemRouter from "../components/Road/src/RoadItemRouter.vue";
import { RouterLink, RouterView } from "vue-router";
import ElementPanel from "../components/ElementPanel/ElementPanel.vue";
</script>

<script>
export default {
  data() {
    return {
      newsData: null,
    };
  },
  methods: {
    LoadJson() {
      let newsID = this.$route.params.newsID;
      if (newsID) {
        axios
          .get("Data/News/" + newsID + "/NewsContent.json")
          .then((response) => {
            this.newsData = response.data;
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
  <template v-if="newsData != null">
    <ElementPanel ref="element" />
    <div class="wrap">
      <Road class="mb-10">
        <RoadItemRouter href="/news">最新消息</RoadItemRouter>
        <template #title>最新消息</template>
      </Road>

      <div class="left-0 right-0 max-w-2xl mx-auto mb-20">
        <div class="mb-3">
          <div class="inline-block sm:text-sm mr-8 text-xl">{{ newsData.date }}</div>
          <div class="inline-block sm:text-sm text-xl">
            <span class="px-4 py-1.5 border border-black rounded-full sm:px-1">{{ newsData.typeName }}</span>
          </div>
        </div>
        <div class="mb-10 text-3xl sm:text-xl sm:my-5">{{ newsData.title }}</div>

        <div class="mb-16" v-html="newsData.content"></div>
        <!-- <div class="mb-16">

        </div> -->

        <!-- <template v-for="i in newsData.content">
            <div :class="{ my: i === '' }" class="contentFont sm:text-sm">{{ i }}</div>
          </template> -->

        <div class="text-center hover:scale-110">
          <RouterLink to="/news" class="">
            <span class="bg-text-1-Color text-white px-3 py-2 rounded-full"> 回最新消息 </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </template>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .my {
    @apply my-5;
  }
  .contentFont {
    @apply text-lg;
  }
}
@layer components {
  .dev {
    @apply border border-solid box-border  border-red-500;
  }
}
</style>
