import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/Information",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/exhibitions/:exhibitionID",
      component: () => import("../views/ContentView.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/ExhibitionContentView.vue"),
        },
        {
          path: ":bookID",
          component: () => import("../views/BookContentView.vue"),
        },
      ],
    },
    /*
    // {
    //   path: "/InfoDream",
    // component: () => import("../views/ContentView.vue"),
    //   children: [
    //     {
    //       path: "",
    //       component: () => import("../views/ExhibitionDreamView.vue"),
    //     },
    //     {
    //       path: ":bookID",
    //       component: () => import("../views/BookContentView.vue"),
    //     },
    //   ],
    // },
    // {
    //   path: "/InfoGoodNight",
    //   component: () => import("../views/ContentView.vue"),
    //   children: [
    //     {
    //       path: "",
    //       component: () => import("../views/ExhibitionGoodNightView.vue"),
    //     },
    //     {
    //       path: ":bookID",
    //       component: () => import("../views/BookContentView.vue"),
    //     },
    //   ],
    // },
    */
    {
      path: "/news",
      component: () => import("../views/ContentView.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/NewsListView.vue"),
        },
        {
          path: ":newsID",
          component: () => import("../views/NewsContentView.vue"),
        },
      ],
    },
    {
      path: "/vistInformation",
      component: () => import("../views/VistInformationView.vue"),
    },
    {
      path: "/workshop",
      component: () => import("../views/ContentView.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/WorkShopListView.vue"),
        },
        {
          path: ":workshopID",
          component: () => import("../views/WorkShopContentView.vue"),
        },
      ],
    },
    {
      path: "/forum",
      component: () => import("../views/ContentView.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/ForumListView.vue"),
        },
        {
          path: ":forumID",
          component: () => import("../views/ForumContentView.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
