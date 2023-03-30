//Add router
import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/components/pages/PageHome'
import PageLogin from '@/components/pages/PageLogin'
import PageLoginStep2 from '@/components/pages/PageLoginStep2'
import PageExecutedReports from '@/components/pages/PageExecutedReports'
import PageExecutedReport from '@/components/pages/PageExecutedReport'
import PageAssignedReports from '@/components/pages/PageAssignedReports'
import PageAssignedReport from '@/components/pages/PageAssignedReport'
import PageEditReport from '@/components/pages/PageEditReport'
import PageSettings from '@/components/pages/PageSettings'
import PageLogOut from '@/components/pages/PageLogOut'
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
        path: '/inloggen-stap2',
        component: PageLoginStep2,
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
    },
    {
        path: '/wijzig-rapportage/:id',
        component: PageEditReport,
        props: true, 
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/instellingen',
        component: PageSettings,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/uitloggen',
        component: PageLogOut,
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
    if(store.state.user.is2FAAuthenthicated == false)
    {
        console.log('trigger1: '+to.path)
        console.log(store.state.user)
        //User not fully logged in using 2 factor authenthication
        if(store.state.user.isLogged == true)
        {
            //Redirect to 2FA page if needed
            if(to.path != '/inloggen-stap2')
                return { path: '/inloggen-stap2' }
        } else {
            //Redirect to login page if needed
            if(to.path != '/inloggen')
                return { path: '/inloggen' }
        }
    } else if(store.state.user.is2FAAuthenthicated == true && to.meta.hideForAuth)
    {
        console.log('trigger4')
        return { path: '/' }
    }
});

export default router;