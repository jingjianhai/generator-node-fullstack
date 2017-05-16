'use strict';

import isEmpty from 'lodash/isEmpty';

class Rollback {
  empty(data, roll) {
    return !isEmpty(data) ? data : roll;
  }
}

export default Rollback;
