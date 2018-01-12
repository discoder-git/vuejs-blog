<template lang="html">
    <div class="informer">
        <button class="informer__close-button button button--icon" @click="onClose">
            <icon name="times" scale="1"></icon>
        </button>
        <div class="informer__text">{{ message }}</div>
    </div>
</template>

<script>
export default {
    props: ['message'],
    methods: {
        onClose () {
            this.$emit('dismissed');
        }
    }
}
</script>

<style lang="less">
@import (reference) "../../less/vars.less";

.informer {
    position: fixed;
    bottom: 20px;
    left: 20px;
    padding: 40px 54px 40px 20px;
    background: @colorBasicSea;
    font-style: italic;
    box-shadow: 0px 0px 10px 0px rgba(57, 73, 76, 0.35);

    &__close-button {
        position: absolute;
        top: 10px;
        right: 10px;
    }
}

@media only screen and (max-width: @screenMiddle) {

    .informer {
        padding: 30px 54px 30px 15px;
    }
}

@media only screen and (max-width: @screenSmall) {

    .informer {
        padding: 20px 54px 20px 10px;
    }
}
</style>
