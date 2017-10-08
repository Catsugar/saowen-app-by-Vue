<template>
<transition name="fade">
  <div class="content ">
    <div class="novel-box">
      <h1>默读</h1>&nbsp;&nbsp;&nbsp;&nbsp;
      作者：<a href="" class="author">priest</a>
      <a href="" class="edit">&nbsp;&nbsp;&nbsp;&nbsp;<i class="iconfont icon-comment-pen"></i></a>
      <span class="dropdown pull-right">
         <button type="button" class="btn dropdown-toggle btn-warning btn-sm" id="dropdownMenu1" data-toggle="dropdown">加入扫文单</button>
         <ul class="dropdown-menu pull-left" role="menu" aria-labelledby="dropdownMenu1">
             <li role="presentation"><a role="menuitem" tabindex="-1" href="#">扫文单1</a></li>
             <li role="presentation"><a role="menuitem" tabindex="-1" href="#">扫文单1</a></li>
         </ul>
       </span>
      <br>
      共<i>10</i>人评分<br>
      评分：<i class="score iconfont icon-wujiaoxing"></i><i class="score iconfont icon-wujiaoxing" ></i><i class="score iconfont icon-wujiaoxing"></i><i class="score iconfont icon-wujiaoxing"></i><i class="score iconfont icon-wujiaoxing"></i><br>
      <table>
        <tr><th>类型：</th><th>原创</th></tr>
        <tr><th>进度：</th><th>已完结</th></tr>
        <tr><th>篇幅：</th><th>中长</th></tr>
        <tr><th>时间：</th><th>2016</th></tr>
        <tr><th>口味：</th><th>清水</th></tr>
        <tr><th>人物：</th><th>费渡、骆闻舟</th></tr>
        <tr><th>首发地址：</th><th>晋江</th></tr>
        <tr><th>常用标签：</th><th><a class="label">默认标签</a> <a class="label">主要标签</a> <a class="label">成功标签</a> <a class="label">信息标签</a> <a class="label">警告标签</a> <a class="label">危险标签</a></th></tr>
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
        <li><img src="static/images/1.jpg"><a href="">实验君：</a>英俊的博主么英俊的博主么英俊,的博主么英俊的博主么英俊的博主么英俊的博
        主么英俊的博主么英俊的博主么英俊的博主么英俊的博主么英俊的博主么英俊的博主么英俊的博主么英俊的博主么英俊的博主么英俊
        的博主么英俊的博主么英俊的博主么英俊的博主么么<a href="" class="reply pull-right">回复</a></li>
        <li><img src="static/images/2.jpg"><a href="">实验君：</a>英俊的博主么么哒！英俊的博主么么哒！英俊的博主么么哒！英俊的博主么么哒！英俊的博主么么哒！英俊的博主么么哒！英俊的博主么么哒！英俊的博主么么哒！英俊的博主么么哒！英俊的博主么么哒！英俊的博主么么哒！英俊的博主么么哒！英俊的博主么么哒！英俊的博主么么哒！英俊的博主么么哒！英俊的博主么么哒！<a href="" class="reply pull-right">回复</a></li>
        <li><img src="static/images/3.jpg"><a href="">实验君：</a>英俊的博主么么哒！<a href="" class="reply pull-right">回复</a></li>
        <li><img src="static/images/4.jpg"><a href="">实验君：</a>英俊的博主么么哒！<a href="" class="reply pull-right">回复</a></li>
    </ul>
  </div>
</transition>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
