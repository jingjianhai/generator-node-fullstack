'use strict';

import {
  optimize,
  NoEmitOnErrorsPlugin,
  LoaderOptionsPlugin,
  DllReferencePlugin,
  DefinePlugin
} from 'webpack';
import { WebpackBundleSizeAnalyzerPlugin } from 'webpack-bundle-size-analyzer';
import jso from './vendor-manifest.json';

let SharedWebpackCache = {};

export default function makeWebpackConfig(options) {
  /**
   * Environment type
   * BUILD is for generating minified builds
   * TEST is for generating test builds
   */
  let BUILD = !!options.BUILD;
  let DEV = !!options.DEV;

  let config = {};

  config.plugins = [];

  if (DEV) {
    config.watch = true;
  }

  config.cache = SharedWebpackCache;
  config.target = 'web';
  config.bail = true;

  config.module = {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader?cacheDirectory',
        options: {
          plugins: ['syntax-dynamic-import']
        }
      }
    }]
  };

  // Add build specific plugins
  if (BUILD) {
    config.plugins.push(
      // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
      // Only emit files when there are no errors
      new NoEmitOnErrorsPlugin(),
      new optimize.LimitChunkCountPlugin({
        maxChunks: 15
      }),
      new optimize.MinChunkSizePlugin({
        minChunkSize: 10000
      }),
      new LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new WebpackBundleSizeAnalyzerPlugin('./doc/deps.size.txt')
    );
  }

  if (BUILD) {
    config.performance = {
      hints: 'warning'
    };
  }

  if (DEV) {
    config.plugins.push(
      new DefinePlugin({
        'process.env': {
          NODE_ENV: '"development"'
        }
      }),
      new DllReferencePlugin({
        context: __dirname,
        manifest: jso
      })
    );
  }

  return config;
}
