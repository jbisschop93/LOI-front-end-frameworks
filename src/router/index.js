//Add router
import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/components/pages/PageHome'
import PageExecutedReports from '@/components/pages/PageExecutedReports'
import PageExecutedReport from '@/components/pages/PageExecutedReport'
import PageAssignedReports from '@/components/pages/PageAssignedReports'
import PageAssignedReport from '@/components/pages/PageAssignedReport'

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
    },
    {
        path: '/toegewezen-rapportages',
        component: PageAssignedReports
    },
    {
        path: '/toegewezen-rapportages/:id',
        component: PageAssignedReport,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;