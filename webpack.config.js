import path from 'path';

module.exports = {
  entry: './jsx/app.jsx',
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    filename: 'bundle.js',
  },
  devtool: '#sourcemap',
  stats: {
    colors: true,
    reasons: true,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader'],
      },
    ],
  },
};
