'use strict';

import gulp from 'gulp';
import del from 'del';
import gulpLoadPlugins from 'gulp-load-plugins';

let $ = gulpLoadPlugins();

gulp.task('help', $.taskListing);

// Clean build output directory
gulp.task('clean:mixture', () => del([
  '.nyc_output',
  'coverage',
  './*.log',
  '.DS_Store'
], {
  dot: true
}));

// Clean build output directory
gulp.task('clean:package', () => del([
  'node_modules',
  'yarn.lock',
  'licenses-dev.csv',
  'licenses.csv',
  './*.har',
  './*-lock.json'
], {
  dot: true
}));
