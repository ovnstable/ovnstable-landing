import Vue from 'vue';
import Vuex from 'vuex';
import mainUI from "./modules/main/ui";
import mainData from "./modules/main/data";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        mainUI,
        mainData,
    }
});
