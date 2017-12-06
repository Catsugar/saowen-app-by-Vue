
//var router = express.Router();
var opn = require('opn')
var express = require('express'),
    config = require('./config/index'),
    path=require('path'),
    mongoose=require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    http = require('http'),
    logger = require('morgan');
//var port=3389 || process.env.PORT;//设置端口
var port = process.env.PORT || config.dev.port;
var app=express();//启动web服务器
var fs=require('fs');
var api = require('./config/routes');
var router = express.Router();
// 用于静态展示入口
router.get('/', function (req, res, next) {
  req.url = './index.html';
  next();
});

app.use(router);


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
app.use(cookieParser());
app.use(require('connect-multiparty')());
app.use(api);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'saowen',
  resave: false,
  saveUninitialized: true
}));

var env = process.env.NODE_ENV || 'development'
if ('development' === app.get('env')) {
  app.set('showStackError', true)
  app.use(morgan(':method :url :status'))
  app.locals.pretty = true
  //mongoose.set('debug', true)
}

var server = app.listen(port)
console.log(port+'端口启动');
app.locals.moment = require('moment'); 
//require('./config/routes')(app);
//声明静态资源地址
app.use(express.static('./dist'));
