//api
var Render = require('../app/controllers/render.js'); 
var Add = require('../app/controllers/add.js'); 
var Admin = require('../app/controllers/admin.js'); 
var Del = require('../app/controllers/delete.js'); 
var Love = require('../app/controllers/love.js'); 
var express = require('express');
var Edit = require('../app/controllers/edit.js'); 
var apiRoutes=express.Router();
  //各种模型路由
  apiRoutes.get('/cover', Render.cover);
  apiRoutes.get('/login', Render.login);
  apiRoutes.get('/comments', Render.index);
  apiRoutes.get('/collectlist', Render.collectlist);
  apiRoutes.get('/ranklist', Render.ranklist);
  apiRoutes.get('/myhome/:id', Render.myhome);
  apiRoutes.get('/author/:id', Render.author);
  apiRoutes.get('/collect/:id', Render.collect);
  apiRoutes.get('/novel/:id', Render.novel);
  apiRoutes.get('/result', Render.result);
  apiRoutes.use('/api',apiRoutes);

module.exports = apiRoutes;


//*********************抛出模块
/*module.exports=function (app) {
  app.use((req, res, next) => {
    var _user = req.session.user;
    res.locals.user = _user;
    next();
  });*/


  
  /*app.route('/search').post(Search.search);
  app.route('/new/novel').post(Add.Addnovel);
  app.route('/new/collect').post(Add.Addcover,Add.Addcollect);
  app.route('/new/comment').post(Add.Addcomment);
  app.route('/new/user').post(Admin.Adduser);//注册
  app.route('/edit/novel').post(Edit.Editnovel);
  app.route('/edit/author').post(Edit.Editauthor);
  app.route('/edit/collect').post(Add.Addcover,Edit.Editcollect);
  app.route('/edit/user/photo').post(Add.Addphoto,Edit.Edituser);
  app.route('/edit/user/des').post(Edit.Edituser);
  app.route('/back/admin').delete(Del.Delete);
  app.route('/back/love').post(Love.Love);//收藏
  app.route('/back/cancel').post(Love.Cancel);//取消收藏
  app.route('/user/signin').post(Admin.Signin);//登录
  app.route('/user/logout').get(Admin.Logout);//登出
}*/





