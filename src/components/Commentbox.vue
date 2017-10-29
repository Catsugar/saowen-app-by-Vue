<template>
  <div class="commentbox">
        状态：<input type="radio" name="state" class="state"  id="state-1"><label for="state-1" type="button" class="btn btn-sm btn-default">想看</label>
           <input type="radio" name="state" class="state"  id="state-2"><label for="state-2" type="button" class="btn btn-sm btn-default">再看</label>
           <input type="radio" name="state" class="state"  id="state-3"><label for="state-3" type="button" class="btn btn-sm btn-default">看过</label>
           <input type="radio" name="state" class="state"  id="state-4"><label for="state-4" type="button" class="btn btn-sm btn-default">搁置</label>
           <input type="radio" name="state" class="state"  id="state-5"><label for="state-5" type="button" class="btn btn-sm btn-default">抛弃</label><br>
      打分：
      <span class="scorebox">
        <span class="reduction" v-on:click="changeNum(score,-1)">-</span>
        <span class="select_input" >
          <input type="text"  v-model="score">
        </span>
        <span class="plus" v-on:click="changeNum(score,1)">+</span>
      </span>
      <br>
      添加标签：<input type="text"><button type="button" class="btn btn-danger btn-sm">确定</button>
      <textarea ></textarea>
      <button type="button" class="btn btn-danger pull-right btn-sm commentbtn">评论</button>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  methods: {
    changeNum: function(score, way){
      if (way>0 && score<10 ){
        score++;
      } else if ( way<0 && score>1 ){
        score--;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/********实现切换效果**********/
.state{
  display:none;}
.state:checked+label{
  color:#FFF;
  font-weight:bold;
  background-color:#C00;}
.score { 
  color:#F66;
  margin-left:5px;
  font-size:20px;}
textarea{
  width:100%;
  height:auto;
  min-height:80px;
  margin-bottom:10px;}
.scorebox{
  height:100%;
  width:136px;}
.reduction,.plus{
  height:28px;
  line-height:28px;
  text-align:center;
  width:15px;
  background-color:#f5f5f5;
  border:#ccc solid 1px;
  display: inline-block;}
.select_input{
  height:28px;
  line-height:28px;
  border-top:#ccc solid 1px;
  border-bottom:#ccc solid 1px;
  width:50px;
  background-color:#fff;}
.select_input input{
  text-align:center;
  width:50px;
  height:28px;
  line-height:28px;}
.commentbtn{margin-right:1rem;}
</style>
