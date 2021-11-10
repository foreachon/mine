<template>
   <form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="请输入影城名称"
    @cancel="backBefor"
  />
</form>
</template>
<script>
export default {
    data(){
        return{
           value:''
        }
    },
    methods:{

    }
}
</script>
<style scoped>
 
</style>