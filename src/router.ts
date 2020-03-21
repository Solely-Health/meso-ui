import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Dashboard from './views/Dashboard.vue';
import Login from './views/Login/Login.vue';
import SignUp from './views/SignUp/SignUp.vue';
import Logo from './components/Logo.vue';

import Skills from './views/skills/Skills.vue';
import Location from './views/location/Location.vue';
import RegistrationComplete from './views/registration_complete/Registration_Complete.vue';
Vue.use( Router );

export default new Router( {
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/login',
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
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue' ),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/logo',
      name: 'logo',
      component: Logo,
    },
    {
      path: '/location',
      name: 'location',
      component: Location,
    },
  ],
} );
