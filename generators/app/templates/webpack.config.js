const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const path = require('path');

module.exports = env => {
  let libPath = path.join(__dirname, 'lib'),
      buildFldrPath = path.join(__dirname, 'build'),
      buildSrcFldrPath = path.join(__dirname, 'src'),
      plugins = [];

    plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
    plugins.push(new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: '[name].bundle.js'
    }));
    plugins.push(new HtmlWebpackPlugin({
      template: path.join(buildSrcFldrPath, 'index.html'),
      filename: 'index.html',
      inject: 'body'
    }));
    plugins.push(new WebpackCleanupPlugin({
      exclude: ['images/**/*', 'fonts/**/*', '**/*.css', '**/*.html']
    }));

  return {
    entry: {
      shim: path.join(buildSrcFldrPath, 'js', 'shim'),
      app: path.join(libPath, 'client', 'views'),
      vendor: ['react', 'react-dom', 'react-router', 'react-redux', 'react-router-redux', 'moment', 'axios', 'classnames', 'redux', 'redux-thunk']
    },
    output: {
      publicPath: '/',
      filename: '[name].bundle.js',
      path: buildFldrPath,
      chunkFilename: '[name].bundle.js'
    },
    module: {
      loaders: [{
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true
        }
      }]
    },
    plugins: plugins,
    devtool: 'inline-source-map'
  };
};