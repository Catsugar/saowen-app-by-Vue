<template>
<div class="wendan" id="wendan">
    <h3>我的扫文单</h3>
    <ul>
      <li v-for="(collect, index) in collects":key="collect"><input type="radio" :id="index" checked>
        <label :for="index">{{collect.name}}</label>
        <span>共{{collect.novels.length}}篇</span>
      </li>
    <button class="btn btn-default btn-xs pull-left" id="sure">确定</button>
    <button class="btn btn-default btn-xs pull-right" id="add">取消</button>     
    </ul>
</div>
</template>

<script>
export default {
  props: {
    collects: {
      type: Array
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/****歌曲列表******/
.wendan {
	width: 100%;
	height:300px;
	overflow:hidden;
    transition: height .5s;
	position: fixed;
	border-top:1px solid #AAA9A7;
	color:#000;
	left: 0;
	bottom:0;
	background-color:rgba(240,240,240,0.7);
	border-bottom-right-radius:0.25em;
	border-bottom-left-radius:0.25em;}
.wendan h3{
	text-align:center;
	line-height:50px;
	height:50px;}
.wendan ul{width:100%;padding: 5%;}
.wendan ul li{
	width:100%;
	font:14px/30px "微软雅黑";
	height:30px;
	list-style:inside;
	border-bottom:1px solid #AAA9A7;}
.wendan ul li label{text-decoration:none;color:#000;}
.wendan ul li input{display:none;}
.wendan ul li label:hover,.wendan ul li input:checked+label{	
    text-decoration:none;
	color:#FF3736;
	font-weight:bold;}
.wendan ul li span{	
    text-decoration:none;
	color:#333;
	font:12px/30px "微软雅黑";
	float:right;}
</style>
