'use strict'
const webpack = require('webpack')
const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const rootdir = path.join(__dirname, '../')

module.exports = {
  mode: 'production',
  entry: {
    bundle: [path.join(rootdir, 'index.js')],
  },
  output: {
    path: path.resolve(rootdir, './dist'),
    publicPath: './',
    filename: '[name].js',
    library: 'ChartFlow',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true, // 会把vue中的样式文件提取出来
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader',
            }),
            less: ExtractTextPlugin.extract({
              use: 'css-loader!less-loader',
              fallback: 'vue-style-loader',
            }),
          },
          postLoaders: {
            html: 'babel-loader',
          },
        },
      },
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
      {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              singleton: false, // 为true表示将页面上的所有css都放到一个style标签内
            },
          },
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [require('postcss-cssnext')(), require('cssnano')()],
              },
            },
            { loader: 'less-loader' },
          ],
        }),
      },
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              limit: 8192,
              name: 'img/[hash:8].[name].[ext]',
            },
          },
        ],
      },
      { test: /\.(svg|eot|ttf|woff|woff2)$/, use: ['file-loader'] },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
}
