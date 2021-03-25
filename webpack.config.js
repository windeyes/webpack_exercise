const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:'./src/textDemo.js',
  mode:'development',
  output:{
    path:path.resolve(__dirname, 'dist'),
    filename:'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader", //创建style标签
          "css-loader"//将css变成commonjs
        ],
      },
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ],
      },
      {
        test: /\.html$/i,
        loader:'html-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      
    ],
  },
  plugins: [
    //创建一份空文件，并自动引入打包资源
    new HtmlWebpackPlugin({
      template:'src/index.html' //将该文件复制一份，并自动引入打包资源
    })
  ],
}