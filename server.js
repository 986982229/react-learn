const path = require('path');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-Hot-middleware');
const webpack = require('webpack');
const config = require('./webpack.dev.config.js');

// webpack 编辑器
const compiler = webpack(config);

// 实例化一个express实例
const app = express(),
  DIST_DIR = path.resolve(__dirname, 'dist'),
  PORT = 3000;

const devMiddleware = webpackDevMiddleware(compiler, {
  // 这里可以填写更多配置项
});

const hotMiddleware = webpackHotMiddleware(compiler, {
  log: false,
  heartbeat: 2000,
});

app.use(devMiddleware); // 告诉express使用webpack-dev-middleware
app.use(hotMiddleware); // 告诉express使用webpack-Hot-middleware

// 这个方法和下边注释的方法作用一样，就是设置访问静态文件的路径
app.use(express.static(DIST_DIR));

// 在3000端口号上启动服务器
app.listen(PORT, () => {
  console.log('server is running');
  console.log('localhost: ', PORT);
});
