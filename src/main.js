import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as echarts from  'echarts'
import dataV from '@jiaminghi/data-view'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(dataV)
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
