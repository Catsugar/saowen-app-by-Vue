<template>
<span>
    <i class="score iconfont icon-star" v-for="n in Math.floor(avg/2)"></i>
    <i class="score iconfont icon-wujiaoxing" v-for="n in Math.floor(avg)%2"></i>
</span>
</template>
<script>
export default {
  props: {
    avg: {
      type: Number
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.score { color:#F66;}
</style>
