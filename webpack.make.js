var path = require('path');
var webpack = require('webpack');
var basscss = require('postcss-basscss');
var cssnext = require('cssnext');

var buildPlugins = [
  new webpack.NoErrorsPlugin()
  // new webpack.optimize.UglifyJsPlugin()
];

var devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];

var entries = {
  'DEV': [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  'BUILD': ['./src/index'],
  'TEST': [path.join(__dirname, 'webpack.test.bootstrap.js')]
};

var getEntry = function(BUILD, TEST, DEV) {
  if (TEST) {
    return entries.TEST;
  } else if(BUILD) {
    return entries.BUILD;
  } else {
    return entries.DEV;
  }
};

module.exports = function makeWebpackConfig(options) {

  var BUILD = options.BUILD;
  var TEST = options.TEST;
  var DEV = options.DEV;

  return {

    devtool: BUILD ? 'source-map' : 'eval',

    entry: getEntry(BUILD, TEST, DEV),

    output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js'
    },

    plugins: BUILD ? buildPlugins : devPlugins,

    resolve: {
      extensions: ['', '.js', '.jsx']
    },

    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: BUILD ? ['babel'] : ['react-hot', 'babel'],
          include: path.join(__dirname, 'src')
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader!postcss-loader'
        },
        {
          test: /\.(mp3|wav)/,
          loader: 'file-loader?name=[hash].[ext]'
        }
      ]
    },

    node: TEST ? { fs: 'empty' } : undefined,

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

  };

};


