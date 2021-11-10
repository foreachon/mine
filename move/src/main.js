import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant)
//引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//请求拦截器
axios.interceptors.request.use(
  config=>{
     //改变vuex中的isloading转态数据，当true，loading显示
     store.state.isLoading = true
     return config
  },
  error=>{
     return Promise.error(error);
  }
)

//响应拦截器
axios.interceptors.response.use(
   response=>{
      //如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
      //否则的话抛出异常
      if(response.status === 200){
         //logading隐藏
         store.state.isLoading = false
         return Promise.resolve(response)
      }else{
        return Promise.reject(response)
      }
   }
)

// import 'swiper/dist/css/swiper.css';

Vue.prototype.$http = axios;
Vue.prototype.$http.defaults.baseURL ="https://m.maizuo.com"

Vue.config.productionTip = false

//使用prototype继承一个backBefor方法
Vue.prototype.backBefor = () => {
  window.history.back(-1)
}

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
