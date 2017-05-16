'use strict';

import pmx from 'pmx';
import app from './config/express';
import dgub from 'debug';
import http from 'http';
import isEqual from 'lodash/isEqual';
import cfg from './config/environment';

let debug = dgub('dandan.com:server');

exports = module.exports = function() {
  pmx.init({
    http: true,
    ignore_routes: [/notFound/],
    errors: true,
    custom_probes: true,
    network: true,
    ports: true,
    transactions: true
  });

  app.set('port', cfg.port);

  let server = http.createServer(app);

  setImmediate(function() {
    server.listen(cfg.port, function() {
      debug('Express server listening on port ' + server.address().port);
    });
    server.on('error', onError);
    server.on('listening', onListening);
  });

  function onError(error) {
    if (!isEqual(error.syscall, 'listen')) {
      throw error;
    }

    let bind = isEqual(typeof cfg.port, 'string') ?
                'Pipe ' + cfg.port :
                  'Port ' + cfg.port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  function onListening() {
    let addr = server.address();
    let bind = isEqual(typeof addr, 'string') ?
                'pipe ' + addr :
                  'port ' + addr.port;
    debug('Listening on ' + bind);
  }
};
