import Vue  from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        config: {
            online: false,
            lang: 'ru'
        },
        page: {
            home: {
                config: {},
                ru: {
                    intro: {
                        title: 'Привет!👋',
                        subTitle: 'Моё имя Назар Линовецкий, я фронт-енд разработчик и проектировщик веб-интерфейсов.',
                        text: '<p>Я специализируюсь на создании приложений, сайтов и их компонентов для больших и малых проектов. Мой опыт - это практические знания о проектировании и разработке понятных пользовательских интерсфесов с упором на визуальную простоту, качественный код и типографику.</p><p>В основном я работаю с REST приложениями и вебсайтами на Vue.js и Javascript. Если вы в поисках качественного решения для вашей текущей задачи - смело пишите об этом мне на почту. Я открыт для новых проектов и любого вида плодотворного сотрудничества.</p><p>В свободное время я пишу в блог, где публикую обучающие статьи по широкому кругу веб-технологий, слушаю музыку, занимаюсь йогой и велоспортом.</p>'
                    }
                },
                en: {
                    intro: {
                        title: 'Hello!👋',
                        subTitle: 'My name is Nazar Linovetskiy and I am creative front-end developer.',
                        text: '<p>I specialise in intuitive, easy to use and beautiful responsive websites for projects both large and small that work on any type and size of device. My work has a heavy leaning towards simplicity and typography with a gimmick free focus on content and concise communication.</p>'
                    }
                }
            },
            article: {
                config: {},
                ru: {
                    intro: {
                        title: 'Блог',
                        text: '<p>Статьи, уроки, дайджесты…</p>'
                    }
                },
                en: {
                    intro: {
                        title: 'Blog',
                        text: '<p>Articles, Lessons, Digests…</p>'
                    }
                }
            },
            aboutProject: {
                config: {},
                ru: {
                    intro: {
                        title: 'О проекте'
                    }
                },
                en: {
                    intro: {
                        title: 'About Project'
                    }
                }
            },
            changelog: {
                config: {},
                ru: {
                    intro: {
                        title: 'Список изменений'
                    }
                },
                en: {
                    intro: {
                        title: 'Changelog'
                    }
                }
            }
        },
        overlay: {
            active: false
        },
        navigation: {
            active: false
        },
        informer: {
            active: true,
            ru: {
                message: 'Хорошего дня, уважаемый пользователь! Заглядывай сюда ещё. ;-)'
            },
            en: {
                message: 'Have a nice day! ;-)'
            }
        },
        loadedArticles: [
            {
                id: 'hello-world-with-vuejs',
                title: 'Hello World вместе с Vue.js',
                summary: "<p>В прошедшем 2017 году <a href='https://ru.vuejs.org/' title='Официальный сайт Vue.js'>Vue.js</a> приобрел много фанатов среди разработчиков по всему миру и практически догнал <a href='https://reactjs.org/' title='Официальный сайт React.js'>React.js</a> по количеству звезд на <a href='https://github.com/collections/front-end-javascript-frameworks' title='Collection: Front-end Javascript Frameworks'>Github</a>. Это действительно хороший инструмент для создания <a href='https://ru.vuejs.org/v2/guide/reactivity.html' title='Подробно о реактивности во Vue.js'>реактивных</a> компонентов. Он лёгок в освоении и дает возможность постепенной интеграции в проект.</p>",
                text: "<p>В прошедшем 2017 году <a href='https://ru.vuejs.org/' title='Официальный сайт Vue.js'>Vue.js</a> приобрел много фанатов среди разработчиков по всему миру и практически догнал <a href='https://reactjs.org/' title='Официальный сайт React.js'>React.js</a> по количеству звезд на <a href='https://github.com/collections/front-end-javascript-frameworks' title='Collection: Front-end Javascript Frameworks'>Github</a>. Это действительно хороший инструмент для создания <a href='https://ru.vuejs.org/v2/guide/reactivity.html' title='Подробно о реактивности во Vue.js'>реактивных</a> компонентов. Он лёгок в освоении и дает возможность постепенной интеграции в проект.</p><p>В отличии от того же React, который изначально проектировался под внутренние нужды Facebook, Vue.js ориентируется на общепринятые концепции современных веб технологий. Архитектура фреймворка во многом следует спецификации <a href='https://www.webcomponents.org/' title='Официальный сайт Web Components'>Web Components</a>, нативную браузерную поддержку которых мы все надеемся увидеть в ближайшем будущем. Это означает, что уже сейчас вы можете экспериментировать с вашими приложениями, реализуя модульный подход к построению внутренней архитектуры.</p><p>Итак, что делает большинство разработчиков, знакомясь с новой технологией? - Правильно, выводят <em>“Hello world”</em>. Мы не будем менять традиции и начнем именно с этого примера, после чего, разберем некоторые интересные особенности представленного скрипта:</p><p><iframe height='265' scrolling='no' title='Hello World with Vue.js' src='//codepen.io/scriptroom-examples/embed/MrEjMV/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/scriptroom-examples/pen/MrEjMV/'>Hello World with Vue.js</a> by Nazar Linovetskiy (<a href='https://codepen.io/scriptroom-examples'>@scriptroom-examples</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe></p><p>Теперь по порядку:</p><ul><li>Первым делом мы создаем <em>.html</em> документ и добавляем туда некоторую дефолтную разметку.</li><li>В блок с <em>id=”app”</em> монтируется наше приложение.</li><li>Внутри у нас есть заголовок <em>h1</em> содержащий <a href='https://en.wikipedia.org/wiki/Mustache_(template_system)' title='Wikipedia: Mustache (template system)'>Mustache</a> конструкцию со ссылкой на некоторые данные из Vue.</li><li>За ним мы подключаем саму библиотеку Vue.js, используя <a href='https://cdnjs.com/' title='Официальный сайт cdnjs.'>cdnjs</a>.</li><li>Далее мы создаем новых экземпляр vue. Свойство <em>el</em> указывает на точку монтирования объекта.</li><li>Наконец, мы предоставляем данные необходимые для объекта данных. В нашем случае мы возвращаем свойство <em>msg</em>, в которое мы предварительно записали строковое значение.</li></ul><p>В результате описанных выше действий - свойство <em>msg</em> стало реактивным. Это означает, что Vue.js сам следит за его состоянием и при изменении значения - будет вызван повторный рендеринг тех компонентов, данные которых связаны с этим свойством.</p>",
                date: '2018-01-04',
                section: 'javascript'
            }
        ]
    },
    mutations: {
        setOverlayActive (state, payload) {
            state.overlay.active = payload
        },
        setNavigationActive (state, payload) {
            state.navigation.active = payload
        },
        setInformerActive (state, payload) {
            state.informer.active = payload
        }
    },
    actions: {
        setOverlayActive ({commit}, payload) {
            commit('setOverlayActive', payload)
        },
        setNavigationActive ({commit}, payload) {
            commit('setNavigationActive', payload)
        },
        setInformerActive ({commit}, payload) {
            commit('setInformerActive', payload)
        }
    },
    getters: {
        page (state) {
            return (pageName) => {
                return state.page[pageName]
            }
        },
        overlayActive (state) {
            return state.overlay.active
        },
        navigationActive (state) {
            return state.navigation.active
        },
        informer (state) {
            return state.informer
        },
        loadedArticles (state) {
            return state.loadedArticles.sort((articleA, articleB) => {
                return articleA.date > articleB.date
            })
        },
        featuredArticles (state, getters) {
            return getters.loadedArticles.slice(0, 4)
        },
        loadedArticle (state) {
            return (articleId) => {
                return state.loadedArticles.find((article) => {
                    return article.id === articleId
                })
            }
        }
    }
});
