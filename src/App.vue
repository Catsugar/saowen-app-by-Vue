<template>
  <div id="app">

    <myHeader></myHeader>
    <transition name="fade" mode="out-in">
      <router-view keep-alive></router-view>
    </transition>
    <!--尾部-->
    <div class="footer">
      <ul>
        <li><router-link to="/"><i class="iconfont icon-shouye2"></i><br>首页</router-link></li>
        <li><router-link to="/collectlist"><i class="iconfont icon-zhuanji"></i><br>书单</router-link></li>
        <li><router-link to="/search" ><i class="iconfont icon-more4"></i><br>扫文</router-link></li>
        <li><router-link to="/ranklist"><i class="iconfont icon-paixing1"></i><br>排行</router-link></li>
        <li><router-link to="/myhome"><i class="iconfont icon-wode1"></i><br>我的</router-link></li>
      </ul>
    </div>
    <!--封面-->
    <transition name="fade" mode="out-in"><myCover></myCover></transition>
    <!--登录页面-->
    <transition name="fold1"><myLogin class="move1"></myLogin></transition>
    <!--信息框-->
    <transition name="fold2"><dialogBox class="move2"></dialogBox></transition>    
  </div>
  </template>
<script>
import {mapState} from 'vuex'
import Header from './components/Header.vue'
import Cover from './components/Cover.vue'
import dialogBox from './components/Dialogbox.vue'
import Login from './components/Login.vue';
export default {
  name: 'app',
  computed: {
    ...mapState([
      'islogin'
    ])
  },
  components: {
    myHeader: Header,
    myCover: Cover,
    dialogBox: dialogBox,
    myLogin: Login
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: all 0.2s;
}

.fade-enter, .fade-leave-active {
    opacity: 0.1;
}

/*动画*/
.move1 {
  transform: translate3d(0,0,0);
}
.fold1-enter-active, .fold1-leave-active {
  transform: translate3d(0, 0, 0);
  transition: all 1s;
}
.fold1-enter, .fold1-leave-active {
  transform: translate3d(300px, 0, 0);
}
/*动画*/
.move2 {
    transform: translate3d(0, 0, 0);
}
.fold2-enter-active, .fold2-leave-active {
    transition: all 1s;
}
.fold2-enter, .fold2-leave-active {
    transform: translate3d(0, 100px,0);
    opacity: 0.1;
}
</style>
