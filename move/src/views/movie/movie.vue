<template>
  <div>
      <router-link to="addres">
    <div class="zhuan">
        <button>{{name}}<van-icon name="arrow-down" color="#fff" /></button>
    </div>
    </router-link>
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white"  >
      <van-swipe-item :key="item.bannerId" v-for="item in swipter"   @click="adu(item.actionData)">
        <img :src="item.imgUrl"  alt="" />
      </van-swipe-item>
    </van-swipe>
    <van-tabs title-active-color="red" line-width="57px" line-height="2px" border>
      <van-tab title="正在热映">
          <div class="aat">
            <ul class="ul">
              <li class="li" v-for="item in firm" :key="item.filmId">
                <img :src="item.poster"  @click="xiang(item.filmId)" />
                <div class="shoping">
                  <p>     
                    {{ item.name }} <van-tag color="#ccc">{{ item.filmType.name }}</van-tag>
                  </p>
                  <p>
                    观众评分<span>{{ item.grade }}</span>
                  </p>
                  <p>
                    <span class="zhu">主演:</span><span class="van-ellipsis"
                      v-for="(item1, index) in item.actors"
                      :key="index"
                      >{{ item1.name }}
                    </span>
                  </p>
                  <p>
                    {{ item.nation }}<span>{{ item.runtime }}</span
                    >分钟
                  </p>
                </div>
               <van-button plain  color="coral"  size="mini" @click="fimes(item.filmId)">&nbsp;购票&nbsp; </van-button>
              </li>
            </ul>
          </div>
      </van-tab>
      <van-tab title="即将上映">
          <div class="aat">
            <ul class="ul">
              <li class="lit" v-for="item in offirm" :key="item.filmId" >
               <img :src="item.poster"  @click="xiang(item.filmId)" />
                <div class="shoping  shou" >
                  <p>     
                    {{ item.name }} <van-tag color="#ccc">{{ item.filmType.name }}</van-tag>
                  </p>
                  <p>
                    <span class="zhu">主演:</span><span class="van-ellipsis"
                      v-for="(item1, index) in item.actors"
                      :key="index"
                      >{{ item1.name }}
                    </span>
                  </p>
                  <p>
                    上映日期<span>周二 8月12日</span>
                  </p>
                </div>
              <van-button plain  color="coral"  size="mini"  v-show="item.isPresale ? false : true" @click="fimes(item.filmId)">&nbsp;购票&nbsp; </van-button>
              </li>
            </ul>
          </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swipter: {}, //轮播图
      firm: {}, //热映列表数据
      offirm:{}, //待映列表数据
      homr:[],
      cityId:'',
      name:"",
      num:'',
      pageNum:1,
      total:0
    };
  },
  created: function () {
    this.dataolist();
    this.uplaolist();
  },
  mounted(){
        this.$http({
        url: `/gateway?cityId=${this.cityId}&pageNum=2&pageSize=10&type=1&k=4066773`,
        type: "get",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"16280457416358248110161921"}',
          "X-Host": " mall.film-ticket.film.list",
        },
      }).then((res) => {
        // console.log(res);
        this.total = res.data.data.total
        // console.log(this.total);
        this.firm = res.data.data.films
        // console.log(this.firm);
      });
      this.$http({
            url:`gateway?cityId=${this.cityId}&pageNum=${this.pageNum}&pageSize=10&type=2&k=2729749`,
            headers:{
              'X-Client-Info':' {"a":"3000","ch":"1002","v":"5.0.4","e":"16280457416358248110161921","bc":"110100"}',
              'X-Host':'mall.film-ticket.film.list'  
            }
        }).then((res)=>{
            // console.log(res);
            this.offirm =res.data.data.films
            // console.log(this.offirm);
        })
          window.addEventListener('scroll',this.a)
  },
  methods: {
    dataolist() {
      this.name =localStorage.getItem('name') 
      this.cityId =localStorage.getItem('ciind')
      console.log(this.cityId);
      this.$http({
        url: `/gateway?type=2&cityId=${this.cityId}&k=2786397`,
        type: "get",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"16280457416358248110161921"}',
          "X-Host": "mall.cfg.common-banner",
        },
      }).then((res) => {
        this.swipter = res.data.data;
        // console.log(this.swipter);
      });
    },
    a(){
      var a = document.documentElement.scrollTop;
      var b= document.documentElement.clientHeight
      var c = document.documentElement.scrollHeight;
      if(c-a-b <1){
        this.pageNum = this.pageNum + 1
        if(this.pageNum > this.total/10 +1)  return
         this.$http({
        url: `/gateway?cityId=${this.cityId}&pageNum=${this.pageNum}&pageSize=10&type=1&k=4066773`,
        type: "get",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"16280457416358248110161921"}',
          "X-Host": " mall.film-ticket.film.list",
        },
      }).then(res=>{
         this.firm =[...this.firm,...res.data.data.films]
      })

     }
  },
    uplaolist(){
        this.$http({
            url:`gateway?cityId=${this.cityId}&pageNum=${this.pageNum}&pageSize=10&type=2&k=2729749`,
            headers:{
              'X-Client-Info':' {"a":"3000","ch":"1002","v":"5.0.4","e":"16280457416358248110161921","bc":"110100"}',
              'X-Host':'mall.film-ticket.film.list'  
            }
        }).then((res)=>{
            // console.log(res);
            this.offirm = [...this.offirm,...res.data.data.films]
            // console.log(this.offirm);
        })
    },
    xiang(filmId){
        this.$router.push({path:"/xiang",query:{filmId}})
    },
    adu(filmId){
         filmId =parseInt(filmId.substring(15).replace('"'," ").replace('}',"")) 
         this.$router.push({path:"/xiang",query:{filmId}});
    },
    fimes(filmId){
      console.log(filmId);
      this.$router.push({path:'/Ticket',query:{filmId}})
    }
   
  },
};
</script>
<style scoped>
*{
    padding: 0px;
    margin: 0px;
}

.zhuan{
    position: absolute;
    width: 45px;
    height: 26px;
    border-radius: 15px;
    background:rgba(0, 0, 0, 0.4);
    text-align: center;
    line-height: 26px;
    font-size: 12px;
    top: 12px;
    left: 10px;
    z-index: 999;
}
.zhuan button{
    background: none !important;
    border: none;
    color: whitesmoke ;
}
.my-swipe {
  width: 100%;
  height: 200px;
  margin-bottom: 30px;
}
.my-swipe img {
  width: 100%;
  height: 100%;
}
.aat {
  width: 94%;
  height: auto;
  /*  */
}
.ul {
  width: 100%;
  height: 100%;
  margin-bottom:30px;
}
.li {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin: 10px;
  margin-top:30px;
  position: relative;
}
.shou{
    margin-left:10px;
}
.but{
   position: absolute;
   right: 15px;
}
.lit{
  width: 100%;
  display: flex;
  align-items: center;
  height: 100px;
  margin: 10px;
  margin-top:30px;
}
.lit a:nth-child(1) {
  display: block;
  width: 20%;
  height: 100%;
}
.lit img {
  width: 20%;
  height: 100%;
}
.li img {
  width: 20%;
  height: 100%;
}
.zhu{
    display: inline-block;
    position: relative;
    top: -5px;
}
.shoping p {
  margin: 1px;
  font-size: 14px;
  color: #666666;
  width: 100%;
}
.van-ellipsis{
    display: inline-block;
    width: 42px;
}

.shoping p:nth-child(1) {
  font-size: 16px;
  color: black;
}

</style>