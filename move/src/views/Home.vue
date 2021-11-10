<template>
  <div class="home">
    <div class="deng"  @click="deng()">
      <van-image
        round
        width="5rem"
        height="5rem"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      &nbsp;&nbsp;
      <p>{{phon}}</p>
    </div>
    <van-image width="100%" height="180" src="./bei.png" @click="deng()" />
    <div class="ding">
      <div>
        <p><van-icon name="coupon" color="#FFC82F" size="2em" /></p>
        <p>电影订单</p>
      </div>
      <div>
        <p><van-icon name="bill" color="#C6DA5C" size="2em" /></p>
        <p>商品订单</p>
      </div>
    </div>
    <van-cell title="买座卷" icon='peer-pay'   color='#FFA78E' size='large'>
      <template #right-icon>
    <van-icon name="arrow" size='1.2em' color='#ccc' />
  </template>
     </van-cell>
    <van-cell title="组合红包" icon='cash-on-deliver' color='#CFBEA3' size='large'>
      <template #right-icon>
    <van-icon name="arrow" size='1.2em' color='#ccc' />
  </template>
      </van-cell>
    <van-cell title="余额" icon='balance-o' value='0'  color='#FFD288'  size='large'>
      <template #right-icon>
    <van-icon name="arrow" size='1.2em' color='#ccc' />
  </template>
      </van-cell>
     <van-cell title="设置" icon="setting-o"  color='#C2D368' size='large'>
       <template #right-icon>
    <van-icon name="arrow" size='1.2em' color='#ccc' />
  </template>
       </van-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phon:''
    };
  },
  created: function () {
    this.datao;
    this.getit();
  },
  methods: {
    deng(){
         this.$router.push({path:"/deng"})
      },
    getit(){
        this.phon = '立即登录'
       if(window.localStorage.getItem == null){
          this.phon = '立即登录'
       }else{
         this.phon = window.localStorage.getItem('phone')
       }
    },
  },
};
</script>
<style>
.deng {
  position: absolute;
  display: flex;
  align-items: center;
  top: 5rem;
  left: 2rem;
  z-index: 99;
  color: #fff;
  font-size: 1.2rem;
}
.ding {
  width: 100%;
  display: flex;
  align-items: center;
  height: 4rem;
  margin-top: 1rem;
  border-bottom: 0.5rem solid #e8e8e8;
}
.ding div {
  width: 50%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #ccc;
  font-size: 0.9rem;
}
</style>
