'use strict';

import { assert } from 'chai';

import Example from '../client/scripts/model/example.js';

let exmp = new Example();
describe('client/scripts/model/example.js', () => {
  describe('getIpInfo(ip, cb)', () => {
    it('successfully received ip info', (done) => {
      let exampleIp = '192.16.4.223';
      exmp.getIpInfo(exampleIp, (err, rslt) => {
        if (!err) {
          assert.equal(
            rslt.city,
            'Tokyo'
          );
          done();
        }
      });
    });
  });
});

