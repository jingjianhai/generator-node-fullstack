'use strict';
/*eslint no-process-env:0*/

import { normalize } from 'path';
import merge from 'lodash/merge';

const ONE_HOUR = 60 * 60;
const ONE_WEEK = ONE_HOUR * 24 * 7;
const ONE_MONTH = ONE_WEEK * 4;
const ONE_YEAR = ONE_MONTH * 12;

function requiredProcessEnv(name) {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

// Export the config object based on the NODE_ENV
// ==============================================
export default merge(
  {
    env: requiredProcessEnv('NODE_ENV'),

    // Root path of server
    root: normalize(`${__dirname}/../../..`),

    // Browser-sync port
    browserSyncPort: process.env.BROWSER_SYNC_PORT || 6888,

    // Server port
    port: normalizePort(process.env.PORT || 9000),

    // Server IP
    ip: process.env.IP || '0.0.0.0',

    // Should we populate the DB with sample data?
    seedDB: false,

    // Secret for session, you will want to change this and make it an environment variable
    secrets: {
      session: 'dandan-com'
    },

    compatibility: {
      browser: [
        'IE 6.0',
        'IE 7.0',
        'IE 8.0',
        'IE 9.0'
      ]
    },

    resHeaders: {
      'Cache-Control': 'public,max-age=' + ONE_YEAR,
      'Connection': 'keep-alive'
    },

    rds: {
      port: 9686,
      host: '127.0.0.1',
      password: 'cnDaNdAn!@#$&13679'
    }
  },
  require(`./${requiredProcessEnv('NODE_ENV')}.js`) || {}
);
