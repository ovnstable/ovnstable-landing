import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from "./store/index.js";
import utils from "./plugins/utils";
import vuetify from './plugins/vuetify'
import router from './router/index'
import {axios} from './plugins/http-axios';
import moment from 'moment';
import '@mdi/font/css/materialdesignicons.css'
import VueObserveVisibility from 'vue-observe-visibility'
import VueGtm from '@gtm-support/vue2-gtm';
import VueYandexMetrika from 'vue-yandex-metrika'

Vue.use(Vuex)
Vue.use(VueObserveVisibility)

Vue.use(VueGtm, {
    id: 'GTM-TBCD9KR',
    enabled: true,
    vueRouter: router,
    debug: false,
});

Vue.use(VueYandexMetrika, {
    id: 86928835,
    router: router,
    env: process.env.NODE_ENV,
    options: {clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true}
})

Vue.prototype.$moment = moment;
Vue.prototype.$utils = utils;
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
    store,
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')
