import express from 'express';
import { join } from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import glob from 'glob';
// import dgub from 'debug';
import useragent from 'express-useragent';
import lusca from 'lusca';
import isEqual from 'lodash/isEqual';
import shrinkRay from 'shrink-ray';
import helmet from 'helmet';
import cors from 'cors';
import errorHandler from 'errorhandler';
import session from 'express-session';
import connectRedis from 'connect-redis';
import methodOverride from 'method-override';
import cfg from './environment';

// let debug = dgub('dandan.com:server');

let app = express();
let RedisStore = connectRedis(session);
let env = app.get('env');

app.set('views', `${cfg.root}/server/views`);
app.set('view engine', 'pug');
app.set('appPath', join(cfg.root, 'static'));

app.use(session({
  store: new RedisStore(cfg.rds),
  secret: cfg.secrets.session,
  resave: true,
  saveUninitialized: false,
  unset: 'destroy',
  cookie: {
    path: '/',
    httpOnly: false,
    maxAge: null
  }
}));

app.use(shrinkRay({
  brotli: {
    quality: 11
  }
}));

app.use(helmet());
app.use(lusca.csrf());

app.use(cors());

app.use(function(req, res, next) {
  res.set(cfg.resHeaders);
  next();
});

app.use(logger('dev'));
app.use(useragent.express());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(methodOverride());
app.use(express.static(app.get('appPath')));

app.use((req, res, next) => {
  if (!req.session) {
    return next(new Error('oh no'));
  }
  next();
});

let controllers = glob.sync(cfg.root + '/server/controller/*.js');
controllers.forEach((controller) => {
  require(controller)(app);
});

app.use((req, res) => {
  var err = new Error('Not Found');
  err.status = 404;
  res.render('404', {
    message: '您访问的页面不存在',
    error: err,
    title: '404',
    pageClass: 'page-not-found unselectable'
  });
});

if (isEqual(env, 'development')) {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
      title: '发生错误'
    });
  });
}

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
    title: '发生错误'
  });
});

if (isEqual(env, 'development') || isEqual(env, 'test')) {
  app.use(errorHandler()); // Error handler - has to be last
}

module.exports = app;
