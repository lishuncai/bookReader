const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true,
            removeComments: false,
            collapseWhitespace: false
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          minSize: 30000,
          minChunks: 1,
          chunks: 'initial',
          priority: -10 // 该配置项是设置处理的优先级，数值越大越优先处理
        },
        commons: {
          test: /[\\/]src[\\/]common[\\/]/,
          name: 'commons',
          minSize: 30000,
          minChunks: 3,
          chunks: 'initial',
          priority: -1,
          reuseExistingChunk: true // 这个配置允许我们使用已经存在的代码块
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        exclude: /\.min\.js$/, // 过滤掉以".min.js"结尾的文件，我们认为这个后缀本身就是已经压缩好的代码，没必要进行二次压缩
        cache: true,
        parallel: true, // 开启并行压缩，充分利用cpu
        sourceMap: false,
        extractComments: false, // 移除注释
        uglifyOptions: {
          compress: {
            unused: true,
            drop_debugger: true
          },
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', {
            discardComments: {
              removeAll: true
            }
          }]
        },
        canPrint: true
      })
    ]
  }
});