<template lang="html">
    <div class="components-list">
        <shared-intro pageName="home"></shared-intro>
        <shared-title text="Последнее в блоге"></shared-title>
        <article-list-concise></article-list-concise>
    </div>
</template>

<script>
import ArticleListConcise from '../article/article-list-concise.vue'

export default {
    components: {
        ArticleListConcise
    }
}
</script>
