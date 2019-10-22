const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: { main: path.join(__dirname, 'src', 'jsx', 'App', 'App.jsx') },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
  },
  stats: {
    colors: true,
    reasons: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: [path.join(__dirname, 'src', 'jsx')],
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'style.css' }),
    new HtmlWebpackPlugin({
      template: 'src/html/index.html',
    }),
  ],
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vender: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
