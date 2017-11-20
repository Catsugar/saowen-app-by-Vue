<template>
<!---封面-->
  <div class="cover" v-if="getcover">
    <div class="logo" v-on:click="hiddenCover">
      <a href="#"><img src="static/images/0.jpg" class="img-circle center-block"/></a>
    </div>
    <div class="copyright">
      <h3 class="center-block">看什喵？！</h3>
      <p class="center-block">仿扫文小院&nbsp;&nbsp;made by 猫岁</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  methods: {
    hiddenCover: function(){
      this.$store.commit('hiddencover');
    }
  },
  computed: {
    ...mapGetters([
      'getcover'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cover{
  position: absolute;
  top:0;
  left: 0;
  height: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color:rgb(239,238,235); 
  z-index: 10;}
.cover img{
  height:100%;
  animation: cat 1s ease alternate infinite;
  -webkit-animation: cat 1s ease alternate infinite;}
.logo{
  height:36%;
  margin-top: 15%;  
  position: absolute;  
  top: 0; left: 0; right: 0;  }
.copyright{
  position: absolute;
  bottom:15%;
  width:100%;}
.copyright h3{
  font-size:3rem;
  line-height:4rem;
  text-align:center;
  font-weight:bold;}
.copyright p{
  font-size:1.5rem;
  text-align:center;}
@-webkit-keyframes cat {
0%{box-shadow: 0 0 0.2rem rgba(0,0,0,0.5);}
to{box-shadow: 0 0 2rem rgba(0,0,0,0.5);}
}
</style>
