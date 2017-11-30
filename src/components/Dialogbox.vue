<template>
<div class="infodialog" v-if="getdialog">
  <div class="infodialog-box">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" @click="closeDialog">&times;</button>
        <h3 class="modal-title"><b>提&nbsp;&nbsp;示</b></h3>
      </div>
      <div class="modal-body">
        <h3 class="modal-title"><b>{{getdialoginfo}}</b></h3>
      </div>
    </div>
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
<style>
.infodialog{
  position: fixed;
  width: 100%;height: 150%;
  top:-100px;bottom:0;right: 0;left: 0;
  background-color: rgba(0,0,0,0.4);
}
.infodialog-box{
  width: 40%;
  height: 50%;
  overflow: auto;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: -100px; right: 0;
}
.infodialog-box h3{
  text-align: center;
}

</style>
