从webpack开始练习react项目
2020-04-07
 目标：添加webpack react，babel 能打出静态包
 步骤：
  1 安装npm i webpack webpack-cli --save-dev -g
  2 构建打包相关
  2.1 创建webpack.config.js文件，写入口文件和出口文件配置，并学习下path包的相关用法。
  2.2 使用命令 webpack --config webpack.dev.config.js 设置打包文件配置。 添加打包参数--mode development。完整命令webpack --mode development --config webpack.dev.config.js
  2.3 根据webpack的入口和出口配置，在项目下创建index.js文件，创建dist文件夹，并在文件夹下创建index.html文件，以及bundle包的饮用。
  2.4 在入口文件index.js中，添加代码：document.getElementById('root').innerHTML = 'Webpack Hello World';
  2.5 使用命令 webpack --mode development --config webpack.dev.config.js打包，打包后在dist生成bundle.js文件
  2.6 在浏览器中打开index.html文件，显示Webpack Hello World。--成功
  3 添加babel
  3.1 查询babel官网 https://babeljs.io/docs/en/usage
  3.2 添加preset相关 @babel/preset-env @babel/preset-react，babel-loader @babel/core。以后会在另一个分支中添加tsx的依赖和使用
  3.3 项目目录下添加配置文件.babelrc 添加{ "presets": ["@babel/preset-env", "@babel/preset-react"] }
  3.4 测试es6的语法, index.js文件中添加如下代码：
    function aa() {
      return 'test babel';
    }
    document.getElementById('root').innerHTML = aa();
  3.5 静态页面中显示test babel
  4 添加react相关
  4.1 添加依赖react react-dom react-router-dom
  4.2 修改index.js，添加React引用。--完成
  4.3 在src文件夹中添加index.js文件，创建一个React类型的文件。然后打包。




