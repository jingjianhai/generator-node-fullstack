'use strict';

import gulp from 'gulp';
import pug from 'pug';
import wp from 'webpack';
import webpack from 'webpack-stream';
import gulpLoadPlugins from 'gulp-load-plugins';
import named from 'vinyl-named';
import through from 'through2';
import isEqual from 'lodash/isEqual';
import devWebpackConfig from '../webpack.dev';
import buildWebpackConfig from '../webpack.build';

let $ = gulpLoadPlugins();

let envProduction = () => {
  // TODO: add business logic
  return isEqual(process.env.NODE_ENV, 'production');
};

// Concatenate and minify JavaScript.
gulp.task('views', () =>
  // TODO: 开发环境下，优先从内存中（而非磁盘）获取所有文件
  // TODO: 仅重新处理被修改过的 `*.pug` 文件
  gulp.src(['client/views/page/**/*.pug'])
  .pipe($.plumber())
  .pipe($.cached('views'))
  .pipe($.changed('dist'))
  .pipe($.pug({
    pug: pug,
    pretty: true,
  }))
  .pipe($.if(envProduction, $.size({
    title: 'views',
    gzip: true,
  })))
  .pipe(gulp.dest('dist'))
);

// Compile and automatically prefix stylesheets
gulp.task('styles', () => {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 9',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10',
  ];

  // TODO: 开发环境下，优先从内存中（而非磁盘）获取所有文件
  return gulp.src([
      'client/styles/**/*.scss',
      'client/styles/**/*.css',
    ])
    .pipe($.plumber())
    .pipe($.if(envProduction, $.sourcemaps.init()))
    .pipe($.sass({
      precision: 6,
    }).on('error', $.sass.logError))
    // TODO: 仅在开发环境下且是多浏览器调试的情况下为样式属性添加前缀
    .pipe($.if(envProduction, $.autoprefixer(AUTOPREFIXER_BROWSERS)))
    .pipe($.if(envProduction, $.if('*.css', $.cssnano())))
    .pipe($.if(envProduction, $.size({
      title: 'styles',
      gzip: true,
    })))
    .pipe($.if(envProduction, $.sourcemaps.write('./')))
    .pipe(gulp.dest('dist/styles'));
});

// Concatenate and minify JavaScript.
gulp.task('scripts', () => {
  let webpackConfig;
  let nodeEnv = process.env.NODE_ENV;

  if (isEqual(nodeEnv, 'development')) {
    webpackConfig = devWebpackConfig;
  }

  if (isEqual(nodeEnv, 'production')) {
    webpackConfig = buildWebpackConfig;
  }

  // TODO: 开发环境下，优先从内存中（而非磁盘）获取所有文件
  return gulp.src('client/scripts/main.js')
    .pipe($.plumber())
    .pipe(named())
    // TODO: 提供针对发布情况下的配置
    .pipe(webpack(webpackConfig, wp))
    .pipe($.if(envProduction, $.sourcemaps.init({
      loadMaps: true,
    })))
    .pipe($.if(envProduction, $.uglify({
        preserveComments: 'some',
      }).on('error', function(err) {
        console.log(err.toString());
        this.emit('end');
      }))
    )
    .pipe($.if(envProduction, $.size({
      title: 'scripts',
      gzip: true,
    })))
    .pipe($.if(envProduction, through.obj(function(file, enc, cb) {

      // Dont pipe through any source map files as it will be handled
      // by gulp-sourcemaps
      var isSourceMap = /\.map$/.test(file.path);
      if (!isSourceMap) {
        this.push(file);
      }
      cb();
    })))
    .pipe($.if(envProduction, $.sourcemaps.write('.')))
    .pipe(gulp.dest('dist/scripts'));
});
