<template>
  <div class="content">
    <div class="novel-box">
      <span type="button" class="btn btn-warning btn-xs pull-right">加入扫文单</span>
      <span type="button" class="btn btn-danger btn-xs pull-right">评论</span>
      <h1>{{novel.name}}</h1>
      &nbsp;&nbsp;作者：
      <router-link :to="'/author/'+novel.author.id" class="author" style='font-size: 14px'>{{novel.author.name}}</router-link><br>
      共<b>{{novel.look}}</b>人查看&nbsp;&nbsp;
      共<b>{{novel.comments.length}}</b>人评分&nbsp;&nbsp;平均分：
      <Star :avg="novel.avg"></Star>
      <br>
      <table>
        <tr><th>类型：</th><th>{{novel.type}}</th></tr>
        <tr><th>进度：</th><th>{{novel.progress}}</th></tr>
        <tr><th>篇幅：</th><th>{{novel.len}}</th></tr>
        <tr><th>时间：</th><th>{{novel.year}}</th></tr>
        <tr><th>口味：</th><th>{{novel.taste}}</th></tr>
        <tr><th>人物：</th><th>{{novel.actor}}</th></tr>
        <tr><th>首发：</th><th>{{novel.web}}</th></tr>
        <tr><th>tags：</th><th></th></tr>
      </table>
      <Tagbox :tags="novel.tags"></Tagbox>
    </div>
    <div class="love-box">
      <ul class="commentlist">
        <li v-for="comment in novel.comments">
          <span class="replytime pull-right">{{comment.meta.updateAt}}</span>
          <router-link :to="'/user/'+comment.novelID.id">
            <span :style="comment.userID.photo" class="smallphoto"></span>
            <span class="title">{{comment.userID.name}}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;<span>状态：<i>{{comment.state}}</i></span>
            &nbsp;&nbsp;&nbsp;&nbsp;<span>评分：<i>{{comment.score.toFixed(2)}}</i></span>
          </router-link>
          <p>{{comment.text}}</p>
        </li>
      </ul>
    </div>
    <Commentbox v-show="show"></Commentbox>
    <Lovebox :collects="novel.collects" v-show="show"></Lovebox>  
  </div>
</template>

<script>
import Commentbox from './Commentbox.vue';
import Tagbox from './Tagbox.vue';
import Lovebox from './Lovebox.vue';
import Star from './Star.vue';
const ERR_OK=0;
var moment = require('moment');
export default {
  data(){
    return {
      novel: {},
      _user: {},
      show: true
    }
  },
  components: {
    Commentbox: Commentbox,
    Tagbox: Tagbox,
    Lovebox: Lovebox,
    Star: Star
  },
  created(){
    var avg=0;
    var id='n000012';
    console.log(id);
    this.$http.get('/api/novel/'+id).then((response) => {
      response = response.body;
      if (response.errno===ERR_OK){
        this.novel=response.novel;
        this._user=response._user;
        if (this.novel.comments!==[]){
          var len=this.novel.comments.length;
          this.novel.comments.forEach(function(comment){
            //图片地址加载
            comment.userID.photo = 'background-image:url(/static/'+comment.userID.photo+')';
            //时间格式话
            comment.meta.updateAt = moment(comment.meta.updateAt).format('YYYY/DD/MM');
            //算平均分
            avg+=comment.score;
          })
          this.novel.avg=avg/len;
        } else {
          this.novel.avg='未评分';
        }
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
