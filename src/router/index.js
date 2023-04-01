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
import PageKnowledgeBase from '@/components/pages/PageKnowledgeBase'
import PageLogOut from '@/components/pages/PageLogOut'
import UserService from '@/services/UserService'
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
        path: '/kennisbase',
        component: PageKnowledgeBase,
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
    //Check is user is fully logged in
    if(store.state.user.is2FAAuthenthicated == false)
    {
        //Try autologin
        UserService.tryAutoLogin().then((loggedIn)=>{
            if(!loggedIn)
            {
                //Still not logged in yet? Continue routing to login pages
                if(store.state.user.isLogged == true)
                {
                    //Redirect to 2FA page if needed
                    if(to.path != '/inloggen-stap2')
                        router.push({ path: '/inloggen-stap2' })
                } else {
                    //Redirect to login page if needed
                    if(to.path != '/inloggen')
                        router.push({ path: '/inloggen' })
                }
            } else {
               //User has been logged in, but went to the login page
               if(to.path == '/inloggen' || to.path == '/inloggen-stap2')
               {
                router.push({ path: '/' })
               } 
            }
        })
    } else if(store.state.user.is2FAAuthenthicated == true && to.meta.hideForAuth)
    {
        return { path: '/' }
    }
});

export default router;