
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    //登录用户
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
    islovebox: false,
    //是否有添加文单框，
    isaddcollectbox: false,
    //是否收藏
    islove: false
  },
  getters: {
    getuser: state => state.isuser,
    getdialog: state => state.isdialog,
    getdialoginfo: state => state.dialoginfo,
    getcover: state => state.iscover,
    getlogin: state => state.islogin,
    getcommentbox: state => state.iscommentbox,
    getlovebox: state => state.islovebox,
    getaddcollectbox: state => state.isaddcollectbox,
    getislove: state => state.islove
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
    },
    // 添加文单框控制
    changeaddcollectbox(state) {
      state.isaddcollectbox = !state.isaddcollectbox
    },
    // 评论框关闭
    closecommentbox(state) {
      state.iscommentbox = false
    },
    // 收藏框关闭
    closelovebox(state) {
      state.islovebox = false
    },
    // 收藏模式改变
    changlovestate(state) {
      state.islove = !state.islove
    }
  },
  actions: {
    signupsummit({commit}, data) { //注册
      axios.post('/signup', data)
      .then(function (data) {
        if (data.data.success === 1) {
          commit('changedialog')
          commit('changedialoginfo', '注册成功，请登录！！')
        } else if (data.data.success === 2){
          commit('changedialog')
          commit('changedialoginfo', '已经被人注册辣!!')
        } else {
          commit('changedialog')
          commit('changedialoginfo', '注册失败，请重试！！')
        }
      })
      .catch(function (err) {
        console.log(err)
      })
    },
    signinsummit({commit}, data) { //登录
      console.log(data);
      axios.post('/signin', data)
      .then(function (data) {
        if (data.data.success === 1) {
          commit('changedialog')
          commit('changedialoginfo', '登录成功!!')
        } else if (data.data.success === 2){
          commit('changedialog')
          commit('changedialoginfo', '不存在该用户!!')
        } else if (data.data.success === 0){
          commit('changedialog')
          commit('changedialoginfo', '密码错误，登录失败!!')
        }
      })
      .catch(function (err) {
        console.log(err)
      })
    },
    addlove({commit}, data) { //收藏
      console.log(data);
      axios.post('/back/love', data)
      .then(function (data) {
        if (data.data.success === 1) {
          commit('changedialog')
          commit('changedialoginfo', '收藏成功!!')
          commit('changlovestate')
        } else if (data.data.success === 0){
          commit('changedialog')
          commit('changedialoginfo', '收藏失败!!')
        }
      })
      .catch(function (err) {
        console.log(err)
      })
    },
    cancellove({commit}, data) { //取消收藏
      console.log(data);
      axios.post('/back/cancel', data)
      .then(function (data) {
        if (data.data.success === 1) {
          commit('changedialog')
          commit('changedialoginfo', '取消收藏!!')
          commit('changlovestate')
        } else if (data.data.success === 0){
          commit('changedialog')
          commit('changedialoginfo', '取消收藏失败!!')
        }
      })
      .catch(function (err) {
        console.log(err)
      })
    }
  }
})
export default store
