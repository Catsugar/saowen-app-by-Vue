<template>
<!---封面-->
  <div class="cover">
    <div class="logo" v-on:click="showLogin"><a href="#"><img src="static/images/0.jpg" class="img-circle center-block"/></a></div>
    <div class="copyright">
      <h3 class="center-block">看什喵？！</h3>
      <p class="center-block">仿扫文小院&nbsp;&nbsp;made by 猫岁</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: ['isLogin', 'isCover'],
  data () {
    return {
    }
  },
  methods: {
    showLogin: function(){
      this.isLogin=true;
      this.isCover=false;
      console.log('大笨蛋55555555555555');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
