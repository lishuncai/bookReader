const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
  target: 'web',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.js', '.json']
  },
  entry: {
    main: path.resolve(__dirname, 'src/main.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: {
    loadsh: {
      jquery: 'jquery'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin(
      {
        filename: 'index.html',
        template: './src/index.html',
        inject: true // 或body,将打包文件插入body底部
      }),
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin(
      {
        $$: 'jquery'
      }
    )
  ]
}
