import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import NotFound from '@/components/404';

import HomeRouter from '@/router/home-router';


const otherRouter = [{
    path: '/login',
    component: Login,
    name: 'Login',
    hidden: true,
}, {
    path: '/404',
    component: NotFound,
    name: 'NotFound',
    hidden: true,
}, {
    path: '*',
    hidden: true,
    redirect: {
        path: '/404',
    },
}];


Vue.use(Router);
export default new Router({
    routes: [...HomeRouter, ...otherRouter],
});
