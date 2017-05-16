const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: [
      'async',
      'lodash',
      'hashids',
      'pouchdb-adapter-localstorage',
      'pouchdb-browser',
      'babel-polyfill',
      'sweetalert',
      'jquery-validation'
    ]
  },
  output: {
    path: path.join(__dirname),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname
    })
  ]
};
