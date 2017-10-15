<template>
  <div class="content">
    <!--首页-->
    <div class="home" id="home">
      <ul>
        <!--item-->
        <li v-for="comment in comments" >
          <div class="comment-header">
            <a :style="comment.userID.photo" class="leftphoto"></a>
            <a class="title" href=""><b>{{comment.userID.name}}</b></a>
            <span class="status">{{comment.state}}</span>
            <span class="pull-right" style="font-size:12px;">{{comment.meta.updateAt}}</span>
          </div>
          <hr>
          <div class="novel-bottom"> 
            <a href="" class="title">{{comment.novelID.name}}</a>&nbsp;&nbsp;&nbsp;&nbsp;作者：<a href="" class="author">{{comment.novelID.author.name}}</a>&nbsp;&nbsp;&nbsp;&nbsp;评分：<b>{{comment.score.toFixed(2)}}</b><br>            
            <a v-for="tag in comment.novelID.tags" class="label">{{tag}}</a> 
            <div class="comment">
              <p>{{comment.text}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const ERR_OK=0;
var moment = require('moment');
export default {
  data(){
    return {
      comments: [],
      title: '',
      _user: {}
    }
  },
  created(){
    this.$http.get('/api/comments').then((response) => {
      response = response.body;
      if (response.errno===ERR_OK){
        this.comments=response.comments;
        this._user=response._user;
        this.comments.forEach(function(comment){
          //图片地址加载
          comment.userID.photo = 'background-image:url(/static/'+comment.userID.photo+')';
          //时间格式话
          comment.meta.updateAt = moment(comment.meta.updateAt).format('YYYY/DD/MM     hh:mm:ss');
        })
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
