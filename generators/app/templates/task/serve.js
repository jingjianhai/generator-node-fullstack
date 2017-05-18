'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import through2 from 'through2';
import klaw from 'klaw';
import chalk from 'chalk';
import gulpLoadPlugins from 'gulp-load-plugins';
import connectGzipStatic from 'connect-gzip-static';
import merge from 'lodash/merge';
import isEqual from 'lodash/isEqual';

let bs                   = browserSync.create();
let ctx                  = new chalk.constructor({
  enabled: true
});

/* eslint no-unused-vars: 0 */
let $      = gulpLoadPlugins();
let reload = bs.reload;

let loadMockRoutes = (cb) => {
  let strmRoutes = [];
  let routes     = [];
  let excludeDirFilter;

  excludeDirFilter = through2.obj((item, enc, next) => {
    if (!item.stats.isDirectory()) {
      strmRoutes.push(item);
    }
    next();
  });

  strmRoutes = klaw('test/mock/').pipe(excludeDirFilter);

  strmRoutes.on('readable', (item) => {
    while ((item = strmRoutes.read())) {
      routes.push(require(item.path).default);
    }
  }).on('end', () => {
    $.util.log(
      ctx.red.bgBlack.bold('MOCK ') +
      ctx.white.bgBlack.bold('All mocks have been loaded successfully!')
    );
    cb(null, routes);
  });
};

// Watch files for changes & reload
gulp.task('serve', /*['copy', 'views', 'scripts', 'styles'], */() => {
  process.env.BABEL_ENV = 'development';
  process.env.NODE_ENV  = 'development';

  gulp.start('copy', 'views', 'scripts', 'styles');

  loadMockRoutes((err, routes) => {
    let bsOpts = {
      open: 'external',
      notify: false,
      logPrefix: '<%-projectDomain.toUpperCase()%>',
      logConnections: true,
      server: {
        baseDir: 'dist',
        directory: true,
        index: 'index.html'
      },
      cors: true,
      port: 6888,
      ui: {
        port: 8888,
      },
      middleware: routes,
    };

    if (isEqual(process.env.HTTPS, 'true')) {
      browserSync(merge(bsOpts, {
        https: true,
        httpModule: 'http2',
      }));
    }

    if (isEqual(process.env.HTTPS, 'false')) {
      browserSync(bsOpts);
    }
  });

  gulp.watch(['client/views/**/*.pug'], ['views']);
  gulp.watch(['dist/*.html'], browserSync.reload);

  gulp.watch(['client/styles/**/*.{scss,css}'], ['styles']);
  gulp.watch(['dist/styles/**/*.css'], browserSync.reload);

  gulp.watch(['dist/scripts/**/*.js'], browserSync.reload);

  gulp.watch(['dist/images/**/*'], browserSync.reload);
});

// Build and serve the output from the dist build
gulp.task('serve-with-build:dist', ['build:dist'], () => {
  process.env.NODE_ENV  = 'production';

  let alreadyGzippedAssets = connectGzipStatic('./dist');

  loadMockRoutes((err, routes) => {
    bs.init({
      open: 'external',
      notify: false,
      logPrefix: '<%-projectDomain.toUpperCase()%>',
      logConnections: true,
      https: false,
      // httpModule: 'http2',
      server: {
        baseDir: 'dist',
        directory: true,
        index: 'index.html'
      },
      cors: true,
      port: 6888,
      ui: {
        port: 8888,
      },

      // TODO: 问题修复：模拟的开放接口失效。
      middleware: routes,
    }, (err, bs) => {
      bs.addMiddleware('*', alreadyGzippedAssets, {
        override: true
      });
    });
  });
});

// Simply serve the output from the dist build
gulp.task('serve:dist', () => {
  let alreadyGzippedAssets = connectGzipStatic('./dist');

  loadMockRoutes((err, routes) => {
    bs.init({
      open: 'external',
      notify: false,
      logPrefix: '<%-projectDomain.toUpperCase()%>',
      logConnections: true,
      https: false,
      // httpModule: 'http2',
      server: 'dist',
      cors: true,
      port: 6888,
      ui: false,

      // TODO: 问题修复：模拟的开放接口失效。
      middleware: routes,
    }, (err, bs) => {
      bs.addMiddleware('*', alreadyGzippedAssets, {
        override: true
      });
    });
  });
});

// Build and serve the output from the dist build
gulp.task('serve:express', ['nodemon'], () => {
  loadMockRoutes((err, routes) => {
    bs.init({
      open: 'external',
      notify: false,
      logPrefix: '<%-projectDomain.toUpperCase()%>',
      logConnections: true,
      https: false,
      // httpModule: 'http2',
      cors: true,
      port: 6888,
      ui: {
        port: 8888,
      },
      proxy: 'http://localhost:9000',
      // TODO: 问题修复：模拟的开放接口失效。
      middleware: routes,
    });
  });
});
