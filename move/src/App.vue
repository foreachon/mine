<template>
  <div class="tabbar">
    <router-view />
    <loading v-show="isLoading"></loading>
    <van-tabbar v-model="active" router border v-show="$route.name!=='addres'&& $route.name!=='xiang'&& $route.name!=='photo' && $route.name!=='deng' && $route.name!=='search' && $route.name!=='cimal' && $route.name!=='Ticket' && $route.name!=='searcht'">
      <van-tabbar-item
        v-for="item in menu"
        :key="item.path"
        :icon="item.icon"
        :to="item.path"
        >{{ item.text }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import loading from './views/loading/loading.vue';
export default {
  components: { loading },
  name: "Tabbar",
  data() {
    return {
      show: true,
      active: 0,
      menu: [
        { path: "/movie", text: "电影", icon: "play-circle-o" },
        { path: "/cinema", text: "影院", icon: "video-o" },
        { path: "/information", text: "资讯", icon: "comment-circle-o" },
        { path: "/home", text: "我的", icon: "contact" },
      ],
    };
  },
  computed:{
    ...mapState(['isLoading'])
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
  },
};
</script>
<style>
</style>
