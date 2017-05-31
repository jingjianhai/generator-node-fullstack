'use strict';

import PageExample from '../controller/example.js';

export default function(pageName) {
  switch (pageName) {
    case 'page-example': {
      return new PageExample(pageName);
    }
    default: {
      break;
    }
  }
}
