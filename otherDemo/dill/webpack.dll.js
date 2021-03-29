//npx webpack --config webpack.dll.js 配置命令
const path = require('path')
const webpack = require('webpack')
module.exports={
  entry:{
    //最终打包生成的name --> jquery
    //['jquery'] --> 要打包的库是jquery
    jquery:['jquery']
  },
  output:{
    // clean:true,
    filename:'[name].js',
    path:path.resolve(__dirname,'dll'),
    library:'[name]_[hash]' //打包的库向外暴露的名称
  },
  plugins:[
    new webpack.DllPlugin({
      context: __dirname,
      name: '[name]_[fullhash]',
      path: path.join(__dirname, 'dll/manifest.json'),
    })
    // new webpack.DllPlugin({
    //   name:'[name]_[hash]',//映射库的暴露的内容的名称
    //   path:path.resolve(__dirname,'dll/manifest.json') //输出的文件路径
    // })
  ],
  mode:'production'
}