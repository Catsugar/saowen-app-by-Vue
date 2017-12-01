<template>
<div class="wendan" id="wendan" v-if="getlovebox">
    <div class="wendantitle">
	    <h3>我的扫文单</h3>  
	    <span class="pull-right" id="add" v-on:click="closeLovebox">取消</span>
	    <span class="pull-right" id="sure" v-on:click="loveSure">确定</span>
    </div>
    <ul>
      <li v-for="(collect, index) in collects":key="collect" ><input type="radio" :id="index">
        <label :for="index" @click="love">{{collect.name}}<span>共{{collect.novels.length}}篇</span></label>
      </li>
      <li>
        <label v-on:click="showAddcollectbox" >新建扫文单<span class="iconfont icon-more4"></span></label> 
      </li>  
    </ul>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  props: {
    collects: {
      type: Array
    }
  },
  methods: {
    closeLovebox ( ) {
      this.$store.commit('changelovebox')
    },
    loveSure(){
      this.$store.commit('changelovebox')
    },
    showAddcollectbox ( ) {
      this.$store.commit('changeaddcollectbox')
      this.$store.commit('closelovebox')
    },
    love: function(){
      this.$store.commit('changedialog')
      this.$store.commit('changedialoginfo', '收藏成功了哟！！')
      this.$store.commit('closelovebox')
    }
  },
  computed: {
    ...mapGetters([
      'getlovebox'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/****歌曲列表******/
.wendan {
	width: 100%;
	overflow:hidden;
	position: fixed;
	border-top:1px solid #AAA9A7;
	color:#000;
	left: 0;
	bottom:-50px;
	background-color:rgba(255,255,255,0.9);
	border-bottom-right-radius:0.25em;
	border-bottom-left-radius:0.25em;}
.wendantitle{
    box-shadow: 0 0 10px #000;
	line-height:40px;
	height:40px;
	background-color: #ffc;
	font-weight: bold;
}
.wendantitle h3{
	font-weight:bold;
	padding-left: 5%;
	display: inline-block;}
.wendantitle span{
	padding-right: 5%;	
	line-height:40px;
	height:40px;
	font-size: 14px;
	font-weight: normal;}
.wendan ul{width:100%;}
.wendan ul li{
	width:100%;
	font:14px/30px "微软雅黑";
	height:30px;
	border-top:1px solid #AAA9A7;
}
.wendan ul li label{
	text-decoration:none;
	color:#333;
	width: 100%;
	padding-left: 5%;
}
.wendan ul li input{display:none;}
.wendan ul li label:hover,.wendan ul li input:checked+label{	
    text-decoration:none;
	color:#FF3736;
	font-weight:bold;
    background-color: rgba(230,230,230,1);}
.wendan ul li span{	
    text-decoration:none;
	color:#333;
	font:12px/30px "微软雅黑";
	float:right;
    margin-right: 1rem;}
.wendan .iconfont{
	font:22px/30px "微软雅黑";
}
</style>
