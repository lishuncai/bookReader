const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpeedChecker = require('speed-measure-webpack-plugin');
const smp = new SpeedChecker();
const prodConfig = require('./webpack.prod');

module.exports = smp.wrap(
  merge(prodConfig, {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: '127.0.0.1',
        analyzerPort: 3000,
        reportFilename: 'report.html',
        defaultSizes: 'parsed',
        openAnalyzer: true,
        generateStatsFile: false,
        statsFilename: 'stats.json',
        statsOptions: null,
        logLevel: 'info'
      })
    ]
  })
);
