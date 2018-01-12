<template lang="html">
    <div class="components-list">
        <shared-intro pageName="article"></shared-intro>
        <article-list></article-list>
    </div>
</template>

<script>
import ArticleList from '../article/article-list.vue'

export default {
    components: {
        ArticleList
    }
}
</script>
