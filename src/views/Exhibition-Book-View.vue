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
      bookData: {
        title: "",
        title2: "",
        author: [],
        imgs: [],
      },
      elementObject: null,
      interval: null,
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
              this.elemenObjectt = "Rabbit";
              break;
            case "1":
              this.elementObject = "Spaceship";
              break;
            case "2":
              this.elementObject = "Horse";
              break;
            case "3":
              this.elementObject = "Robbers";
              break;
            case "4":
              this.elementObject = "Bear";
              break;
            case "5":
              this.elementObject = "Moon";
              break;
          }
          break;
        case "Dream":
          this.exhibitionsName = "夢境房";
          switch (bookID) {
            case "0":
              this.elementObject = "Ghost";
              break;
            case "1":
              this.elementObject = "Leaf";
              break;
            case "2":
              this.elementObject = "Leaf";
              break;
            case "3":
              this.elementObject = "Truck";
              break;
            case "4":
              this.elementObject = "Coral";
              break;
          }
          break;
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
    let target = this.$refs.target;

    let elements = [
      {
        main: this.$refs.bg,
        offset: 0,
      },
    ];
    let elements2 = [];

    this.interval = setInterval(() => {
      if (this.bookData.author.length === 2) {
        target = this.$refs.target[1];
        this.GetTargetHeight(target, elements, elements2);
      }
    }, 100);
  },
  unmounted() {
    clearInterval(this.interval);
  },
};
</script>

<template>
  <ElementPanel ref="element" />
  <div class="wrap">
    <Road class="mb-10">
      <RoadItem>展覽介紹</RoadItem>
      <RoadItemRouter :href="'/exhibitions/' + $route.params.exhibitionID">{{ exhibitionsName }}</RoadItemRouter>
      <RoadItem>{{ bookData.title }}</RoadItem>
    </Road>
    <div class="gap-x-16 grid grid-cols-5 mb-20">
      <div class="xl:col-end-6 col-start-1 col-end-4">
        <ImageBox :path="'Exhibitions/' + $route.params.exhibitionID + '/' + $route.params.bookID" :img="bookData.imgs" :time="3000" :auto="false" />
      </div>

      <div class="xl:col-start-1 col-start-4 col-end-6">
        <div class="sm:text-lg text-text-1-Color text-3xl">
          {{ bookData.title }}
        </div>

        <div class="image" :class="elementObject"></div>

        <div class="sm:text-base text-text-1-Color text-xl">
          {{ bookData.title2 }}
        </div>
        <div class="mt-3">
          <div v-for="j in bookData.author" class="mb-10" ref="target">
            <div class="sm:text-sm mb-3 text-xl">
              {{ j.author }}
            </div>
            <template v-for="i in j.info">
              <div :class="{ my: i === '' }" class="contentFont">{{ i }}</div>
            </template>
          </div>

          <div class="mt-8 sm:text-xs">{{ bookData.copyright }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="-z-50 absolute bottom-0 w-full">
    <div class="bg-bg-0-image h-8"></div>
    <div class="bg-bg-2-Color h-56" ref="bg"></div>
  </div>
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
  .image {
    @apply absolute bg-no-repeat bg-w100% -z-10 right-40 -top-10  sm:hidden;
  }
  .Rabbit {
    @apply w-40 bg-Rabbit-2-image  h-28 -top-0 right-32;
  }
  .Spaceship {
    @apply w-36 bg-Spaceship-image  h-36;
  }
  .Horse {
    @apply w-32 bg-Horse-image  h-32 right-20 -top-5;
  }
  .Robbers {
    @apply w-44 bg-Robbers-image  h-24 top-5 right-20 rotate-12;
  }
  .Bear {
    @apply w-24 bg-Bear-image  h-36 -top-5 right-10;
  }
  .Moon {
    @apply w-32 bg-arrow-6-image  h-36  right-14;
  }
  .Ghost {
    @apply w-36 bg-Ghost-image  h-36  -top-5 right-10;
  }
  .Leaf {
    @apply w-36 bg-Leaf-1-image  h-36 right-10;
  }
  .Truck {
    @apply w-44 bg-Truck-image  h-40 right-10  -top-5;
  }
  .Coral {
    @apply w-52 bg-Coral-1-image  h-36 right-5 -top-0;
  }
}
</style>
