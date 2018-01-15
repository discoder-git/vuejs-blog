<template lang="html">
    <nav class="navigation" :class="classObject" role="navigation">
        <ul class="navigation__list">
            <li class="navigation__item" v-for="link in links" :key="link.text" @click="onNavigationClose">
                <router-link class="navigation__link" :to="link.to">{{ link.text }}</router-link>
            </li>
        </ul>
        <a class="navigation__close-button button button--icon button--light" @click.prevent="onNavigationClose">
            <icon name="times" scale="2"></icon>
        </a>
    </nav>
</template>

<script>
export default {
    computed: {
        links () {
            let links = [
                { text: 'Главная', to: '/' },
                { text: 'Блог', to: '/blog' }
            ];
            return links;
        },
        navigationActive () {
            return this.$store.getters.navigationActive
        },
        classObject () {
            return {
                'navigation--active': this.navigationActive
            }
        }
    },
    methods: {
        onNavigationClose () {
            this.$store.dispatch('setOverlayActive', false)
            this.$store.dispatch('setNavigationActive', false)
        }
    }
}
</script>

<style lang="less">
@import (reference) "../../less/vars.less";

.navigation {
    position: fixed;
    z-index: 999;
    top: 0;
    bottom: 0;
    width: 300px;
    left: -340px;
    padding: 20px;
    min-height: 100%;
    background: @colorBasicGreenDark;
    background-image: url('/src/assets/pattern_dark.jpg');
    transition: transform .3s ease-in-out;

    &.navigation--active {
        transform: translateX(340px);
    }

    &__close-button {
        position: absolute;
        top: 20px;
        left: 20px;
    }

    &__list {
        margin: 80px 0 0;
        padding: 0;
    }

    &__item {
        font-family: 'Open Sans', sans-serif;
        color: @colorBasicWhite;
        font-size: 2em;
        font-weight: 700;
        margin: 0 0 10px;
        list-style: none;

        &:last-child {
            margin: 0;
        }

        &:hover {
            background: rgba(255,255,255,.1);
        }
    }

    &__link {
        display: block;
        padding: 10px 20px;
        color: @colorBasicYellow;
        font-size: 34px;
        line-height: 46px;
        font-weight: 700;

        &:hover {
            color: @colorBasicYellowDark;
        }
    }
}
</style>
