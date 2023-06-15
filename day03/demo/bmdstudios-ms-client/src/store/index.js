import httpApi from '@/http'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import { Message } from 'element-ui'
import storage from '@/utils/Storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityname: '北京',
    user: storage.get(storage.KEY_USER),
    token: storage.get(storage.KEY_TOKEN)
  },

  getters: {
  },

  mutations: {

    /**  保存Token  */
    saveToken(state, payload){
      // 将token存入state与storage中
      state.token = payload
      storage.set(storage.KEY_TOKEN, payload)
    },

    /** 更新state.user信息 
     *  payload: 用户对象
     */
    updateUser(state, payload){
      state.user = payload
      if(payload){
        // 顺便向storage中存一份
        // sessionStorage.setItem('user', JSON.stringify(payload))
        storage.set(storage.KEY_USER, payload)
      }else {
        storage.remove(storage.KEY_USER)
        storage.remove(storage.KEY_TOKEN)
      }
    }
  },
  actions: {
    /**
     * 先执行登录请求，得到用户对象后，存入state
     * @param {Store} store  Vuex自动传入的Store对象
     * @param {Object} payload  用户传入的参数  {username:x, password:1}
     */
    login(store, payload){
      httpApi.adminApi.login(payload).then(res=>{
        console.log('登录结果', res)
        if(res.data.code==200){  // 登录 成功
          // 调用vuex的commit方法，更新用户信息
          store.commit('updateUser', res.data.data.user)       
          // 将token字符串也存起来
          store.commit('saveToken', res.data.data.token)

          router.push('/home/index')
        }else if(res.data.code==1001){  // 业务异常  提示
          Message({
            message:res.data.msg, 
            type:'warning'
          })
        }
      })
    }
  },
  modules: {
  }
})
