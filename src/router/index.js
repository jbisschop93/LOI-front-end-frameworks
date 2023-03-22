//Add router
import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/components/pages/PageHome'
import PageExecutedReports from '@/components/pages/PageExecutedReports'
import PageExecutedReport from '@/components/pages/PageExecutedReport'

const routes = [
    {
        path: '/',
        component: PageHome
    },
    {
        path: '/uitgevoerde-rapportages',
        component: PageExecutedReports
    },
    {
        path: '/uitgevoerde-rapportages/:id',
        component: PageExecutedReport,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;