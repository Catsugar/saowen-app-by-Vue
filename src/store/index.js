
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    _user: {
      id: '',
      name: '',
      password: '',
      emaill: '',
      description: '',
      photo: '',
      editnovel: [],
      editcollect: [],
      mycollect: [],
      myauthor: [],
      mycomment: [],
      meta: {}
    },
    // 提示框显示控制
    isdialog: false,
    // 提示框内容
    dialoginfo: '',
    // 是否显示封面
    iscover: true,
    // 是否登录
    islogin: false
  },
  getters: {
    getdialog: state => state.isdialog,
    getdialoginfo: state => state.dialoginfo,
    getcover: state => state.iscover
  },
  mutations: {
    changedialog(state) {
      state.dialog = !state.isdialog
    },
    changedialoginfo(state, data) {
      state.dialoginfo = data
    },
    //隐藏封面
    hiddencover(state) {
      state.iscover = false
    }
  }

})
export default store
