'use strict';

import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import isUndefined from 'lodash/isUndefined';
import isString from 'lodash/isString';
import isObject from 'lodash/isObject';
import isNull from 'lodash/isNull';
import isFunction from 'lodash/isFunction';
import forEach from 'lodash/forEach';
import isPlainObject from 'lodash/isPlainObject';
import isArray from 'lodash/isArray';
import size from 'lodash/size';
import trimStart from 'lodash/trimStart';
import startsWith from 'lodash/startsWith';
import endsWith from 'lodash/endsWith';
import remove from 'lodash/remove';
import includes from 'lodash/includes';
import waterfall from 'async/waterfall';

class JsonGlob {
  constructor() {
    this.store         = undefined;
    this.traversalRslt = [];
  }

  find(store, target, cb) {
    let self             = this;
    let invalidParameter = isEmpty(store) ||
                           isEmpty(target) ||
                           !isFunction(cb);

    if (invalidParameter) {
      return cb(true, 'Error');
    }

    if (isEqual(store, self.store)) {
      return self.structuralResult(store, target, (err, rslt) => {
        cb(isNull(err) ? false : true, rslt);
      });
    } else {
      self.traversalRslt = [];
      self.store         = store;
    }

    if (isPlainObject(store)) {
      self.iteratesObject('~', store);
      return self.structuralResult(store, target, (err, rslt) => {
        cb(isNull(err) ? false : true, rslt);
      });
    }

    if (isArray(store)) {
      forEach(store, (val) => {
        self.iteratesObject('~', val);
      });
      return self.structuralResult(store, target, (err, rslt) => {
        cb(isNull(err) ? false : true, rslt);
      });
    }
  }

  findSync(store, target) {
    let self             = this;
    let invalidParameter = isEmpty(store) ||
                           isEmpty(target);

    if (invalidParameter) {
      return 'Error';
    }

    if (isEqual(store, self.store)) {
      return self.structuralResultSync(self.store, target);
    } else {
      self.traversalRslt = [];
      self.store = store;
    }

    if (isPlainObject(store)) {
      self.iteratesObject('~', store);
      return self.structuralResultSync(store, target);
    }

    if (isArray(store)) {
      forEach(store, (val) => {
        self.iteratesObject('~', val);
      });
      return self.structuralResultSync(store, target);
    }
  }

  getPathSegments(path) {
    let pathArr = path.split('.');
    let parts   = [];

    for (let i = 0; i < pathArr.length; i++) {
      let p = pathArr[i];
      while (isEqual(p[p.length - 1], '\\') && !isUndefined(pathArr[i + 1])) {
        p = p.slice(0, -1) + '.';
        p += pathArr[++i];
      }
      parts.push(p);
    }

    return parts;
  }

  get(obj, path, value) {
    let self = this;

    if (!isObject(obj) || !isString(path)) {
      return isUndefined(value) ? obj : value;
    }

    let pathArr = self.getPathSegments(path);
    for (let i = 0; i < pathArr.length; i++) {
      if (!Object.prototype.propertyIsEnumerable.call(obj, pathArr[i])) {
        return value;
      }
      obj = obj[pathArr[i]];
      if (isUndefined(obj) || isNull(obj)) {
        if (!isEqual(i, pathArr.length - 1)) {
          return value;
        }
        break;
      }
    }

    return obj;
  }

  structuralResult(store, target, cb) {
    let self = this;

    self.filter(target, (err, filtered) => {
      switch (size(filtered)) {
        case undefined: {
          cb(null, null);
          break;
        }
        case 0: {
          cb(null, null);
          break;
        }
        case 1: {
          cb(null, [{
            depth: filtered[0],
            vlaue: isArray(store) ?
              self.get(store[0], trimStart(filtered[0], '~.')) :
                self.get(store, trimStart(filtered[0], '~.'))
          }]);
          break;
        }
        default: {
          let cache = [];
          forEach(filtered, (val, idx) => {
            cache.push({
              depth: filtered[idx],
              vlaue: isArray(store) ?
                self.get(store[idx], trimStart(filtered[0], '~.')) :
                  self.get(store, trimStart(filtered[0], '~.'))
            });
          });
          cb(null, cache);
        }
      }
    });
  }

  structuralResultSync(store, target) {
    let self     = this;
    let filtered = self.filterSync(target);

    switch (size(filtered)) {
      case undefined: {
        return null;
      }
      case 0: {
        return null;
      }
      case 1: {
        return [{
          depth: filtered[0],
          vlaue: isArray(store) ?
            self.get(store[0], trimStart(filtered[0], '~.')) :
              self.get(store, trimStart(filtered[0], '~.'))
        }];
      }
      default: {
        let cache = [];
        forEach(filtered, (val, idx) => {
          cache.push({
            depth: filtered[idx],
            vlaue: isArray(store) ?
              self.get(store[idx], trimStart(filtered[0], '~.')) :
                self.get(store, trimStart(filtered[0], '~.'))
          });
        });
        return cache;
      }
    }
  }

  filter(target, cb) {
    let self   = this;
    let cache  = [];
    let keep   = [];
    let ignore = [];

    if (isString(target) && startsWith(target, '!')) {
      ignore.push(target);
    }

    if (isString(target) && !startsWith(target, '!')) {
      keep.push(target);
    }

    if (isArray(target)) {
      forEach(target, (val) => {
        (startsWith(val, '!')) ?
        ignore.push(trimStart(val, '!')) :
          keep.push(val);
      });
    }

    waterfall([
      (cb) => {
        forEach(keep, (val) => {
          forEach(self.traversalRslt, (rslt) => {
            if (endsWith(rslt, val)) {
              cache.push(rslt);
            }
          });
        });
        cb(null, cache);
      },
      (passed, cb) => {
        forEach(ignore, (val) => {
          forEach(passed, (rslt) => {
            if (!endsWith(rslt, val)) {
              remove(passed, (item) => {
                return includes(item, val);
              });
            }
          });
        });
        cb(null, passed);
      }
    ], (err, rslt) => {
      if (!err) {
        cb(null, rslt);
      }
    });
  }

  filterSync(target) {
    let self   = this;
    let cache  = [];
    let keep   = [];
    let ignore = [];

    if (isString(target) && startsWith(target, '!')) {
      ignore.push(target);
    }

    if (isString(target) && !startsWith(target, '!')) {
      keep.push(target);
    }

    if (isArray(target)) {
      forEach(target, (val) => {
        (startsWith(val, '!')) ?
        ignore.push(trimStart(val, '!')) :
          keep.push(val);
      });
    }

    forEach(keep, (val) => {
      forEach(self.traversalRslt, (rslt) => {
        if (endsWith(rslt, val)) {
          cache.push(rslt);
        }
      });
    });

    forEach(ignore, (val) => {
      forEach(cache, (rslt) => {
        if (!endsWith(rslt, val)) {
          remove(cache, (item) => {
            return includes(item, val);
          });
        }
      });
    });

    return cache;
  }

  iteratesObject(parent, store) {
    let self = this;

    forEach(store, (val, key) => {
      let baseStr = parent + '.' + key;
      self.traversalRslt.push(baseStr);

      if (isPlainObject(val)) {
        self.iteratesObject(baseStr, val);
        return;
      }
    });
  }
}

export default JsonGlob;
