const webpack = require('webpack');
const path = require('path');

const {name} = require('../package.json');

const rootPath = path.resolve(__dirname, '../');

module.exports = {
  mode: 'production',
  entry: {
    kdutil: path.resolve(rootPath, 'src/index.js'),
  },
  output: {
    filename: `[name].min.js`,
    path: path.resolve(rootPath, 'dist'),
    library: `${name}`,
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader?browsers=last 7 versions'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};

