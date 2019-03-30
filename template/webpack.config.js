const path = require('path');

module.exports = {
  entry: {
    'main': path.resolve(__dirname, 'assets/js/main.js')
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  },
}
