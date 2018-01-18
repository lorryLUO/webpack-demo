// dev-server.js（服务器配置文件）
// 引入依赖模块
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev.config.js');
var proxyMiddleware = require('http-proxy-middleware');  // 处理异步插件
//var config = require('./config');
//if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);

// 创建一个express实例
var app = express();
//var context = config.dev.context;

// 对网站首页的访问返回 "Hello World!" 字样
app.get('/', function (req, res) {
    res.send('<h2>从服务端返回的节点</h2>Hello World!11111111<p>还没偶遇</p>');
});


// 调用webpack并把配置传递过去
var compiler = webpack(config);

// 使用 webpack-dev-middleware 中间件，搭建服务器
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

// 使用 webpack-hot-middleware 中间件，实现热加载
var hotMiddleware = require('webpack-hot-middleware')(compiler);

/*console.log(process.env.NODE_ENV)
// 配置异步
var options = {
    target: proxypath,
    changeOrigin: true,
}
if (context.length) {
    app.use(proxyMiddleware(context, options))
}*/

// 为了修改html文件也能实现热加载，使用webpack插件来监听html源文件改变事件
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        // 发布事件
        hotMiddleware.publish({ action: 'reload' });
        cb();
    })
});

// 注册中间件
app.use(devMiddleware);
app.use(hotMiddleware);

// 监听 8888 端口，开启服务器
app.listen(8020, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:8020');
})
