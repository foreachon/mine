<template>
  <div>
    <van-nav-bar  :title='this.name' left-text="返回" left-arrow  @click-left="backBefor()"  @click-right="onClickRight()">
      <template #right>
     <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <van-tabs v-model="active">
  <van-tab  :title='item.showDate'  v-for="(item,index) in data" :key="index">
      <van-dropdown-menu>
         <van-dropdown-item v-model="value1" :options="option1" />
         <van-dropdown-item v-model="value2" :options="option2" />
         </van-dropdown-menu>
        <div class="addres">
           <p><span>诚丰影城从化店</span><span style="color:red">￥31元起</span></p>
           <p><span>广州市从化区江埔街河东南路洪立新村16栋</span><span>距离未知</span></p>
        </div>
        <div class="addres">
           <p><span>诚丰影城从化店</span><span style="color:red">￥31元起</span></p>
           <p><span>广州市从化区江埔街河东南路洪立新村16栋</span><span>距离未知</span></p>
        </div>
      </van-tab>
</van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
         value1: 0,
      value2: 'a',
      option1: [
        { text: '全城', value: 0 },
      ],
      option2: [
        { text: '离我最近', value: 'a' },
        { text: '最近去过', value: 'b' },
      ],
        active:'0',
        fimal:'',
        name:'',
        cityid:'',
        cinamed:[],
        showtime:[],
        data:[],
        addres:[]
    }
  },
  created:function(){
      this.modea()
       this.cina()
       this.ciname()
      
  },
  methods: {
      onClickRight(){
          this.$router.push('/searcht')
      },
      //电影名称
      modea(){
          this.fimal = this.$route.query.filmId
          this.$http({
              url:`https://m.maizuo.com/gateway?filmId=${this.fimal}&k=7054856`,
              headers:{
                  'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"1629336531128853313847297"}',
                  'X-Host':'mall.film-ticket.film.info'
              }
          }).then(res=>{
            //   console.log(res);
             this.name = res.data.data.film.name
          })
      },
      cina(){
        //影院
          this.cityid = localStorage.getItem('ciind')
          this.$http({
                  url:`https://m.maizuo.com/gateway/?filmId=${this.fimal}&cityId=${this.cityid}&k=9661145`,
                  headers:{
                      'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"1629336531128853313847297"}',
                      'X-Host':'mall.film-ticket.cinema.film-show-cinema'
                  }
             }).then(res=>{
                //  console.log(res);
                 this.cinamed = res.data.data.cinemaExtendList
                 this.showtime=res.data.data.showCinemas
                //  console.log(this.cinamed);
                //  console.log(this.showtime);
                var add = -1;
               this.showtime.forEach((item)=>{
                   add =add+1
                   var date = new Date()
                   var M =(date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
                   var D = date.getDate()+add
                   this.data.push({
                     'cinemaList':item.cinemaList,
                     'showDate':(M+'月'+D+'日')})
               })  
            })          
     },
     ciname(){
        this.$http({
           url:`https://m.maizuo.com/gateway?cityId=${this.cityid}&ticketFlag=1&k=3275188`,
           headers:{
             'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"1629336531128853313847297"}',
             'X-Host':'mall.film-ticket.cinema.list'
           }
        }).then(res=>{
          // console.log(res);
          this.addres = res.data.data.cinemas
          console.log(this.addres);
          // this.data.forEach((item,index)=>{
            
          // })
        })
     }
  },
};
</script>
<style scoped>
.addres{
  margin:5px;
}
.addres p{
   font-size:15px;
   display: flex;
   justify-content:space-between;
   align-items: center;
}
.addres p:nth-child(2){
  font-size:13px;
  margin-top:-10px;
  color:#808080;
}
</style>