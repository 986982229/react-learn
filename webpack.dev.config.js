const path = require('path');
module.exports = {
  entry: {
    main: path.join(__dirname, 'index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'), // bundle生成emit到哪里
    filename: 'bundle.js', // bundle生成文件的名称
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
        },
      },
      //     {
      //       test: /\.(js|jsx)$/,
      //       exclude: /node_module/,
      //       enforce: 'pre',
      //       use: [
      //         {
      //           loader: 'babel-loader',
      //           query: {
      //             preset: ['env', 'react'],
      //           },
      //         },
      //         {
      //           loader: 'eslint-loader', // 指定启动eslint-loader
      //           options: {
      //             formatter: require('eslint-friendly-formatter'),
      //             emitWarning: true,
      //           },
      //         },
      //       ],
      //     },
      //     //style-loader用于将css最终写入html文件。
      //     {
      //       loader: 'style-loader',
      //     },
      //     // css-loader用于在js中import、require等方法引入css
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         minimize: process.env.NODE_ENV === 'production',
      //         importLoaders: 2,
      //         localIdentName: '[name]-[local]-[hash:base64:5]',
      //         modules: true,
      //       },
      //     },
      //     // postcss是将css加上浏览器Hack的loader
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         // 如果没有options这个选项将会报错 No PostCSS Config found
      //         plugins: (loader) => [
      //           require('autoprefixer')(), //CSS浏览器兼容
      //         ],
      //       },
      //     },
      //     // less-loader是将less编译成css的loader
      //     {
      //       loader: 'less-loader',
      //       options: {
      //         javascriptEnabled: true,
      //       },
      //     },
    ],
  },
};
