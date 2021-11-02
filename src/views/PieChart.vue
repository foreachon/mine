<template>
    <div id="chart" >
       
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.lsit();
    },
    methods:{
        lsit(){
           var mychart = this.$echarts.init(document.getElementById('chart'));
           mychart.setOption({
  title: {
    text: '饼状图',
    left: 'center',
    top: 20,
    textStyle: {
      color: '#fff'
    }
  },
  tooltip: {
    trigger: 'item'
  },
  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 274, name: 'Union Ads' },
        { value: 235, name: 'Video Ads' },
        { value: 400, name: 'Search Engine' }
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: 'radius',
      label: {
        color: '#fff'
      },
      labelLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        },
        smooth: 0.2,
        length: 10,
        length2: 20
      },
      itemStyle: {
        color: '#c23531',
        shadowBlur: 200,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      },
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function () {
        return Math.random() * 200;
      }
    }
  ]
           })
        }
    }
}
</script>
<style scoped>
   #chart{
    height:300px;
    width:400px;
    background-color: rgba(9, 75, 241, 0.2);
   }
</style>