<template>
  <div class="content">
    <!--首页-->
    <div class="home" id="home">
      <ul>
        <!--item-->
        <li v-for="comment in comments" >
          <router-link class="comment-header" :to="'/user/'+comment.userID.id">
            <span :style="comment.userID.photo" class="leftphoto"></span>
            <span class="title" ><b>{{comment.userID.name}}</b></span>
            <span class="status">{{comment.state}}</span>
            <span class="pull-right" style="font-size:12px;">{{comment.meta.updateAt}}</span>
          </router-link>
          <hr>
          <div class="novel-bottom" > 
            <router-link :to="'/novel/'+comment.novelID.id" class="title">{{comment.novelID.name}}</router-link>
            &nbsp;&nbsp;&nbsp;&nbsp;作者：
            <router-link :to="'/author/'+comment.novelID.author.id" class="author">{{comment.novelID.author.name}}</router-link>
            &nbsp;&nbsp;&nbsp;&nbsp;评分：<b>{{comment.score.toFixed(2)}}</b><br>         
            <div class="comment">  
              <Tagbox :tags="comment.novelID.tags"></Tagbox>   
              <p>{{comment.text}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Tagbox from './Tagbox.vue';
const ERR_OK=0;
const Purl='background-image:url(/static/';//设定开发时图片的母路径
//const Purl='background-image:url(http://47.95.114.86/';//实际上线时
var moment = require('moment');
export default {
  data(){
    return {
      comments: [],
      _user: {}
    }
  },
  components: {
    Tagbox: Tagbox
  },
  created(){
    this.$http.get('/api/comments').then((response) => {
      response = response.body;
      if (response.errno===ERR_OK){
        this.comments=response.comments;
        this._user=response._user;
        this.comments.forEach(function(comment){
          //图片地址加载
          comment.userID.photo = Purl+comment.userID.photo+')';
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
