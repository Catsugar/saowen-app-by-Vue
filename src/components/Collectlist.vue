<template>
  <div class="content">
    <!--书单-->
    <div class="tab-pane" id="collect">
      <ul class="collectlist-box">
        <!---item-->
        <li v-for="collect in collections">
          <div style="background:url(static/back/b0.jpg) center center no-repeat"><a href="" >
          <h3>{{collect.name}}</h3>
          <h5>by&nbsp;<i>{{collect.editor.name}}</i></h5>
          <button type="button" class="btn btn-xs btn-danger center-block">收藏</button></a></div>
          <p><span class="pull-left">共<i>11</i>篇文</span><span class="pull-right">共<i>{{collect.loved.length}}</i>人收藏</span></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const ERR_OK=0;
export default {
  data(){
    return {
      collections: [],
      title: '',
      _user: {}
    }
  },
  created(){
    this.$http.get('/api/collectlist').then((response) => {
      response = response.body;
      if (response.errno===ERR_OK){
        this.collections=response.collections;
        this.title=response.title;
        this._user=response._user;
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
