<template lang="html">
    <div class="article-list-concise">
        <div
        class="article-list-concise__item content"
        v-for="article in articles"
        :key="article.id"
        @click="onLoadArticle(article.id)"
        >
            <h3>{{ article.title }}</h3>
            <div class="content__item" v-html="article.summary"></div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        articles () {
            return this.$store.getters.featuredArticles
        }
    },
    methods: {
        onLoadArticle (id) {
            this.$router.push(`/blog/${id}`)
        }
    }
}
</script>

<style lang="less">
@import (reference) "../../less/vars.less";

.article-list-concise {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top: 4px solid @colorBasicGreen;
    border-bottom: 4px solid @colorBasicGreen;

    &__item {
        padding: 40px 20px;

        &:hover {
            background: @colorBasicAir;
            cursor: pointer;
        }
    }
}

@media only screen and (max-width: @screenMiddle) {

    .article-list-concise {

        &__item {
            padding: 30px 15px;
        }
    }
}

@media only screen and (max-width: @screenSmall) {

    .article-list-concise {
        grid-template-columns: 1fr;

        &__item {
            padding: 20px 10px;
        }
    }
}
</style>
