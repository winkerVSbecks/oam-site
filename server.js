var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function(err, result) {

  if (err) {
    console.log(err);
  }

  console.info('==> 🌎  Listening on port 3000. Open up http://localhost:3000/ in your browser.');

});
