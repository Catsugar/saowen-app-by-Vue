<template>
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
               <li v-for="novel in novelRanks">
                 <router-link :to="'/novel/'+novel.id" class="title">{{novel.name}}</router-link>
                 &nbsp;&nbsp;作者：
                 <router-link :to="'/author/'+novel.author.id" class="author">{{novel.author.name}}</router-link>
                 <span class="pull-right"><b>{{novel.comments.length}}</b>人评分&nbsp;<b>{{novel.avg.toFixed(2)}}</b></span> 
               </li>
             </ul>
         </div>
         <div class="tab-pane fade" id="author-rank">
             <ul class="author-list rank-list">
               <li v-for="author in authorRanks">
                 <router-link :to="'/author/'+author.id" class="author">{{author.name}}</router-link>
                 &nbsp;&nbsp;代表作：
                 <router-link :to="'/novel/'+author.novels[0].id" v-if="author.novels" class="author">{{author.novels[0].name}}</router-link>
                 <span class="pull-right">共<b>{{author.loved.length}}</b>人收藏</span>
               </li>
             </ul>
         </div>
         <div class="tab-pane fade" id="collect-rank">
             <ul class="collection-list rank-list">
               <li v-for="collect in collectionRanks">【推荐】
                 <router-link :to="'/collect/'+collect.id" class="author">{{collect.name}}</router-link>
                 &nbsp;&nbsp;共<i>{{collect.loved.length}}</i>人收藏
                 <span class="badge pull-right"><i>{{collect.novels.length}}</i>篇</span>
               </li>
             </ul>
         </div>
       </div>
    </div>
  </div>
</template>

<script>
const ERR_OK=0;
export default {
  data(){
    return {
      novelRanks: [],
      authorRanks: [],
      collectionRanks: [],
      _user: {}
    }
  },
  created(){
    this.$http.get('/api/ranklist').then((response) => {
      response = response.body;
      if (response.errno===ERR_OK){
        this.novelRanks=response.novelRanks;
        this.authorRanks=response.authorRanks;
        this.collectionRanks=response.collectionRanks;
        this._user=response._user;
        this.novelRanks.forEach(function(novel){
          var avg=0;
          if (novel.comments!==[]){
            novel.comments.forEach(function(comment){
              avg+=comment.score;
            })
            avg = avg/ novel.comments.length;
            novel.avg=avg;
          } else {
            novel.avg='未评分';
          }
        })
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
