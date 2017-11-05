<template>
<div class="login">
<!---登录界面-->
  <ul id="myTab" class="login-btn nav nav-tabs">
     <li><i class="iconfont icon-fanhui1"></i></li>
     <li class="active"><a href="#login-in" data-toggle="tab"><b>登录</b></a></li>
	 <li><a href="#login-up" data-toggle="tab"><b>注册</b></a></li>
  </ul>
  <div id="myTabContent" class="login-content content tab-content">
	 <div class="tab-pane fade in active" id="login-in">
	   <i class="iconfont icon-wode1"></i><input type="text" placeholder="用户名" ><br>
       <i class="iconfont icon-quanxian"></i><input type="password" placeholder="密码" ><br>
	   <div>
       <button type="button" v-on:click="Login" class="btn btn-default">登录</button>
       <button type="button" v-on:click="clean" class="btn btn-danger" >取消</button>
     </div>
	 </div>
     <div class="tab-pane fade" id="login-up">
	   <i class="iconfont icon-youxiang"></i><input type="text"  placeholder="邮箱" ><br>
       <i class="iconfont icon-wode1"></i><input type="text"  placeholder="用户名" ><br>
       <i class="iconfont icon-quanxian"></i><input type="password"  placeholder="密码" ><br>
	   <div>
       <button type="button" v-on:click="register" class="btn btn-default">注册</button>
       <button type="button" v-on:click="clean" class="btn btn-danger">取消</button>
      </div>
	 </div>
   </div>
   <h3 class="center-block">看什喵？！</h3>
   <p class="center-block">仿扫文小院&nbsp;&nbsp;made by 猫岁</p>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  methods: {
    Login: function(){
      console.log('我是登录君····················');
    },
    register: function(){
      console.log('我是注册妹子~~~~~~~~~~~');
    },
    clean: function(){
      console.log('我是注册妹子~~~~~~~~~~~');
    }
  },
  computed: {
    ...mapGetters([
      'getLogin'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/**************注册与登录****************/
.login-btn{
  display: -webkit-flex;
  display: flex;
  flex-flow: row nowrap;  
  justify-content:flex-start;}
.login li i{padding:10px 20px;font-size:24px;line-height:40px;}
.login ul li,{height: 40px;line-height:40px;}
.login-content input{
  width:86%;
  height:36px;
  border-radius:5px;
  padding-left:12%;
  margin-top:20px;
  margin-left:7%;
  //border:1px solid #999;
  box-shadow: inset 0px -1px 1px -1px #999;
  font-size:1.5rem;}
.login-content i{
  font-size:24px;
  color:#999;
  position:absolute;
  margin-top:25px;
  padding-left:10%;}
.login-content div{
  width:86%;
  margin-left:7%;
  margin-top:20px;
  display: -webkit-flex;
  display: flex;
  flex-flow: row nowrap;  
  justify-content:space-between;}
.login-content div button{
  width:40%}
.login h3{
  font-size:2rem;
  line-height:3rem;
  text-align:center;
  font-weight:bold;
  position:fixed;
  top:39rem;
  width:100%;}
.login p{
  font-size:1.25rem;
  text-align:center;
  position: fixed;
  top:42rem;
  width:100%;}
</style>
