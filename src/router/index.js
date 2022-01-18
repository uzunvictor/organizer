import Vue from 'vue';
import VueRouter from 'vue-router';
import McvHome from '@/views/McvHome';
import McvDay from '@/components/McvDay'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: McvHome,

    },
    {
        path: '/day/:slug',
        name: 'day-route',
        component: McvDay,
    }
];

const router = new VueRouter({
    routes,
});

export default router;
