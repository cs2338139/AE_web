<script setup>
const props = defineProps({
  type: String,
  indexID: String,
  time: Number,
  auto: Boolean,
  img: Array,
});
</script>

<script>
export default {
  data() {
    return {
      slideIndex: 0,
      timeID: null,
    };
  },
  methods: {
    autoSlides() {
      this.timeID = setInterval(() => {
        this.plusSlides(1);
      }, 3000);
    },
    plusSlides(n) {
      this.slideIndex += n;
      this.showSlides();
    },
    currentSlide(n) {
      this.slideIndex = n;
      this.showSlides();
    },
    showSlides() {
      let dots = this.$refs.dots;
      let slides = this.$refs.slides;

      clearInterval(this.timeID);
      if (slides.length > 1) {
        if (this.props.auto === true) this.autoSlides();

        if (this.slideIndex > slides.length - 1) {
          this.slideIndex = 0;
        }
        if (this.slideIndex < 0) {
          this.slideIndex = slides.length - 1;
        }
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[this.slideIndex].style.display = "block";
        dots[this.slideIndex].className += " active";
      }
    },
  },
  mounted() {
    this.showSlides(0);
  },
};

// showSlides(slideIndex);
</script>

<template>
  <div class="relative">
    <div class="absolute w-full h-full border-2">
      <button @click="plusSlides(-1)" class="left-3 dirButton">
        <ion-icon name="chevron-back-circle" />
      </button>
      <button @click="plusSlides(1)" class="right-3 dirButton">
        <ion-icon name="chevron-forward-circle" />
      </button>

      <div class="absolute left-0 right-0 text-center bottom-2">
        <span v-for="(i, index) in img" class="dot" @click="currentSlide(index)" ref="dots"></span>
      </div>
    </div>

    <div class="border border-black overflow-hidden">
      <img v-for="i in img" :src="'Data/' + type + '/' + indexID + '/Image/' + i" class="mySlides w-full" ref="slides" />
    </div>
  </div>
</template>

<style scoped >
@tailwind base;
@tailwind components;
@tailwind utilities;

ion-icon {
  color: white;
}

@layer components {
  .dirButton {
    @apply absolute top-0 bottom-0 my-auto text-5xl opacity-50 hover:opacity-100 ;
  }

  .dot {
    @apply cursor-pointer h-3 w-3 mx-1 bg-zinc-200 rounded-lg inline-block;
  }

  .active {
    @apply bg-zinc-400;
  }
}

@layer utilities {
  .h-630px {
    height: 630px;
  }
}

/* .dot {
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
} */
</style>
