const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
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
    chunkFilename: '[name].chunk.js',
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
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'static/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      $$: 'jquery'
    }),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true // 或body,将打包文件插入body底部
    })
  ]
}