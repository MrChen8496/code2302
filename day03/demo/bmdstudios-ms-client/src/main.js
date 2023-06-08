import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 定义全局变量，直接存入Vue.prototype
import BASE from '@/http/BaseUrl'
Vue.prototype.UPLOADURL = BASE.UPLOADURL


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')