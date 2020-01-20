import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  actions: {
    addCart (context, payload) {
      let oldproduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldproduct) {
        context.commit('addCounter', oldproduct)
      } else {
        payload.count = 1
        context.commit('addToCart', payload)
      }
    }
  },
  mutations: {
    addCounter (state, payload) {
      payload.count++
    },
    addToCart (state, payload) {
      state.cartList.push(payload)
    }
  },
  getters: {
    getCartListLength (state) {
      return state.cartList.length
    },
    getCartList (state) {
      return state.cartList
    }
  },
  modules: {
  }
})
