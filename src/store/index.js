import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    qrs: [
      {
        url: "https://www.google.com",
        generatedUrl:
          "https://www.qrtag.net/api/qr_4.png?url=https://www.google.com",
        createdAt: new Date().toDateString(),
      },
      {
        url: "https://www.ezinama.com",
        generatedUrl:
          "https://www.qrtag.net/api/qr_4.png?url=https://www.google.com",
        createdAt: new Date().toDateString(),
      },
    ],
  },
  getters: {
  },
  mutations: {
    // create a method that appends a new url object the state

  },
  actions: {
  },
  modules: {  
  }
})
