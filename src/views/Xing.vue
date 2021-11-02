<template>
   <dv-scroll-ranking-board :config="config" class="mode" />
</template>
<script>
export default {
    data(){
        return{
          config:{
          data: [
    {
      name: '周口',
      value: 55
    },
    {
      name: '南阳',
      value: 120
    },
    {
      name: '西峡',
      value: 78
    },
    {
      name: '驻马店',
      value: 66
    },
    {
      name: '新乡',
      value: 80
    },
    {
      name: '信阳',
      value: 45
    },
    {
      name: '漯河',
      value: 29
    }
  ]
          }
        }
    },
    mounted(){
        this.stunde()
    },
    methods:{
        stunde(){
           
        }
    }
}
</script>
<style scoped>
   .mode{
    width:400px;
    height:300px;
    background-color: rgba(9, 75, 241, 0.2);
   }
</style>