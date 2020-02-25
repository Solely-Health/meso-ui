import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Skills from './components/Skills.vue';
import Location from './components/Location.vue';
import RegistrationComplete from './views/registration_complete/Registration_Complete.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills,
    },
    {
      path: '/complete',
      name: 'complete',
      component: RegistrationComplete,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/location',
      name: 'location',
      component: Location,
    },
  ],
});
