<template lang="html">
    <div id="app" class="wrapper">
        <header class="header">
            <div class="header__item">
                <navigation-toggle></navigation-toggle>
            </div>
            <div class="header__item">
                <router-link to="/">
                    <div class="logo">
                        <span class="logo__inner">Nazar Linovetskiy</span>
                    </div>
                </router-link>
            </div>
            <div class="header__item">
                <button class="button button--icon" title="Site settings will be available soon..." disabled>
                    <icon name="cog" scale="2"></icon>
                </button>
            </div>
        </header>
        <navigation-body></navigation-body>
        <shared-informer
        v-if="informer.active"
        :message="informer.ru.message"
        @dismissed="onDismissed"
        ></shared-informer>
        <main class="main" role="main">
            <router-view></router-view>
        </main>
        <footer class="footer">
            <div class="footer__item">
                <ul class="list">
                    <li class="list__item">
                        <router-link to="/about-project">О проекте</router-link>
                    </li>
                    <li class="list__item">
                        <router-link to="/changelog">Изменения</router-link>
                    </li>
                </ul>
            </div>
            <div class="footer__item">
                <ul class="list">
                    <li class="list__item">
                        <a href="https://www.linkedin.com/in/nazar-linovetskiy/">LinkedIn</a>
                    </li>
                    <li class="list__item">
                        <a href="https://github.com/discoder-git">GitHub</a>
                    </li>
                    <li class="list__item">
                        <a href="https://www.upwork.com/o/profiles/users/_~018e4fd31af9ed3b05/">Upwork</a>
                    </li>
                </ul>
            </div>
            <div class="footer__item">
                <small>Copyright 2017 ✌️+❤️</small>
            </div>
        </footer>
        <layout-overlay v-if="overlayActive"></layout-overlay>
    </div>
</template>

<script>
import NavigationBody   from './components/navigation/navigation-body.vue'
import NavigationToggle from './components/navigation/navigation-toggle.vue'
import LayoutOverlay    from './components/layout/layout-overlay.vue'

export default {
    name: 'app',
    computed: {
        informer () {
            return this.$store.getters.informer
        },
        overlayActive () {
            return this.$store.getters.overlayActive
        }
    },
    methods: {
        onDismissed () {
            this.$store.dispatch('setInformerActive', false)
        }
    },
    components: {
        NavigationBody,
        NavigationToggle,
        LayoutOverlay
    }
}
</script>

<style lang="less">
@import (reference) "./less/vars.less";
@import (reference) "./less/mixins.less";

/* START: Reset Default Styles */
html, body, div, span, applet,
object, iframe,
h1, h2, h3, h4, h5, h6, p,
blockquote, pre,
a, abbr, acronym, address, big,
cite, code, del, dfn, em,
img, ins, kbd, q, s,
samp, small, strike,
strong, sub, sup, tt,
var, dl, dt, dd, ol, ul,
li, fieldset, form, label,
legend, table, caption,
tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-weight: inherit;
    font-style: inherit;
    font-family: inherit;
    font-size: 100%;
    vertical-align: baseline;
}
/* END: Reset Default Styles */
/* START: General */
html {
    height: 100%;
    background: @colorBasicAir;
    box-sizing: border-box;
}

 *, *:before, *:after {
    box-sizing: inherit;
}

 body {
     height: 100%;
     color: @colorBasicGray;
     font-family: 'Average', serif;
     -webkit-text-size-adjust: 100%;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     font-size: 20px;
     line-height: 1.6;
}

a {
    color: @colorBasicBlue;

    &:hover {
        color: @colorBasicBlueHover;
    }
}

img {
    display: block;
    width: 100%;
}

ul, ol {
    padding: 0 0 0 40px;
}

strong {
    font-weight: 700;
}

em {
    background: @colorBasicYellow;
    border-bottom: 1px solid @colorBasicYellowDark;
}

pre {
    overflow: auto;
    white-space: pre-wrap;
    tab-size: 2;
    background: @colorBasicAir;
    border-bottom: 1px solid @colorBasicAirDark;
    padding: 20px 10px;
    box-shadow: 0px 0px 5px 0px @colorBasicBoxShadowLight;
}

iframe {
    display: block;
}

::selection {
      background: @colorBasicYellowDark;
      color: @colorBasicWhite;
      text-shadow: none;
}
/* END: General */
/* START: Typography */
h1, h2, h3, h4, h5, h6 {
    color: @colorBasicBlueDark;
    font-family: 'Open Sans', sans-serif;
}

h1 {
    font-size: 54px;
    line-height: 72px;
    font-weight: 800;
}

h2 {
    font-size: 34px;
    line-height: 46px;
    font-weight: 700;
}

h3 {
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
}

.content {

    &__item,
    & h1,
    & h2,
    & h3,
    p,
    ul,
    pre {
        margin: 0 0 40px 0;

        &:last-child {
            margin: 0;
        }
    }
}
/* END: Typography */
/* START: Form Elements */
button,
input[type="button"] {
    padding: 0;
    border: none;
    display: inline-block;
    font-size: 1em;
    line-height: 1.6;
    cursor: pointer;
}

input,
textarea {
    font-size: 1em;
    line-height: 1.6;
}

label {
    display: block;
}

.form {

    &__item {
        margin: 0 0 10px 0;

        &:last-child {
            margin: 0;
        }
    }
}

.button {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    font-family: 'Average', serif;
    background: none;
    cursor: pointer;

    &:disabled {
        color: @colorBasicGrayLight;

        &:hover {
            color: @colorBasicGrayLight;
        }
    }

    &--dark {
        color: @colorBasicGray;

        &:hover {
            color: @colorBasicGreenDark;
        }
    }

    &--light {
        color: @colorBasicWhite;

        &:hover {
            color: @colorBasicGreenDark;
        }
    }

    &--icon {
        width: 34px;
        height: 34px;
    }
}
/* END: Form Elements */
/* START: General Blocks Layout */
.wrapper {
    display: grid;
    grid-template-columns: minmax(320px, 1024px);
    justify-content: center;
}

.header {
    position: fixed;
    z-index: 997;
    top: 0;
    left: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 34px 1fr 34px;
    grid-column-gap: 20px;
    padding: 20px;
    background: @colorBasicWhite;
    border-bottom: 1px solid @colorBasicGrayLight;
    box-shadow: 0px 0px 10px 0px @colorBasicBoxShadow;
}

.main {
    background: @colorBasicWhite;
    padding: 80px;
    margin: 160px 0 0;
}

.footer {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    background: #fff;
    border-top: 1px solid @colorBasicGrayLight;
    padding: 20px 80px;
    margin: 0 0 80px;
}

.components-list {
    display: grid;
    grid-row-gap: 80px;
}

.logo {
    display: inline-block;
    vertical-align: middle;

    &__inner {
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        background: @colorBasicYellow;
        text-shadow: 2px 2px 2px #fff;

        &:hover {
            background:@colorBasicYellowDark;
        }
    }
}

.article-intro {
    color: @colorBasicGrayLight;

    &__item,
    &__title,
    &__content {
        display: inline;
    }

    &__item {
        margin: 0 10px 0 0;

        &:last-child {
            margin: 0;
        }
    }
}
/* END: General Blocks Layout */
/* START: Help classes */
.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
}
/* END: Help classes */
/* START: Code Highlighting */
.highlighting {
    color: #6C7757;
    padding: .9em .5em;

    &__comment {
        color: #bbc6a7;
    }

    &__meta {
        color: #DC3958;
    }
}

.highlighting-vue {
    color: #6C7757;
    padding: .9em .5em;

    &__comment {
        color: #bbc6a7;
    }
}

.highlighting-js {
    color: #6C7757;
    padding: .9em .5em;

    &__comment {
        color: #bbc6a7;
    }

    &__keyword {
        color: #81ba0e;
    }

    &__string {
        color: #2a9e7d;
    }

    &__number {
        color: #e2a200;
    }

    &__attr {

    }

    &__built-in {
        color: #F1C553;
    }
}
/* END: Code Highlighting */
/* START: Media Queries */
@media only screen and (max-width: @screenMiddle) {
    /* START: Typography */
    .content {

        &__item,
        & h1,
        & h2,
        & h3,
        p,
        ul,
        pre {
            margin: 0 0 30px 0;
        }
    }
    /* END: Typography */
    /* START: General Blocks Layout */
    .main {
        margin: 80px 0 0;
        padding: 60px;
    }

    .footer {
        margin: 0;
        padding: 20px 60px;
    }

    .components-list {
        grid-row-gap: 60px;
    }
    /* END: General Blocks Layout */
}

@media only screen and (max-width: @screenSmall) {
    /* START: General */
    body {
        font-size: 18px;
    }
    /* END: General */
    /* START: Typography */
    h1 {
        font-size: 42px;
        line-height: 56px;
    }

    h2 {
        font-size: 26px;
        line-height: 36px;
    }

    h3 {
        font-size: 20px;
        line-height: 28px;
    }

    .content {

        &__item,
        & h1,
        & h2,
        & h3,
        p,
        ul,
        pre {
            margin: 0 0 20px 0;
        }
    }
    /* END Typography */
    /* START: General Blocks Layout */
    .main {
        margin: 76px 0 0;
        padding: 40px;
    }

    .footer {
        grid-template-columns: 1fr;
        padding: 20px 40px;
    }

    .components-list {
        grid-row-gap: 40px;
    }
    /* END: General Blocks Layout */
}

@media only screen and (max-width: @screenExtraSmall) {
    /* START: General Blocks Layout */
    .main {
        padding: 40px 20px;
    }

    .footer {
        padding: 20px;
    }
    /* END: General Blocks Layout */
}
/* END: Media Queries */
</style>
