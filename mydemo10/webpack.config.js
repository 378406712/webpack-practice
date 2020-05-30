const path  = require('path')
console.log(path.join(__dirname))
module.exports = {
    entry: './main.js',
    output: {
      filename: 'bundle.js',
      path:path.join(__dirname)
    }
  };
  