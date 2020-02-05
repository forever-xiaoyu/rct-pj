const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.config')

// 打包后文件位置
const distDir = path.resolve(__dirname, '../dist')

module.exports = merge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          // 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }
          },
          'sass-loader?sourceMap',
          'postcss-loader'
        ]
      },
    ]
  },
  devServer: {
    contentBase: distDir, // 打包后文件位置
    compress: false, // 开发环境不用gzip压缩
    port: 8008, // 端口
    hot: true, // 启用热替换
    hotOnly: true, // 编译成功后刷新
    // open: true, // 是否自动打开浏览器
    disableHostCheck: true, // 解决 127.0.0.1 指向其他域名错误
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})
