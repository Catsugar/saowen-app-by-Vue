//api
var Render = require('../app/controllers/render.js'); 
var Add = require('../app/controllers/add.js'); 
var Admin = require('../app/controllers/admin.js'); 
var Del = require('../app/controllers/delete.js'); 
var Love = require('../app/controllers/love.js'); 
var express = require('express');
var Edit = require('../app/controllers/edit.js'); 
var apiRoutes=express.Router();

  /*apiRoutes.use((req, res, next) => {
    var _user = req.session.user;
    res.locals.user = _user;
    next();
  });*/
  //各种模型路由
  apiRoutes.get('/cover', Render.cover);
  apiRoutes.get('/login', Render.login);
  apiRoutes.get('/comments', Render.index);
  apiRoutes.get('/collectlist', Render.collectlist);
  apiRoutes.get('/ranklist', Render.ranklist);
  apiRoutes.get('/user/:id', Render.user);
  apiRoutes.get('/author/:id', Render.author);
  apiRoutes.get('/collect/:id', Render.collect);
  apiRoutes.get('/novel/:id', Render.novel);
  apiRoutes.get('/result/:key', Render.result);  
  apiRoutes.use('/api',apiRoutes);

  apiRoutes.route('/signup').post(Admin.Signup);//注册
  apiRoutes.route('/signin').post(Admin.Signin);//登录
  apiRoutes.route('/logout').get(Admin.Logout);//登出
  apiRoutes.route('/back/love').post(Love.Love);//收藏
  apiRoutes.route('/back/cancel').post(Love.Cancel);//取消收藏
  
  module.exports = apiRoutes;

/*
  app.route('/new/novel').post(Add.Addnovel);
  app.route('/new/collect').post(Add.Addcover,Add.Addcollect);
  app.route('/new/comment').post(Add.Addcomment);
  app.route('/edit/novel').post(Edit.Editnovel);
  app.route('/edit/author').post(Edit.Editauthor);
  app.route('/edit/collect').post(Add.Addcover,Edit.Editcollect);
  app.route('/edit/user/photo').post(Add.Addphoto,Edit.Edituser);
  app.route('/edit/user/des').post(Edit.Edituser);
  app.route('/back/admin').delete(Del.Delete);

}*/





