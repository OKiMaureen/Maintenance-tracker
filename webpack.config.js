const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'client', 'index.js'),
  output: {
    path: path.join(__dirname, 'client-dist'),
    filename: 'app.bundle.js',
  },
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [{
      test: /(.js|.jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.(png|jpg)$/,
      loader: 'file-loader',
    }],
  },
  devServer: {
    contentBase: path.join(__dirname, 'client/public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client/public/index.html'),
    }),
  ],
  resolve: {
    extensions: [
      '.js', '.jsx',
    ],
  },
};
