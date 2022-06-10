<script setup>
defineProps({});
</script>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    openModal() {
      this.$refs.Modal.style.display = "block";
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      this.$refs.Modal.style.display = "none";
      document.body.style.overflow = "scroll";
    },
  },
  created() {},
  mounted() {
          console.log(this.$refs.Modal);
    this.$emitter.on("OpenModal", () => {

      this.openModal();
    });
  },
};
</script>
<template>
  <div ref="Modal" class="fixed bottom-0 left-0 z-50 hidden w-full h-screen bg-black-05">
    <div class="absolute top-0 bottom-0 left-0 right-0 w-2/5 m-auto bg-white p-14 h-4/5 xl:w-4/5 md:w-4/5 md:p-5">
      <button @click="closeModal" class="absolute right-5 top-5">
        <ion-icon name="close-outline" />
      </button>
      <div class="text-4xl sm:text-xl">報名須知</div>
      <div class="sm:content-area sm:overflow-y-scroll">
        <ul class="leading-6 sm:text-sm">
          <li class="mt-10 sm:mt-3">
            (一)報名費
            <ul class="list-decimal list-inside">
              <li>每堂每名新臺幣200元整。</li>
              <li>身心障礙者費用全免，低收入戶高中（含）以下學生免費參加5堂，兩者均需出示相關證明。</li>
              <li>國小學生需家長陪同，報名費各150元整（材料每人1份）；前項所列身心障礙者及低收入戶者，如為國小學童其家長陪同限1位。</li>
            </ul>
          </li>

          <li class="mt-10 sm:mt-3">
            (二)關於退費
            <ul class="list-decimal list-inside">
              <li>報名並繳費者，如因故須退班退費者，需於上課前6天（不包含例假日）電話通知並填具退費申請表申辦退費，未於規定時間申請者，恕無法辦理退費。</li>
              <li>如因天災等不可抗力因素，將主動聯繫延期或退費。</li>
              <li>當天課程，未報到，視同放棄，恕無法辦理退費。</li>
            </ul>
          </li>

          <li class="mt-10 sm:mt-3">
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
    </div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

ion-icon {
  color: black;
  font-size: 48px;
  @apply sm:text-2xl;
}

@layer utilities {
  .bg-black-05 {
    background-color: rgba(0, 0, 0, 0.5);
  }
}
@layer components {
  .dev {
    @apply border border-solid box-border  border-red-500;
  }
}

@layer utilities {
  .content-area {
    height: calc(100% - 2rem);
  }
}
</style>
