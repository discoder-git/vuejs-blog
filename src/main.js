// plugind and
import Vue               from 'vue'
import * as firebase     from 'firebase'
import Icon              from 'vue-awesome'
import router            from './router'
import { store }         from './store'
import DateFilter        from './filters/date'
import App               from './App.vue'
import SharedIntro       from './components/shared/shared-intro.vue'
import SharedTitle       from './components/shared/shared-title.vue'
import SharedInformer    from './components/shared/shared-informer.vue'

Vue.filter('date', DateFilter)
Vue.component('icon', Icon)
Vue.component('shared-intro', SharedIntro)
Vue.component('shared-title', SharedTitle)
Vue.component('shared-informer', SharedInformer)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
