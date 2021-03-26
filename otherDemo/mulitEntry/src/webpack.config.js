const path = require('path')
module.exports={
  entry:{
    main:'./index.js',
    second:'./second.js'
  },
  output:{
    path:path.resolve(__dirname,'dist') ,
    //name对应上方名字
    filename:'[name].[contenthash:10].js',
    clean:true
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all'
    },
  },
  mode:'production'
}