const path = require('path');

module.exports = {
  entry:'./src/text.css',
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
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ],
  },
}