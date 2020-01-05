import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/discs/new',
    name: 'NewDisc',
    component: () => import(/* webpackChunkName: "about" */ '../pages/NewDisc.vue'),
  },
  {
    path: '/discs/edit',
    name: 'EditDisc',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../pages/EditDisc.vue'),
    beforeEnter(to, from, next) {
      if (from.name === 'Home') {
        next();
      } else {
        next({ name: 'Home' });
      }
    },
  },
  {
    path: '*',
    component: Home,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
