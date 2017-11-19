<template>
  <div class="content author-content">
    <h3><b>搜索结果：</b>&nbsp;&nbsp;&nbsp;&nbsp;共{{allnovels.length}}篇</h3>
    <ul class="novellist-box">
        <li v-for="novel in allnovels">
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
      allnovels: [],
      _user: {},
      tips: []
    }
  },
  components: {
    Tagbox: Tagbox,
    Star: Star
  },
  created(){
    var key=this.$route.params.id;
    this.$http.get('/api/result/'+key).then((response) => {
      response = response.body;
      if (response.errno===ERR_OK){
        this.allnovels=response.allnovels;
        this._user=response._user;
        if (this.allnovels!==[]){
          this.allnovels.forEach(function(novel){
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
