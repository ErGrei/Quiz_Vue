import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home/homePage.vue";
import Quiz from "../components/quiz/quiz.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: Quiz,
    },
  ],
});

export default router;
