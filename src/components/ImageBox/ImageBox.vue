<script setup>
defineProps({});
</script>

<script>
export default {
  data() {
    return {
      slideIndex: 1,
      timeID:null,
    };
  },
  methods: {
    autoSlides() {
      this.timeID = setInterval(() => {
        this.plusSlides(1);
      }, 3000);
    },
    plusSlides(n) {
      this.showSlides((this.slideIndex += n));
    },
    currentSlide(n) {
      this.showSlides((this.slideIndex = n));
    },
    showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");

      clearInterval(this.timeID);
      if(slides.length!=0)this.autoSlides();


      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
    },
  },
  mounted() {
    this.autoSlides();
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

      <div class="absolute left-0 right-0 text-center border-red-600 bottom-2">
        <span class="dot" @click="currentSlide(1)"></span>
        <span class="dot" @click="currentSlide(2)"></span>
        <span class="dot" @click="currentSlide(3)"></span>
      </div>
    </div>

    <div class="border border-black overflow-hidden h-630px">
      <img src="public/Data/WorkShops/Image/0/img (1).jpg" class="mySlides block" />
      <img src="public/Data/WorkShops/Image/0/img (2).jpg" class="mySlides hidden" />
      <img src="public/Data/WorkShops/Image/0/img (3).jpg" class="mySlides hidden" />
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

ion-icon {
  color: white;
}

@layer components {
  .dirButton {
    @apply absolute top-0 bottom-0 my-auto text-5xl opacity-50 hover:opacity-100;
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
