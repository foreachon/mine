<template>
  <div class="ProductMouth-container">
    <div id="productMouth"></div>
  </div>
</template>

<script>
export default {
  name: "ProductMouth",
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
    this.drawECharts()
  },
  methods: {
    drawECharts() {
      let chart = this.$echarts.init(document.getElementById('productMouth'),'dark')
      chart.setOption({
        backgroundColor: 'rgba(6, 22, 62,0)',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['物料A', '物料B'],
          textStyle: {
            color: '#fff',
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [

          {
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '物料A',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: '物料B',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310, 120, 132, 101, 134, 90, 230, 210]
          },
        ]
      })
    }
  },
}
</script>

<style scoped>
.ProductMouth-container {
  width: 500px;
  height: 300px;
  background-color: rgba(6, 22, 62, 0.6);
}

#productMouth {
  width: 500px;
  height: 300px;
}
</style>
