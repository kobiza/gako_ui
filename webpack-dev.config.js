var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        APP_DIR + '/index.jsx'
    ],
    output: {
        path: BUILD_DIR,
        pathinfo: true,
        publicPath: '/dist',
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.js?/,
                include : APP_DIR,
                loader : 'babel-loader'
            }
        ]
    }
};

module.exports = config;
