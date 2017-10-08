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
	   <div><button type="button" class="btn btn-default">登录</button><button type="button" class="btn btn-danger" >取消</button></div>
	 </div>
     <div class="tab-pane fade" id="login-up">
	   <i class="iconfont icon-youxiang"></i><input type="text"  placeholder="邮箱" ><br>
       <i class="iconfont icon-wode1"></i><input type="text"  placeholder="用户名" ><br>
       <i class="iconfont icon-quanxian"></i><input type="password"  placeholder="密码" ><br>
	   <div><button type="button" class="btn btn-default">注册</button><button type="button" class="btn btn-danger">取消</button></div>
	 </div>
   </div>
   <h3 class="center-block">看什喵？！</h3>
   <p class="center-block">仿扫文小院&nbsp;&nbsp;made by 猫岁</p>
</div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
