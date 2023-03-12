//Add router
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/pages/HomePage'
import ExamplePage from '@/components/pages/ExamplePage'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/example',
        name: 'example',
        component: ExamplePage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;