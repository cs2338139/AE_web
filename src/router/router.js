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
          component: () => import("../views/Exhibition-List-Content-View.vue"),
        },
        {
          path: ":bookID",
          component: () => import("../views/Exhibition-Book-View.vue"),
        },
      ],
    },
    {
      path: "/OnlineTour",
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
    {
      path: "/videos/:videoID",
      component: () => import("../views/Content-View.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/Video-Content-View.vue"),
        }
      ],
    },
    {
      path: "/albums/:albumID",
      component: () => import("../views/Content-View.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/Album-List-Content-View.vue"),
        },
        {
          path: ":albumEventID",
          component: () => import("../views/Album-Event-View.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound-View.vue"),
    },
  ],
});

export default router;
