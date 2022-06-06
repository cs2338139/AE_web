<script setup>
import Logo from "./src/Logo.vue";
import MenuListItem from "./src/MenuListItem.vue";
import NavMenuList from "./src/NavMenuList.vue";
import NavMenuItem from "./src/NavMenuItem.vue";
import NavMenu from "./src/NavMenu.vue";
import NavMenuItemLink from "./src/NavMenuItem-Link.vue";
const homeImage = new URL("../../assets/Image/UI/logo-2.png", import.meta.url).href;
</script>

<template>
  <nav class="fixed top-0 w-full z-10">
    <NavMenu _class="h-32">
      <template #logo>
        <Logo href="/" :img="homeImage" width="width:120px" />
      </template>
      <NavMenuItem href="/">首頁</NavMenuItem>

      <NavMenuItem href="/Information">關於策展</NavMenuItem>

      <NavMenuList menuListOffset="-translate-x-3">
        <template #menuName>展覽介紹</template>
        <MenuListItem href="/Exhibitions/GoodNight">晚安屋</MenuListItem>
        <MenuListItem href="/Exhibitions/Dream">夢境房</MenuListItem>
      </NavMenuList>

      <NavMenuList menuListOffset="-translate-x-8">
        <template #menuName>線上展覽</template>
        <MenuListItem href="/OnlineTour">策展人線上導覽</MenuListItem>
        <MenuListItem href="">360 VR環景展場</MenuListItem>
        <MenuListItem href="">線上展覽手冊</MenuListItem>
      </NavMenuList>

      <NavMenuList menuListOffset="-translate-x-6">
        <template #menuName>推廣活動</template>
        <MenuListItem href="/Activities/WorkShops">工作坊</MenuListItem>
        <MenuListItem href="/Activities/Forums">專題演講</MenuListItem>
        <MenuListItem href="/Activities/Meetings">研習營</MenuListItem>
        <MenuListItem href="/Activities/ChildrenArts">兒童美學活動</MenuListItem>
      </NavMenuList>

      <NavMenuList menuListOffset="-translate-x-3">
        <template #menuName>宣導影片</template>
        <MenuListItem href="/Videos/PreVideos">前導宣傳片</MenuListItem>
        <MenuListItem href="/Videos/RecordVideos">訪談紀錄片</MenuListItem>
        <MenuListItem href="/Videos/Animations">繪本小動畫</MenuListItem>
      </NavMenuList>

      <NavMenuItemLink href="" target="_blank">預約導覽</NavMenuItemLink>

      <NavMenuList>
        <template #menuName>活動花絮</template>
        <MenuListItem href="/Albums/Records">活動紀錄</MenuListItem>
        <MenuListItem href="/Albums/PreExhibitions">展前花絮</MenuListItem>
      </NavMenuList>

      <NavMenuItemLink href="https://www.arte.gov.tw/" target="_blank">國立臺灣藝術教育館</NavMenuItemLink>
      <NavMenuItemLink href="https://www.facebook.com/ntaec" target="_blank"><ion-icon name="logo-facebook" /></NavMenuItemLink>
    </NavMenu>
  </nav>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

ion-icon {
  color: rgb(2, 117, 231);
  font-size: 48px;
  transform: translate(0, -25%);
}
</style>
