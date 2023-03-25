//Add router
import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/components/pages/PageHome'
import PageLogin from '@/components/pages/PageLogin'
import PageExecutedReports from '@/components/pages/PageExecutedReports'
import PageExecutedReport from '@/components/pages/PageExecutedReport'
import PageAssignedReports from '@/components/pages/PageAssignedReports'
import PageAssignedReport from '@/components/pages/PageAssignedReport'
import store from '@/store'

const routes = [
    {
        path: '/inloggen',
        component: PageLogin,
        meta: {
            hideForAuth: true
        }
    },
    {
        path: '/',
        component: PageHome,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/uitgevoerde-rapportages',
        component: PageExecutedReports,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/uitgevoerde-rapportages/:id',
        component: PageExecutedReport,
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/toegewezen-rapportages',
        component: PageAssignedReports,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/toegewezen-rapportages/:id',
        component: PageAssignedReport,
        props: true,
        meta: {
            requiresAuth: true
        }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

//Guard for secured pages
router.beforeEach((to) => {
    if(store.state.user.is2FAAuthenthicated == false && to.meta.requiresAuth)
    {
        return { path: '/inloggen' }
    } else if(store.state.user.is2FAAuthenthicated == true && to.meta.hideForAuth)
    {
        return { path: '/' }
    }
});

export default router;