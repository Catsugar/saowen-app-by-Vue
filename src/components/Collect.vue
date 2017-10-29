<template>
  <div class="content author-content">
    <div class="novel-box">
      <button type="button" class="btn pull-right btn-warning btn-xs" >收藏</button>
      <h1><b>{{collect.name}}</b></h1>&nbsp;&nbsp;&nbsp;&nbsp;
      共<b>{{collect.look}}</b>人查看&nbsp;&nbsp;
      共<i>{{collect.loved.length}}</i>人收藏
      <h3><b>简介</b></h3>
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
  created(){
    var id='c000003';
    this.$http.get('/api/collect/'+id).then((response) => {
      response = response.body;
      if (response.errno===ERR_OK){
        this.collect=response.collect;
        this._user=response._user;
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

</style>
