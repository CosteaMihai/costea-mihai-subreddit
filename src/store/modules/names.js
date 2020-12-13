import RedditService from '@/services/RedditService.js';

export const namespaced = true;

export const state = {
    names: [],
    isEmpty: false,
};

export const mutations = {
    SET_NAMES(state, payload) {
        state.names = payload;
    },
    CLEAR_NAMES(state) {
        state.names = [];
    },
    SET_EMPTY(state) {
        state.isEmpty = true;
    },
    SET_NOT_EMPTY(state) {
        state.isEmpty = false;
    },
};

export const actions = {
    async fetchNames({ commit }, payload) {
        try {
            commit('SET_NOT_EMPTY');
            commit('CLEAR_NAMES');
            const names = await RedditService.getSubredditSuggestions(payload);
            if (!names.data.data.children.length) {
                commit('SET_EMPTY');
                return;
            }
            commit('SET_NAMES', names.data.data.children);
        } catch (error) {
            console.log(error);
        }
    },
};

export const getters = {
    names: (state) => state.names,
    isEmpty: (state) => state.isEmpty,
};
