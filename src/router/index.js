import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import McvDay from '@/components/McvDay'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,

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
