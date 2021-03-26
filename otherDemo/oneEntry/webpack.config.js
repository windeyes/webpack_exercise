const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:'./index.js',
  output:{
    filename:'js/[name].[contenthash].js',
    path:path.resolve(__dirname,'dist'),
    clean:true
  },
  plugins:[
    new HtmlWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  }
}