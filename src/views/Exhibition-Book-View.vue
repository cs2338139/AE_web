<script setup>
import axios from "axios";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import RoadItemRouter from "../components/Road/src/RoadItemRouter.vue";
import ImageBox from "../components/ImageBox/ImageBox.vue";
import ElementPanel from "../components/ElementPanel/ElementPanel.vue";
</script>

<script>
export default {
  data() {
    return {
      exhibitionsName: null,
      bookData: null,
    };
  },
  methods: {
    LoadJson() {
      let exhibitionID = this.$route.params.exhibitionID;
      let bookID = this.$route.params.bookID;
      if (exhibitionID && bookID) {
        axios
          .get("Data/Exhibitions/" + exhibitionID + "/" + bookID + "/BookContent.json")
          .then((response) => {
            this.bookData = response.data;
            this.SwitchElement(exhibitionID, bookID);
          })
          .catch((response) => {
            console.log(response);
            this.ToNotFound();
          });
      }
    },
    SwitchElement(exhibitionID, bookID) {
      switch (exhibitionID) {
        case "GoodNight":
          this.exhibitionsName = "晚安屋";
          switch (bookID) {
            case "0":
              break;
            case "1":
              break;
            case "2":
              break;
            case "3":
              break;
            case "4":
              break;
            case "5":
              break;
          }
          break;
        case "Dream":
          this.exhibitionsName = "夢境房";
          switch (bookID) {
            case "0":
              break;
            case "1":
              break;
            case "2":
              break;
            case "3":
              break;
            case "4":
              break;
          }
          break;
      }
    },
    GetTargetHeight() {
      if (this.bookData.author.length === 2) {
        const h = document.body.scrollHeight - (this.$refs.target[1].getBoundingClientRect().top + window.scrollY);
        const bg = this.$refs.bg;
        bg.style.height = h + "px";
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
  updated() {
    setTimeout(() => {
      this.GetTargetHeight();
    }, 100);
    if (this.$refs.element) this.$refs.element.ReSet();
  },
};
</script>

<template>
  <template v-if="bookData != null">
    <ElementPanel ref="element" />
    <div class="wrap">
      <Road class="mb-10">
        <RoadItem>展覽介紹</RoadItem>
        <RoadItemRouter :href="'/exhibitions/' + $route.params.exhibitionID">{{ exhibitionsName }}</RoadItemRouter>
        <RoadItem>{{ bookData.title }}</RoadItem>
      </Road>
      <div class="grid grid-cols-5 mb-20 gap-x-16">
        <div></div>

        <div class="col-start-1 col-end-4 xl:col-end-6">
          <ImageBox :path="'Exhibitions/' + $route.params.exhibitionID + '/' + $route.params.bookID" :img="bookData.imgs" :time="3000" :auto="false" />
        </div>

        <div class="col-start-4 col-end-6 xl:col-start-1">
          <div class="text-3xl sm:text-lg text-text-1-Color">
            {{ bookData.title }}
          </div>
          <div class="text-xl sm:text-base text-text-1-Color">
            {{ bookData.title2 }}
          </div>
          <div class="mt-3">
            <div v-for="j in bookData.author" class="mb-10" ref="target">
              <div class="mb-3 text-xl sm:text-sm">
                {{ j.author }}
              </div>
              <template v-for="i in j.info">
                <div :class="{ my: i === '' }" class="contentFont">{{ i }}</div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute w-full bottom-0 -z-50">
      <div class="bg-bg-0-image h-8"></div>
      <div class="bg-bg-2-Color h-56" ref="bg"></div>
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
    @apply text-lg sm:text-sm;
  }
}

@layer utilities {
  .h-960px {
    height: 960px;
  }
}
@layer components {
  .dev {
    @apply border border-solid box-border  border-red-500;
  }
}
</style>
