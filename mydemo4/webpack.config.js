const path = require('path')

module.exports = {
  entry: path.join(__dirname) + '/main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }]
  }
}
