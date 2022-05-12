import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/news",
      component: () => import("../views/NewsView.vue"),
    },
    {
      path: "/vistInformation",
      component: () => import("../views/VistInformationView.vue"),
    },
    {
      path: "/workshop",
      component: () => import("../views/WorkShopView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
