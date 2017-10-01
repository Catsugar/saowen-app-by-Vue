 
  //加载各个模块
var users = require('../models/user.js'); 
var novels=require('../models/novel.js');
var authors=require('../models/author.js');
var collections=require('../models/collection.js');
var comments=require('../models/comment.js');
var _underscore=require('underscore');
var count=8;//每页几条数据
  exports.search=function(req,res){
    var key = req.body.key;
    var p=0;
    res.redirect('/result?key='+ key+'&p='+p);
  }

  //搜索页
  exports.result=function(req,res){
    var _user = req.session.user;
    var KEY = req.query.key;
    novels.find({$or: [{'name': { $regex: KEY, $options: 'i' }}, {'tags': { $regex: KEY, $options: 'i' }}]})
    .populate('author').populate('comments').sort({'meta.updateAt': -1}).exec(function(err, allnovels) {  
      if(err){console.log(err);} 
      authors.find({$or: [{'name': { $regex: KEY, $options: 'i' }}]})
      .populate({path:'novels', populate:[{path:'author'},{path:'comments'}]}).sort({'meta.updateAt': -1}).exec(function(err, allauthors) {
        if(err){console.log(err);} 
        allauthors.forEach(function(author){
          author.novels.forEach(function(novel){
            allnovels.push(novel);
          })
        })
        var novels=allnovels.slice(num,num+count);
        res.render('search',{
          title:KEY+'的搜索结果：',
            novels: novels,
            _user:_user,
            KEY:KEY
          })
        })
      })
  }
