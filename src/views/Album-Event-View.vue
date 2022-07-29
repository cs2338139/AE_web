<script setup>
import axios from "axios";
import Road from "../components/Road/Road.vue";
import RoadItem from "../components/Road/src/RoadItem.vue";
import RoadItemRouter from "../components/Road/src/RoadItemRouter.vue";
import ImageBox from "../components/ImageBox/ImageBox.vue";
import ElementPanel from "../components/ElementPanel/ElementPanel.vue";
defineProps({
  path: String,
});
</script>

<script>
export default {
  data() {
    return {
      albumName: null,
      albumEventData: {
        title: "",
        imgsCount: 0,
      },
      imgs: [],
      fixedCount: 0,
      _path: "Albums/" + this.$props.path,
    };
  },
  expose: ["LoadJson"],
  methods: {
    LoadJson(vi) {
      if (vi) return;
      let albumID = this.$route.params.albumID;
      axios
        .get("Data/Albums/" + this.$props.path + "/List.json")
        .then((response) => {
          this.albumEventData = response.data;

          let colCount = 4;

          if (this.$windowWidth <= this.$sm) {
            colCount = 2;
          } else if (this.$windowWidth <= this.$md) {
            colCount = 3;
          } else if (this.$windowWidth <= this.$lg) {
            colCount = 3;
          } else if (this.$windowWidth <= this.$xl) {
            colCount = 3;
          } else if (this.$windowWidth <= this.$2xl) {
            colCount = 4;
          }

          this.fixedCount = colCount - (this.albumEventData.imgsCount % colCount);
          if (this.fixedCount === colCount) this.fixedCount = 0;

          for (let i = 1; i <= this.albumEventData.imgsCount; i++) {
            this.imgs.push("img (" + i + ").jpg");
          }

          switch (albumID) {
            case "Activity":
              this.albumName = "活動紀錄";
              break;
            case "Exhibition":
              this.albumName = "展覽花絮";
              break;
          }
        })
        .catch((response) => {
          console.log(response);
          this.ToNotFound();
        });
    },
    ToNotFound() {
      this.$router.push({
        name: "NotFound",
        params: { pathMatch: this.$route.path.substring(1).split("/") },
        query: this.$route.query,
        hash: this.$route.hash,
      });
    },
    openModal(index) {
      this.$refs.Modal.style.display = "block";
      document.body.style.overflow = "hidden";
      this.$emitter.emit("emitIndex", index);
    },
    closeModal() {
      this.$refs.Modal.style.display = "none";
      document.body.style.overflow = "scroll";
    },
  },
  watch: {
    $route: "LoadJson",
  },
  created() {
    this.LoadJson("");
  },
  updated() {
    if (this.$refs.element) this.$refs.element.ReSet();
  },
  unmounted() {
    document.body.style.overflow = "scroll";
  },
};
</script>

<template>
  <ElementPanel ref="element" />
  <div class="wrap">
    <Road class="mb-10">
      <RoadItem>活動花絮</RoadItem>
      <RoadItemRouter :href="'/Albums/' + $route.params.albumID">{{ albumName }}</RoadItemRouter>
      <RoadItem>{{ albumEventData.title }}</RoadItem>
      <template #title>{{ albumEventData.title }}</template>
    </Road>

    <div class="flex flex-wrap justify-between lg:justify-around">
      <button v-for="(i, index) in imgs" @click="openModal(index)">
        <img :src="'Data/' + _path + '/Image/' + i" class="mb-10 w-80 lg:w-60 md:w-40" />
      </button>

      <div v-if="fixedCount > 0" v-for="i in fixedCount" class="mb-10 w-80 bg-slate-600 invisible"></div>
    </div>

    <div ref="Modal" class="fixed bottom-0 left-0 z-50 hidden w-full h-screen bg-black-05" @click.self="closeModal">
      <div class="absolute top-0 bottom-0 left-0 right-0 max-w-5xl m-auto aspect-image bg-black">
        <button @click="closeModal" class="absolute right-5 top-5 z-50">
          <ion-icon class="X_Icon sm:text-2xl" name="close-outline" />
        </button>
        <ImageBox :path="_path" :img="imgs" :time="3000" :auto="false" :dot="false" :emitIndex="emitIndex"
          class="absolute top-1/2 -translate-y-1/2"></ImageBox>
      </div>
    </div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

ion-icon:hover {
  opacity: 1;
}

@layer components {
  .my {
    @apply my-5;
  }

  .contentFont {
    @apply text-lg;
  }
}

@layer components {
  .dev-border-view {
    @apply border border-solid box-border;
  }
}

@layer utilities {
  .bg-black-05 {
    background-color: rgba(0, 0, 0, 0.9);
  }

  .X_Icon {
    color: white;
    opacity: 0.5;
    font-size: 48px;
  }
}
</style>
