import axios from 'axios';

export const namespaced = true;

export const state = {
    names: [],
};

export const mutations = {
    SET_NAMES(state, payload) {
        state.names = payload;
    },
    CLEAR_NAMES(state) {
        state.names = [];
    },
};

export const actions = {
    async fetchNames({ commit }, payload) {
        try {
            commit('CLEAR_NAMES');
            const names = await axios.get(
                `https://www.reddit.com/r/subreddits/search.json?q=${payload}&type=sr&limit=5`
            );
            if (!names.data.data.children.length) return;
            commit('SET_NAMES', names.data.data.children);
        } catch (error) {
            console.log(error);
        }
    },
};

export const getters = {
    names: (state) => state.names,
};
