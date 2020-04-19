import Vue from 'vue';
import Router from 'vue-router';
import FacilityCard from './components/FacilityCard/FacilityCard.vue';
import Dashboard from './views/dashboard/Dashboard.vue';
import Login from './views/login/Login.vue';
import SignUp from './views/signUp/SignUp.vue';
import Logo from './components/Logo.vue';
import Skills from './views/skills/Skills.vue';
import Location from './views/location/Location.vue';
import RegistrationComplete from './views/registration_complete/Registration_Complete.vue';
import Discover from './views/discover/Discover.vue';
import Position from './views/position/Position.vue';
Vue.use( Router );

export default new Router( {
  routes: [
    {
      path: '/',
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
      path: '/dashboard',
      name: 'Dashboard',
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
    {
      path: '/facilitycard',
      name: 'facilitycard',
      component: FacilityCard,
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Discover,
    },
    {
      path: '/position',
      name: 'Position',
      component: Position,
    },
  ],
} );
