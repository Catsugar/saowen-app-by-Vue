<template>
<transition name="slide">
  <div class="content search-content">
    <form>
      <input type="text" class="search center-block" placeholder="搜索作者、作品或者标签" id="search">
      <button type="submit" class="iconfont icon-sousuo searchbtn"></button>
    </form>
    <h3><b>热门tag</b></h3>
    <div class="tag-box">
      <span><a href="" class="label label-default">文笔好</a></span> 
      <span><a href="" class="label label-default">狗血</a></span>
      <span><a href="" class="label label-default">年下</a></span>
      <span><a href="" class="label label-default">搞笑</a></span>
      <span><a href="" class="label label-default">校园</a></span>
      <span><a href="" class="label label-default">生子</a></span>   
      <span><a href="" class="label label-default">古风</a></span>
      <span><a href="" class="label label-default">强强</a></span>
      <span><a href="" class="label label-default">虐</a></span>   
      <span><a href="" class="label label-default">he</a></span>
      <span><a href="" class="label label-default">短篇</a></span>
      <span><a href="" class="label label-default">脑洞</a></span>   
      <span><a href="" class="label label-default">文笔好</a></span> 
      <span><a href="" class="label label-default">娱乐圈</a></span> 
      <span><a href="" class="label label-default">奇幻</a></span>
      <span><a href="" class="label label-default">主攻</a></span>
      <span><a href="" class="label label-default">1V1</a></span> 
      <span><a href="" class="label label-default">重生</a></span>   
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '打板单'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
