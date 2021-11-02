import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/home',
  name: 'Home',
  component: () => import('../views/Home.vue'),
  // children:[{
  //   path:'pieChart',
  //   name:'peiChart',
  //   component:()=> import('../views/pieChart')
  // }]
},{
  path:'/pieChart',
  name:'pieChart',
  component:()=> import('../views/PieChart.vue')
},{
  path:'/animation',
  name:'animation',
  component:()=> import('../views/AnimationDurationUpdate.vue')
},{
  path:'/dendrogram',
  name:'dendrogram',
  component:()=> import('../views/Dendrogram.vue')
},{
  path:'/xing',
  name:'xing',
  component:()=> import('../views/Xing.vue')
}]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router