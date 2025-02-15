const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//导出css
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');//压缩css
// process.env.NODE_ENV='development' //设置为开发环境
const commonPostCss = {
    loader: "postcss-loader",
    options:{
      postcssOptions:{plugins:["postcss-preset-env"]}
    }
  }
const commonMiniCssExtractPlugin = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: '../',
  },
}
module.exports = {
  target:'web',
  entry:[
    './src/textDemo.js',
    './src/index.html' //开启hmr后需要再做引入才能使页面热更新
  ],
  mode:'development',
  output:{
    path:path.resolve(__dirname, 'dist'),
    filename:'js/bundle.js',
    clean:true,
    assetModuleFilename: 'asstes/[hash][ext][query]',
    // publicPath: '../assets'
  },
  plugins: [
    //创建一份空文件，并自动引入打包资源
    new HtmlWebpackPlugin({
      template:'src/index.html', //将该文件复制一份，并自动引入打包资源
      minify:true
    }),
    new MiniCssExtractPlugin({
      filename:'css/main.css'
    }),
  ],
  module: {
    rules: [
      {
        //不用让所有文件都全部匹配一次，匹配到其中一个就停止了
        oneOf:[
          {
            test: /\.css$/i,
            use: [
              commonMiniCssExtractPlugin,
              // "style-loader", //创建style标签
              "css-loader",//将css变成commonjs
              commonPostCss
            ],
          },
          {
            test: /\.less$/i,
            use: [
              // commonMiniCssExtractPlugin,
              "style-loader",
              "css-loader",
              commonPostCss,
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
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use:{
              loader: 'babel-loader',
              options:{ 
                presets:['@babel/preset-env'],
                //开启babel缓存
                cacheDirectory :true
              }
            }
            
          }
        ]

      }
      
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
    // 启动gzip压缩,
    compress: true,
    open:true,
    port:'8011',
    hot:true
  },
  target:'web' //该配置使得页面能够自动刷新
}