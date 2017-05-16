'use strict';

import Generator from 'yeoman-generator';
import chalk from 'chalk';
import yosay from 'yosay';

class MyGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('appname', {
      type: String,
      required: false
    });
  }
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the peachy ' +
      chalk.red('generator-dandan-com') +
      ' generator!'
    ));

    // TODO: 输入目前确认的开发者信息，用于填充 `.mailmap`、`package.json` 等文件
    // TODO: 选择许可证
    const prompts = [{
      type: 'input',
      name: 'iptProjectName',
      message: '输入项目名称',
      required: true,
      default: this.appname
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
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(), {
        redisPassword: this.props.iptRedisPassword,
        projectDescription: this.props.iptProjectDescription,
        projectName: this.props.iptProjectName
      }
    );
    this.fs.copy(
      this.templatePath('.atom'),
      this.destinationPath('.atom')
    );
    this.fs.copy(
      this.templatePath('.gitlab'),
      this.destinationPath('.gitlab')
    );
    this.fs.copy(
      this.templatePath('.sublimetext'),
      this.destinationPath('.sublimetext')
    );
    this.fs.copy(
      this.templatePath('.vscode'),
      this.destinationPath('.vscode')
    );
    this.fs.copyTpl(
      this.templatePath('doc'),
      this.destinationPath('doc'), {
        redisPassword: this.props.iptRedisPassword,
        projectDescription: this.props.iptProjectDescription,
        projectName: this.props.iptProjectName
      }
    );
    this.fs.copy(
      this.templatePath('flow-typed'),
      this.destinationPath('flow-typed')
    );
    this.fs.copy(
      this.templatePath('server'),
      this.destinationPath('server')
    );
    this.fs.copy(
      this.templatePath('test'),
      this.destinationPath('test')
    );
    this.fs.copy(
      this.templatePath('tool'),
      this.destinationPath('tool')
    );
    this.fs.copy(
      this.templatePath('task'),
      this.destinationPath('task')
    );
    this.fs.copy(
      this.templatePath('client'),
      this.destinationPath('client')
    );
  }

  install() {
    this.installDependencies({
      npm: false,
      bower: true,
      yarn: true
    });
  }
}

module.exports = MyGenerator;
