const path = require('path')
const output = path.resolve(__dirname, 'dist')

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        oneOf: [{
          test: /\.module\.css$/,
          use: [
            require.resolve('style-loader'),
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }
          ]
        }, {
          use: [
            require.resolve('style-loader'),
            require.resolve('css-loader')
          ]
        }]
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
