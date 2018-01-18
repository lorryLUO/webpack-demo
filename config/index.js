// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    dev: {
        env: {
            NODE_ENV: '"development"'
        },
        port: 8020,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        context: [ // 代理路径
            '/shopping',
            '/ugc',
            '/v1',
            '/v2',
            '/v3',
            '/v4',
            '/bos',
            '/member',
            '/promotion',
            '/eus',
            '/payapi',
            '/img',
        ],
        proxypath: 'http://cangdu.org:8001',
        cssSourceMap: false
    }
}