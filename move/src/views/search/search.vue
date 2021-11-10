<template>
  <div>
    <van-nav-bar
      color="black"
      title="当前城市-"
      @click-left="shou()">
      <template #left>
        <van-icon name="cross" size="1.8em"  color='#000000'/>
      </template>
    </van-nav-bar>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      action-text
      show-action
      @search="onSearch"
      @cancel="onCancel"
      type='serch'
      @keypress="searchGoods"
      shape="round"
      background="#DCDCDC"
    />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
    >
      <van-cell v-for="item in list" :key="item.index" :title="item.name"  @click="goto(item.cityId,item.name)" />
    </van-list>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      value: "",
      list: [],
      loading: false,
      finished: false,
      resrult:[]
    };
  },
  created:function(){
  },
  methods: {
    searchGoods(event){
         if(event.keyCode == 13 && this.value != ""){
             this.$http({
                url: "/gateway?k=8217546",
                headers: {
                       "X-Client-Info":' {"a":"3000","ch":"1002","v":"5.0.4","e":"16280457416358248110161921","bc":"110100"}',
                       "X-Host": "mall.film-ticket.city.list",
                      },
      }).then(res =>{
        // console.log(res);
        this.resrult = res.data.data.cities
        // console.log(this.resrult);
        this.resrult.filter(item=>{
           if(item.name.indexOf(this.value) != -1){
              this.list.push(item)
           }
        })
        this.finished = true
        this.loading = true
        this.value =''
      })
    }
  },
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    },
    shou(){
      this.$router.push({path:"/movie"})
    },
    goto(cityId,name){
        localStorage.setItem("ciind", cityId)
        localStorage.setItem('name', name)
        this.$router.push({path:'/movie'})
    }
  },
};
</script>
<style>
</style>