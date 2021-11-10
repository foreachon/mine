<template>
  <div>
    <van-nav-bar
      title="剧照(5)"
      left-text="返回"
      left-arrow
      @click-left="backBefor()"
    />
    <van-image
      v-for="item in phot"
      :key="item"
      width="137.13"
      height="137.13"
      :src="item"
      @click="open(phot,index)"

    />
  </div>
</template>
<script>
import { ImagePreview } from 'vant';
export default {
  data() {
    return {
      zhao: "",
      phot: [],
    };
  },
  created: function () {
    this.photo();
  },
  components() {
    ImagePreview([
      "https://img01.yzcdn.cn/vant/apple-1.jpg",
      "https://img01.yzcdn.cn/vant/apple-2.jpg",
    ]);
  },
  methods: {
    photo() {
      this.zhao = this.$route.query.filmId;
      console.log(this.zhao);
      this.$http({
        url: `/gateway?filmId=${this.zhao}&k=7313207`,
        headers: {
          "X-Client-Info":
            ' {"a":"3000","ch":"1002","v":"5.0.4","e":"16280457416358248110161921","bc":"310100"}',
          "X-Host": " mall.film-ticket.film.info",
        },
      }).then((res) => {
        console.log(res);
        this.phot = res.data.data.film.photos;
      });
    },
    open(item,index){
      ImagePreview({
         images:item, //item为图片信息，一个数组
         startPosition:index, //索引
         closeable:true, //是否开启关闭按钮
      })
    }
  },
};
</script>
<style>
</style>