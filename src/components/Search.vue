<template>
  <div class="content search-content">
    <form>
      <input type="text" class="search center-block" placeholder="搜索作者、作品或者标签" id="search"  v-model="searchtag">
      <router-link :to="'/result/'+searchtag" class="iconfont icon-sousuo searchbtn"> 
      </router-link>
    </form>
    <h3><b>热门tag</b></h3>
    <div class="tag-box">
      <span><router-link :to="'/result/文笔好'" class="label label-default">文笔好</router-link></span> 
      <span><router-link :to="'/result/狗血'" class="label label-default">狗血</router-link></span>
      <span><router-link :to="'/result/年下'" class="label label-default">年下</router-link></span>
      <span><router-link :to="'/result/搞笑'" class="label label-default">搞笑</router-link></span>
      <span><router-link :to="'/result/校园'" class="label label-default">校园</router-link></span>
      <span><router-link :to="'/result/生子'" class="label label-default">生子</router-link></span>   
      <span><router-link :to="'/result/古风'" class="label label-default">古风</router-link></span>
      <span><router-link :to="'/result/强强'" class="label label-default">强强</router-link></span>
      <span><router-link :to="'/result/虐'" class="label label-default">虐</router-link></span>   
      <span><router-link :to="'/result/he'" class="label label-default">he</router-link></span>
      <span><router-link :to="'/result/短篇'" class="label label-default">短篇</router-link></span>
      <span><router-link :to="'/result/脑洞'" class="label label-default">脑洞</router-link></span>   
      <span><router-link :to="'/result/文笔好'" class="label label-default">文笔好</router-link></span> 
      <span><router-link :to="'/result/娱乐圈'" class="label label-default">娱乐圈</router-link></span> 
      <span><router-link :to="'/result/奇幻'" class="label label-default">奇幻</router-link></span>
      <span><router-link :to="'/result/主攻'" class="label label-default">主攻</router-link></span>
      <span><router-link :to="'/result/1V1'" class="label label-default">1V1</router-link></span> 
      <span><router-link :to="'/result/重生'" class="label label-default">重生</router-link></span>   
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchtag: ''
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
