'use strict';

import gulp from 'gulp';
import bs from 'browser-sync';
import plugins from 'gulp-load-plugins';

let reload = bs.reload;
let $      = plugins();

gulp.task('nodemon', (cb) => {
  var called;
  called = false;
  $.nodemon({
    script: 'server.js',
    ext: 'js',
    stdout: false
  }).on('start', () => {
    if (!called) {
      cb();
    }
    called = true;
  }).on('readable', function() {
    this.stdout.on('data', (chunk) => {
      if (/^Express server listening on/.test(chunk)) {
        reload();
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});
