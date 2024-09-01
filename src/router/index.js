import { createRouter, createWebHistory } from "vue-router"; 

const  router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/home page.vue')
        },
        {
            path: '/quiz',
            name: 'quiz',
            component: () => import('../components/quiz.vue')
        }
    ],
});

export default router