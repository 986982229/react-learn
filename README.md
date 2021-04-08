# 从webpack开始练习react项目
## 参照教程 https://github.com/brickspert/blog/issues/1
## 2020-04-07
 ### 目标：添加webpack react，babel 能打出静态包
 ### 步骤：
* 1 安装npm i webpack webpack-cli --save-dev -g
* 2 构建打包相关
* 2.1 创建webpack.config.js文件，写入口文件和出口文件配置，并学习下path包的相关用法。
* 2.2 使用命令 webpack --config webpack.dev.config.js 设置打包文件配置。 添加打包参数--mode development。完整命令webpack --mode development --config webpack.dev.config.js
* 2.3 根据webpack的入口和出口配置，在项目下创建index.js文件，创建dist文件夹，并在文件夹下创建index.html文件，以及bundle包的饮用。
* 2.4 在入口文件index.js中，添加代码：document.getElementById('root').innerHTML = 'Webpack Hello World';
* 2.5 使用命令 webpack --mode development --config webpack.dev.config.js打包，打包后在dist生成bundle.js文件
* 2.6 在浏览器中打开index.html文件，显示Webpack Hello World。--成功
* 3 添加babel
* 3.1 查询babel官网 https://babeljs.io/docs/en/usage
* 3.2 添加preset相关 @babel/preset-env @babel/preset-react，babel-loader @babel/core。以后会在另一个分支中添加tsx的依赖和使用
* 3.3 项目目录下添加配置文件.babelrc 添加{ "presets": ["@babel/preset-env", "@babel/preset-react"] }
* 3.4 测试es6的语法, index.js文件中添加如下代码：
* ```javascript
    function aa() {
      return 'test babel';
    }
    document.getElementById('root').innerHTML = aa();
  ```
* 3.5 静态页面中显示test babel
* 4 添加react相关
* 4.1 添加依赖react react-dom react-router-dom
* 4.2 修改index.js，添加React引用。--完成
* 4.3 在src文件夹中添加index.js文件，创建一个React类型的文件。然后打包。
## 2020-04-07
* 5 构建简单web服务器 webpack-dev-server和webpack-dev-middleware
## 参考网址 https://blog.csdn.net/qq_35732147/article/details/91038349
* 5.1 webpack-dev-server 构建
* 5.1.1 修改package.json的版本，webpack5.X不支持webpack-dev-server
* ```javascript
    // 原来
    "webpack": "^5.31.0",
    "webpack-cli": "^4.6.0",
    // 修改后
    "webpack": "4.33.0",
    "webpack-cli": "3.3.0",
    "webpack-dev-server": "^3.11.2"
  ```
* 5.1.2 修改webpack.dev.config.js
  * ```javascript
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    historyApiFallback: true,
  },
  ```
* 5.1.3 修改package.json,添加脚本命令 "dev": "webpack-dev-server --config webpack.dev.config.js --open"
* 5.1.4 运行npm run server
* 5.1.5 删除 webpack 和webpack-cli，重新安装最新的依赖版本

* 5.2 使用web-dev-middleware + express
## 参考网址 https://segmentfault.com/a/1190000011761306
* 5.2.1 创建server.js
* 5.2.2 使用webpack-dev-middleware，启动服务后不能够打开浏览器，页面修改后，不能够自动刷新

