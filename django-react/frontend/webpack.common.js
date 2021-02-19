const path = require('path')
const SERVER_URL = require('./src/Global')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      'react-spring/renderprops$': 'react-spring/renderprops.cjs',
            
    }
  },
  entry: {
    commons: ['react',"core-js/modules/es.promise",
    "core-js/modules/es.array.iterator"],
    vendor: [
      'react',
      'redux',
    ],
    app: './src/index.js'
  },
  output: {
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    globalObject: 'self'
  },
  module: {
    rules: [
        {
            test: /\.less$/,
            use: [{
              loader: 'style-loader',
            }, {
              loader: 'css-loader', // translates CSS into CommonJS
            }, {
              loader: 'less-loader', // compiles Less to CSS
             options: {
              //  modifyVars: {
              //    'primary-color': '#1DA57A',
              //    'link-color': '#1DA57A',
              //    'border-radius-base': '2px',
              //   //  // or
              //   //  'hack': `true; @import "global.less";`, // Override with less file
              //  },
               javascriptEnabled: true,
             },
            }]
        },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: { minimize: true }
        }]
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
        exclude: [/\.inline\.svg$/],
        use: ['url-loader']
      },
      {
        test: /\.inline\.svg$/,
        use: ['svg-react-loader']
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    // new MiniCssExtractPlugin({
    //   filename: '[name].css',
    //   chunkFilename: '[id].css'
    // }),
    new CopyWebpackPlugin([
      { from: 'public/', to: 'img/' }
    ]),
    //создание .gz файлов
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      // .js и .css файлы
      test: /\.js$|\.css$/,
      //минимальное соотношение размеров сжатого и исходного файлов
      minRatio: 2,
      //удаление исходных файлов
      deleteOriginalAssets: true
    })
  ],
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: SERVER_URL
    }),
  }
}