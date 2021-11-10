<template>
  <div class="xiang">
    <div class="niu"  @click="backBefor()">
        <van-icon name="arrow-left"  color='black'/>
    </div>
    <div class="img">
      <van-image width="100%" height="100%" :src="xiang.poster" />
    </div>
    <div class="wen">
      <div class="nu">
        <p>{{xiang.name}} &nbsp;<van-tag>{{name}}</van-tag></p>
        <p>{{xiang.grade}}<span>分</span></p>
      </div>
      <p>{{xiang.category}}</p>
      <p>2021-07-30上映</p>
      <p>{{xiang.nation}}|{{xiang.runtime}}分钟</p>
    </div>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="内容"  name="1">
         {{xiang.synopsis}}
      </van-collapse-item>
    </van-collapse>
    <div class="yan">
      <h4>演职人员</h4>
      <div class="wai">
        <div class="lie"  v-for="item in actor" :key="item.index">
          <p>
            <img :src="item.avatarAddress" alt=""/>
          </p>
          <p>{{item.name}}</p>
          <p>{{item.role}}</p>
      </div>
      </div>
    </div>
    <div class="photo">
      <div class="zhao">
        <p>剧照</p>
        <p  @click="addto(xiang.filmId)">全部({{actors.length}})</p>
      </div>
      <div class="tu">
          <img  v-for="item in actors"  :key="item.index" :src="item" alt="暂无剧照" />
      </div>
    </div>
    <button class="tiao"  @click="addgoto()">选座购票</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      xiang: [],
      actor:[],
      actors:[],
      can: "",
      name:"",
      activeNames: ["1"],
    };
  },
  created: function () {
    this.add();
  },
  methods: {
    add() {
      this.can = this.$route.query.filmId;
      // console.log(this.can);
      this.$http({
        url:`/gateway?filmId=${this.can}&k=7313207`,
        headers: {
          "X-Client-Info":
            ' {"a":"3000","ch":"1002","v":"5.0.4","e":"16280457416358248110161921","bc":"310100"}',
          "X-Host": " mall.film-ticket.film.info",
        },
      }).then((res) => {
        // console.log(res);
        this.xiang = res.data.data.film;
        // console.log(this.xiang);
        this.actor = this.xiang.actors
        this.actors = this.xiang.photos 
        this.name =this.xiang.filmType.name  
      });
    },
    addto(filmId){
        this.$router.push({path:"/photo",query:{filmId:filmId}})
    },
    addgoto(){
        this.$router.push({path:'/Ticket',query:{filmId:this.can}})
    }

  },
};
</script>
<style scoped>
.niu{
   width:2.2rem;
   height: 2.2rem;
   border-radius:50%;
   background-color: #fff;
   position: absolute;
   top:1rem;
   left: 1rem;
   z-index: 99;
   text-align: center;
   line-height: 2.2rem;
}
.xiang {
  width: 100%;
  height: 100%;
}
.img {
  width: 100%;
  height: 30%;
  overflow: hidden !important;
  margin-top: -72%;
}
.wen {
  margin-top: 1rem;
  width: 94%;
  margin: auto;
  color: #808080;
  font-size: 0.8rem;
}
.nu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nu p:nth-child(1) {
  font-size: 1.2rem !important;
  color: black !important;
}
.yan {
  width: 100%;
  height: 16rem;
  border-top: 0.5rem solid #ccc;
  border-bottom: 0.5rem solid #ccc;
}
.yan h4 {
  margin: 0.6rem;
}
.wai {
  width: auto;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
}
.lie {
  width: 5rem;
  height: 100%;
  text-align: center;
  margin: 0.5rem;
  font-size: 0.8rem;
}
.lie :nth-child(1) img {
  width: 5rem;
  height: 6rem;
}
.photo {
  width: 94%;
  height: 15rem;
  margin: auto;
}
.zhao {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
}
.zhao p:nth-child(2) {
  color: #ccc;
  font-size: 0.9rem;
}
.tu{
  width: auto;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
}
.tu img{
    width:11rem;
    height:7rem;
    margin-top: 1rem;
    margin-right: 1rem;
}
.tiao{
    width: 100%;
    height: 3rem;
    background-color: #FF5F16;
    text-align: center;
    line-height:3rem;
    color: #fff;
    border: none;
    position: fixed;
    bottom:0px;
}
</style>