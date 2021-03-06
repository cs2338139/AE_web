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
      path: "/Reserve",
      component: () => import("../views/Reserve-View.vue"),
    },
    {
      path: "/exhibitions/:exhibitionID",
      component: () => import("../views/Content-View.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/Type-Content-View.vue"),
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
          component: () => import("../views/Type-Content-View.vue"),
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
          component: () => import("../views/Type-Content-View.vue"),
        },
      ],
    },
    {
      path: "/albums/:albumID",
      component: () => import("../views/Content-View.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/Album-Content-View.vue"),
        },
        {
          path: ":albumEventLv0ID",
          component: () => import("../views/Album-Content-View.vue"),
          children: [
            {
              path: ":albumEventLv1ID",
              component: () => import("../views/Album-Content-View.vue"),
              children: [
                {
                  path: ":albumEventLv2ID",
                  component: () => import("../views/Album-Content-View.vue"),
                },
              ],
            },
          ],
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
