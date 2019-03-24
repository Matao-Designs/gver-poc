const
  path = require('path');

module.exports = {
  mode: 'none',
  entry: {
    head: './src/js/head.all.js',
    app: [
      'babel-polyfill',
      './src/js/app.all.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build/js/')
  }
};
