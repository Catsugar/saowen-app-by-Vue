var express=require('express'),//加载模块
    path=require('path'),
    mongoose=require('mongoose'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    http = require('http'),
    logger = require('morgan');
var port=process.env.PORT || 3000;//设置端口
var app=express();//启动web服务器
var fs=require('fs');
//启动数据库
mongoose.connect('mongodb://localhost:27017/saowen', {useMongoClient: true,});
mongoose.connection.on('connected', () => {
  console.log('MongoDB Connection Success!');
});
mongoose.connection.on('error', (err) => {
  console.log('MongoDB Connection Error: ' + err);
});
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB Connection Failed!');
});

// models loading
var models_path = __dirname + '/app/models'
var walk = function(path) {
  fs
    .readdirSync(path)
    .forEach(function(file) {
      var newPath = path + '/' + file
      var stat = fs.statSync(newPath)

      if (stat.isFile()) {
        if (/(.*)\.(js|coffee)/.test(file)) {
          require(newPath)
        }
      }
      else if (stat.isDirectory()) {
        walk(newPath)
      }
    })
}

//创建服务器实例，设置端口
app.set('views','./app/views');
app.set('view engine','ejs');
app.use(cookieParser());
app.use(require('connect-multiparty')());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'saowen',
  resave: false,
  saveUninitialized: true
}));
if('development'===app.get('env')){
  app.set('showStackError',true);
  app.use(logger(':method :url :status'));
  app.locals.pretty=true;
  //mongoose.set('debug',true);
}
app.listen(port)//监听端口
app.set('port',3000);
console.log(port+'端口启动');
//设置模板
var partials = require('express-partials');
app.use(partials());
app.locals.moment = require('moment'); 
//设置静态路由
app.use(express.static(path.join(__dirname, 'static')));
//引用模块
require('./config/routes')(app);

