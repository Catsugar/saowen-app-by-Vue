<template>
  <div class="content">
    <!---我的-->
    <div class="tab-pane" id="myback">
      <div class="backheader">
          <div :style="user.photo" class="backimg"></div>
          <div class="backtitle"><span><b>{{user.name}}</b><br>{{user.description }}</span></div>
      </div>
      <div class="backlist">
        <input type="checkbox" name="op" class="op"  id="op-1">
        <label for="op-1">
          <h3><i class="iconfont icon-zhuanji"></i>&nbsp;我的小说</h3>
          <ul class="op-content rank-list">
            <li v-for="novel in user.editnovel">
              <router-link :to="'/novel/'+novel.id" class="title">{{novel.name}}</router-link>
              &nbsp;作者：
              <router-link :to="'/author/'+novel.author.id" class="author">{{novel.author.name}}</router-link>
              <span class="pull-right">评分：<i>{{novel.avg.toFixed(2)}}</i></span> 
            </li>
          </ul>
        </label>
        <input type="checkbox" name="op" class="op"  id="op-2">
        <label for="op-2">
          <h3><i class="iconfont icon-iconset0197"></i>&nbsp;我的文单</h3>
          <ul class="op-content rank-list">
            <li v-for="collect in user.editcollect">【推荐】
              <router-link :to="'/collect/'+collect.id" class="author">{{collect.name}}</router-link>
              <span class="badge pull-right">{{collect.novels.length}}篇</span>
            </li>
           </ul>
        </label>
        <input type="checkbox" name="op" class="op"  id="op-3">
        <label for="op-3">
           <h3><i class="iconfont icon-kehu"></i>&nbsp;收藏作者</h3>
           <ul class="op-content rank-list">
              <li v-for="author in user.myauthor">
                <router-link :to="'/author/'+author.id" class="author" style="margin-left:0.8rem">{{author.name}}</router-link>
                &nbsp;&nbsp;<span class="badge">{{author.novels.length}}篇</span>
                <span class="pull-right">{{author.loved.length}}人收藏</span>
              </li>
           </ul>
        </label>
        <input type="checkbox" name="op" class="op"  id="op-4">
        <label for="op-4">
          <h3><i class="iconfont icon-iconset0197"></i>&nbsp;收藏文单</h3>
          <ul class="op-content rank-list">
            <li v-for="collect in user.mycollect">【推荐】
              <router-link :to="'/collect/'+collect.id" class="author">{{collect.name}}</router-link>
              <span class="badge pull-right">{{collect.novels.length}}篇</span>
            </li>
           </ul>
        </label>
        <input type="checkbox" name="op" class="op"  id="op-5" >
        <label for="op-5">
          <h3><i class="iconfont icon-shezhi"></i>&nbsp;退出</h3>
        </label>
      </div>
    </div>   
  </div>
</template>

<script>
const ERR_OK=0;
export default {
  data(){
    return {
      user: {},
      _user: {},
      tips: []
    }
  },
  props: ['id'],
  created(){
    var id='u000000';
    this.$http.get('/api/user/'+id).then((response) => {
      response = response.body;
      console.log(response);
      if (response.errno===ERR_OK){
        this.tips=['label-default', 'label-primary', 'label-success', 'label-info', 'label-warning', 'label-danger'];
        this.user=response.user;
        this._user=response._user;
        this.user.photo = 'background-image:url(/static/'+this.user.photo+')';
        if (this.user.editnovel!==[]){
          this.user.editnovel.forEach(function(novel){
            var avg=0;
            if (novel.comments!==[]){
              var len=novel.comments.length;
              novel.comments.forEach(function(comment){
                //算平均分
                avg+=comment.score;
              })
              novel.avg=avg/len;
            } else {
              novel.avg='未评分';
            }
          })
        }
      }
    })
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
