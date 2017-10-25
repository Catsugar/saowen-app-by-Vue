<template>
  <div class="content">
    <!---我的-->
    <div class="tab-pane" id="myback">
      <div class="backheader">
          <div style="background-image:url('/static/photo/1506099488117.jpeg')" class="backimg"></div>
          <div class="backtitle"><span><b>猫岁君</b><br>ID：<i>000001</i></span></div>
      </div>
      <div class="backlist">
      <input type="checkbox" name="op" class="op"  id="op-1" checked>
      <label for="op-1">
        <h3><i class="iconfont icon-zhuanji"></i>&nbsp;&nbsp;我的小说</h3>
        <ul class="op-content rank-list">
          <li><a href="" class="title">《默读》</a>&nbsp;&nbsp;作者：<a href="" class="author">priest</a><span class="pull-right">评分：<i>90.00</i></span> </li>
          <li><a href="" class="title">《默读》</a>&nbsp;&nbsp;作者：<a href="" class="author">priest</a><span class="pull-right">评分：<i>90.00</i></span></li>
          <li><a href="" class="title">《默读》</a>&nbsp;&nbsp;作者：<a href="" class="author">priest</a><span class="pull-right">评分：<i>90.00</i></span></li>
        </ul>
      </label>
      <input type="checkbox" name="op" class="op"  id="op-2">
      <label for="op-2">
         <h3><i class="iconfont icon-kehu"></i>&nbsp;&nbsp;我的作者</h3>
         <ul class="op-content rank-list">
           <li><a href="" class="author">priest</a>&nbsp;&nbsp;<span class="badge">5篇</span><span class="pull-right">共<i>10</i>人收藏</span></li>
           <li><a href="" class="author">priest</a>&nbsp;&nbsp;<span class="badge">5篇</span><span class="pull-right">共<i>10</i>人收藏</span></li>
           <li><a href="" class="author">priest</a>&nbsp;&nbsp;<span class="badge">5篇</span><span class="pull-right">共<i>10</i>人收藏</span></li>
         </ul>
      </label>
      <input type="checkbox" name="op" class="op"  id="op-3">
      <label for="op-3">
        <h3><i class="iconfont icon-iconset0197"></i>&nbsp;&nbsp;我的扫文单</h3>
        <ul class="op-content rank-list">
          <li>【推荐】<a href="" class="author">心里兵荒马乱的人，嘴上一言不发</a><span class="badge pull-right">57篇</span></li>
          <li>【推荐】<a href="" class="author">心里兵荒马乱的人，嘴上一言不发</a><span class="badge pull-right">57篇</span></li>
          <li>【推荐】<a href="" class="author">心里兵荒马乱的人，嘴上一言不发</a><span class="badge pull-right">57篇</span></li>
          <li>【推荐】<a href="" class="author">心里兵荒马乱的人，嘴上一言不发</a><span class="badge pull-right">57篇</span></li>
         </ul>
      </label>
      <input type="checkbox" name="op" class="op"  id="op-4" >
      <label for="op-4">
        <h3><i class="iconfont icon-shezhi"></i>&nbsp;&nbsp;退出</h3>
      </label>
      </div>
    </div>   
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
  created(){
    this.$http.get('/myhome/'+'id').then((response) => {
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
    });
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
