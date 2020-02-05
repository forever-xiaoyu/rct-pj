// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')

// 打包后文件位置
const distDir = path.resolve(__dirname, '../dist')
// 源文件目录
const srcDir = path.resolve(__dirname, '../src')
// 根目录
const rootDir = path.resolve(__dirname, '../')

module.exports = {
  entry: path.resolve(srcDir, 'main.js'),
  output: {
    publicPath: '/',
    filename: '[name].[hash].js',
    path: distDir
  },
  resolve: {
    // 配置解析文件拓展名
    extensions: ['*', '.js', '.jsx'],
    // 配置别名
    alias: {
      '@': path.resolve(srcDir),
      '@s': path.resolve(srcDir, 'styles'),
      '@u': path.resolve(srcDir, 'utils'),
      '@v': path.resolve(srcDir, 'views'),
      '@c': path.resolve(srcDir, 'components')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // 字体加载
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modelues/,
        use: ['file-loader']
      },
      // 图片加载
      {
        test: /\.(png|jpg|svg|jpeg|gif)$/,
        exclude: /node_modelues/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 小于 10k 转换成base64编码
              limit: 10000,
              // outputPath: '/dist/images/',
              // 有 CDN时 public path
              // publicPath: '/images/'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, 'public/index.html'),
      filename: 'index.html'
    }),
    new WebpackBuildNotifierPlugin({
      title: '构建完成',
      logo: path.resolve(rootDir, 'public/favicon.ico'),
      suppressSuccess: true
    })
  ]
}
