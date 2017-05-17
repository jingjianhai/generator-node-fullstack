'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _yeomanGenerator = require('yeoman-generator');

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _yosay = require('yosay');

var _yosay2 = _interopRequireDefault(_yosay);

var _forEach = require('lodash/forEach');

var _forEach2 = _interopRequireDefault(_forEach);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyGenerator = function (_Generator) {
  _inherits(MyGenerator, _Generator);

  function MyGenerator(args, opts) {
    _classCallCheck(this, MyGenerator);

    var _this = _possibleConstructorReturn(this, (MyGenerator.__proto__ || Object.getPrototypeOf(MyGenerator)).call(this, args, opts));

    _this.argument('appname', {
      type: String,
      required: false
    });
    return _this;
  }

  _createClass(MyGenerator, [{
    key: 'prompting',
    value: function prompting() {
      var _this2 = this;

      var generator = _chalk2['default'].red('Node 全栈');
      this.log((0, _yosay2['default'])('\u6B22\u8FCE\u4F7F\u7528 ' + generator + ' \u751F\u6210\u5668'));

      // TODO: 输入目前确认的开发者信息，用于填充 `.mailmap`、`package.json` 等文件
      // TODO: 选择许可证
      // TODO: 设定不同环境下服务器、数据库等配置
      var prompts = [{
        type: 'input',
        name: 'iptProjectName',
        message: '输入项目名称',
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
      }];

      return this.prompt(prompts).then(function (props) {
        // To access props later use this.props.someAnswer;
        _this2.props = props;
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
      var passed = {
        redisPassword: this.props.iptRedisPassword,
        projectDescription: this.props.iptProjectDescription,
        projectName: this.props.iptProjectName
      };

      this.fs.copyTpl(this.templatePath(), this.destinationPath(), passed);

      this.fs.copyTpl(this.templatePath('doc'), this.destinationPath('doc'), passed);
    }
  }, {
    key: '_copy',
    value: function _copy() {
      var _self = this;
      var dirsToCopy = ['.atom', '.gitlab', '.sublimetext', '.vscode', 'flow-typed', 'server', 'test', 'tool', 'task', 'client'];

      (0, _forEach2['default'])(dirsToCopy, function (item) {
        _self.fs.copy(_self.templatePath(item), _self.destinationPath(item));
      });
    }
  }, {
    key: 'install',
    value: function install() {
      this.installDependencies({
        npm: false,
        bower: true,
        yarn: true
      });
    }
  }]);

  return MyGenerator;
}(_yeomanGenerator2['default']);

module.exports = MyGenerator;