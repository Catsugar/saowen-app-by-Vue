 //加载各个模块
var users = require('../models/user.js'); 
var novels=require('../models/novel.js');
var authors=require('../models/author.js');
var collections=require('../models/collection.js');
var comments=require('../models/comment.js');
var _underscore=require('underscore');
//covel
  exports.cover=function(req,res){
    console.log(req.session);
    if(req.session){
      var _user =req.session.user;
    }else{
      var _user =undefined;
    }
    res.json({
      title:'welcome！',
      _user:_user
    }) 
  }
//login
  exports.login=function(req,res){
    console.log(req.session);
    if(req.session){
      var _user =req.session.user;
    }else{
      var _user =undefined;
    }
    res.json({
      title:'登录',
      _user:_user
    })
  }
  /************主界面********/
 //首页
  exports.index=function(req,res){
    if(req.session){
      var _user =req.session.user;
    }else{
      var _user =undefined;
    }  
    comments.find({}).populate('userID').populate({path:'novelID', populate:{path:'author'}}).sort({'meta.updateAt': -1}).exec(function(err, comments) {  
      if(err){console.log(err);}
      res.json({
        errno:0,
        comments: comments,
        _user:_user
      })
    })
  }
  //书单
  exports.collectlist=function(req,res){
    if(req.session){
      var _user =req.session.user;
    }else{
      var _user =undefined;
    }  
    collections.find({}).populate('editor').sort({'meta.updateAt': -1}).exec(function(err, collections) { 
      if(err){console.log(err);};
      res.json({
        errno:0,
        collections:collections,
        _user:_user
      })
    })
  }
//排行榜
  exports.ranklist=function(req,res){
    console.log(req.session);
    if(req.session){
      var _user =req.session.user;
    }else{
      var _user =undefined;
    }
    novels.find({}).sort({'look':-1}).limit(10).populate('author').populate('comments').exec(function(err, novelRanks) {
      if(err){console.log(err);}
      authors.find({}).sort({'look':-1}).limit(10).populate('novels').exec(function(err, authorRanks) {
        if(err){console.log(err);}
        collections.find({}).sort({'look':-1}).limit(10).exec(function(err, collectionRanks) {
          if(err){console.log(err);}   
          res.json({
            errno:0,
            novelRanks:novelRanks,
            authorRanks:authorRanks,
            collectionRanks:collectionRanks,
            _user:_user
          })
        })
      })
    })
  }
//我的 
  exports.user=function(req,res){
    console.log(req.session);
    if(req.session){
      var _user =req.session.user;
    }else{
      var _user =undefined;
    }
    var ID = req.params.id;
    users.findOne({id: ID})
    .populate('editcollect')
    .populate({ path:'mycollect', populate:{path:'editor'}})
    .populate({ path:'myauthor', populate:{path:'novels'}})
    .populate({ path:'mycomment', populate:{path:'novelID',populate:{path:'author'}}})
    .populate({ path:'editnovel', populate:[{path:'author'},{path:'comments'}]})
    .exec(function(err,user) {
      if(err){console.log(err);};
      res.json({
        errno:0,
        user: user,
        _user:_user
      })
    })
  }
/*******单个ui*******/
  //作者详情
  exports.author=function(req,res){
    console.log(req.session);
    if(req.session){
      var _user =req.session.user;
    }else{
      var _user =undefined;
    }
    var ID = req.params.id;
    authors.update({id: ID},{$inc:{look:1}},function(err){
      if(err){console.log(err);} 
    })
    authors.findOne({id: ID}).populate('editor').populate({path:'novels', populate:{path:'comments'}})
    .exec(function(err, author) {
      if(err){console.log(err);};
      res.json({
        errno:0,
        author: author,
        _user:_user
      })
    })
  }
  //书单详情
  exports.collect=function(req,res){
    console.log(req.session);
    if(req.session){
      var _user =req.session.user;
    }else{
      var _user =undefined;
    }
    var ID = req.params.id;
    collections.update({id: ID},{$inc:{look:1}},function(err){
      if(err){console.log(err);} 
    })
    collections.findOne({id: ID}).populate('editor').populate({path:'novels', populate:[{path:'author'},{path:'comments'}]})
    .exec(function(err,collection) {
      if(err){console.log(err);};
      res.json({
        errno:0,
        collection: collection,
        _user:_user
      })
    })
  }
  //小说详情
  exports.novel=function(req,res){
    if(req.session){
      var User =req.session.user;
    }else{
      var User =undefined;
    }
    var userID=(User!==undefined) ? User._id:undefined;
    var ID = req.params.id;
    novels.update({id: ID},{$inc:{look:1}},function(err){
      if(err){console.log(err);} 
    })
    novels.findOne({id: ID}).populate('author').populate('collects').populate({ path:'comments', populate:{path:'userID'}})
    .exec(function(err,novel) {
      if(err){console.log(err);};
      users.findOne({_id:userID}).populate('editcollect').sort({'meta.updateAt': -1}).exec(function(err, _user) {  
        if(err){console.log(err);}
        if(_user==null){_user=undefined;}
        res.json({
          errno:0,
          novel: novel,
          _user:_user
        })
      })
    })
  }
//搜索页
  exports.result=function(req,res){
    if(req.session){
      var _user =req.session.user;
    }else{
      var _user =undefined;
    }
    var KEY = req.query.key;
    novels.find({$or: [{'name': { $regex: KEY, $options: 'i' }}, {'tags': { $regex: KEY, $options: 'i' }}]})
    .populate('author').populate('comments').sort({'meta.updateAt': -1}).exec(function(err, allnovels) {  
      if(err){console.log(err);} 
      authors.find({$or: [{'name': { $regex: KEY, $options: 'i' }}]})
      .populate({path:'novels', populate:[{path:'author'},{path:'comments'}]}).sort({'meta.updateAt': -1}).exec(function(err, authors) {
        if(err){console.log(err);} 
        allauthors.forEach(function(author){
          author.novels.forEach(function(novel){
            allnovels.push(novel);
          })
        })
        res.json({
          errno:0,
          allnovels: allnovels,
          _user:_user,
          KEY:KEY
        })
      })
    })
  }

