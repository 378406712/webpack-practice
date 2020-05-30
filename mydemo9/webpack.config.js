var webpack = require('webpack')

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(process.env.DEBUG || 'false')
})
console.log(process.env.DEBUG)
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [devFlagPlugin]
}
