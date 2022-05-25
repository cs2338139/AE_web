<script setup>
import Logo from "./src/Logo.vue";
import MenuListItem from "./src/MenuListItem.vue";
import NavMenuList from "./src/NavMenuList.vue";
import NavMenuItem from "./src/NavMenuItem.vue";
import NavMenu from "./src/NavMenu.vue";
const homeImage = new URL("../../assets/Image/UI/Home.png", import.meta.url).href;
</script>

<template>
  <nav class="group fixed top-0 w-full h-32 z-10">
    <NavMenu _class="h-32 block group-hover:hidden">
      <template #logo>
        <Logo href="./index.html" :img="homeImage" width="width:140px" />
      </template>

      <NavMenuItem href="">關於策展</NavMenuItem>
      <NavMenuItem href="">展覽介紹</NavMenuItem>
      <NavMenuItem href="">線上展覽</NavMenuItem>
      <NavMenuItem href="">最新消息</NavMenuItem>
      <NavMenuItem href="">參觀資訊</NavMenuItem>
      <NavMenuItem href="">推廣活動</NavMenuItem>
      <NavMenuItem href="">活動花絮</NavMenuItem>
      <NavMenuItem href="">國立臺灣藝教館</NavMenuItem>
    </NavMenu>

    <NavMenu _class="h-80 hidden group-hover:block">
      <template #logo>
        <Logo href="/" :img="homeImage" width="width:140px" />
      </template>

      <NavMenuItem href="/Information">關於策展</NavMenuItem>

      <NavMenuList>
        <template #menuName>展覽介紹</template>
        <MenuListItem href="/exhibitions/GoodNight">晚安房</MenuListItem>
        <MenuListItem href="/exhibitions/Dream">夢境房</MenuListItem>
      </NavMenuList>

      <NavMenuList menuListOffset="-translate-x-9">
        <template #menuName>線上展覽</template>
        <MenuListItem href="">策展人線上導覽</MenuListItem>
        <MenuListItem href="">360 VR環景展場</MenuListItem>
        <MenuListItem href="">線上展覽手冊</MenuListItem>
      </NavMenuList>

      <NavMenuItem href="/news">最新消息</NavMenuItem>

      <NavMenuItem href="/vistInformation">參觀資訊</NavMenuItem>

      <NavMenuList menuListOffset="-translate-x-6">
        <template #menuName>推廣活動</template>
        <MenuListItem href="/workshop">工作坊</MenuListItem>
        <MenuListItem href="/forum">專題演講</MenuListItem>
        <MenuListItem href="">研習營</MenuListItem>
        <MenuListItem href="">兒童美學活動</MenuListItem>
      </NavMenuList>

      <NavMenuList>
        <template #menuName>活動花絮</template>
        <MenuListItem href="">活動紀錄</MenuListItem>
        <MenuListItem href="">展前花絮</MenuListItem>
      </NavMenuList>

      <NavMenuList menuListOffset="translate-x-7">
        <template #menuName>國立臺灣藝教館</template>
        <MenuListItem href="https://www.arte.gov.tw/" target="_blank">參觀網站</MenuListItem>
        <MenuListItem href="" target="_blank">臉書專頁</MenuListItem>
      </NavMenuList>
    </NavMenu>
  </nav>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
