<template>
  <div class="content author-content">
    <h3><b>搜索结果：</b>&nbsp;&nbsp;&nbsp;&nbsp;共<i>10</i>篇</h3>
    <ul class="novellist-box">
        <li>
           <a href="" class="title">《杀破狼》</a>&nbsp;&nbsp;&nbsp;&nbsp;评分：
           <i class="score iconfont icon-wujiaoxing"></i>
           <i class="score iconfont icon-wujiaoxing"></i>
           <i class="score iconfont icon-wujiaoxing"></i>
           <i class="score iconfont icon-wujiaoxing"></i>
           <i class="score iconfont icon-wujiaoxing"></i><br>
           <b>原创</b>/<b>已完结</b>/<b>中长</b>/<b>2016</b>/<b>清水</b>/<b>费渡、骆闻舟</b><br>
           <hr>
           <a class="label">默认标签</a>
           <a class="label">主要标签</a> 
           <a class="label">成功标签</a> 
           <a class="label">信息标签</a> 
           <a class="label">警告标签</a> 
           <a class="label">危险标签</a></th>
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
    var key='狗血';
    this.$http.get('/api/result/'+key).then((response) => {
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
