'use strict';

window.apiHost = 'protocol://host';

import 'babel-polyfill';
import PageInit from './init.js';

$(() => {
  new PageInit();
});
