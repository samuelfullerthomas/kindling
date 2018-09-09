const path = require('path')
const output = path.resolve(__dirname, 'dist')

module.exports = {
  entry: ['babel-polyfill', './index.js'],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { modules: true }
          }
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
  output: {
    path: output,
    filename: 'bundle.js'
  }
}
