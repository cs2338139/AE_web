import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/Home-View.vue"),
    },
    {
      path: "/Information",
      component: () => import("../views/About-View.vue"),
    },
    {
      path: "/exhibitions/:exhibitionID",
      component: () => import("../views/Content-View.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/Exhibition-Content-View.vue"),
        },
        {
          path: ":bookID",
          component: () => import("../views/Exhibition-Book-View.vue"),
        },
      ],
    },
    {
      path:"/OnlineTour",
      component: () => import("../views/OnlineTour-View.vue"),
    },
    {
      path: "/news",
      component: () => import("../views/Content-View.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/News-List-View.vue"),
        },
        {
          path: ":newsID",
          component: () => import("../views/News-Content-View.vue"),
        },
      ],
    },
    {
      path: "/vistInformation",
      component: () => import("../views/VistInformation-View.vue"),
    },
    {
      path: "/activities/:activityID",
      component: () => import("../views/Content-View.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/Activity-List-Content-View.vue"),
        },
        {
          path: ":eventID",
          component: () => import("../views/Activity-Event-Content-View.vue"),
        },
      ],
    },
    // {
    //   path: "/workshop",
    //   component: () => import("../views/ContentView.vue"),
    //   children: [
    //     {
    //       path: "",
    //       component: () => import("../views/WorkShopListView.vue"),
    //     },
    //     {
    //       path: ":workshopID",
    //       component: () => import("../views/WorkShopContentView.vue"),
    //     },
    //   ],
    // },
    // {
    //   path: "/forum",
    //   component: () => import("../views/ContentView.vue"),
    //   children: [
    //     {
    //       path: "",
    //       component: () => import("../views/ForumListView.vue"),
    //     },
    //     {
    //       path: ":forumID",
    //       component: () => import("../views/ForumContentView.vue"),
    //     },
    //   ],
    // },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound-View.vue"),
    },
  ],
});

export default router;
