import Vue from 'vue';
import Vuex from 'vuex';
import * as posts from './modules/posts';
import * as names from './modules/names';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        posts,
        names,
    },
});
