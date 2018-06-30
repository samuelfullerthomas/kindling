const path = require('path')
const output = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './index.js',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  mode: process.env.NODE_ENV,
  output: {
    path: output,
    filename: 'bundle.js'
  }
}
