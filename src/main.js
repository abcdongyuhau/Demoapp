// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/js/rem'
import Swiper from 'swiper';
import DrawerLayout from 'vue-drawer-layout';
import store from './store';
Vue.use(DrawerLayout)
Vue.config.productionTip = false

//语言国际化
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

/* eslint-disable no-new */
//当需要翻译的内容少的时候
//const messages = {
//  zh: {
//    message: {
//      hello: '好好学习，天天向上！'
//    }
//  },
//  en: {
//    message: {
//      hello: 'good good study, day day up!'
//    }
//  }
//}
//const i18n = new VueI18n({
//  locale: 'en', // 语言标识
//  messages
//})

const i18n = new VueI18n({
    locale: 'en',  // 语言标识
    messages: {
        'zh': require('./common/js/zh'),
        'en': require('./common/js/en')
    }
})



new Vue({
  el: '#app',
  i18n,
  router:router,
  store: store,
  components: { App },
  template: '<App/>',
   /* 这句非常重要，否则预渲染将不会启动 */
    mounted () {
        document.dispatchEvent(new Event('render-event'))
    }

})
