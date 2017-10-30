<template>
  <div class="content search-content">
    <form>
      <input type="text" class="search center-block" placeholder="搜索作者、作品或者标签" id="search">
      <button type="submit" class="iconfont icon-sousuo searchbtn"></button>
    </form>
    <h3><b>热门tag</b></h3>
    <div class="tag-box">
      <span><router-link :to="'/result?key='+tag" class="label label-default">文笔好</router-link></span> 
      <span><router-link :to="'/result?key='+tag" class="label label-default">狗血</router-link></span>
      <span><router-link :to="'/result?key='+tag" class="label label-default">年下</router-link></span>
      <span><router-link :to="'/result?key='+tag" class="label label-default">搞笑</router-link></span>
      <span><router-link :to="'/result?key='+tag" class="label label-default">校园</router-link></span>
      <span><router-link :to="'/result?key='+tag" class="label label-default">生子</router-link></span>   
      <span><router-link :to="'/result?key='+tag" class="label label-default">古风</router-link></span>
      <span><router-link :to="'/result?key='+tag" class="label label-default">强强</router-link></span>
      <span><router-link :to="'/result?key='+tag" class="label label-default">虐</router-link></span>   
      <span><router-link :to="'/result?key='+tag" class="label label-default">he</router-link></span>
      <span><router-link :to="'/result?key='+tag" class="label label-default">短篇</router-link></span>
      <span><router-link :to="'/result?key='+tag" class="label label-default">脑洞</router-link></span>   
      <span><router-link :to="'/result?key='+tag" class="label label-default">文笔好</router-link></span> 
      <span><router-link :to="'/result?key='+tag" class="label label-default">娱乐圈</router-link></span> 
      <span><router-link :to="'/result?key='+tag" class="label label-default">奇幻</router-link></span>
      <span><router-link :to="'/result?key='+tag" class="label label-default">主攻</router-link></span>
      <span><router-link :to="'/result?key='+tag" class="label label-default">1V1</router-link></span> 
      <span><router-link :to="'/result?key='+tag" class="label label-default">重生</router-link></span>   
    </div>
  </div>
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
/**********搜索页**************/
.search {
  width:100%;
  height:35px;
  margin-top: 40px;
  border:none;
  border-radius:5px;
  background-color:#fff;
  color:#666;
  padding-left:20px;
  padding-right: 25px;}
.search-content{
  padding: 20px;}
.search-content h3{
  border-bottom: 1px solid #ccc;
  line-height: 30px;
  margin-bottom:15px;
}
.searchbtn{
  background-color: #fff;
  border: none;
  color:#CCC;
  font-size:18px;
  width: 25px;
  position: absolute;
  right:25px;
  top:68px;
  display: inline-block;
}
.tag-box span a{
  font-size: 12px;
  background-color:#fff;
  color:#666;
}
.tag-box span a:hover{
  color: #fff;
}
.tag-box span{
  padding: 5px;
  display: inline-block;
}
</style>
