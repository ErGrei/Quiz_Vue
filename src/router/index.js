import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../components/home/homePage.vue"),
    },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: () => import("../components/quiz/quiz.vue"),
    },
  ],
});

export default router;
