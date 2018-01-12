<template lang="html">
    <h2 class="section-title">
        <span class="section-title__inner">{{ text }}</span>
    </h2>
</template>

<script>
export default {
    props: ['text']
}
</script>

<style lang="less">
@import (reference) "../../less/vars.less";

.section-title {

    &__inner {
        display: inline-block;
        background: @colorBasicBlueDark;
        color: @colorBasicWhite;
    }
}
</style>
