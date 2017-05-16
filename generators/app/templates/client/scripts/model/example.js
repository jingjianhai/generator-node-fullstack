'use strict';

import superAgent from 'superagent';
import cheerio from 'cheerio';

class Example {
  getIpInfo(ip, cb) {
    superAgent
      .get('http://api.geoiplookup.net/?query=' + ip)
      .end((err, res) => {
        if (err) {
          return cb(true, err);
        }
        let $ = cheerio.load(res.text, {
          xmlMode: true
        });
        let addressInfo = {
          countryName: $('countryname').text() || '',
          countryCode: $('countrycode').text() || '',
          city: $('city').text() || '',
          longitude: $('longitude').text() || '',
          latitude: $('latitude').text() || ''
        };
        cb(null, addressInfo);
      });
  }
}

export default Example;
