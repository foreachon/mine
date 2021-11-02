<template>
  <div id="app">
    <Home></Home>
    <router-view />
  </div>
</template>
<script>
import Home from './views/Home.vue'
export default {
    data(){
      return{
         
      }
    },
    components:{
      Home
    }
}
</script>
<style>
</style>
