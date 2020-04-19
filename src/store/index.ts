import Vue from 'vue';
import Vuex from 'vuex';

import facility from './modules/facility';
import job from './modules/job';
import license from './modules/license';
import schedule from './modules/schedule';
import worker from './modules/worker';
Vue.use(Vuex);
export default new Vuex.Store({
strict: process.env.NODE_ENV !== 'production',
  modules: {
    facility,
    job,
    license,
    schedule,
    worker,
  },
});
