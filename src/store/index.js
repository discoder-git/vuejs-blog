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
                ru: {
                    intro: {
                        title: 'Привет!👋',
                        subTitle: 'Моё имя Назар Линовецкий, я фронт-енд разработчик и проектировщик веб-интерфейсов.',
                        text: '<p>Я специализируюсь на создании приложений, сайтов и их компонентов для больших и малых проектов. Мой опыт - это практические знания о проектировании и разработке понятных пользовательских интерсфесов с упором на визуальную простоту, качественный код и типографику.</p><p>В свободное время я пишу в блог, где публикую обучающие статьи по широкому кругу веб-технологий, слушаю музыку, занимаюсь йогой и велоспортом.</p>',
                        image: '/src/assets/nazar_linovetskiy.jpg'
                    }
                },
                en: {
                    intro: {
                        title: 'Hello!👋',
                        subTitle: 'My name is Nazar Linovetskiy and I am creative front-end developer.',
                        text: '<p>I specialise in intuitive, easy to use and beautiful responsive websites for projects both large and small that work on any type and size of device. My work has a heavy leaning towards simplicity and typography with a gimmick free focus on content and concise communication.</p>',
                        image: '/src/assets/nazar_linovetskiy.jpg'
                    }
                }
            },
            article: {
                ru: {
                    intro: {
                        title: 'Блог',
                        subTitle: '',
                        text: '<p>Статьи, уроки, дайджесты…</p>',
                        image: ''
                    }
                },
                en: {
                    intro: {
                        title: 'Blog',
                        subTitle: '',
                        text: '<p>Articles, Lessons, Digests…</p>',
                        image: ''
                    }
                }
            },
            aboutProject: {
                ru: {
                    intro: {
                        title: 'О проекте',
                        subTitle: '',
                        text: '',
                        image: ''
                    }
                },
                en: {
                    intro: {
                        title: 'About Project',
                        subTitle: '',
                        text: '',
                        image: ''
                    }
                }
            },
            changelog: {
                ru: {
                    intro: {
                        title: 'Список изменений',
                        subTitle: '',
                        text: '',
                        image: ''
                    }
                },
                en: {
                    intro: {
                        title: 'Changelog',
                        subTitle: '',
                        text: '',
                        image: ''
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
            active: false,
            message: 'Have a nice day! ;-)'
        },
        loadedArticles: [
            {
                id: 'vuejs-blog-release-beta-0-2-1',
                title: 'Vuejs-blog release beta 0.2.1',
                summary: '<p>Vuejs-blog - это персональный SPA блог на Vue.js. Сегодня увидел свет первый релиз под версией beta 0.2.1. Был добавлен основной функционал и разделы сайта. Добро пожаловать на борт!</p>',
                text: '<p>Я рад представить вам первый релиз <strong>vuejs-blog</strong> beta v.0.2.1. Это полноценное Vue.js <abbr title="Single Page Application">SPA</abbr> реализующие основной функционал персонального блога.</p><p>В первый релиз вошли такие штуки:</p><ul><li>Добавлены основные разделы сайта.</li><li>Реализована выгрузка статей блога и основной информации по текущему разделу из локального хранилища данных.</li><li>Добавлена навигация.</li><li>Добавлен компонент “Последнее в блоге”.</li><li>Добавлены общие компоненты: “Заголовок”, “Интро”, “Информер”.</li><li>Подключено локальное хранилище данных Vuex и настроен роутинг.</li><li>Подключена база данных Firebase.</li><li>Настроен локальный сервер для разработки.</li><li>Реализована система сборки с помощью Webpack.</li><li>Проект использует <a href="https://www.w3.org/TR/css-grid-1/" title="перейти на w3.org">CSS Grid</a> и препроцессор LESS в качестве основы для реализации верстки большинства компонентов.</li></ul><p>Список основных библиотек:</p><ul><li><a href="https://vuejs.org/" title="перейти на vuejs.org">Vue</a> 2.5.2</li><li><a href="https://firebase.google.com/" title="перейти на firebase.google.com">Firebase</a> 4.7.0</li><li><a href="https://vuex.vuejs.org/" title="перейти на vuex.vuejs.org">Vuex</a> 3.0.1</li><li><a href="https://webpack.js.org/" title="перейти на webpack.js.org">Webpack</a> 3.6.0</li><li><a href="https://www.npmjs.com/package/webpack-dev-server" title="перейти на npmjs.com">Webpack Dev Server</a> 2.9.1</li><li><a href="http://lesscss.org/" title="lesscss.org">Less</a> 2.7.3</li></ul><p>Проект с открытым исходным кодом и распространяется под <a href="https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F_MIT" title="перейти на ru.wikipedia.org">MIT</a> лицензией. В данный момент ведется активная разработка, у меня есть много идей и задумок, которые планируется реализовать в ближайшее время. Следите за обновлениями! Так же я буду искренне рад вашим форкам, звездам и конструктивным комментариям на странице <a href="https://github.com/discoder-git/vuejs-blog" title="перейти на github.com">vuejs-blog</a> в GitHub.</p>',
                date: '2018-01-12',
                section: 'news'
            },
            {
                id: 'hello-world-with-vuejs',
                title: 'Hello World вместе с Vue.js',
                summary: "<p>В прошедшем году <a href='https://ru.vuejs.org/' title='перейти на ru.vuejs.org'>Vue.js</a> приобрел много фанатов среди разработчиков и практически догнал <a href='https://reactjs.org/' title='перейти на reactjs.org'>React.js</a> по количеству звезд на <a href='https://github.com/collections/front-end-javascript-frameworks' title='перейти на github.com'>Github</a>. Это действительно хороший инструмент для создания <a href='https://ru.vuejs.org/v2/guide/reactivity.html' title='перейти на ru.vuejs.org'>реактивных</a> компонентов. В уроке мы рассмотрим подключение vue.js и вывод информации на страницу.</p>",
                text: "<p>В прошедшем году <a href='https://ru.vuejs.org/' title='перейти на ru.vuejs.org'>Vue.js</a> приобрел много фанатов среди разработчиков и практически догнал <a href='https://reactjs.org/' title='перейти на reactjs.org'>React.js</a> по количеству звезд на <a href='https://github.com/collections/front-end-javascript-frameworks' title='перейти на github.com'>Github</a>. Это действительно хороший инструмент для создания <a href='https://ru.vuejs.org/v2/guide/reactivity.html' title='перейти на ru.vuejs.org'>реактивных</a> компонентов. Он лёгок в освоении и дает возможность постепенной интеграции в проект.</p><p>В отличии от того же React, который изначально проектировался под внутренние нужды Facebook, Vue.js ориентируется на современные стандарты. Архитектура фреймворка во многом следует спецификации <a href='https://www.webcomponents.org/' title='перейти на webcomponents.org'>Web Components</a>, нативную браузерную поддержку которых мы все надеемся увидеть в ближайшем будущем. Это означает, что уже сейчас вы можете экспериментировать с вашим приложением, внедряя модульные компоненты.</p><p>Итак, что делает большинство разработчиков, осваивая новую технологию? - Правильно, выводят <em>“Hello world”</em>. Мы не будем менять традиции и начнем именно с этого примера, после чего, разберем некоторые интересные особенности представленного скрипта:</p><p><iframe height='265' scrolling='no' title='Hello World with Vue.js' src='//codepen.io/scriptroom-examples/embed/MrEjMV/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/scriptroom-examples/pen/MrEjMV/'>Hello World with Vue.js</a> by Nazar Linovetskiy (<a href='https://codepen.io/scriptroom-examples'>@scriptroom-examples</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe></p><p>Теперь по порядку:</p><ul><li>Первым делом мы создаем <em>.html</em> документ и добавляем туда некоторую дефолтную разметку.</li><li>В блок с <em>id=”app”</em> монтируется наше приложение.</li><li>Внутри у нас есть заголовок <em>h1</em> содержащий <a href='https://en.wikipedia.org/wiki/Mustache_(template_system)' title='перейти на en.wikipedia.org'>mustache</a> конструкцию со ссылкой на некоторые данные из Vue.</li><li>После в теге <em>script</em> мы подключаем Vue.js, используя <a href='https://cdnjs.com/' title='перейти на cdnjs.com'>cdnjs</a>.</li><li>Далее мы создаем новых экземпляр vue. Свойство <em>el</em> указывает на точку монтирования объекта.</li><li>Наконец, мы предоставляем данные необходимые для объекта данных. В нашем случае мы возвращаем свойство <em>msg</em>, в которое мы предварительно записали строковое значение.</li></ul><p>В результате описанных выше действий - свойство <em>msg</em> стало реактивным. Теперь Vue.js сам следит за его состоянием и при изменении значения - будет вызван повторный рендеринг тех компонентов, данные которых связаны с этим свойством.</p>",
                date: '2018-01-12',
                section: 'vuejs'
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
