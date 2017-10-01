require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var express = require('express'),
    path=require('path'),
    mongoose=require('mongoose'),
    morgan = require('morgan'),
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


var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = (process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'production')
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))
//设置模板
var partials = require('express-partials');
app.use(partials());
app.locals.moment = require('moment'); 
//引用模块
require('../routes/routes')(app);

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

/*app.listen(port)//监听端口
app.set('port',3000);
console.log(port+'端口启动');*/
var server = app.listen(port)
module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
console.log(port+'端口启动');