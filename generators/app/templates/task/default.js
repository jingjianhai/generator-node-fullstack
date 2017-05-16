'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';
import isEqual from 'lodash/isEqual';

// Build production files, the default task
gulp.task('build:dist', (cb) => {
  // BABEL_ENV = ['development'|'production'|'build'];
  process.env.BABEL_ENV = 'build';
  process.env.NODE_ENV  = 'production';

  if (isEqual(process.env.TAR, 'true')) {
    runSequence(
      'lint', 'copy',

      // 预处理
      ['styles', 'views', 'scripts', 'images:tinify'],
      ['html', 'images'],
      ['replace:api', 'replace:jquery-ui'],
      ['base64', 'scripts:tinify'],
      'revreplace',
      'manifest',

      ['gzip:dist', 'brotli:dist'],

      'tar',
      cb
    );
  }

  if (isEqual(process.env.TAR, 'false')) {
    runSequence(
      'lint', 'copy',

      // 预处理
      ['styles', 'views', 'scripts', 'images:tinify'],
      ['html', 'images', 'scripts:tinify'],
      ['replace:api', 'replace:jquery-ui'],
      ['base64', 'scripts:tinify'],
      'revreplace',
      'manifest',

      ['gzip:dist', 'brotli:dist'],

      cb
    );
  }
});

gulp.task('default', ['build:dist'], (cb) => {
  runSequence(
    'replace:routes',

    // 因为 2 份资源内容(比如：页面跳转链接，等等)不同，所以必须各自独立生成压缩包
    ['gzip:static', 'brotli:static'],

    cb
  );
});
