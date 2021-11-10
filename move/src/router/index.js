import Vue from 'vue'
import VueRouter from 'vue-router'
const Home=()=>import('../views/Home') 
const cinema=()=>import('../views/cinema/cinema') 
const information=()=>import('../views/information/information')
const movie=()=>import('../views/movie/movie')
const addres=()=>import('../views/addres/addres')
const xiang=()=>import('../views/xiang/xiang')
const  photo=()=>import('../views/xiang/pooto/photo')
const deng=()=>import('../views/deng/deng')
const search=()=>import('../views/search/search')
const cimal=()=>import('../views/cinema/cimal/cimal')
const Ticket=()=>import('../views/Ticket/Ticket')
const searcht=()=>import('../views/searcht/searcht')
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.use(VueRouter)

const routes = [
  {
    name: 'default',
    path: '*',
    redirect: '/movie'
  },
  {
    name:'addres',
    path:"/addres",
    component:addres,
  },
  {
    path: '/movie',
    component: movie,
  },{
  path: '/home',
  name: 'Home',
  component: Home
}, {
  path: '/cinema',
  component: cinema,
}, {
  path: '/information',
  component: information
},{
  path:'/xiang',
  name:'xiang',
  component:xiang,
},
{
  path:"/photo",
  name:'photo',
  component:photo,
},{
   path:'/deng',
   name:'deng',
   component:deng
},{
  path:"/search",
  name:"search",
  component:search
},{
   path:'/cimal',
   name:"cimal",
   component:cimal
},{
   path:'/Ticket',
   name:'Ticket',
   component:Ticket
},{
  path:"/searcht",
  name:'searcht',
  component:searcht
}]

const router = new VueRouter({
  // mode: 'history',  //去掉url中的#
  routes
})

export default router