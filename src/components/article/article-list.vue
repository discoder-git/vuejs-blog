<template lang="html">
    <div class="article-list">
        <div
        class="article-list__item content"
        v-for="article in articles"
        :key="article.id"
        @click="onLoadArticle(article.id)"
        >
            <h2>{{ article.title }}</h2>
            <div class="content__item" v-html="article.summary"></div>
            <div class="article-intro content__item">
                <div class="article-intro__item">
                    <div class="article-intro__title"><icon name="hashtag" scale="1"></icon></div>
                    <div class="article-intro__content">{{ article.section }}</div>
                </div>
                <div class="article-intro__item">
                    <div class="article-intro__title"><icon name="calendar" scale="1"></icon></div>
                    <div class="article-intro__content">{{ article.date }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        lang () {
            return this.$store.getters.lang
        },
        articles () {
            return this.$store.getters.loadedArticles(this.lang)
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

.article-list {
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

    .article-list {

        &__item {
            padding: 30px 15px;
        }
    }
}

@media only screen and (max-width: @screenSmall) {

    .article-list {

        &__item {
            padding: 20px 10px;
        }
    }
}
</style>
