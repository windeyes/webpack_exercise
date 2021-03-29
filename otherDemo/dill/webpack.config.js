const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const  AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./index.html'
    }),
    // new webpack.DllReferencePlugin({
    //   // context: __dirname,
    //   manifest: require('./dll/manifest.json'),
    //   // scope: 'dll',
    //   // sourceType: 'commonjs2',
    // }),
    new webpack.DllReferencePlugin ({
      manifest:path.resolve(__dirname,'dll/manifest.json')
    }),
    new AddAssetHtmlWebpackPlugin({
      filepath:path.resolve(__dirname,'dll/jquery.js')
    })
  ],
  mode:'production'
};