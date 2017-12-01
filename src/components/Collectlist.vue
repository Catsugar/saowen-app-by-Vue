<template>
  <div class="content">
    <!--书单-->
    <div class="tab-pane" id="collect">
      <ul class="collectlist-box">
        <!---item-->
        <li v-for="collect in collections">
          <div v-bind:style="collect.cover">
          <router-link :to="'/collect/'+collect.id">
            <h3>{{collect.name}}</h3>
            <h5>by&nbsp;<i>{{collect.editor.name}}</i></h5>
            <button type="button" class="btn btn-xs btn-danger center-block" @click="love">收藏</button>
          </router-link>
          </div>
          <p>
            <span class="pull-left">共<i>{{collect.novels.length}}</i>篇文</span>
            <span class="pull-right">共<i>{{collect.loved.length}}</i>人收藏</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const ERR_OK=0;
const Purl='background-image:url(/static/';//设定开发时图片的母路径
//const Purl='background-image:url(/47.95.114.86/';//实际上线时
export default {
  data(){
    return {
      collections: [],
      _user: {}
    }
  },
  methods: {
    love: function(){
      this.$store.commit('changedialog')
      this.$store.commit('changedialoginfo', '收藏成功了哟！！')
    }
  },
  created(){
    this.$http.get('/api/collectlist').then((response) => {
      response = response.body;
      if (response.errno===ERR_OK){
        this.collections=response.collections;
        this._user=response._user;
        this.collections.forEach(function(collection){
          //图片地址加载
          collection.cover = Purl+collection.cover+')';
        })
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
