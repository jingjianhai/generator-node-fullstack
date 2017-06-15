# 开发前要做的准备

## 目录

- 准备 Web 前端工程开发环境清单
  - [使用 Linux/Unix 系统](#使用 Linux/Unix 系统)
  - [在全网环境（借助 VPN）下工作](#在全网环境（借助 VPN）下工作)
  - [使用 Chrome 浏览器](#使用 Chrome 浏览器)
  - [使用 Git 协作开发](#使用 Git 协作开发)
  - [使用 Git Flow 工作流](#使用 Git Flow 工作流)
  - [借助 ZSH 加强你的命令行界面](#借助 ZSH 加强你的命令行界面)
  - [通过 NVM 管理不同版本的 Node.js](#通过 NVM 管理不同版本的 Node.js)
  - [通过 RVM 管理不同版本的 Ruby](#通过 RVM 管理不同版本的 Ruby)
  - [统一使用 Atom/VSCode 编辑器](#统一使用 Atom/VSCode 编辑器)
  - [配置运行前端工程的环境](#配置运行前端工程的环境)
  - [通过 Trello 解决协作中信息共享的问题](#通过 Trello 解决协作中信息共享的问题)
  - [使用 Slack 自动化协作](#使用 Slack 自动化协作)



## 使用 Linux/Unix 系统

系统支持，

- Linux
- Unix

上述并非表明不支持其它系统，只不过我们专注于支持上述系统。



## 在全网环境（借助 VPN）下工作

虽然有淘宝 NPM、GEM 等国内镜像的支持，但是不可排除部分库自身会从国外诸如亚马逊服务器上下载依赖的情况，为了避免相关情况影响到实际生产效率，推荐在全网环境下进行开发活动，一次性解决所有潜在的库下载问题等。



## 使用 Chrome 浏览器

Chrome 浏览器的开发者工具、插件生态、性能等无与伦比，推荐参阅 [Chromium Blog](https://blog.chromium.org/)、[BATTLE OF THE BROWSERS: EDGE VS. CHROME VS. FIREFOX VS. OPERA VS. VIVALDI](https://www.digitaltrends.com/computing/best-browser-internet-explorer-vs-chrome-vs-firefox-vs-safari-vs-edge/) 以了解更多。



## 使用 Git 协作开发

### 安装软件

如果你使用 Windows 7+ 系统，需要 **依序 全局安装** 下述软件，否则忽略，
- [Chocolatey](https://chocolatey.org/install) ( 参阅 [`Windows 系统的包管理器 Chocolatey`](http://www.tuicool.com/articles/QV7VNrR) 以安装 )
- [Wget ( 管理员权限下运行 Power Shell 命令行界面输入 `choco install wget` 以安装 )](https://www.gnu.org/software/wget/)

**依序 全局安装** 下述软件，

- Git ( [win 2.11.1 / osx 2.11.1 / Linux](https://git-scm.com/) )
- [GitFlow ( 使用 Wget 的方式安装 )](https://github.com/nvie/gitflow/wiki/Windows#cygwin)
- [GitKraken ( Git 图形界面 )](https://www.gitkraken.com/)
- [GitDeep](http://www.syntevo.com/deepgit/)

> 依序完成上述预估耗时 15 分钟。

### 征服 Git

通过 [`Try Git`](https://try.github.io/levels/1/challenges/1?__utma=1.580116084.1384070580.1384070580.1384070580.1&__utmb=1.14.10.1384070580&__utmc=1&__utmk=61742508&__utmv=-&__utmx=-&__utmz=1.1384070580.1.1.utmcsr%3D%28direct%29%7Cutmccn%3D%28direct%29%7Cutmcmd%3D%28none%29) 平台快速学习 Git 常用指令，尽管后期是通过 GitKraken 的图形界面操作，但是对常用 Git 指令的学习可以帮助理解 Git 及 [`git-flow`](https://github.com/nvie/gitflow) 工作流。( PS: 开发过程中你可以使用命令亦或是图形界面执行 Git 操作，哪个有快感用哪个 )

[GitKraken ( Git 图形界面 )](https://www.gitkraken.com/) 的使用参见它自己的[文档](https://support.gitkraken.com/)，易上手。

开展协作前，充分阅读、理解 [`git-flow`](https://github.com/nvie/gitflow) 工作流，可综合 [`Git Flow是什么?`](https://segmentfault.com/a/1190000006194051) & [`企业级开发：Gitflow Workflow工作流`](http://www.jianshu.com/p/104fa8b15d1e) 来理解。

熟悉 Github 的方方面面对基于 Git 的协作也会有各种便利之处。

> 在 Windwos 下开发的筒子们，如果你的 Git Bash 无法使用 Git Flow，就通过 Power Shell 进行操作。

## 使用 Git Flow 工作流

参阅 [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/) 以深入了解什么是 `Git Flow`，参阅 [Installing git-flow](https://github.com/nvie/gitflow/wiki/Installation) 安装。



## 借助 ZSH 加强你的命令行界面

### 更新 `.zshrc`

```
plugins=(git nvm rvm node yarn gulp grunt autojump aws bower python branch copydir copyfile cp docker-compose docker emoji-clock emoji encode64 gem git-extras git-flow-avh git-flow git-hubflow git-prompt git-remote-branch gitfast github gitignore history history-substring-search meteor npm pass pip sudo sublime svn vi-mode zsh_reload ubuntu)
```

### Linux 提示

- 配置命令行界面 `文件首选项` 时选中 `运行自定义命令而不是 Shell` 选项，并且在自定义命令域中输入 `zsh` 指令，如果你没有自定义 `zsh` 初始化指令化名的情况下。

> 依序完成上述预估耗时 5 分钟。


## 通过 NVM 管理不同版本的 Node.js

### 安装 NVM

运行下述指令，

```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

如果想要了解更多，可以访问 [NVM 在 Github 上的项目](https://github.com/creationix/nvm)。

## 通过 RVM 管理不同版本的 Ruby

### 安装 RVM

```
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB

\curl -sSL https://get.rvm.io | bash -s stable --ruby
```

如果想要了解更多安装方面，查阅 [Installing RVM](https://rvm.io/rvm/install)。

### 更新 `.zshrc`

```shell
source /Users/whoami/.rvm/scripts/rvm #此处应更新为你本机的位置，一般 RVM 成功安装后会显示这个位置
```

## 统一使用 Atom/VSCode 编辑器

工程设计中将诸如书写、类型、语法检测等任务交给编辑器以提升实时转译的效率等，故需要统一编辑器的设定以增强实际工作效率。



## 配置运行前端工程的环境

### 安装运行时

- [ruby 最新版](https://rubyinstaller.org/)
- [python 2.x 最新版](https://www.python.org/downloads/release/python-2713/)
- [node 最新版](https://nodejs.org/en/download/current/)
- [nginx 最新版
](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/)
- [redis 最新版](https://redis.io/topics/quickstart)
- [Rust 最新版](https://www.rust-lang.org/zh-CN/index.html)

### 包管理器

- yarn ( 参见官方关于 [Yarn 的安装](https://yarnpkg.com/zh-Hans/docs/install) )
- npm ( 运行 `npm i -g npm` 以确保安装最新版 )
- apm  ( 参见官方关于 [apm 的安装](https://github.com/atom/apm#installing) )
- gem ( 一般会伴随着 ruby 的安装自动安装在你的系统当中，运行 `gem --version` 以检查 )
- cargo ( 一般会伴随着 rust 的安装自动安装在你的系统当中，运行 `cargo --version` 以检查 )

### 其它

运行下面的指令安装不同运行时下需要的第三方库（记得验证这些库是否成功安装），

```shell
sh ./tool/apm.global.install.sh   # 如果使用的是 OS X 系统
sh ./tool/apm.linux.global.install.sh   # 如果使用的是 Linux 系统

sh ./tool/gem.osx.install.sh   # 如果使用的是 OS X 系统
sh ./tool/gem.linux.install.sh   # 如果使用的是 Linux 系统

sh ./tool/yarn.global.install.sh

sh ./tool/cargo.install.sh
```

平常的时间可以研究一下上面涉及到的第三方库，有益身心健康。

> 完成上述预估耗时 25 分钟。



## 通过 Trello 解决协作中信息共享的问题

团队中协作的根本问题是信息的共享，借助 Trello 共享各方面工作流、任务动态等。



## 使用 Slack 自动化协作

正如前面所说，团队中协作的根本问题是信息的共享，所以我们借助 Slack 这样的平台，加速诸如 Git 提交、Trello 看板的操作、发布过程反馈等等信息的整合及快速流通。



## 下一步
