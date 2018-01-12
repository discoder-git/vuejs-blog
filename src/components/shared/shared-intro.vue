<template lang="html">
    <div class="intro content">
        <h1 v-if="page.ru.intro.title">{{ page.ru.intro.title }}</h1>
        <h2 v-if="page.ru.intro.subTitle">{{ page.ru.intro.subTitle }}</h2>
        <div v-if="page.ru.intro.text" v-html="page.ru.intro.text"></div>
    </div>
</template>

<script>
export default {
    props: ['pageName'],
    computed: {
        page () {
            return this.$store.getters.page(this.pageName)
        }
    }
}
</script>

<style lang="less">
@import (reference) "../../less/vars.less";

.intro {
    padding: 80px;
    margin: -80px -80px 0;
    background-color: @colorBasicGreen;
    background-image: linear-gradient(rgba(112, 193, 179, .5), rgba(26, 88, 114, .88)), url('/src/assets/nazar_linovetskiy.jpg');
    background-position: top center;
    background-size: cover;

    h1, h2, p {
        font-family: 'Open Sans', sans-serif;
        color: @colorBasicYellowDark;
    }

}

@media only screen and (max-width: @screenMiddle) {

    .intro {
        padding: 60px;
        margin: -60px -60px 0;
    }
}

@media only screen and (max-width: @screenSmall) {

    .intro {
        padding: 40px;
        margin: -40px -40px 0;
    }
}

@media only screen and (max-width: @screenExtraSmall) {

    .intro {
        padding: 40px 20px;
        margin: -40px -20px 0;
    }
}
</style>
