const path = require('path');
const webpack = require('webpack');
const package = require('../package.json');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader', exclude: /node_modules/
    },
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VERSION': `'${package.version}'`
    }),
  ]
};
