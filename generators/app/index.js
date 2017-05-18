'use strict';

/* jshint module: false */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _yeomanGenerator = require('yeoman-generator');

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _yosay = require('yosay');

var _yosay2 = _interopRequireDefault(_yosay);

var _forEach = require('lodash/forEach');

var _forEach2 = _interopRequireDefault(_forEach);

var _assign = require('lodash/assign');

var _assign2 = _interopRequireDefault(_assign);

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _gitConfig = require('git-config');

var _gitConfig2 = _interopRequireDefault(_gitConfig);

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var licenses = [{
  name: 'Apache 2.0',
  value: 'Apache-2.0'
}, {
  name: 'MIT',
  value: 'MIT'
}, {
  name: 'Mozilla Public License 2.0',
  value: 'MPL-2.0'
}, {
  name: 'BSD 2-Clause (FreeBSD) License',
  value: 'BSD-2-Clause-FreeBSD'
}, {
  name: 'BSD 3-Clause (NewBSD) License',
  value: 'BSD-3-Clause'
}, {
  name: 'Internet Systems Consortium (ISC) License',
  value: 'ISC'
}, {
  name: 'GNU AGPL 3.0',
  value: 'AGPL-3.0'
}, {
  name: 'GNU GPL 3.0',
  value: 'GPL-3.0'
}, {
  name: 'GNU LGPL 3.0',
  value: 'LGPL-3.0'
}, {
  name: 'Unlicense',
  value: 'unlicense'
}, {
  name: 'No License (Copyrighted)',
  value: 'nolicense'
}];

// TODO: 新功能，输入目前确认的开发者信息，用于填充 `package.json` 等文件
// TODO: 新功能，设定不同环境下服务器、数据库等配置

var NodeFullstack = function (_Generator) {
  _inherits(NodeFullstack, _Generator);

  function NodeFullstack(args, opts) {
    _classCallCheck(this, NodeFullstack);

    var _this = _possibleConstructorReturn(this, (NodeFullstack.__proto__ || Object.getPrototypeOf(NodeFullstack)).call(this, args, opts));

    _this.argument('appname', {
      type: String,
      required: false
    });

    _this.option('skip-welcome-message', {
      desc: '跳过欢迎消息',
      type: Boolean
    });

    _this.option('skip-install-message', {
      desc: '跳过安装消息',
      type: Boolean
    });

    _this.option('skip-install', {
      desc: '跳过安装环节',
      type: Boolean
    });

    _this.option('name', {
      type: String,
      desc: '许可证拥有者',
      required: false
    });

    _this.option('email', {
      type: String,
      desc: '许可证拥有者的电子邮箱',
      required: false
    });

    _this.option('website', {
      type: String,
      desc: '许可证拥有者的网站',
      required: false
    });

    _this.option('year', {
      type: String,
      desc: '许可证有效年限',
      required: false,
      defaults: new Date().getFullYear()
    });

    _this.option('licensePrompt', {
      type: String,
      desc: '许可证提示',
      defaults: '你想要使用哪种许可证？',
      hide: true,
      required: false
    });

    _this.option('defaultLicense', {
      type: String,
      desc: '默认许可证',
      required: false
    });

    _this.option('license', {
      type: String,
      desc: '选择一个许可证后就不会再有类似提示了',
      required: false
    });

    _this.option('output', {
      type: String,
      desc: '为即将生成的许可证设置输出文件（名，包括后缀）',
      required: false,
      defaults: 'LICENSE'
    });
    return _this;
  }

  _createClass(NodeFullstack, [{
    key: 'initializing',
    value: function initializing() {
      this.props = {};
      this.gitc = _gitConfig2['default'].sync();
      this.gitc.user = this.gitc.user || {};
    }
  }, {
    key: 'prompting',
    value: function prompting() {
      var _this2 = this;

      if (!this.options['skip-welcome-message']) {
        var generator = _chalk2['default'].red('Node 全栈');
        this.log((0, _yosay2['default'])('\u6B22\u8FCE\u4F7F\u7528 ' + generator + ' \u751F\u6210\u5668'));
      }

      var prompts = [{
        type: 'input',
        name: 'iptProjectNameCN',
        message: '输入项目名称（中文）',
        required: true,
        'default': this.options.appname || this.appname
      }, {
        type: 'input',
        name: 'iptProjectNameEN',
        message: '输入项目名称（英文，小写、不可有空格、特殊字符）',
        required: true,
        'default': this.options.appname || this.appname
      }, {
        type: 'input',
        name: 'iptProjectDomain',
        message: '输入域名（若干配置会使用该域名唯一区分）',
        required: true,
        'default': this.options.appname || this.appname
      }, {
        type: 'input',
        name: 'iptProjectDescription',
        message: '输入项目描述',
        required: true,
        'default': '这是一个面向前端工程师的 Node 全栈工程。'
      }, {
        type: 'input',
        name: 'iptRedisPassword',
        message: '设置 redis 数据库的访问密码',
        'default': 'cnDaNdAn!@#$&13679'
      }, {
        type: 'input',
        name: 'iptTinyPngApiKey',
        message: '设置 TinyPNG 开放接口密钥（用空格区分多个密钥）',
        required: true
      }, {
        name: 'name',
        message: '你的姓名',
        'default': this.options.name || this.gitc.user.name,
        when: (0, _isEqual2['default'])(this.options.name, null) || (0, _isEqual2['default'])(this.options.name, undefined)
      }, {
        name: 'email',
        message: '你的电子邮箱 (可选):',
        'default': this.options.email || this.gitc.user.email,
        when: !this.options.email
      }, {
        name: 'website',
        message: '你的网站 (可选):',
        'default': this.options.website,
        when: !this.options.website
      }, {
        type: 'list',
        name: 'license',
        message: this.options.licensePrompt,
        'default': this.options.defaultLicense,
        when: !this.options.license || (0, _isEqual2['default'])(licenses.find(function (x) {
          return (0, _isEqual2['default'])(x.value, _this2.options.license);
        }), undefined),
        choices: licenses
      }];

      return this.prompt(prompts).then(function (props) {
        _this2.props = (0, _assign2['default'])({
          name: _this2.options.name,
          email: _this2.options.email,
          website: _this2.options.website,
          license: _this2.options.license,
          year: _this2.options.license
        }, props);
      });
    }
  }, {
    key: 'writing',
    value: function writing() {
      this._copyTpl();
      this._copy();
    }
  }, {
    key: '_copyTpl',
    value: function _copyTpl() {
      var filename = this.props.license + '.txt';
      var author = this.props.name.trim();
      if (this.props.email) {
        author += ' <' + this.props.email.trim() + '>';
      }
      if (this.props.website) {
        author += ' (' + this.props.website.trim() + ')';
      }

      var passed = {
        redisPassword: this.props.iptRedisPassword,
        projectDescription: this.props.iptProjectDescription,
        projectNameCN: this.props.iptProjectNameCN,
        projectNameEN: this.props.iptProjectNameEN,
        projectDomain: this.props.iptProjectDomain,
        year: this.options.year,
        author: author
      };

      var _path = 'license/' + filename;

      this.fs.copyTpl(this.templatePath(_path), this.destinationPath(this.options.output), passed);

      this.fs.copyTpl(_glob2['default'].sync(this.templatePath('server/**/*'), {
        dot: true
      }), this.destinationPath('server'), passed);

      this.fs.copyTpl(_glob2['default'].sync(this.templatePath('./*'), {
        dot: true,
        nodir: true
      }), this.destinationPath(), passed);

      this.fs.copyTpl(this.templatePath('doc'), this.destinationPath('doc'), passed);

      // <%#tinyPngApiKey.forEach(function(item, idx, ary) {%>
      //   <%#if(idx === ary.length-1) {%>
      //     <%#'"' + item + '"'%>
      //   <%#} else if (idx === 0) {%>
      //     <%#'"' + item + '",\r'%>
      //   <%#} else {%>
      //     <%#'"' + item + '",\r'%>
      //   <%#}%>
      // <%#});%>
      this.fs.copyTpl(_glob2['default'].sync(this.templatePath('task'), {
        dot: true
      }), this.destinationPath('task'), (0, _merge2['default'])({
        tinyPngApiKey: this.props.iptTinyPngApiKey.split(' ')
      }, passed));

      if (!this.fs.exists(this.destinationPath('package.json'))) {
        return;
      }

      var pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
      pkg.license = this.props.license;

      // We don't want users to publish their module to NPM if they copyrighted
      // their content.
      if (this.props.license === 'nolicense') {
        delete pkg.license;
        pkg['private'] = true;
      }

      this.fs.writeJSON(this.destinationPath('package.json'), pkg);
    }
  }, {
    key: '_copy',
    value: function _copy() {
      var _this3 = this;

      var _self = this;
      var dirsToCopy = ['.atom', '.gitlab', '.sublimetext', '.vscode', 'flow-typed', 'test', 'tool', 'client'];

      (0, _forEach2['default'])(dirsToCopy, function (item) {
        _self.fs.copy(_glob2['default'].sync(_this3.templatePath(item + '/**/*'), {
          dot: true
        }), _self.destinationPath(item));
      });
    }
  }, {
    key: 'install',
    value: function install() {
      this.installDependencies({
        npm: false,
        bower: true,
        yarn: true,
        skipMessage: this.options['skip-install-message'],
        skipInstall: this.options['skip-install']
      });
    }

    /* eslint no-template-curly-in-string: 0 */
    /* eslint no-unused-vars: 0 */

  }, {
    key: 'end',
    value: function end() {
      try {
        var commandInstallDeps = _chalk2['default'].yellow.bold('npm install & bower install');

        if (this.options['skip-install']) {
          this.log('\n\u4F60\u7684\u9879\u76EE\u5DF2\u7ECF ' + _chalk2['default'].green.bold('成功生成') + ' \u3002\u75AF\u72C2\u5730\u7F16\u7A0B\u5427!');
          this.log('\u8FD0\u884C ' + commandInstallDeps + ' \u5B89\u88C5\u6240\u6709\u4F9D\u8D56\u3002');
        }
      } catch (err) {
        this.log('\n' + _chalk2['default'].bold.red('你的项目在生成时出错了。'));
      }
    }
  }]);

  return NodeFullstack;
}(_yeomanGenerator2['default']);

/* jshint ignore:start */


module.exports = NodeFullstack;
module.exports.licenses = licenses;
/* jshint ignore:end */