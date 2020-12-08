<template>
    <button
        @click.prevent="
            fetchPosts(subredditName.data.display_name_prefixed),
                $emit('selected-button', subredditName.data.id)
        "
        :style="
            selectedButton === subredditName.data.id
                ? 'background: #3525e6; color: white;'
                : ''
        "
    >
        {{ subredditName.data.display_name }}
    </button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props: {
        subredditName: {
            type: Object,
            required: true,
        },
        selectedButton: {
            type: String,
        },
    },
    methods: {
        ...mapActions('posts', ['fetchPosts']),
    },
};
</script>

<style>
button {
    background: transparent;
    padding: 7px 15px;
    margin: 5px 5px;
    border-radius: 999px;
    border: 2px solid #3525e6;
    color: #3525e6;
    cursor: pointer;
    transition: color 0.3s, background 0.3s;
}
button:hover {
    background: #3525e6;
    color: white;
}
button:focus {
    outline: 0;
}
</style>
