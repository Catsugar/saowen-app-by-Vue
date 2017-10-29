<template>
  <ul>
    <li v-for="collect in collects">{{collect.name}}</li>
  </ul>
</template>

<script>
export default {
  props: {
    collects: {
      type: Array
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
