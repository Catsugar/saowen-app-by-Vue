<template>
<div class="info">
  <h3>{{getdialoginfo}}</h3>
  <button class="btn btn-sm btn-danger pull-right"  @click="close">确定</button>
  <button class="btn btn-sm btn-danger pull-right"  @click="close">取消</button>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    open () {
      this.$store.commit('changedialog')
    },
    close () {
      this.$store.commit('changedialog')
    }
  },
  computed: {
    ...mapGetters([
      'getdialog',
      'getdialoginfo'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info{
  font-size: 14px;
  box-shadow: 0 0 5px #ccc;
  border-radius: 1rem;
  padding: 20px;
  background-color: #eee;
  position: fixed;
  top:50%;
  left: 50%;
}
.info h3{
  text-align: center;
  font:bold 16px/24px #333;
}
</style>
