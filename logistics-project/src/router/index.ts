import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'top',
        component: async () => {
            const top = await import('@/pages/Top.vue');
            return top;
        }
    },
    {
        path: '/test',
        name: 'test',
        component: async () => {
            const test = await import('@/pages/Test.vue');
            return test;
        }
    },
    {
        path: '/login',
        name: 'login',
        component: async () => {
            const login = await import('@/pages/Login.vue');
            return login;
        }
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
