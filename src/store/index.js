// @@ -1,98 +0,0 @@
import Vue from 'vue';
import Vuex from 'vuex';

//引入app.js
import app from './modules/app';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {

  },
  modules: {
    app
  }
});

export default store;
