
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
    islogin: false,
    //是否有评论框
    iscommentbox: false,
    //是否有收藏框，
    islovebox: false
  },
  getters: {
    getdialog: state => state.isdialog,
    getdialoginfo: state => state.dialoginfo,
    getcover: state => state.iscover,
    getlogin: state => state.islogin,
    getcommentbox: state => state.iscommentbox,
    getlovebox: state => state.islovebox
  },
  mutations: {
    //信息提示框
    changedialog(state) {
      state.isdialog = !state.isdialog
    },
    changedialoginfo(state, data) {
      state.dialoginfo = data
    },
    //隐藏封面
    hiddencover(state) {
      state.iscover = false
    },
    //登录页面控制
    changelogin(state) {
      state.islogin = !state.islogin
    },
    // 评论框控制
    changecommentbox(state) {
      state.iscommentbox = !state.iscommentbox
    },
    // 收藏框控制
    changelovebox(state) {
      state.islovebox = !state.islovebox
    }
  }
})
export default store
