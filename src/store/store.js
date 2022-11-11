import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // plugin: [createPersistedState({})],
    qrs: [],
  },
  getters: {},
  mutations: {
    // create a method that appends a new url object the state
    addQr(state, qr) {
      state.qrs?.push(qr);
    },
  },
  actions: {
    addQr({ commit }, qr) {
      return commit("addQr", qr);
    },
  },
});
