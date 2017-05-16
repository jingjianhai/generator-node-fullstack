'use strict';
/* eslint no-unused-vars: 0 */

import path from 'path';
import through from 'through2-concurrent';
import gutil from 'gulp-util';
import tinify from 'tinify';

const PLUGIN_NAME = 'gulp-tinyimg';

let PluginError = gutil.PluginError;

export default function(apiKey, file) {
  var validExtensions = ['.png', '.jpg', '.jpeg'];

  if (!apiKey) {
    throw new PluginError(
      PLUGIN_NAME,
      'We can\'t upload images without your API Key'
    );
  }

  tinify.key = apiKey;

  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
      return;
    }

    if (validExtensions.indexOf(path.extname(file.path)) === -1) {
      gutil.log(PLUGIN_NAME + ': Skipping unsupported image ' + file.path);
      cb(null, file);
      return;
    }

    tinify.fromBuffer(file.contents).toBuffer(function(err, resultData) {
      if (!err) {
        file.contents = resultData;
      }
      cb(null, file);
    });
  });
}
