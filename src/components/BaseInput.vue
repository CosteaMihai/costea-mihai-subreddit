<template>
    <input
        placeholder="What do you want to find?"
        :value="value"
        @input="updateValue"
        v-bind="$attrs"
        v-on="listeners"
        required
        autocomplete="off"
    />
</template>

<script>
export default {
    props: {
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
        updateValue(product) {
            this.$emit('input', product.target.value);
        },
    },
};
</script>

<style scoped>
input {
    margin: 10px 20px;
    border: none;
    border-bottom: 2px solid #7069fa;
    width: 40%;
    text-align: center;
    padding: 5px 10px;
    transition: border 0.3s;
}
input:focus {
    outline: none;
    border-color: #3525e6;
}
@media only screen and (max-width: 640px) {
    input {
        width: 70%;
    }
}
</style>
