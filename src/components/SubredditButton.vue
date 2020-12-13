<template>
    <button
        class="suggestion-button"
        @click.prevent="
            fetchPosts(subredditName.data.display_name_prefixed),
                $emit('selected-button', subredditName.data.id)
        "
        :style="
            selectedButton === subredditName.data.id
                ? 'background: #14919b; color: white;'
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
.suggestion-button {
    background: transparent;
    padding: 10px 15px;
    margin: 5px 5px;
    border-radius: 3px;
    border: 1px solid #14919b;
    color: #14919b;
    cursor: pointer;
    transition: color 0.3s, background 0.3s;
}
.suggestion-button:hover {
    background: #14919b;
    color: white;
}
.suggestion-button:focus {
    outline: 0;
}
</style>
