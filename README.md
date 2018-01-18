# Step 1: 首先安装Node.js, 可以去Node.js官网下载.

# npm install webpack -g

# 新建项目文件加 mypackage

# npm init 初始话package.json文件

# 接下来创建并编写配置文件. 首先我们先介绍几个配置文件的参数. 
#  entry： 是 页面入口文件配置 （html文件引入唯一的js 文件）
#  output：对应输出项配置 
#  path ：入口文件最终要输出到哪里，
#  filename：输出文件的名称
#  publicPath：公共资源路径

# 生成 并配置所有webpack.config.js 文件并配置

//webpack.config.js
module.exports = {
    entry : './src/js/entry.js',//入口文件
    output : {//输出文件
        filename : 'index.js',//输出文件名
        path : __dirname + '/out'//输出文件路径
    },
}

//entry.js
console.log('1234');

# npm install babel-loader babel babel-core css-loader style-loader  url-loader file-loader less-loader less  --save-dev 
# 所有要打包的文件在 entry.js 进行引入，通过webpack.config.js生成./out/index.js  在index.html中引入即可

# npm install webpack 在当前目录下 下载插件包