<template>
  <div class="app">
    <div class="img">
      <van-image width="60" height="60" src="./log.png" />
    </div>
    <van-form @submit="onSubmit" submit-on-enter >
      <van-field
        v-model="phone"
        name="pattern"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true ,pattern,message:'请正确填写的手机号'}]"
      />
      <van-field
        v-model="password"
        type="password"
        name="pasword"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true ,pasword,message:'密码必须在6-10位之间'}]"
      />
      <div style="margin: 16px">
        <van-button  block  color='#FF5F16' native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
        phone:"",
        password:"",
        pattern:/^[1][3,4,5,7,8][0-9]{9}$/,
        pasword:/^\S{6,10}$/
    };
  },
  methods:{
        onSubmit(values) {
       console.log('submit', values);
       window.localStorage.setItem("phone",this.phone)
       this.phone = this.password = ""
       this.$router.push({path:'/home'})
    },
  }
};
</script>
<style>
.app {
  width: 100%;
  height: 100%;
}
.img {
  display: flex;
  height: 13rem;
  justify-content: center;
  align-items: center;
}
</style>