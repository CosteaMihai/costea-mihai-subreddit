<template>
    <div class="container">
        <div class="page-title">
            Feel free to search what you want
        </div>
        <BaseInput
            v-model="subredditName"
            @change.prevent="search()"
            @keyup.enter="search()"
        />
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
            if (this.posts.length) this.clearPosts();
            await this.fetchNames(this.subredditName);
        },
        ...mapActions('names', ['fetchNames']),
        ...mapActions('posts', ['clearPosts']),
    },
    computed: {
        ...mapGetters('names', ['names']),
        ...mapGetters('posts', ['posts']),
    },
};
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    margin: 0 auto;
}
.buttons-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
#second-section p {
    text-align: center;
}
.post-section {
    width: 100%;
    margin: 30px;
}
.page-title {
    text-align: center;
    font-size: 20px;
    margin: 20px 10px;
}
@media only screen and (max-width: 1024px) {
    .container {
        width: 80%;
    }
}
@media only screen and (max-width: 640px) {
    .container {
        width: 95%;
    }
}
</style>
