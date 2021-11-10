<template>
    <div v-html="infolist.list">
    </div>
</template>
<script>
export default {
    data(){
        return{
           infolist:{
               list:""
           },
        }
    },
     created:function(){
         this.infomation();
     },
    methods:{
        infomation(){
            this.$http({
                url:"/gateway?actId=ElzMZU125260",
                type:"get",
                headers:{
                    'X-Host': 'mall.act.static-page.info'
                }
            }).then(res=>{
                this.infolist.list = res.data.data.data.content          
            })
        }
    }
     
}
</script>
<style scoped>
   div{
       margin-bottom: 40px;
   }
</style>