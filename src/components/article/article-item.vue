<template lang="html">
    <div class="article content">
        <h1>{{ article.title }}</h1>
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
        <div class="content__item" v-html="article.text"></div>
    </div>
</template>

<script>
export default {
    props: ['article']
}
</script>
