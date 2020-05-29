const path = require('path')
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    publicPath: './dist/'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',

            options: {
              limit: 8192,
              esModule: false
            }
          }
        ]
      }
    ]
  }
}
