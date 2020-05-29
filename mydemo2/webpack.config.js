const path = require('path')

// module.exports = {
//   /**
//    * 对象引入入口方式
//    */
//   entry: {
//     bundle1: path.join(__dirname, 'main1.js'),
//     bundle2: path.join(__dirname, 'main2.js')
//   },
//   output: {
//     filename: '[name].js' //打包成bundle1.js,bundle2.js
//   }
// }

module.exports = {
  /**
   * 数组引入入口方式
   */
  entry: ['./main1.js', './main2.js'],
  output: {
    filename: '[name].js'
  }
}
