'use strict';

import gulp from 'gulp';
import del from 'del';
import gulpLoadPlugins from 'gulp-load-plugins';
import mrgStrm from 'merge-stream';
import runSequence from 'run-sequence';

let $ = gulpLoadPlugins({
  DEBUG: false,
  rename: {
    'gulp-gzip': 'gziper',
  },
});

gulp.task('help', $.taskListing);

// Clean output directory
gulp.task('clean', () => del([
  '.tmp',
  'dist',
  'static',
  'dandan.com.tar.gz'
], {
  dot: true,
}));

gulp.task('tar', () => {
  let txtExts = 'txt|xml|html|css|js';
  let imgExts = 'png|jpg|jpeg|gif|svg|svgz|ico';
  let fontExts = 'eot|ttf|woff|woff2';
  let exts = txtExts + '|' + imgExts + '|' + fontExts + '|appcache';

  let gzipOpts = {
    'append': true,
    'threshold': '1kb',
    'gzipOptions': {
      'level': 9,
      'memLevel': 1,
    },
  };

  return gulp.src(
    'dist/**/*.+(' + exts + ')'
  )
  .pipe($.tar('dandan.com.tar'))
  .pipe($.gziper(gzipOpts))
  .pipe(gulp.dest('./'));
});

gulp.task('copy:static', () => {
  let txtExts = 'txt|xml|html|css|js|json|yml';
  let imgExts = 'png|jpg|jpeg|gif|svg|svgz|ico';
  let fontExts = 'eot|ttf|woff|woff2';

  let exts = txtExts + '|' + imgExts + '|' + fontExts + '|appcache';

  return gulp.src(
    'dist/**/*.+(' + exts + ')'
  )
  .pipe(gulp.dest('static'));
});

gulp.task('copy:vendor', () =>
  mrgStrm(
    gulp.src([
      'node_modules/lazysizes/**/*',
    ])
    .pipe(gulp.dest('client/vendor/lazysizes')),

    gulp.src([
      'node_modules/bootstrap-sass/**/*',
    ])
    .pipe(gulp.dest('client/vendor/bootstrap-sass')),

    gulp.src([
      'node_modules/jqueryui/**/*',
    ])
    .pipe(gulp.dest('client/vendor/jqueryui')),

    gulp.src([
      'node_modules/jquery/**/*',
    ])
    .pipe(gulp.dest('client/vendor/jquery'))
  )
);

gulp.task('copy:native-static', () => {
  let src1 = gulp.src([
    'client/**',
    'node_modules/apache-server-configs/dist/.htaccess',
    '!client/views/**',
    '!client/scripts/abstract/**',
    '!client/scripts/component/**',
    '!client/scripts/controller/**',
    '!client/scripts/model/**',
    '!client/scripts/main.js',
    '!client/styles/**',
  ], {
    dot: true,
    nodir: true
  });

  let src2 = gulp.src('vendor.dll.js');

  src1.pipe(gulp.dest('dist'));

  src2.pipe(gulp.dest('dist/scripts/dll'));

  return mrgStrm(src1, src2);
});

gulp.task('copy', (cb) => {
  return runSequence('copy:native-static', 'copy:vendor', cb);
});

gulp.task('replace:api', () => {
  gulp.src('dist/scripts/bundle.body.js')
  .pipe($.replace(
    'protocol://host',
    process.env.APIHOST
  ))
  .pipe(gulp.dest('dist/scripts'));
});

gulp.task('replace:prerender', () => {
  gulp.src('dist/*.html')
  .pipe($.replace(
    '//domain-placeholder.com',
    process.env.APIHOST
  ))
  .pipe(gulp.dest('dist'));
});

gulp.task('replace:jquery-ui', () =>
  gulp.src('dist/styles/*.css')
    .pipe($.replace(
      '"images/ui-icons_444444_256x240.png"',
      '"../images/ui-icons_444444_256x240.png"'
    ))
    .pipe($.replace(
      '"images/ui-icons_444444_256x240.png"',
      '"../images/ui-icons_444444_256x240.png"'
    ))
    .pipe($.replace(
      '"images/ui-icons_555555_256x240.png"',
      '"../images/ui-icons_555555_256x240.png"'
    ))
    .pipe($.replace(
      '"images/ui-icons_ffffff_256x240.png"',
      '"../images/ui-icons_ffffff_256x240.png"'
    ))
    .pipe($.replace(
      '"images/ui-icons_777620_256x240.png"',
      '"../images/ui-icons_777620_256x240.png"'
    ))
    .pipe($.replace(
      '"images/ui-icons_cc0000_256x240.png"',
      '"../images/ui-icons_cc0000_256x240.png"'
    ))
    .pipe($.replace(
      '"images/ui-icons_777777_256x240.png"',
      '"../images/ui-icons_777777_256x240.png"'
    ))
    .pipe(gulp.dest('dist/styles'))
);

gulp.task('replace:routes', ['copy:static'], () => {
  // 将预处理好之后的资源完全拷贝一份至 `static` 目录

  let strHtml = gulp.src('static/**/*.html');
  let strScript = gulp.src('static/scripts/**/*.js');

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  strHtml.pipe($.replace(
    '/index.html',
    '/'
  ))
  .pipe($.replace(
    '/shopping.cart.html',
    '/cart'
  ))
  .pipe($.replace(
    '/personal.center.html',
    '/mine'
  ))
  .pipe($.replace(
    '/my.orders.html',
    '/mine/order'
  ))
  .pipe($.replace(
    '/shipping.address.html',
    '/mine/address'
  ))
  .pipe($.replace(
    '/agriculture.product.list.html',
    '/product/discover'
  ))
  .pipe($.replace(
    '/product.list.html',
    '/product/list'
  ))
  .pipe($.replace(
    '/product.detail.html',
    '/product/detail'
  ))
  .pipe($.replace(
    '/farm.index.html',
    '/farm'
  ))
  .pipe($.replace(
    '/farm.discovery.html',
    '/farm/discovery'
  ))
  .pipe($.replace(
    '/farm.profile.html',
    '/farm/profile'
  ))
  .pipe($.replace(
    '/order.detail.html',
    '/order/detail'
  ))
  .pipe($.replace(
    '/order.settlement.html',
    '/order/settlement'
  ))
  .pipe($.replace(
    '/order.submit.failed.html',
    '/order/fail'
  ))
  .pipe($.replace(
    '/payment.failed.html',
    '/payment/fail'
  ))
  .pipe($.replace(
    '/payment.html',
    '/payment'
  ))
  .pipe($.replace(
    '/payment.success.html',
    '/payment/success'
  ))
  .pipe($.replace(
    '/business.entry.add.html',
    '/settle/add'
  ))
  .pipe($.replace(
    '/business.entry.html',
    '/settle'
  ))
  .pipe($.replace(
    '/user.login.html',
    '/login'
  ))
  .pipe($.replace(
    '/register.html',
    '/register'
  ))
  .pipe($.replace(
    '/password.retrieve.authentication.html',
    '/password/authentication'
  ))
  .pipe($.replace(
    '/password.retrieve.finish.html',
    '/password/finish'
  ))
  .pipe($.replace(
    '/password.retrieve.html',
    '/password'
  ))
  .pipe($.replace(
    '/password.set.html',
    '/password/set'
  ))
  .pipe(gulp.dest('static'));

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  strScript.pipe($.replace(
    '/index.html',
    '/'
  ))
  .pipe($.replace(
    '/shopping.cart.html',
    '/cart'
  ))
  .pipe($.replace(
    '/personal.center.html',
    '/mine'
  ))
  .pipe($.replace(
    '/my.orders.html',
    '/mine/order'
  ))
  .pipe($.replace(
    '/shipping.address.html',
    '/mine/address'
  ))
  .pipe($.replace(
    '/agriculture.product.list.html',
    '/product/discover'
  ))
  .pipe($.replace(
    '/product.list.html',
    '/product/list'
  ))
  .pipe($.replace(
    '/product.detail.html',
    '/product/detail'
  ))
  .pipe($.replace(
    '/farm.index.html',
    '/farm'
  ))
  .pipe($.replace(
    '/farm.discovery.html',
    '/farm/discovery'
  ))
  .pipe($.replace(
    '/farm.profile.html',
    '/farm/profile'
  ))
  .pipe($.replace(
    '/order.detail.html',
    '/order/detail'
  ))
  .pipe($.replace(
    '/order.settlement.html',
    '/order/settlement'
  ))
  .pipe($.replace(
    '/order.submit.failed.html',
    '/order/fail'
  ))
  .pipe($.replace(
    '/payment.failed.html',
    '/payment/fail'
  ))
  .pipe($.replace(
    '/payment.html',
    '/payment'
  ))
  .pipe($.replace(
    '/payment.success.html',
    '/payment/success'
  ))
  .pipe($.replace(
    '/business.entry.add.html',
    '/settle/add'
  ))
  .pipe($.replace(
    '/business.entry.html',
    '/settle'
  ))
  .pipe($.replace(
    '/user.login.html',
    '/login'
  ))
  .pipe($.replace(
    '/register.html',
    '/register'
  ))
  .pipe($.replace(
    '/password.retrieve.authentication.html',
    '/password/authentication'
  ))
  .pipe($.replace(
    '/password.retrieve.finish.html',
    '/password/finish'
  ))
  .pipe($.replace(
    '/password.retrieve.html',
    '/password'
  ))
  .pipe($.replace(
    '/password.set.html',
    '/password/set'
  ))
  .pipe(gulp.dest('static/scripts'));

  return mrgStrm(strHtml, strScript);
});
