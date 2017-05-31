'use strict';

import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';

class Url {
  // TODO: 自定义超链接，而非默认获取网址
  get(variable, cb) {
    this.getQuery((rslt) => {
      for (let i = 0; i < rslt.length; i++) {
        let pair = rslt[i].split('=');
        if (isEqual(decodeURIComponent(pair[0]), variable)) {
          return cb(null, decodeURIComponent(pair[1]));
        }
      }
      cb(true, 'Unmatched anything.');
    });
  }
  getSync(variable) {
    let vars = this.getQuerySync();
    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split('=');
      if (isEqual(decodeURIComponent(pair[0]), variable)) {
        return decodeURIComponent(pair[1]);
      }
    }
  }
  getHost(cb) {
    let self = this;
    cb(null, self.getHostSync());
  }
  getHostSync() {
    let self  = this;
    let _ip   = self.getSync('ip');
    let _port = self.getSync('port');

    let ip    = isEmpty(_ip) ? 'localhost' : _ip;
    let port  = isEmpty(_port) ? 6888 : _port;

    return ('//' + ip + ':' + port);
  }
  getQuery(cb) {
    cb(window.location.search.substring(1).split('&'));
  }
  getQuerySync() {
    return window.location.search.substring(1).split('&');
  }
  // TODO: 异步处理有问题
  updateQuery(uri, key, value, cb) {
    let self = this;
    cb(null, self.updateQuerySync(uri, key, value));
  }
  updateQuerySync(uri, key, value) {
    // remove the hash part before operating on the uri
    let i         = uri.indexOf('#');
    let hash      = isEqual(i, -1) ? ''  : uri.substr(i);
    uri           = isEqual(i, -1) ? uri : uri.substr(0, i);

    let re        = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
    let separator = !isEqual(uri.indexOf('?'), -1) ? '&' : '?';

    if (!value) {
      // remove key-value pair if value is empty
      uri = uri.replace(new RegExp('([?&]?)' + key + '=[^&]*', 'i'), '');
      if (isEqual(uri.slice(-1), '?')) {
        uri = uri.slice(0, -1);
      }
      // replace first occurrence of & by ? if no ? is present
      if (isEqual(uri.indexOf('?'), -1)) {
        uri = uri.replace(/&/, '?');
      }
    } else if (uri.match(re)) {
      uri = uri.replace(re, '$1' + key + '=' + value + '$2');
    } else {
      uri = uri + separator + key + '=' + value;
    }
    return (uri + hash);
  }
}

export default Url;
