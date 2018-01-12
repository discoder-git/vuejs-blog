import Vue              from 'vue'
import Router           from 'vue-router'

// services
import PageNotFound     from '../components/page/page-404.vue'

// sections
import PageHome         from '../components/page/page-home.vue'
import PageAboutProject from '../components/page/page-about-project.vue'
import PageChangelog    from '../components/page/page-changelog.vue'

// blog
import PageArticleList  from '../components/page/page-article-list.vue'
import PageArticleItem  from '../components/page/page-article-item.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '*',
            name: 'PageNotFound',
            component: PageNotFound
        },
        {
            path: '/',
            name: 'PageHome',
            component: PageHome
        },
        {
            path: '/about-project',
            name: 'PageAboutProject',
            component: PageAboutProject
        },
        {
            path: '/changelog',
            name: 'PageChangelog',
            component: PageChangelog
        },
        {
            path: '/blog',
            name: 'PageArticleList',
            component: PageArticleList
        },
        {
            path: '/blog/:id',
            name: 'PageArticleItem',
            props: true,
            component: PageArticleItem
        }
    ],
    mode: 'history'
})
