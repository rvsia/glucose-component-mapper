const HtmlWebPackPlugin = require('html-webpack-plugin');
const resolve = require('path').resolve;
const webpack = require('webpack');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './demo/index.html',
  filename: './index.html'
});

const devConfig = {
  mode: 'development',
  entry: { app: resolve('./demo/index.js') },
  output: {
    path: resolve('../dist'),
    filename: '[name].[hash].js'
  },
  devtool: 'eval-source-map',
  plugins: [
    htmlPlugin,
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/i,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|woff|ttf|eot)/,
        type: 'asset/resource'
      },
    ]
  }
};

module.exports = devConfig;
