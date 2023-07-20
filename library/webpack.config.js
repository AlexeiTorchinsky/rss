const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


const mode = process.env.NODE_ENV || 'development';
// const devMode = mode === 'development';
// const target = devMode ? 'web' : 'browserslist';
// const devtool = devMode ? 'source-map' : undefined;

module.exports = {
  mode,
  // target,
  // devtool,
  devServer: {
    port: 3000,
    open: true,
    // hot: true,
    watchFiles: path.join(__dirname, 'src')
  },
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].[contenthash].js',
    assetModuleFilename:'images/[name][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use:[
           MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',]
      },
      {
        test: /\.(jpe?g|png|webp|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
        filename: path.join('icons', '[name].[contenthash][ext]'),
        },
      },
    ],
  }
};