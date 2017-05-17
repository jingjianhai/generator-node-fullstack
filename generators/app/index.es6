'use strict';

import Generator from 'yeoman-generator';
import chalk from 'chalk';
import yosay from 'yosay';
import forEach from 'lodash/forEach';

class NodeFullstack extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('appname', {
      type: String,
      required: false
    });
  }
  prompting() {
    let generator = chalk.red('Node 全栈');
    this.log(yosay(`欢迎使用 ${generator} 生成器`));

    // TODO: 输入目前确认的开发者信息，用于填充 `.mailmap`、`package.json` 等文件
    // TODO: 选择许可证
    // TODO: 设定不同环境下服务器、数据库等配置
    const prompts = [{
      type: 'input',
      name: 'iptProjectName',
      message: '输入项目名称',
      required: true,
      default: this.options.appname || this.appname
    }, {
      type: 'input',
      name: 'iptProjectDescription',
      message: '输入项目描述',
      required: true,
      default: '这是一个面向前端工程师的 Node 全栈工程。'
    }, {
      type: 'input',
      name: 'iptRedisPassword',
      message: '设置 redis 数据库的访问密码',
      default: 'cnDaNdAn!@#$&13679'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this._copyTpl();
    this._copy();
  }

  _copyTpl() {
    let passed = {
      redisPassword: this.props.iptRedisPassword,
      projectDescription: this.props.iptProjectDescription,
      projectName: this.props.iptProjectName
    };

    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(),
      passed
    );

    this.fs.copyTpl(
      this.templatePath('doc'),
      this.destinationPath('doc'),
      passed
    );
  }

  _copy() {
    let _self = this;
    let dirsToCopy = [
      '.atom',
      '.gitlab',
      '.sublimetext',
      '.vscode',
      'flow-typed',
      'server',
      'test',
      'tool',
      'task',
      'client'
    ];

    forEach(dirsToCopy, item => {
      _self.fs.copy(
        _self.templatePath(item),
        _self.destinationPath(item)
      );
    });
  }

  install() {
    this.installDependencies({
      npm: false,
      bower: true,
      yarn: true
    });
  }
}

module.exports = NodeFullstack;
