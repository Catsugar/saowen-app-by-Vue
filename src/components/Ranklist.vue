<template>
<transition name="fade">
  <div class="content">
    <!---排行-->
    <div class="tab-pane" id="rank">
      <ul id="myTab" class="rank-btn nav nav-tabs">
         <li class="active" ><a href="#novel-rank" data-toggle="tab"><b>小说榜</b></a></li>
         <li><a href="#author-rank" data-toggle="tab"><b>作者榜</b></a></li>
         <li><a href="#collect-rank" data-toggle="tab"><b>文单榜</b></a></li>
      </ul>
      <div id="myTabContent" class="rank-content content tab-content">
         <div class="tab-pane fade in active" id="novel-rank">
             <ul class="novel-list rank-list">
               <li><a href="" class="title">《默读》</a>&nbsp;&nbsp;作者：<a href="" class="author">priest</a><span class="pull-right">评分：<i>90.00</i></span> </li>
               <li><a href="" class="title">《默读》</a>&nbsp;&nbsp;作者：<a href="" class="author">priest</a><span class="pull-right">评分：<i>90.00</i></span></li>
               <li><a href="" class="title">《默读》</a>&nbsp;&nbsp;作者：<a href="" class="author">priest</a><span class="pull-right">评分：<i>90.00</i></span></li>
               <li><a href="" class="title">《默读》</a>&nbsp;&nbsp;作者：<a href="" class="author">priest</a><span class="pull-right">评分：<i>90.00</i></span></li>
               <li><a href="" class="title">《默读》</a>&nbsp;&nbsp;作者：<a href="" class="author">priest</a><span class="pull-right">评分：<i>90.00</i></span></li>
               <li><a href="" class="title">《默读》</a>&nbsp;&nbsp;作者：<a href="" class="author">priest</a><span class="pull-right">评分：<i>90.00</i></span></li>
               <li><a href="" class="title">《默读》</a>&nbsp;&nbsp;作者：<a href="" class="author">priest</a><span class="pull-right">评分：<i>90.00</i></span></li>
               <li><a href="" class="title">《默读》</a>&nbsp;&nbsp;作者：<a href="" class="author">priest</a><span class="pull-right">评分：<i>90.00</i></span></li>
               <li><a href="" class="title">《默读》</a>&nbsp;&nbsp;作者：<a href="" class="author">priest</a><span class="pull-right">评分：<i>90.00</i></span></li>
               <li><a href="" class="title">《默读》</a>&nbsp;&nbsp;作者：<a href="" class="author">priest</a><span class="pull-right">评分：<i>90.00</i></span></li>
             </ul>
         </div>
         <div class="tab-pane fade" id="author-rank">
             <ul class="author-list rank-list">
               <li><a href="" class="author">priest</a>&nbsp;&nbsp;<span class="badge">5篇</span><span class="pull-right">共<i>10</i>人收藏</span></li>
               <li><a href="" class="author">priest</a>&nbsp;&nbsp;<span class="badge">5篇</span><span class="pull-right">共<i>10</i>人收藏</span></li>
               <li><a href="" class="author">priest</a>&nbsp;&nbsp;<span class="badge">5篇</span><span class="pull-right">共<i>10</i>人收藏</span></li>
               <li><a href="" class="author">priest</a>&nbsp;&nbsp;<span class="badge">5篇</span><span class="pull-right">共<i>10</i>人收藏</span></li>
               <li><a href="" class="author">priest</a>&nbsp;&nbsp;<span class="badge">5篇</span><span class="pull-right">共<i>10</i>人收藏</span></li>
               <li><a href="" class="author">priest</a>&nbsp;&nbsp;<span class="badge">5篇</span><span class="pull-right">共<i>10</i>人收藏</span></li>
               <li><a href="" class="author">priest</a>&nbsp;&nbsp;<span class="badge">5篇</span><span class="pull-right">共<i>10</i>人收藏</span></li>
               <li><a href="" class="author">priest</a>&nbsp;&nbsp;<span class="badge">5篇</span><span class="pull-right">共<i>10</i>人收藏</span></li>
               <li><a href="" class="author">priest</a>&nbsp;&nbsp;<span class="badge">5篇</span><span class="pull-right">共<i>10</i>人收藏</span></li>
               <li><a href="" class="author">priest</a>&nbsp;&nbsp;<span class="badge">5篇</span><span class="pull-right">共<i>10</i>人收藏</span></li>
             </ul>
         </div>
         <div class="tab-pane fade" id="collect-rank">
             <ul class="collection-list rank-list">
               <li>【推荐】<a href="" class="author">心里兵荒马乱的人，嘴上一言不发</a><span class="badge pull-right">57篇</span></li>
               <li>【推荐】<a href="" class="author">心里兵荒马乱的人，嘴上一言不发</a><span class="badge pull-right">57篇</span></li>
               <li>【推荐】<a href="" class="author">心里兵荒马乱的人，嘴上一言不发</a><span class="badge pull-right">57篇</span></li>
               <li>【推荐】<a href="" class="author">心里兵荒马乱的人，嘴上一言不发</a><span class="badge pull-right">57篇</span></li>
               <li>【推荐】<a href="" class="author">心里兵荒马乱的人，嘴上一言不发</a><span class="badge pull-right">57篇</span></li>
               <li>【推荐】<a href="" class="author">心里兵荒马乱的人，嘴上一言不发</a><span class="badge pull-right">57篇</span></li>
               <li>【推荐】<a href="" class="author">心里兵荒马乱的人，嘴上一言不发</a><span class="badge pull-right">57篇</span></li>
               <li>【推荐】<a href="" class="author">心里兵荒马乱的人，嘴上一言不发</a><span class="badge pull-right">57篇</span></li>
               <li>【推荐】<a href="" class="author">心里兵荒马乱的人，嘴上一言不发</a><span class="badge pull-right">57篇</span></li>
               <li>【推荐】<a href="" class="author">心里兵荒马乱的人，嘴上一言不发</a><span class="badge pull-right">57篇</span></li>
             </ul>
         </div>
       </div>
    </div>
  </div>
</transition>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
