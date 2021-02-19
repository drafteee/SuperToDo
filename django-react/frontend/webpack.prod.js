const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [{
      test: /\.(css|scss)$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }]
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ],
    minimize: true,
    runtimeChunk: {
      name: entrypoint => `runtimechunk~${entrypoint.name}`
    },
    splitChunks: {
      //максимальный размер чанка (в теории) в байтах
      maxSize: 409600,
      minSize: 100000,
      cacheGroups: {
        //default: false, // disable the built-in groups, default & vendors (vendors is overwritten below)
        //node_modules/react-dom
        reactDom: {
          test: /[\\/]node_modules[\\/]react-dom[\\/]/,
          name: 'react-dom',
          //синхронные и асинхронные чанки
          chunks: 'all'
        },
        //node_modules/react for IE - not work
        // react: {
        //     test: /[\\/]node_modules[\\/]((react).*)[\\/]/,
        //     name: "react",
        //     chunks: "all"
        // },
        //others in node_modules
        common: {
          test: /[\\/]node_modules[\\/]((?!react).*)[\\/]/,
          name: 'common',
          chunks: 'all',
          //минимальный размер чанка (в теории) в байтах
          minSize: 204800
        },
        styles: {
          name: 'styles',
          test: /\.+(css)$/,
          chunks: 'all'
        },
      },
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
})