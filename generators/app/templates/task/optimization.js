'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import tinify from './modules/tinypng';

let $ = gulpLoadPlugins({
  DEBUG: false,
  rename: {
    'gulp-gzip': 'gziper',
  },
});

// Scan your HTML for assets & optimize them
gulp.task('html', () =>
  gulp.src('dist/*.html')
  .pipe($.useref({
    searchPath: ['dist']
  }))

  // Minify any HTML
  .pipe($.if('*.html', $.htmlmin({
    removeComments: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeRedundantAttributes: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeOptionalTags: true,
  })))

  // Output files
  .pipe($.if('*.html', $.size({
    title: 'html',
    showFiles: true,
    gzip: true,
  })))
  .pipe(gulp.dest('dist'))
);

// Optimize images
gulp.task('images', () =>
  gulp.src([
    'client/images/**/*',
    'client/vendor/jquery-ui-1.12.1.custom/images/**/*'
  ])
  .pipe($.cache($.imagemin({
    progressive: true,
    interlaced: true,
  })))
  .pipe(gulp.dest('dist/images'))
  .pipe($.size({
    title: 'images',
    gzip: true,
  }))
);

gulp.task('images:tinify', () => {
  let key = [
    <%tinyPngApiKey.forEach(function(item, idx, ary) {%><%if(idx === ary.length-1) {%>    <%-'"' + item + '"'%><%} else if (idx === 0) {%><%-'"' + item + '",\r'%><%} else {%>    <%-'"' + item + '",\r'%><%}%><%});%>
  ];
  return gulp.src('client/images/**/*')
    .pipe(tinify(key[0]))
    .pipe(gulp.dest('client/images'));
});

gulp.task('scripts:tinify', () =>
  gulp.src('dist/scripts/bundle.js')
    .pipe($.uglify({
      mangle: false,
      compress: {
        unused: false,
      },
    }).on('error', function(err) {
      console.log(err.toString());
      this.emit('end');
    }))
    .pipe(gulp.dest('dist/scripts'))
);

// Generate gzip type static resources
gulp.task('gzip:dist', () => {
  let txtExts = 'txt|xml|html|css|js';
  let imgExts = 'png|jpg|jpeg|gif|svg|svgz|ico';
  let fontExts = 'eot|ttf|woff|woff2';
  let exts = txtExts + '|' + imgExts + '|' + fontExts;

  let gzipOpts = {
    'append': true,
    'threshold': '1kb',
    'gzipOptions': {
      'level': 9,
      'memLevel': 1,
    },
  };

  return gulp.src('dist/**/*.+(' + exts + ')')
    .pipe($.gziper(gzipOpts))
    .pipe(gulp.dest('dist'));
});

gulp.task('gzip:static', () => {
  let txtExts = 'txt|xml|html|css|js';
  let imgExts = 'png|jpg|jpeg|gif|svg|svgz|ico';
  let fontExts = 'eot|ttf|woff|woff2';
  let exts = txtExts + '|' + imgExts + '|' + fontExts;

  let gzipOpts = {
    'append': true,
    'threshold': '1kb',
    'gzipOptions': {
      'level': 9,
      'memLevel': 1,
    },
  };

  return gulp.src('static/**/*.+(' + exts + ')')
    .pipe($.gziper(gzipOpts))
    .pipe(gulp.dest('static'));
});

// Generate brotli type static resources
gulp.task('brotli:dist', () => {
  let txtExts = 'txt|xml|html|css|js';
  let imgExts = 'png|jpg|jpeg|gif|svg|svgz|ico';
  let fontExts = 'eot|ttf|woff|woff2';
  let exts = txtExts + '|' + imgExts + '|' + fontExts;

  let brotliOpts = {
    extension: 'br',
    skipLarger: true,
    mode: 0,
    quality: 11,
    lgblock: 0
  };

  return gulp.src('dist/**/*.+(' + exts + ')')
    .pipe($.brotli.compress(brotliOpts))
    .pipe(gulp.dest('dist'));
});

gulp.task('brotli:static', () => {
  let txtExts = 'txt|xml|html|css|js';
  let imgExts = 'png|jpg|jpeg|gif|svg|svgz|ico';
  let fontExts = 'eot|ttf|woff|woff2';
  let exts = txtExts + '|' + imgExts + '|' + fontExts;

  let brotliOpts = {
    extension: 'br',
    skipLarger: true,
    mode: 0,
    quality: 11,
    lgblock: 0
  };

  return gulp.src('static/**/*.+(' + exts + ')')
    .pipe($.brotli.compress(brotliOpts))
    .pipe(gulp.dest('static'));
});

// Generate application cache
gulp.task('manifest', () =>
  gulp.src('./dist/**/*')
  .pipe($.manifest({
    hash: true,
    preferOnline: true,
    network: ['*'],
    filename: 'manifest.appcache',
    exclude: [
      '*.html',
      '*.txt',
      '*.gz',
      '*.br',
      'manifest.appcache',
      'vendor/**/*',
      'views/**/*',
      'robots.txt',
      'main.css',
      'main-*.css',
      'bundle.*',
      'bundle-*.css',
      'styles/main.css',
      'styles/**/*.gz',
      'styles/**/*.br',
      'styles/main.css.map',
      'styles/main-*.css',
      'styles/bundle.css',
      'scripts/main.js',
      'scripts/**/*.gz',
      'scripts/**/*.br',
      'scripts/main.js.map',
      'scripts/main-*.js',
      'scripts/init-*.js',
      'scripts/dll/**/*',
      'scripts/config/*',
      'scripts/init.js',
      'fonts/iconfont.*',
      'fonts/**/*.gz',
      'fonts/**/*.br',
      'fonts/bootstrap/*',
      'images/**/*.gz',
      'images/**/*.br',
      'images/favicon/*',
      'mime.types',
      'nginx.conf',
      '**/*/main.*',
      '**/*/bundle.head.*',
      '**/*/bundle.body.*',
      'rev-manifest.json'
    ],
  }))
  .pipe(gulp.dest('dist'))
);

gulp.task('base64', () =>
  gulp.src('dist/styles/*.css')
    .pipe($.base64({
      maxImageSize: 6 * 1024,
      extensions: [
        'svg',
        'png',
        /\.jpg#datauri$/i
      ],
    }))
    .pipe(gulp.dest('dist'))
);

// Generate fingerprints for static resources
gulp.task('fingerprint', () => {
  let txtExts = 'txt,xml,css,js,json';
  let imgExts = 'png,jpg,jpeg,gif,svg,svgz,ico';
  let fontExts = 'eot,ttf,woff,woff2';
  let exts = txtExts + ',' + imgExts + ',' + fontExts;

  return gulp.src('dist/**/*.{' + exts + '}')
    .pipe($.rev())
    .pipe($.revCssUrl())
    .pipe(gulp.dest('dist'))
    .pipe($.rev.manifest({
      merge: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('revreplace', ['fingerprint'], () => {
  let manifest = gulp.src('dist/rev-manifest.json');
  return gulp.src('dist/*.html')
    .pipe($.revReplace({
      manifest: manifest
    }))
    .pipe(gulp.dest('dist'));
});
