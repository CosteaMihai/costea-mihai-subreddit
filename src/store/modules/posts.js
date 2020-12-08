import axios from 'axios';

export const namespaced = true;

export const state = {
    posts: [],
};

export const mutations = {
    SET_POSTS(state, payload) {
        state.posts = payload;
    },
    CLEAR_POSTS(state) {
        state.posts = [];
    },
};

export const actions = {
    async fetchPosts({ commit, dispatch }, payload) {
        try {
            dispatch('clearPosts');
            const post = await axios.get(
                `https://www.reddit.com/${payload}/top/.json?t=all&limit=10`
            );
            commit('SET_POSTS', post.data.data.children);
        } catch (error) {
            console.log(error);
        }
    },
    clearPosts({ commit }) {
        commit('CLEAR_POSTS');
    },
};

export const getters = {
    posts: (state) => state.posts,
};
