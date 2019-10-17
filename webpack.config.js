const path = require('path');

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
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.join(__dirname, 'jsx')],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
