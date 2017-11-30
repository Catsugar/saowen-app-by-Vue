<template>
<div class="infodialog" v-if="getaddcollectbox">
  <div class="infodialog-box">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" @click="closeAddcollectbox">&times;</button>
        <h3 class="modal-title"><b>新建扫文单</b></h3>
      </div>
      <div class="modal-body">
        <form method="post"enctype="multipart/form-data">
          <input type="text"  placeholder="输入名称" name='' class="wholeinput"><br>
          <input type="text"  placeholder="一句话描述文単" name='' class="wholeinput"><br>
          <div class="input-append wholeinput">
            <input id="lefile" type="file" style="display:none" name='upposter' >
            <input id="photoCover" class="input-large" type="text" style="height:30px;">
            <span class="btn btn-sm btn-default uploadbtn pull-right" onclick="$('input[id=lefile]').click();" style="width:50px;">上传</span>
          </div>
          <div class="modal-btn">
            <button type="submit" class="btn btn-default" >确定</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal">取消</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    closeAddcollectbox () {
      this.$store.commit('changeaddcollectbox')
    }
  },
  computed: {
    ...mapGetters([
      'getaddcollectbox'
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
  font-size: 12px;
  line-height: 16px;
}
.infodialog-box{
  width: 80%;
  height: 50%;
  overflow: auto;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: -100px; right: 0;
}
.infodialog-box h3{
  text-align: center;
}
.wholeinput{
  width: 100%;
  margin-bottom: 20px;
}
.wholeinput input{
  width:80%;
}
</style>
