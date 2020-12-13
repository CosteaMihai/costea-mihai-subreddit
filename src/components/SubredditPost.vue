<template>
    <div>
        <div
            class="post"
            @click.prevent="isContentDisplayed = !isContentDisplayed"
            :style="isContentDisplayed ? 'border-radius:2px 2px 0px 0px;' : ''"
        >
            <div class="post-description">
                <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="459px"
                    height="459px"
                    viewBox="0 0 459 459"
                    style="enable-background:new 0 0 459 459;"
                    xml:space="preserve"
                >
                    <g>
                        <g id="swap-vert">
                            <path
                                d="M331.5,357V178.5h-51V357H204l102,102l102-102H331.5z M153,0L51,102h76.5v178.5h51V102H255L153,0z"
                            />
                        </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                </svg>
                <div class="post-score">
                    {{ score }}
                </div>
                <div class="post-title">
                    {{ subredditPost.title }}
                </div>
            </div>
            <svg
                version="1.1"
                id="Capa_2"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="451.847px"
                height="451.847px"
                viewBox="0 0 451.847 451.847"
                style="enable-background:new 0 0 451.847 451.847;"
                xml:space="preserve"
                v-if="subredditPost.selftext"
                :class="
                    isContentDisplayed ? 'rotate-forward' : 'rotate-backward'
                "
            >
                <g>
                    <path
                        d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                    />
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
            </svg>
        </div>
        <div
            class="post-content"
            v-show="isContentDisplayed && subredditPost.selftext"
            :style="isContentDisplayed ? 'border-radius:0px 0px 2px 2px;' : ''"
        >
            {{ subredditPost.selftext }}
        </div>
    </div>
</template>

<script>
export default {
    props: { subredditPost: { type: Object, required: true } },
    data() {
        return {
            isContentDisplayed: false,
        };
    },
    computed: {
        score() {
            return this.subredditPost.score > 1000
                ? `${Math.trunc(this.subredditPost.score / 1000)}k`
                : `${this.subredditPost.score}`;
        },
    },
};
</script>

<style>
.post {
    background: #2cb1bc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    padding: 5px 5px;
    border-radius: 2px;
    cursor: pointer;
    color: white;
}
.post-description {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 90%;
}
svg {
    width: 15px;
    height: 15px;
    fill: currentColor;
}
.post-score,
#Capa_1 {
    margin-right: 5px;
}
.post-score {
    width: 20%;
}
#Capa_1 {
    width: 5%;
}
.post-title {
    width: 80%;
}
#Capa_2 {
    width: 5%;
}
.post-content {
    background: #38bec9;
    color: white;
    padding: 5px 5px;
}
.rotate-forward {
    animation: rotate-forward 0.5s forwards;
}
.rotate-backward {
    animation: rotate-backward 0.5s forwards;
}
@keyframes rotate-forward {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(180deg);
    }
}
@keyframes rotate-backward {
    0% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
@media (min-width: 500px) {
    .post-score {
        width: 10%;
    }
}
</style>
