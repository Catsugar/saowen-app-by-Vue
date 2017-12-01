<template>
  <div class="content author-content">
    <div class="collect-box" v-bind:style="collect.cover">
      <div class="cover">
        <h3>{{collect.name}}</h3>
        <button type="button" class="btn btn-ms btn-danger center-block" @click="love">收藏</button>  
      </div>  
      <p>
        <span class="pull-left">by&nbsp;{{collect.editor.name}}</span>
        <span class="pull-right" >共{{collect.look}}人查看&nbsp;&nbsp;&nbsp;&nbsp;共{{collect.loved.length}}人收藏</span>
      </p>
    </div>
    <div class="novel-box">
      <h3><b>简介</b></h3>
      <hr>
      <p>{{collect.description}}</p>
    </div>
    <h3><b>作品列表&nbsp;&nbsp;&nbsp;&nbsp;共{{collect.novels.length}}篇</b></h3>
    <ul class="novellist-box">
        <li v-for="novel in collect.novels">
           <router-link :to="'/novel/'+novel.id" class="title">{{novel.name}}</router-link>&nbsp;&nbsp;平均分：
           <Star :avg="novel.avg"></Star>
           <br>
           <b>{{novel.type}}</b>/
           <b>{{novel.progress}}</b>/
           <b>{{novel.len}}</b>/
           <b>{{novel.year}}</b>/
           <b>{{novel.taste}}</b>/
           <b>{{novel.actor}}</b>/
           <b>{{novel.web}}</b><br>
           <hr>
           <Tagbox :tags="novel.tags"></Tagbox> 
        </li>
    </ul>
  </div>
</template>

<script>
import Tagbox from './Tagbox.vue';
import Star from './Star.vue';
const Purl='background-image:url(/static/';//设定开发时图片的母路径
//const Purl='background-image:url(/47.95.114.86/';//实际上线时
const ERR_OK=0;
export default {
  data(){
    return {
      collect: {},
      _user: {}
    }
  },
  components: {
    Tagbox: Tagbox,
    Star: Star
  },
  methods: {
    love: function(){
      this.$store.commit('changedialog')
      this.$store.commit('changedialoginfo', '收藏成功了哟！！')
    }
  },
  created(){
    var id=this.$route.params.id;
    this.$http.get('/api/collect/'+id).then((response) => {
      response = response.body;
      if (response.errno===ERR_OK){
        this.collect=response.collect;
        this._user=response._user;
        this.collect.cover = Purl+this.collect.cover+')';
        if (this.collect.novels!==[]){
          this.collect.novels.forEach(function(novel){
            if (novel.comments!==[]){
              var len=novel.comments.length;
              var avg=0;
              novel.comments.forEach(function(comment){
                //算平均分
                avg+=comment.score;
              })
              novel.avg=avg/len;
            } else {
              novel.avg=0;
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
.collect-box{
  background-size:cover;
  background-position: center center;
  width: 100%;
  margin-top: -5px;
  height: 200px;
  position: relative;
transition:all ease 1s;}
.collect-box:hover{
  background-position: top center;
}
.cover{
  transition:all ease 1s;
  background-color:rgba(40,40,40,0.2);
  width: 100%;
  height:100%;
  padding: 40px;
}
.collect-box p{
  width: 100%;
  height: 40px;
  background-color:rgba(180,180,180,0.7);
  color:#fff;
  position: absolute;
  bottom:-5px;
  left: 0;right:0;
  padding:0 20px;}
.collect-box span{
  color:#fff;
  font:14px/40px "Microsoft Yahei", "微软雅黑";}
.collect-box h3{
  font:bold 24px/32px "Microsoft Yahei", "微软雅黑";
  color:#fff;
  height: 32px;
  text-shadow: 1px 1px 1px #000;
  text-align: center;
  display: block;
  z-index: 100}
.collect-box button{margin-top: 15px;}
.novel-box{margin-top: -5px;}
</style>
