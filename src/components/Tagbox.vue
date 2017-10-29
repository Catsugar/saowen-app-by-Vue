<template>
<div>
<router-link :to="'/result?key='+tag" v-for="(tag,index) in tags":key="tag" :class="['label', tips[index%6]]" >{{tag}}</router-link>
</div>
</template>
<script>
export default {
  props: {
    tags: {
      type: Array
    }
  },
  data(){
    return {
      tips: ['label-default', 'label-primary', 'label-success', 'label-info', 'label-warning', 'label-danger']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
