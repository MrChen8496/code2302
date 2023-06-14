import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityname: '北京',
    user: null
  },
  getters: {
  },
  mutations: {
    /** 更新state.user信息 
     *  payload: 用户对象
     */
    updateUser(state, payload){
      state.user = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
