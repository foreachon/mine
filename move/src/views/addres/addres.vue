<template>
  <div>
    <van-nav-bar
      title="当前城市-广州"
      left-text="返回"
      @click-left="backBefor()"
      left-arrow
    />
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      action-text
      show-action
      @search="onSearch"
      @cancel="onCancel"
      @click="serach()"
      shape="round"
      background="#DCDCDC"
    />
    <div class="mian">
      <div>
        <p class="font">定位当前的城市</p>
        <p>
          <button @click="banck(cheng.cityId,cheng.name)">{{cheng.name }}</button>
        </p>
      </div>
      <div>
        <p class="font">热门城市</p>
        <p>
          <button  @click="banck(item.cityId,item.name)"  v-for="item in host" :key="item.index" v-show="item.isHot === 0 ? false:true">{{item.name}}</button>
        </p>
      </div>
    </div>
    <van-index-bar highlight-color="#fb6463">
      <van-index-anchor :index="item.index" v-for="item in citit" :key="item.index">
        <b>{{item.index}}</b>
       <van-cell @click="banck(subitem.cityId,subitem.name)"  :title="subitem.name"  v-for="subitem in item.list" :key="subitem.cityId"/>
      </van-index-anchor>
    </van-index-bar>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      value: "",
      cheng:[],
      citit:[],
      host:[],
      row:{}
    };
  },
  created: function () {
    this.addlist();
    this.city();
  },
  computed:{
    getletter:function () {
     let leeters= [];
     for (let index= 65; index< 91; index++) {
      leeters.push(String.fromCharCode(index));
    }
    return leeters;
   }
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    },
    addlist() {
      this.$http({
        url: "/gateway?k=9620569",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"16280457416358248110161921","bc":"110100"}',
          "X-Host": "mall.film-ticket.city.locate",
        },
      }).then((res) => {
        console.log(res);
        this.cheng = res.data.data.city;
      });
    },
    city() {
      this.$http({
        url: "/gateway?k=8217546",
        headers: {
          "X-Client-Info":
            ' {"a":"3000","ch":"1002","v":"5.0.4","e":"16280457416358248110161921","bc":"110100"}',
          "X-Host": "mall.film-ticket.city.list",
        },
      }).then((res) => {
        console.log(res);
        //  this.handlist(res.data.data.cities)
        let handlist = res.data.data.cities
        this.host = res.data.data.cities
        // console.log(this.getletter);
        for (let index = 0; index < this.getletter.length; index++) {
             
            let arr = handlist.filter((item)=>{
               return  item.pinyin.charAt(0) === this.getletter[index].toLowerCase();
            })
            this.citit.push({
               'index':this.getletter[index],
                list:arr
            })  
        }
      console.log(this.citit);
      });
    },
    banck(cityId,name){
        //  this.row = {cityId,name}
       localStorage.setItem("ciind", cityId)
       localStorage.setItem('name', name)
        this.$router.push({path:'/movie'})
    },
    serach(){
        this.$router.push({path:"/search"})
    }
  },
};
</script>
<style>
* {
  padding: 0px;
  margin: 0px;
}
.mian {
  width: 100%;
  height: 200px;
  background-color: #fff !important;
}
.mian div {
  height: 50%;
  margin: 10px;
}
.mian div:nth-child(1) {
  height: 35% !important;
  margin-top: 0px !important;
}
.mian div button {
  margin: 10px;
  width: 100px;
  height: 30px;
  border: none;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
}
.font {
  color: #ccc;
  font-size: 12px;
}
</style>