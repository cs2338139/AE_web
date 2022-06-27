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
      document.getElementById("Modal").style.display = "block";
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      document.getElementById("Modal").style.display = "none";
      document.body.style.overflow = "scroll";
    },
  },
  created() {},
  mounted() {
    this.$emitter.on("OpenModal", () => {
      this.openModal();
    });
  },
};
</script>
<template>
  <div id="Modal" class="fixed bottom-0 left-0 z-50 hidden w-full h-screen bg-black-05">
    <div class="absolute top-0 bottom-0 left-0 right-0 w-2/5 m-auto bg-white p-14 h-4/5 xl:w-4/5 md:w-4/5 md:p-5">
      <button @click="closeModal" class="absolute right-5 top-5">
        <ion-icon name="close-outline" />
      </button>
      <div class="text-4xl sm:text-xl">報名須知</div>
      <div class="content-area overflow-y-scroll">
        <ul class="leading-6 sm:text-sm">
          <li class="mt-10 sm:mt-3">
            一、報名費
            <ul class="">
              <li class="my-2 flex">
                <div class="whitespace-nowrap">（一）</div>
                <div>每堂每名新臺幣200元整。</div>
              </li>
              <li class="my-2 flex">
                <div class="whitespace-nowrap">（二）</div>
                <div>身心障礙者全部課程免費，低收入戶國中（含）以下學生可免費參加5堂（第6堂起需付費），兩者均需出示相關證明。</div>
              </li>
              <li class="my-2">
                <div class="flex">
                  <div class="whitespace-nowrap">（三）</div>
                  <div>全部課程參與對象，如為國小學生需家長陪同（限1位），收費如下：</div>
                </div>
                <ul class="list-decimal list-inside pl-6">
                  <li>報名費各150元整，親子兩人共計300元（材料2份）。</li>
                  <li>身心障礙者及低收入戶者（5堂內），親子兩人均免費（材料2份）。</li>
                </ul>
              </li>
            </ul>
          </li>

          <li class="mt-10 sm:mt-3">
            二、關於退費
            <ul class="">
              <li class="my-2 flex">
                <div class="whitespace-nowrap">（一）</div>
                <div>報名並繳費者，如因故須退班退費者，需於上課前7天（不包含例假日）電話通知並填具退費申請表申辦退費，未於規定時間申請者，恕無法辦理退費。</div>
              </li>
              <li class="my-2 flex">
                <div class="whitespace-nowrap">（二）</div>
                <div>如因天災等不可抗力因素，將主動聯繫（或公告）延期或退費。</div>
              </li>
              <li class="my-2 flex">
                <div class="whitespace-nowrap">（三）</div>
                <div>當天課程，未報到，視同放棄，恕無法辦理退費。</div>
              </li>
              <li class="my-2 flex">
                <div class="whitespace-nowrap">（四）</div>
                <div>
                  課程若因疫情影響停辦，屆時已報名並繳費者全額退費。另，所報課程，於開課前因染疫無法報到時，請先電話通知並提供證明（快篩試劑並註記姓名及日期）後，可於111年9月25日前申辦全額退費。又，課程當日，學員經工作人員測量額溫≧37.5°C，有發燒情形，依防疫規定必須離開，亦可辦理全額退費。
                </div>
              </li>
            </ul>
          </li>

          <li class="mt-10 sm:mt-3">
            三、其他注意事項︰
            <ul class="">
              <li class="my-2 flex">
                <div class="whitespace-nowrap">（一）</div>
                <div>請務必準時報到並全程參與。</div>
              </li>
              <li class="my-2 flex">
                <div class="whitespace-nowrap">（二）</div>
                <div>若有異動煩請來電告知，以免影響他人權益。</div>
              </li>
              <li class="my-2 flex">
                <div class="whitespace-nowrap">（三）</div>
                <div>家長必須自行接送兒童。</div>
              </li>
              <li class="my-2 flex">
                <div class="whitespace-nowrap">（四）</div>
                <div>敬請學員自行準備水壺或環保杯，共同為環保節能盡一份心力。</div>
              </li>
              <li class="my-2 flex">
                <div class="whitespace-nowrap">（五）</div>
                <div>為避免因課程將衣服弄髒，請穿著不怕髒之衣物或自備工作服(圍裙)。</div>
              </li>
              <li class="my-2 flex">
                <div class="whitespace-nowrap">（六）</div>
                <div>有關新冠肺炎防護，依「嚴重特殊傳染性肺炎」疫情防護措施處理原則，課程會以及依中央流行疫情指揮中心及公眾集會指引規定滾動式修正。</div>
              </li>
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
