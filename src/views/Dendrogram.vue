<template>
    <div id='zhun' style="height:300px; width:500px">

    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.grond()
    },
    methods:{
        grond(){
            const data =[];
            for(let i=0; i<5; ++i){
                data.push(Math.round(Math.random()*200))
            }
             
            var mycharts =this.$echarts.init(document.getElementById('zhun'));
          mycharts.setOption({  
  xAxis: {
    max: 'dataMax'
  },
  yAxis: {
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E'],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: 2 // only the largest 3 bars will be displayed
  },
  series: [
    {
      realtimeSort: true,
      name: '取消',
      type: 'bar',
      data: data,
      label: {
        show: true,
        position: 'right',
        valueAnimation: true
      }
    }
  ],
  legend: {
    show: true
  },
  //动画持续时间
  animationDuration: 10000,
  //动画持续时间更新
  animationDurationUpdate: 5000,
  //动画缓动
  animationEasing: 'linear',

  animationEasingUpdate: 'linear'
});
function run() {
  for (var i = 0; i < data.length; ++i) {
    if (Math.random() > 0.9) {
      data[i] += Math.round(Math.random() * 2000);
    } else {
      data[i] += Math.round(Math.random() * 200);
    }
  }  
}
setTimeout(function () {
  run();
}, 0);
setInterval(function () {
  run();
}, 3000);
        }
    }
}
</script>
<style scoped>
 #zhun{
     background-color: rgba(9, 75, 241, 0.2);
 }
</style>