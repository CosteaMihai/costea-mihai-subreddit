import axios from 'axios';
import NProgress from 'nprogress';

const apiClient = axios.create({
    baseURL: 'https://www.reddit.com',
    withCredentials: false,
});

apiClient.interceptors.request.use((config) => {
    NProgress.start();
    return config;
});

apiClient.interceptors.response.use((response) => {
    NProgress.done();
    return response;
});

const getSubredditSuggestions = (name) => {
    return apiClient.get(`/r/subreddits/search.json?q=${name}&type=sr&limit=5`);
};

const getSubredditPosts = (subreddit) => {
    return apiClient.get(`/${subreddit}/top/.json?t=all&limit=10`);
};

export default {
    getSubredditSuggestions,
    getSubredditPosts,
};
