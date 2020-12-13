<template>
    <div class="container">
        <p class="page-title">
            Feel free to search what you want
        </p>
        <div class="search-section">
            <BaseInput
                v-model.lazy="subredditName"
                @change.prevent="search()"
                @keyup.enter="search()"
                :error="$v.subredditName.$error"
                @blur="$v.subredditName.$touch()"
            />
            <div v-if="$v.subredditName.$error">
                <p class="error-message" v-if="!$v.subredditName.required">
                    The name of the product is required!
                </p>
                <p
                    class="error-message"
                    v-else-if="!$v.subredditName.minLength"
                >
                    Minimum value is 0!
                </p>
            </div>
            <button class="search-button" @click.prevent="search()">
                Search
            </button>
        </div>
        <div v-show="isEmpty" style="margin-top:10px; font-size:15px">
            Ooops, we can't find something!
        </div>
        <div id="second-section" v-if="names.length">
            <p>
                We have some matches
            </p>
            <div class="buttons-section">
                <SubredditButton
                    v-for="name in names"
                    :key="name.data.id"
                    :subredditName="name"
                    :selectedButton="selectedButton"
                    @selected-button="changeSelectedButton"
                />
            </div>
        </div>
        <div class="post-section">
            <SubredditPost
                v-for="post in posts"
                :key="post.data.id"
                :subredditPost="post.data"
            />
        </div>
    </div>
</template>

<script>
import SubredditPost from '@/components/SubredditPost.vue';
import SubredditButton from '@/components/SubredditButton.vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { required, minLength } from 'vuelidate/lib/validators';
export default {
    components: {
        SubredditButton,
        SubredditPost,
    },
    data() {
        return {
            subredditName: '',
            selectedButton: '',
        };
    },
    methods: {
        changeSelectedButton(id) {
            this.selectedButton = id;
        },
        async search() {
            this.$v.subredditName.$touch();
            if (this.$v.subredditName.$invalid) return;
            if (this.posts.length) this.clearPosts();
            await this.fetchNames(this.subredditName);
        },
        ...mapActions('names', ['fetchNames']),
        ...mapActions('posts', ['clearPosts']),
    },
    computed: {
        ...mapGetters('names', ['names', 'isEmpty']),
        ...mapGetters('posts', ['posts']),
    },
    validations: {
        subredditName: {
            required,
            minLength: minLength(3),
        },
    },
};
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
}
.search-section {
    width: 90%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.search-button {
    margin: 10px 0px;
    background: #2cb1bc;
    border: none;
    color: white;
    padding: 10px 15px;
    border-radius: 3px;
    cursor: pointer;
    transition: background 0.3s ease-in;
}
.search-button:hover {
    background: #14919b;
}
.search-button:focus {
    outline: none;
}
.buttons-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
#second-section p {
    text-align: center;
}
.page-title {
    text-align: center;
    font-size: 20px;
}
.post-section {
    width: 100%;
}
.error-message {
    color: red;
    font-size: 10px;
    margin-top: 1px;
}
@media (min-width: 500px) {
    .search-section {
        position: relative;
    }
    .search-button {
        position: absolute;
        right: 0;
        top: 0;
        padding: 5px 10px;
        margin: 0;
    }
}
</style>
