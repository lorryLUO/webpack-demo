// 引入依赖模块
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	
    entry :path.resolve(__dirname, './src/js/entry.js'),
    
    output : {
    	
        filename: '[name].[hash].js',// 这样就可以生成两个js文件, 名字分别为index1.js, 和index2.js
        publicPath: __dirname + '/out',//添加静态资源, 否则会出现路径错误
        path : path.resolve(__dirname, '/out'),//输出文件路径
        // 非主入口的文件名，即未被列在entry中，却又需要被打包出来的文件命名配置
        chunkFilename: '[id].[chunkhash].js'
    },
    module :{
        rules :[
           { test: /.js$/, use: ['babel-loader']},
           { test: /.css$/, use: ['style-loader', 'css-loader'],exclude: /node_modules/},/*解析css, 并把css添加到html的style标签里*/
        //    {test: /.css$/, use: ExtractTextPlugin.extract({fallback: 'style-loader',use: 'css-loader'})},
           { test: /.(jpg|png|gif|svg)$/, use: ['url-loader?limit=8192&name=./[name].[ext]']},/*解析图片*/
           { test: /.less$/, use: ['style-loader', 'css-loader', 'less-loader']}/*解析less, 把less解析成浏览器可以识别的css语言*/
        ]
    }
} 