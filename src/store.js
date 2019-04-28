import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    password: '',
    isLogin: false,
    lang: ''
  },
  mutations: {
    setLoginData(state, payload) {
      state.isLogin = payload.isLogin
      state.username = payload.username
      state.password = payload.password
    },
    setLang(state, lang) {
      state.lang = lang
    }
  },
  actions: {
    saveUserDataToLS({commit}, userData) {
      if (localStorage) {
        localStorage.setItem('username', userData.username)
        localStorage.setItem('password', userData.password)
      }
      commit('setLoginData', {isLogin: true, ...userData})
    },
    getUserDataFromLS({commit}) {
      if (localStorage) {
        let username = localStorage.getItem('username')
        let password = localStorage.getItem('password')
        if (username && password) {
          commit('setLoginData', {isLogin: true, username, password})
        }
      }
    },
    logOut({commit}) {
      commit('setLoginData', {isLogin: false, username: '', password: ''})
      if (localStorage) {
        localStorage.removeItem('username')
        localStorage.removeItem('password')
      }
    },
    getLang({commit}) {
      let lang = window.navigator.language.slice(0, 2)
      if (localStorage && localStorage.getItem('lang')) {
        lang = localStorage.getItem('lang')
      }
      commit('setLang', lang)
    },
    setLang({commit}, lang){
      if (localStorage) {
        localStorage.setItem('lang', lang)
      }
      commit('setLang', lang)
    }
  }
})
