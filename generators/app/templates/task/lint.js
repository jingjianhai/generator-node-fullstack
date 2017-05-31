'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';

let $ = gulpLoadPlugins({
  DEBUG: false,
});

// JSCS Lint
gulp.task('lint:jscs', () =>
  gulp.src([
    'client/scripts/**/*.js',
    'server/**/*.js'
  ])
  .pipe($.jscs())
  .pipe($.jscs.reporter())
  .pipe($.jscs.reporter('fail'))
);

// Lint JavaScript
gulp.task('lint:js', () =>
  gulp.src([
    'client/scripts/**/*.js',
    'server/**/*.js'
  ])
  .pipe($.eslint())
  .pipe($.eslint.format())
  .pipe($.eslint.failAfterError())
);

// All linter
gulp.task('lint', (cb) =>
  runSequence(
    ['lint:js'],
    cb
  )
);
