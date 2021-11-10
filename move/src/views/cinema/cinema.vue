<template>
  <div>
    <van-nav-bar title="影院" left-arrow  @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="22" color="#000000" />
      </template>
      <template #left>
        <van-button plain hairline size="9"
          >{{name}}
          <van-icon name="arrow-down" size=".1rem" color="black" />
        </van-button>
      </template>
    </van-nav-bar>
    <van-dropdown-menu active-color="red" close-on-click-outside>
      <van-dropdown-item v-model="value1" :options='option1'  @change='ran'>
    </van-dropdown-item>
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
     </van-dropdown-menu>
    <div class="addres" v-for="item in addre" :key="item.index"  @click="cime(item.cinemaId)">
      <p><span>{{item.name}}</span><span :style="{'color':'red'}">￥{{((item.lowPrice)/100).toFixed(1)}}起</span></p>
      <p><span>{{item.address}}</span><span>距离未知</span></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      val:"",
      value1:0,
      value2: "a",
      value3: "a",
        option1:[
        {"text":'全城',value:0}
      ],
      option2: [
        { text: "App订票", value: "a" },
        { text: "前台退换", value: "b" },
      ],
      option3: [
        { text: "最近去过", value: "a" },
        { text: "离我最近", value: "b" },
      ],
      addre:[],
      name:"",
      cityId:"",
      fen:[]
    };
  },
  created: function () {
    this.cheng();
  },
  methods: {
    cheng() {
      this.name =localStorage.getItem('name') 
      this.cityId =localStorage.getItem('ciind')
      this.$http({
        url: `/gateway?cityId=${this.cityId}&ticketFlag=1&k=5866566`,
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"1629336531128853313847297","bc":"440100"}',
          "X-Host": "mall.film-ticket.cinema.list",
        },
      }).then((res) => {
        // console.log(res);
        const arr = []
        this.addre = res.data.data.cinemas
        // console.log(this.addre);      
        this.addre.forEach((item)=>{
               if(arr.indexOf(item.districtName) === -1){
                  arr.push(item.districtName)
              }
        });
        arr.forEach((item,index)=>{
             this.option1.push({
                  "text":item,
                 "value":index+1 })    
        })

        // console.log(this.option1);
             
      });
    },
    onClickLeft(){
        this.$router.push({path:"/addres"})
    },
    ran(value){
          let name = this.option1[value].text
          this.addre.filter(item=>{
          if(item.districtName.indexOf(name) !=-1){
             this.fen.push(item)
          }
       })
        console.log(this.fen);
        this.addre =[...this.fen]
    },
    cime(cinemaId){
        this.$router.push({path:'/cimal',query:{cinemaId}})
    }

  },
};
</script>
<style scoped>
.addres {
  width: 94%;
  margin: auto;
  margin-top: 1.5rem;
  margin-bottom:1.5rem
}
.addres p {
  display: flex;
  justify-content: space-between;
  font-size:.9rem;
  margin-top:.5rem;
}
.addres p:nth-child(2){
    color:#808080;
    font-size:.8rem;
}
.addres p:nth-child(2) span:nth-child(1){
    display:inline-block;
    width:20rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>