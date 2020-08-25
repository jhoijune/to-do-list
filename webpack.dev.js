const { merge } = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    vendor: ['react-hot-loader/patch', 'webpack-hot-middleware/client'],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    hot: true,
  },
  stats: {
    colors: true,
    reasons: true,
  },
});
