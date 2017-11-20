<template>
<div class="login">
<!---登录界面-->
  <ul id="myTab" class="login-btn nav nav-tabs">
     <li @click="returnback"><i class="iconfont icon-fanhui1"></i></li>
     <li class="active"><a href="#login-in" data-toggle="tab"><b>登录</b></a></li>
	   <li><a href="#login-up" data-toggle="tab"><b>注册</b></a></li>
  </ul>
  <div id="myTabContent" class="login-content tab-content">
	  <div class="tab-pane fade in active" id="login-in">
      <form action="" name="loginform">
  	    <i class="iconfont icon-wode1"></i><input type="text" placeholder="用户名" v-model="login_username"><br>
        <i class="iconfont icon-quanxian"></i><input type="password" placeholder="密码" v-model="login_password">
  	    <div class="login-btnbox">
          <button type="button" v-on:click="login" class="btn btn-default pull-left">登录</button>
          <button type="button" v-on:click="clean" class="btn btn-danger pull-right" >取消</button>
        </div>
      </form>
	  </div>
    <div class="tab-pane fade" id="login-up">
      <form action="" name="registerform">
  	    <i class="iconfont icon-youxiang"></i><input type="text"  placeholder="邮箱" v-model="register_email"><br>
        <i class="iconfont icon-wode1"></i><input type="text"  placeholder="用户名" v-model="register_username"><br>
        <i class="iconfont icon-quanxian"></i><input type="password"  placeholder="密码" v-model="register_password"><br>
  	    <div class="login-btnbox">
          <button type="button" v-on:click="register" class="btn btn-default pull-left">注册</button>
          <button type="button" v-on:click="clean" class="btn btn-danger pull-right">取消</button>
        </div>
      </form>
	  </div>
  </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data () {
    return {
      register_email: '',
      register_username: '',
      register_password: '',
      login_username: '',
      login_password: ''
    }
  },
  methods: {
    //登录
    login: function(){
      var name = this.login_username
      var password = this.login_password
      console.log(this.login_username);
      console.log(this.login_password);
      if (name !== '' && password !== '') {
        var data = {
          name: name,
          password: password
        }
        this.$store.dispatch('changedialoginfo', data)
      } else {
        this.$store.commit('changedialog')
        this.$store.commit('changedialoginfo', '帐号密码不能为空')
      }
    },
    //注册
    register: function(){
      var email = this.register_email
      var name = this.register_username
      var password = this.register_password
      var src = './static/img/' + Math.ceil(Math.random() * 10) + '.jpg'
      if (name !== '' && password !== '') {
        var data = {
          name: name,
          password: password,
          email: email,
          src: src
        }
        this.$store.dispatch('registersubmit', data)
      } else {
        this.$store.commit('changedialog')
        this.$store.commit('changedialoginfo', '帐号密码不能为空')
      }
    },
    clean: function(){
      this.register_email=''
      this.register_username=''
      this.register_password=''
      this.login_username=''
      this.login_password=''
    },
    returnback: function(){
      this.$store.commit('changedialog')
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
.login{
  position: fixed;
  top:40px;
  left: 0px;
  right:0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.4);
  background-color:rgb(239,238,235); }
.login-btn{
  display: -webkit-flex;
  display: flex;
  flex-flow: row nowrap;  
  justify-content:flex-start;}
.login li i{padding:10px 20px;font-size:24px;line-height:40px;}
.login ul li,{height: 40px;line-height:40px;}
.login-content < div{
  width:86%;
  margin-left:7%;
  margin-top:20px;
  display: -webkit-flex;
  display: flex;
  flex-flow: row nowrap;  
  justify-content:space-between;}
.login-content input{
  width:86%;
  height:36px;
  border-radius:5px;
  padding-left:12%;
  margin-top:20px;
  margin-left:7%;
  border:1px solid #999;
  font-size:1.5rem;}
.login-content i{
  font-size:24px;
  color:#999;
  position:absolute;
  margin-top:25px;
  padding-left:10%;}
.login-btnbox{
  width: 86%;
  margin:20px auto;
}
.login-btnbox button{
  width:40%}

</style>
