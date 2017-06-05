'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-dandan-com:app', () => {
  beforeEach(done => {
    helpers
      .run(path.join(__dirname, '../generators/app'))
      .withOptions({
        'skip-install': true
      })
      .withPrompts({
        iptProjectNameCN: '推特',
        iptProjectNameEN: 'twitter',
        iptProjectDomain: 'twitter.com',
        iptProjectDescription: '啊所发生的法拉盛短裤女几女诶我女阿萨德马鲁大师两块大厦里面打老师们...',
        iptRedisPassword: 'cnSWZasdfds3241!@#$!@$',
        iptTinyPngApiKey: 'abv123@#!123',
        name: '沈维忠',
        email: 'swzyocowboy@icloud.com',
        website: 'http://itonyyo.com',
        license: 'Apache-2.0'
      })
      .on('end', done);
  });

  it('creates files', () => {
    assert.file([
      'yarn.lock',
      '.editorconfig',
      'redis.conf',
      'package-lock.json',
      '.scss-lint.yml',
      'LICENSE'
      // 'client/views/page/example.pug',
      // 'client/vendor/kkpager/kkpager.min.js',
      // '.atom/snippets.cson',
      // '.gitlab/PULL_REQUEST_TEMPLATE.md',
      // '.sublimetext/preferences.sublime-settings',
      // '.vscode/settings.json',
      // 'doc/recipes/如何联机调试开放接口.md',
      // 'flow-typed/npm/superagent_vx.x.x.js',
      // 'server/nginx/static/default.conf',
      // 'task/modules/tinypng.js',
      // 'test/mock/example.js',
      // 'tool/apm.linux.global.uninstall.sh'
    ]);
  });
});
