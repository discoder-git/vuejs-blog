<template lang="html">
    <a class="button button--icon button--dark" @click.prevent="onNavigationOpen">
        <icon name="bars" scale="2"></icon>
    </a>
</template>

<script>
export default {
    methods: {
        onNavigationOpen () {
            this.$store.dispatch('setOverlayActive', true)
            this.$store.dispatch('setNavigationActive', true)
        }
    }
}
</script>
