// 引入依赖模块
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// 引入基本配置
var config = require('./webpack.config.js');

// 必须修改原配置中网站运行时的访问路径，相当于绝对路径，修改完之后，当前配置文件下的很多相对路径都是相对于这个来设定；
// 注意：webpack-dev-server会实时的编译，但是最后的编译的文件并没有输出到目标文件夹，而是保存到了内存当中
// 修改
config.output.publicPath = '/';

// 重新配置插件项
config.plugins = [
    // 位于开发环境下
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"'
        }
    }) 
];

module.exports = config;