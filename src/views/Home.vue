<template>
    <div class="all"  :style="times">
  <el-row :gutter="24">
  <el-col :span="7"><div><PieChart/></div></el-col>
  <el-col :span="9"><div class="grid"><Dendrogram/></div></el-col>
  <el-col :span="8"><div class="grid-content"><AnimationDurationUpdate/></div></el-col>
</el-row>
<el-row :gutter="24"  class="maot">
  <el-col :span="7"><div class="grid-content bg-purple"><Xing/></div></el-col>
  <el-col :span="9"><div class="bode"><ProductMouth/></div></el-col>
  <el-col :span="8"><div class="bode"><Evapation/></div></el-col>
</el-row>
<el-row :gutter="20" class="maot">
  <el-col :span="10"><div class="grid-content bg-purple"><White/></div></el-col>
  <el-col :span="10"><div class="grid-content bg-purple"><Stereoscopic/></div></el-col>
</el-row>
    </div>
</template>
<script>
import PieChart from './PieChart'
import Dendrogram from './Dendrogram'
import AnimationDurationUpdate from './AnimationDurationUpdate'
import Xing from './Xing'
import ProductMouth from './ProductMouth'
import Evapation from  './Evaporation'
import White from  './White'
import Stereoscopic from './Stereoscopic'


export default {
  components: { PieChart ,Dendrogram,AnimationDurationUpdate,Xing,ProductMouth,Evapation,White,Stereoscopic},
    data(){
        return{
           times:{
             background:"url("+require('./../assets/ball.png')+")",
             backgroundRepeat:"no-repeat",
           }
        }
    },
    methods:{
      
    },
}
</script>
<style scoped>
   .all{
     width: 100%;
     height:1000px;
     background-color:#2c343c;
   }
   .maot{
     margin-top:40px;
   }
</style>