import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/home/homePage.vue";
import Quiz from "../components/quiz/quiz.vue";
import startPage from "../components/startPage/startPage.vue";

const router = createRouter({
  history: createWebHistory('/Quiz_Vue/'),
  routes: [
    {
      path: "/",
      name: "start",
      component: startPage,
    },
    {
      path: "/home",
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
