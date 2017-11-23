<template>
<div>
<div class="info" v-if="getdialog">
  <h3>{{getdialoginfo}}</h3>
  <button class="btn btn-sm btn-danger pull-right"  @click="closeDialog">确定</button>
  <button class="btn btn-sm btn-danger pull-right"  @click="closeDialog">取消</button>
</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    closeDialog () {
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
  box-shadow: 0 0 3px #ccc;
  border-radius: 1rem;
  padding: 20px;
  background-color: #eee;
  position: fixed;
  top:0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
}
.info h3{
  text-align: center;
  font:bold 16px/24px #333;
}
</style>
