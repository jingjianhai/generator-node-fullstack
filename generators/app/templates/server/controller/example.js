'use strict';

import express from 'express';
import _  from 'lodash';
import cfg from '../config/environment';
import path from 'path';

module.exports = function(app) {
  let router  = express.Router({
    caseSensitive: true
  });

  let browserInfo;

  router.get('/', (req, res) => {
    browserInfo = req.useragent.browser +
                  ' ' +
                  req.useragent.version;

    res.set('Content-Type', 'text/html');

    _.isEqual(_.indexOf(cfg.compatibility.browser, browserInfo), -1) ?
      res.sendFile(path.resolve(`${app.get('appPath')}/example.html`)) :
        res.redirect('/compatibility');
  });

  app.use('/', router);
};
