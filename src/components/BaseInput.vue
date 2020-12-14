<template>
    <input
        placeholder="What do you want to find?"
        :value="value"
        @input="updateValue"
        v-bind="$attrs"
        v-on="listeners"
        autocomplete="off"
        :style="error ? 'border-color: red' : ''"
    />
</template>

<script>
export default {
    props: {
        error: {
            type: Boolean,
            required: true,
        },
        value: [String, Number],
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: this.updateValue,
            };
        },
    },
    methods: {
        updateValue(name) {
            this.$emit('input', name.target.value);
        },
    },
};
</script>

<style scoped>
input {
    position: relative;
    width: 100%;
    padding: 7px 0px;
    border: none;
    border-bottom: 1px solid #2cb1bc;
    text-align: center;
    transition: border 0.3s;
}
input:focus {
    outline: none;
    border-color: #14919b;
}
@media (min-width: 500px) {
    input {
        text-align: left;
        padding-left: 10px;
    }
}
</style>
