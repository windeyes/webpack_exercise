const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//导出css
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');//压缩css
// process.env.NODE_ENV='development' //设置为开发环境
module.exports = {
  entry:'./src/textDemo.js',
  mode:'development',
  output:{
    path:path.resolve(__dirname, 'dist'),
    filename:'js/bundle.js',
    clean:true,
    assetModuleFilename: 'asstes/[hash][ext][query]'
  },
  plugins: [
    //创建一份空文件，并自动引入打包资源
    new HtmlWebpackPlugin({
      template:'src/index.html' //将该文件复制一份，并自动引入打包资源
    }),
    new MiniCssExtractPlugin({
      filename:'css/main.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader", //创建style标签
          "css-loader",//将css变成commonjs
          {
            loader: "postcss-loader",
            options:{
              postcssOptions:{plugins:["postcss-preset-env"]}
            }
          }
        ],
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options:{
              postcssOptions:{plugins:["postcss-preset-env"]}
            }
          },
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
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  
  devServer:{
    contentBase: path.join(__dirname, 'dist'),
    // 启动gzip压缩
    compress: true,
    open:true,
    port:'8011'
  }
}