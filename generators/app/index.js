'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _yeomanGenerator = require('yeoman-generator');

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _yosay = require('yosay');

var _yosay2 = _interopRequireDefault(_yosay);

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

      // Have Yeoman greet the user.
      this.log((0, _yosay2['default'])('Welcome to the peachy ' + _chalk2['default'].red('generator-dandan-com') + ' generator!'));

      // TODO: 输入目前确认的开发者信息，用于填充 `.mailmap`、`package.json` 等文件
      // TODO: 选择许可证
      var prompts = [{
        type: 'input',
        name: 'iptProjectName',
        message: '输入项目名称',
        required: true,
        'default': this.appname
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
      this.fs.copyTpl(this.templatePath(), this.destinationPath(), {
        redisPassword: this.props.iptRedisPassword,
        projectDescription: this.props.iptProjectDescription,
        projectName: this.props.iptProjectName
      });
      this.fs.copy(this.templatePath('.atom'), this.destinationPath('.atom'));
      this.fs.copy(this.templatePath('.gitlab'), this.destinationPath('.gitlab'));
      this.fs.copy(this.templatePath('.sublimetext'), this.destinationPath('.sublimetext'));
      this.fs.copy(this.templatePath('.vscode'), this.destinationPath('.vscode'));
      this.fs.copyTpl(this.templatePath('doc'), this.destinationPath('doc'), {
        redisPassword: this.props.iptRedisPassword,
        projectDescription: this.props.iptProjectDescription,
        projectName: this.props.iptProjectName
      });
      this.fs.copy(this.templatePath('flow-typed'), this.destinationPath('flow-typed'));
      this.fs.copy(this.templatePath('server'), this.destinationPath('server'));
      this.fs.copy(this.templatePath('test'), this.destinationPath('test'));
      this.fs.copy(this.templatePath('tool'), this.destinationPath('tool'));
      this.fs.copy(this.templatePath('task'), this.destinationPath('task'));
      this.fs.copy(this.templatePath('client'), this.destinationPath('client'));
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