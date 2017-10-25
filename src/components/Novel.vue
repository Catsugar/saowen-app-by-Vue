<template>
  <div class="content ">
    <div class="novel-box">
      <h1>{{novel.name}}</h1>&nbsp;&nbsp;&nbsp;&nbsp;
      作者：<a href="" class="author">{{novel.author.name}}</a>
      <a href="" class="edit">&nbsp;&nbsp;&nbsp;&nbsp;<i class="iconfont icon-comment-pen"></i></a>
      <span class="dropdown pull-right">
         <button type="button" class="btn dropdown-toggle btn-warning btn-sm" id="dropdownMenu1" data-toggle="dropdown">加入扫文单</button>
         <ul class="dropdown-menu pull-left" role="menu" aria-labelledby="dropdownMenu1">
             <li role="presentation"><a role="menuitem" tabindex="-1" href="#">扫文单1</a></li>
         </ul>
       </span>
      <br>
      共<i>{{novel.comments.length}}</i>人评分<br>
      评分：<i class="score iconfont icon-wujiaoxing"></i><i class="score iconfont icon-wujiaoxing" ></i><i class="score iconfont icon-wujiaoxing"></i><i class="score iconfont icon-wujiaoxing"></i><i class="score iconfont icon-wujiaoxing"></i><br>
      <table>
        <tr><th>类型：</th><th>{{novel.type}}</th></tr>
        <tr><th>进度：</th><th>{{novel.progress}}</th></tr>
        <tr><th>篇幅：</th><th>{{novel.len}}</th></tr>
        <tr><th>时间：</th><th>{{novel.year}}</th></tr>
        <tr><th>口味：</th><th>{{novel.taste}}</th></tr>
        <tr><th>人物：</th><th>{{novel.actor}}</th></tr>
        <tr><th>首发地址：</th><th>{{novel.web}}</th></tr>
        <tr><th>常用标签：</th><th>
        <a class="label label-default" v-for="tag in novel.tags">默认标签</a> 
        </th></tr>
      </table>
    </div>
    <div class="love-box">
      状态：<input type="radio" name="state" class="state"  id="state-1"><label for="state-1" type="button" class="btn btn-sm btn-default">想看</label>
           <input type="radio" name="state" class="state"  id="state-2"><label for="state-2" type="button" class="btn btn-sm btn-default">再看</label>
           <input type="radio" name="state" class="state"  id="state-3"><label for="state-3" type="button" class="btn btn-sm btn-default">看过</label>
           <input type="radio" name="state" class="state"  id="state-4"><label for="state-4" type="button" class="btn btn-sm btn-default">搁置</label>
           <input type="radio" name="state" class="state"  id="state-5"><label for="state-5" type="button" class="btn btn-sm btn-default">抛弃</label><br>
      打分：<i class="score iconfont icon-wujiaoxing"></i><i class="score iconfont icon-wujiaoxing" ></i><i class="score iconfont icon-wujiaoxing"></i><i class="score iconfont icon-wujiaoxing"></i><i class="score iconfont icon-wujiaoxing"></i><br>
      添加标签：<input type="text"><button type="button" class="btn btn-danger btn-sm">确定</button>
    </div>
   <textarea ></textarea>
    <button type="button" class="btn btn-danger pull-right btn-sm commentbtn">评论</button>
    <ul class="commentbox">
      <li v-for="comment in novel.comments">
        <img src="static/images/1.jpg">
        <a href="">{{comment.userID.name}}：</a>
        {{comment.text}}
        <span class="reply pull-right" style="font-size:12px;">{{comment.meta.updateAt}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
const ERR_OK=0;
var moment = require('moment');
export default {
  data(){
    return {
      user: {},
      _user: {}
    }
  },
  props: ['id'],
  created(){
    var id='n000012';
    console.log(id);
    this.$http.get('/novel/'+id).then((response) => {
      response = response.body;
      if (response.errno===ERR_OK){
        this.novel=response.novel;
        this._user=response._user;
        this.novel.comments.forEach(function(comment){
          //图片地址加载
          comment.userID.photo = 'background-image:url(/static/'+comment.userID.photo+')';
          //时间格式话
          comment.meta.updateAt = moment(comment.meta.updateAt).format('YYYY/DD/MM     hh:mm:ss');
        })
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
