<script setup></script>

<template>
  <nav class="group">
    <div class="nav-bg h-32 block group-hover:hidden">
      <div class="wrap h-32 flex justify-between items-center">
        <a href="./index.html" class="inline-block align-middle">
          <img src="src/Image/UI/Home.png" width="140px" />
        </a>
        <ul class="Menu">
          <li>
            <span>關於策展</span>
          </li>
          <li>
            <span>展覽介紹</span>
          </li>
          <li>
            <span>線上展覽</span>
          </li>
          <li>
            <span>最新消息</span>
          </li>
          <li>
            <span>參觀資訊</span>
          </li>
          <li>
            <span>推廣活動</span>
          </li>
          <li>
            <span>活動花絮</span>
          </li>
          <li>
            <span>國立臺灣藝教館</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="nav-bg h-72 hidden group-hover:block">
      <div class="wrap h-32 flex justify-between items-center">
        <a href="./index.html" class="inline-block align-middle">
          <img src="src/Image/UI/Home.png" width="140px" />
        </a>
        <ul class="Menu">
          <li>
            <a href="javascript::">
              <span class="Menu-span-border-bottom">關於策展</span>
            </a>
            <ul class="MenuList">
              <li>
                <a href="">
                  <span>策展論述</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>策展團隊</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">
              <span>展覽介紹</span>
            </a>
          </li>
          <li>
            <a href="javascript::">
              <span class="Menu-span-border-bottom">線上展覽</span>
            </a>
            <ul class="MenuList -translate-x-9">
              <li>
                <a href="">
                  <span>策展人線上導覽</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>360 VR環景展場</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>線上展覽手冊</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">
              <span>最新消息</span>
            </a>
          </li>
          <li>
            <a href="javascript::">
              <span class="Menu-span-border-bottom">參觀資訊</span>
            </a>
            <ul class="MenuList">
              <li>
                <a href="">
                  <span>本館資訊</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>交通資訊</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript::">
              <span class="Menu-span-border-bottom">推廣活動</span>
            </a>
            <ul class="MenuList">
              <li>
                <a href="">
                  <span>工作坊</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>專題演講</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>工作營</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript::">
              <span class="Menu-span-border-bottom">活動花絮</span>
            </a>
            <ul class="MenuList">
              <li>
                <a href="">
                  <span>活動紀錄</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>展前花絮</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript::">
              <span class="Menu-span-border-bottom">國立臺灣藝教館</span>
            </a>
            <ul class="MenuList translate-x-7">
              <li>
                <a href="https://www.arte.gov.tw/" target="_blank">
                  <span>參觀網站</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>臉書專頁</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  nav {
    @apply fixed w-full h-32 z-10;
  }
}

@layer components {
  .dev-border-View {
    /* @apply border border-solid box-border border-red-700; */
  }

  .nav-bg {
    @apply w-full border-b-50 border-gray-300 bg-white top-0 absolute;
  }

  .wrap {
    @apply relative my-0 mx-auto max-w-8xl;
    @apply dev-border-View;
  }

  .Menu {
    @apply inline-flex align-middle w-22/25 justify-between;
    @apply dev-border-View;
  }

  .Menu li {
    @apply font-normal text-xl text-center max-h-7;
    @apply dev-border-View;
  }

  .Menu li a {
    @apply hover:text-slate-400;
  }

  .Menu li span {
    @apply px-3;
  }

  .MenuList {
    @apply mt-10 mx-0 p-0 text-center absolute top-14;
  }

  .MenuList li {
    @apply font-light text-xl my-6 mx-0;
  }

  .align-y-mid {
    @apply top-1/2 -translate-y-1/2;
  }

  .Menu-span-border-bottom {
    @apply border-b-15 pb-5 border-black;
  }
}
</style>
