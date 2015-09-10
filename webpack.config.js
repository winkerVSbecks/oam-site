
var path = require('path')
var webpack = require('webpack')
var basscss = require('postcss-basscss')
var cssnext = require('cssnext')

module.exports = {

  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },

  postcss: function () {
    return [
      cssnext({
        features: {
          customProperties: {
            variables: {
              // Example
              // 'font-family': '"Avenir Next", Avenir, "Helvetica Neue", Helvetica, sans-serif'
            }
          }
        }
      })
    ]
  }

}

