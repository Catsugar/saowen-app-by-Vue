<template>
  <div class="content ">
    <div class="novel-box">
      <span class="dropdown pull-right">
         <button type="button" class="btn dropdown-toggle btn-warning btn-sm" id="dropdownMenu1" data-toggle="dropdown">加入扫文单</button>
         <ul class="dropdown-menu pull-left" role="menu" aria-labelledby="dropdownMenu1">
             <li role="presentation" v-for="collect in novel.collects">{{collect}}</li>
         </ul>
       </span>
      <h1>{{novel.name}}</h1>
      &nbsp;&nbsp;作者：<router-link :to="'/author/'+novel.author.id" class="author" style='font-size: 14px'>{{novel.author.name}}</router-link><br>
      共<b>{{novel.look}}</b>人查看&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共<b>{{novel.comments.length}}</b>人评分<br>
      平均分：<b>{{novel.avg.toFixed(2)}}</b><i class="score iconfont icon-star" v-for="n in Math.floor(novel.avg/2)"></i>
        <i class="score iconfont icon-wujiaoxing" v-for="n in Math.floor(novel.avg)%2"></i>
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
      <router-link :to="'/result?key='+tag" v-for="(tag,index) in novel.tags":key="tag" :class="['label', tips[index%6]]" >{{tag}}</router-link>
    </div>
    <div class="love-box">
      状态：<input type="radio" name="state" class="state"  id="state-1"><label for="state-1" type="button" class="btn btn-sm btn-default">想看</label>
           <input type="radio" name="state" class="state"  id="state-2"><label for="state-2" type="button" class="btn btn-sm btn-default">再看</label>
           <input type="radio" name="state" class="state"  id="state-3"><label for="state-3" type="button" class="btn btn-sm btn-default">看过</label>
           <input type="radio" name="state" class="state"  id="state-4"><label for="state-4" type="button" class="btn btn-sm btn-default">搁置</label>
           <input type="radio" name="state" class="state"  id="state-5"><label for="state-5" type="button" class="btn btn-sm btn-default">抛弃</label><br>
      打分：
      <br>
      添加标签：<input type="text"><button type="button" class="btn btn-danger btn-sm">确定</button>
    </div>
   <textarea ></textarea>
    <button type="button" class="btn btn-danger pull-right btn-sm commentbtn">评论</button>
    <ul class="commentbox">
      <li v-for="comment in novel.comments">
        <span class="replytime pull-right">{{comment.meta.updateAt}}</span>
        <router-link :to="'/user/'+comment.novelID.id">
          <span :style="comment.userID.photo" class="smallphoto"></span>
          <span class="title">{{comment.userID.name}}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;<span>状态：<b>{{comment.state}}</b></span>
          &nbsp;&nbsp;&nbsp;&nbsp;<span>评分：<b>{{comment.score.toFixed(2)}}</b></span>
        </router-link>
        <p>{{comment.text}}</p>
        
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
      novel: {},
      _user: {},
      tips: []
    }
  },
  props: ['id'],
  created(){
    var avg=0;
    var id='n000012';
    console.log(id);
    this.$http.get('/api/novel/'+id).then((response) => {
      response = response.body;
      if (response.errno===ERR_OK){
        this.tips=['label-default', 'label-primary', 'label-success', 'label-info', 'label-warning', 'label-danger'];
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
