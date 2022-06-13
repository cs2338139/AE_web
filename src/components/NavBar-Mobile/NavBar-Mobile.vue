<script setup>
import Logo from "./src/Logo.vue";
import MenuListItem from "./src/MenuListItem.vue";
import NavMenuList from "./src/NavMenuList.vue";
import NavMenuItem from "./src/NavMenuItem.vue";
import NavMenuItemLink from "./src/NavMenuItem-Link.vue";
const homeImage = new URL("../../assets/Image/UI/Logo.png", import.meta.url).href;
</script>

<script>
export default {
  methods: {
    openMenu() {
      let state = this.$refs.Menubutton.name;
      if (state === "menu-outline") {
        this.$refs.Menu.style.display = "block";
        this.$refs.Menubutton.name = "close-outline";
        document.body.style.overflow = "hidden";
      } else {
        this.$refs.Menu.style.display = "none";
        this.$refs.Menubutton.name = "menu-outline";
        document.body.style.overflow = "scroll";
      }
    },
    CloseMenu() {
      this.$refs.Menu.style.display = "none";
      this.$refs.Menubutton.name = "menu-outline";
      document.body.style.overflow = "scroll";
    },
  },
  mounted() {
    this.$emitter.on("CloseMenu", () => {
      this.CloseMenu();
    });
  },
};
</script>

<template>
  <nav class="fixed top-0 z-10 w-full">
    <div class="top-0 flex flex-row items-center justify-between w-full h-20 bg-navColor border-gray-400 border-b-50">
      <div class="p-2">
        <Logo href="/" :img="homeImage" width="width:70px" />
      </div>
      <div class="mx-3">
        <button @click="openMenu()">
          <ion-icon name="menu-outline" ref="Menubutton"></ion-icon>
        </button>
      </div>
    </div>
    <div class="bg-nav-image h-10 -mt-2"></div>

    <ul class="relative top-0 flex flex-col hidden w-full my-0 overflow-y-scroll bg-black-05 content-area -mt-5 -z-50" ref="Menu">
      <div class="bg-white h-10"></div>
      <NavMenuItem href="/">首頁</NavMenuItem>

      <NavMenuItem href="/Information">關於策展</NavMenuItem>

      <NavMenuList keyName="Exhibition">
        <template #menuName>展覽介紹</template>
        <MenuListItem href="/Exhibitions/GoodNight">晚安屋<template #en>Goodnight Rooms</template></MenuListItem>
        <MenuListItem href="/Exhibitions/Dream">夢境房<template #en>Dreamland Room</template></MenuListItem>
      </NavMenuList>

      <NavMenuList keyName="Online">
        <template #menuName>線上展覽</template>
        <MenuListItem :enable="false" href="/OnlineTour">策展人導覽<template #en>Online Curator Tour</template></MenuListItem>
        <MenuListItem :enable="false" href="">虛擬實境<template #en>Virtual Reality Tours</template></MenuListItem>
        <MenuListItem :enable="false" href="">導覽教育手冊<template #en>Brochure</template></MenuListItem>
      </NavMenuList>

      <NavMenuList keyName="Activity">
        <template #menuName>推廣活動</template>
        <MenuListItem href="/Activities/WorkShops">工作坊<template #en>Workshops</template></MenuListItem>
        <MenuListItem href="/Activities/Forums">分享會<template #en>Lectures</template></MenuListItem>
        <MenuListItem href="/Activities/Meetings/0">研習營<template #en>Workshop</template></MenuListItem>
        <MenuListItem href="/Activities/ChildrenArts">兒童美學活動<template #en>Child Activities Lessons</template></MenuListItem>
      </NavMenuList>

      <NavMenuList menuListOffset="-translate-x-3">
        <template #menuName>宣導影片</template>
        <MenuListItem :enable="false" href="/Videos/PreVideos">前導宣傳片<template #en>Teaser Trailer</template></MenuListItem>
        <MenuListItem :enable="false" href="/Videos/RecordVideos">訪談紀錄片<template #en>Documentary</template></MenuListItem>
        <MenuListItem href="/Videos/Animations">繪本小動畫<template #en>Animated promo</template></MenuListItem>
      </NavMenuList>

      <NavMenuItem href="/Reserve">預約導覽</NavMenuItem>

      <NavMenuList keyName="Album">
        <template #menuName>活動花絮</template>
        <MenuListItem href="/Albums/Records">活動紀錄<template #en>Exhibition Records</template></MenuListItem>
        <MenuListItem href="/Albums/PreExhibitions">展覽花絮<template #en>Event Records</template></MenuListItem>
      </NavMenuList>

      <NavMenuItemLink href="https://www.arte.gov.tw/" target="_blank">國立臺灣藝術教育館</NavMenuItemLink>
      <NavMenuItemLink href="https://www.facebook.com/%E5%A4%A2%E5%A2%83%E6%BC%AB%E9%81%8A%E7%B9%AA%E6%9C%AC%E8%97%9D%E8%A1%93%E5%B1%95-105928812151999" target="_blank">臉書連結</NavMenuItemLink>
    </ul>
  </nav>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

ion-icon {
  font-size: 48px;
  color: white;
  --ionicon-stroke-width: 12px;
}

@layer components {
  .dev-border-view {
    @apply border border-solid box-border;
  }
}

@layer utilities {
  .content-area {
    height: calc(100vh - 5rem);
  }

  .bg-black-05 {
    background-color: rgb(0, 0, 0, 0.8);
  }
}

@layer components {
  .dev {
    @apply border border-solid box-border  border-red-500;
  }
}
</style>
