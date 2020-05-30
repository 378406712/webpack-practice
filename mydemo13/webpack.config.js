// webpack.config.js
const webpack = require('webpack')
const path = require('path')
module.exports = {
  entry: {
    app: './main.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname)
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}
