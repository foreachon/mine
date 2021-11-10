<template>
 <div class="all">
    <div class="fan"  @click="backBefor()">
        <van-icon name="arrow-left"  color="#808080" size="1.5em"/>
    </div>
    <div class="auto">
          <p class="cin">{{yin.name}}</p>
          <div class="tui"><button  v-for="item in ting" :key="item.index">{{item.name}}</button>
             <span><van-icon name="arrow"  color="orange" size='.5rem' /></span>
          </div>
          <p class="ap"><van-icon name="location-o"  color="#808080" size='1.1rem' />&nbsp;&nbsp;<span>{{yin.address}}</span>&nbsp;&nbsp;<van-icon name="phone-o"  color="#808080" size='1.1rem' /></p>
    </div>

    <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in lunbo" :key="item.index">
          <van-image width="7rem" height="10rem" :src="item.poster"  @click='finnly(item.filmId)'/>
          </div>
        </div>
    </div>
    <div class="wen" @click="backto(filmId)">
        <p class="span"><span></span></p>
        <p>{{this.mobel.name}}<i>{{this.mobel.grade}}分</i></p>
        <p class="an">></p>
        <p>{{this.mobel.category}}<span v-for="(item,index) in actors" :key="index">|{{item.name}}</span></p>
    </div>
    <van-tabs v-model="active" >
  <van-tab title="今天八月21日">
      <div class="table1">
        <div>
            <p><span>13.20</span><span>中文2D</span></p>
            <p><span>15.15散场</span><span>11号厅</span></p>
        </div>
        <div>
            <p>￥40</p>
            <p><button>购票</button></p>
        </div>
      </div>
  </van-tab>
  <van-tab title="明天8月22日">
       <div class="table1">
        <div>
            <p><span>13.20</span><span>中文2D</span></p>
            <p><span>15.15散场</span><span>11号厅</span></p>
        </div>
        <div>
            <p>￥40</p>
            <p><button>购票</button></p>
        </div>
      </div>
  </van-tab>
</van-tabs>
 </div>    
</template>
<script>
 import Swiper from 'swiper'
export default {
    data(){
        return{
           active:0,
           cinid:'',
           yin:[],
           ting:[],
           lunbo:[],
           mobel:[],
           actors:[],
           data:[]
        }
    },
    mounted:function(){
     new Swiper('.swiper-container', {
        effect: 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
        initialSlide: 1,
        observer:true,
        observerParents:false,
        coverflowEffect: {
            rotate: 0,
            stretch: 10,
            depth:60,
            modifier: 1,
            slideShadows: false
        },
    })
},
    created:function(){
        this.shuju()
        this.lun()
        
    },methods:{
        shuju(){
        this.cinid = this.$route.query.cinemaId
        // console.log(this.cinid);
        this.$http({
            url:`/gateway/?cinemaId=${this.cinid}&k=766872`,
            headers:{
               'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"1629336531128853313847297","bc":"440100"}',
               'X-Host':'mall.film-ticket.cinema.info'
            }
        }).then(res=>{
            this.yin = res.data.data.cinema
            this.ting = this.yin.services
            console.log(this.yin);
            console.log(this.ting);
        })
     },
        lun(){
            this.$http({
                url:`/gateway/?cinemaId=${this.cinid}&k=4982222`,
                headers:{
                    'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"1629336531128853313847297","bc":"440100"}',
                    'X-Host':'mall.film-ticket.film.cinema-show-film'
                }
            }).then(res=>{
                // console.log(res);
               this.lunbo = res.data.data.films
               console.log(this.lunbo);
            })
        },
        finnly(filmId){
             const  cinmaid = localStorage.getItem('ciind')
            this.$http({
               url:`https://m.maizuo.com/gateway?filmId=${filmId}&k=8393720`,
               headers:{
                   'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1629336531128853313847297"}',
                   'X-Host':'mall.film-ticket.film.info'
               }
            }).then(res=>{
                console.log(res);
                this.mobel = res.data.data.film
                console.log(this.mobel);
                this.actors = this.mobel.actors
                this.data = this.mobel.premiereAt
            })

            this.$http({
                url:`https://m.maizuo.com/gateway/?filmId=${cinmaid}&cinemaId=${this.cinid}&date=1629993600&k=861644`,
                headers:{
                    'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"1629336531128853313847297"}',
                    'X-Host':'mall.film-ticket.schedule.list'
                }
            }).then(res=>{
                console.log(res);
            })
        },

        naxia(){
            console.log(1);
        },
        backto(finmld){
            //  this.$router.push({path:"/xiang",query:{finmld}})
            console.log(finmld);
        }


    }
}
</script>
<style  scoped>
.all{
    width:100%;
    height: 100%;
    margin: auto;
}
.fan{
    width: 94%;
    height:2rem;
    margin: 1rem;
}
.cin{
    width: 100%;
    text-align: center;
    font-size:1.1rem;
}
.tui{
    text-align: center;
}
.tui button{
    margin-left: .7rem;
    margin-top:1rem;
    font-size: .7rem;
    border: 1px solid rgb(245, 213, 153);
    color: orange;
    background-color: #fff;
}
.tui span{
    display: inline-block;
    margin:.8rem;
}
.ap{
    margin-top:1rem;
   text-align: center;
   font-size:.9rem;
}
.swiper-container{
    margin-top:1rem;
    width:100%;
    height:12rem;
    background-image:linear-gradient(rgba(221, 236, 221, 0), rgb(167, 166, 166));
}
 .swiper-slide{
     width:6rem;
     height: 0rem;
}
.swiper-slide>img{
    width: 6rem;
    height: 8rem;
} 
.wen{
    width:90%;
    margin: auto;
    font-size:.9rem;
    text-align: center;
}
.span{
    position: relative;
    top:-.9rem;
    z-index:99;
}
.span span{
    display:inline-block;
    width: 0;
    height: 0;
    border-left: .4rem solid transparent;
    border-right: .4rem solid transparent;
    border-bottom: .8rem solid #fff;
}
.an{
   font-size:.9rem;
   color:#808080;
   text-align: right;
   font-weight:bolder;
}
.wen p:nth-child(4){
    color:#808080;
}
.wen p:nth-child(2) i{
    color: orange;
}
.table1{
    margin-top:1.5rem !important;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
}
.table1 div:nth-child(1) p span:nth-child(1){
     display:inline-block;
     width:6rem;
}
.table1 div:nth-child(1) p:nth-child(2){
    color: #808080;
    font-size:.9rem;
}
.table1 div:nth-child(2){
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.table1 div:nth-child(2) p:nth-child(1){
    color: orange;
    margin-right:1rem;
}
.table1 div:nth-child(2) p:nth-child(2) button{
    font-size:.8rem;
    color: orange;
    border: 1px solid  orange;
    text-align: center;
    background-color: #fff;
    width:3rem;
    height:1.5rem;
    border-radius:.1rem;
}
</style>