import Vue from 'vue'
import Vuex from 'vuex'
import store from './vuex/store.js'
import App from './App.vue'

Vue.use(Vuex);

/* eslint-disable no-new */
const app = new Vue({
    el: 'body',
    store,
    components: {
        App
    }
});
