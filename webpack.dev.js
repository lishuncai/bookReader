const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: false,
    contentBase: './dist',
    host: '0.0.0.0',
    port: '8080',
    proxy: {},
    quiet: false, // 启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台。这也意味着来自 webpack 的错误或警告在控制台不可见。
    publicPath: '/' // 此路径下的打包文件可在浏览器中访问。假设服务器运行在 http://localhost:8080 并且 output.filename 被设置为 bundle.js。默认 publicPath 是 "/"，所以你的包(bundle)可以通过 http://localhost:8080/bundle.js 访问。
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(__dirname, './src/assets/styles/global.scss')
            }
          },
          'postcss-loader'
        ]
      }
    ]
  }
});
