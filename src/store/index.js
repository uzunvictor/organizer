import Vue from "vue";
import Vuex from 'vuex';

import timeStore from './modules/timeStore';
import tasksStore from './modules/tasksStore';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: { timeStore, tasksStore },
})