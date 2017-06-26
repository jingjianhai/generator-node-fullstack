---
layout: page
title: 参与贡献
---

:+1::tada: 首先，谢谢你花时间来做贡献！:tada::+1:

下面是一系列贡献指南，适用于 [HUSO](https://github.com/huso-io) 下所有的项目。他们既是指南也是约定。



## 目录

[行为准则](#行为准则)

:anger:[我不想阅读这么大篇幅的文档，我只是想提个问题](#我不想阅读这么大篇幅的文档我只是想提个问题):bangbang:

[在开始前应该知道些什么？](#在开始前应该知道些什么)
  - [设计初衷](#设计初衷)

[我该如何贡献？](#我该如何贡献)
  - [报告错误（BUG）](#报告错误bug)
  - [建议改进](#建议改进)
  - [贡献代码](#贡献代码)
  - [混合请求（PR）](#混合请求pr)

[准备开发环境](#开发前要做的准备)
  - [使用 Linux/Unix 系统](#使用-linuxunix-系统)
  - [在全网环境（借助 VPN）下工作](#在全网环境借助-vpn下工作)
  - [使用 Chrome 浏览器](#使用-chrome-浏览器)
  - [使用 Git 协作开发](#使用-git-协作开发)
  - [使用 Git Flow 工作流](#使用-git-flow-工作流)
  - [借助 ZSH 加强你的命令行界面](#借助-zsh-加强你的命令行界面)
  - [通过 NVM 管理不同版本的 Node.js](#通过-nvm-管理不同版本的-nodejs)
  - [通过 RVM 管理不同版本的 Ruby](#通过-rvm-管理不同版本的-ruby)
  - [统一使用 Atom/VSCode 编辑器](#统一使用-atomvscode-编辑器)
  - [配置运行前端工程的环境](#配置运行前端工程的环境)
  - [通过 Trello 解决协作中信息共享的问题](#通过-trello-解决协作中信息共享的问题)
  - [使用 Slack 自动化协作](#使用-slack-自动化协作)

[指南](#指南)
  - [工作流](#工作流)
  - [一个页面完成的标准](#一个页面完成的标准)
  - [版本](#版本)
  - [命名](#命名)
  - [Scss](#scss)
  - [JavaScript](#javascript)
  - [开放接口](#开放接口)
  - [Git](#git)
  - [Git 提交信息](#git-提交信息)



## 行为准则

请报告不可接受的行为至 [ceo@holaever.com](mailto:ceo@holaever.com)。



## 我不想阅读这么大篇幅的文档，我只是想提个问题
> 提示：不要通过在问题列表提出一个问题来获得答复，通过下面的办法你可以更及时地收到回复。

- [加入 HUSO 在 Slack 上的团队](https://slackin-yuzahxujci.now.sh/)
  - 就算 Slack 是一个聊天服务，有的时候也可能会发生几个小时才能收到回复的情况
  - 使用 `generator-nfs` 频道交流、讨论 `generator-node-fullstack` 工程
  - 还有很多其它频道



## 在开始前应该知道些什么？

`generator-node-fullstack` 是一个专注于真实生产场景的 Node 项目生成器，主要包括以下几个主要特点，

- 专注于非单页、渐进式、前后端分离 Web 站点 / 应用；
- 强调 [`DevOps`](https://zh.wikipedia.org/zh-cn/DevOps) 思想及相关实现；
- 自动化优先；
- 离线优先；
- 结构优先；
- 不包含 `React`、`Angular`、`bootstrap`、`foundation` 等 `web` 前端 `css`、`js` 框架，高质量第三方底层组件优先；
- 适配微服务、Serverless 等架构模型；
- 前后 2 端均遵循 MVC 设计模式；
- 基于 `Node`、`Express`、`Redis`、`MongoDB` 等服务器端技术；

适用于无论专门托管用户界面抑或 Node 全栈研发，具体比如：电商、企业、宣传等类型网站。

### 设计初衷

当我们初始化一个项目时，需要考虑的方面很多，代码编写风格如何控制，发布的流程是怎样的，怎样的文件夹结构可以有很好的扩展性，工作流应该如何设定，是否能够轻松形成属于自己公司、可大量重用的用户界面、业务套件等等。`generator-node-fullstack` 的初衷就是将诸如此类的考虑以及大量的最佳实践可视化成生成器，让每一个前后端分离项目或 Node 全栈项目都基于更全面的思考初始化却更低成本，而实际开发中只需要使用几个简单的命令即应用大量最佳实践的前提下初始化项目（`yo node-fullstack`）、编辑项目（`yarn start`）、新建一个页面（`yo node-fullstack:new-page`）、新建一个组件（`yo node-fullstack:new-component`）或发布测试版（`yarn publish-test`）等。



## 我该如何贡献？

### 报告错误（BUG）

##### 提出一个错误报告前...

- **确定这个错误报告属于哪个项目**

- **查阅现有问题列表是否已经存在你要提的错误报告**

> 提示：如果你发现一个已经关闭的错误报告和你碰到的问题有些相似，你可以在自己的错误报告中通过超链接的形式关联该关闭的错误报告。

##### 我该如何较好地提出一个错误报告？

- **你想提出一个*新功能*还是一个*问题*？**

- **目前它的情况是怎样的？**

- **如果现在的情况是一个问题，请借助 [JSFiddle](https://jsfiddle.net) 提供重现该问题的最小实现。基于这份 [JSFiddle 模板](https://jsfiddle.net/iTonyYo/uch1xu3u/) 也许可以为你避免一些繁琐的工作。**

- **期望的结果是怎样的？**

- **这个问题出现在什么版本上？什么浏览器？什么系统？如果存在子系统，是什么子系统？这个问题在其它版本上有发生过吗？请仔细描述一下。**

### 建议改进

### 贡献代码

### 混合请求（PR）

**在提交一份混合请求前,** 请确保完成了下面的任务:

- 确保使用 `yarn lint` 完整检测你的代码。
- 确保使用 `yarn flow` 完整检测数据类型。
- 如果你添加了代码，那么你一定要为之编写测试用例，并确保使用 `yarn test` 指令通过所有测试！
- 如果你添加、更新或者移除了测试用例，记得特别说明一下，无论是文档中，亦或是 Git 提交信息中。
- 有必要的话，确保更新下文档。



## 开发前要做的准备

### 使用 Linux/Unix 系统

系统支持，

- Linux(Ubuntu, etc)
- Unix(Mac OS X)

上述并非表明不支持其它系统，只不过我们专注于支持上述系统。

### 在全网环境（借助 VPN）下工作

虽然有淘宝 NPM、GEM 等国内镜像的支持，但是不可排除部分库自身会从国外诸如亚马逊服务器上下载依赖的情况，比如：Phantom.js，为了避免相关情况影响到实际生产效率，推荐在全网环境下进行开发活动，一次性解决所有潜在的库下载问题等。

### 使用 Chrome 浏览器

Chrome 浏览器的开发者工具、插件生态、性能等无与伦比，推荐参阅 [Chromium Blog](https://blog.chromium.org/)、[BATTLE OF THE BROWSERS: EDGE VS. CHROME VS. FIREFOX VS. OPERA VS. VIVALDI](https://www.digitaltrends.com/computing/best-browser-internet-explorer-vs-chrome-vs-firefox-vs-safari-vs-edge/) 以了解更多。

### 使用 Git 协作开发

#### 安装软件

（使用 Linux(Ubuntu, etc) 或者 Unix(Mac OS X) 系统的筒子飘过这一段）如果你使用 Windows 7+ 系统，需要 **依序 全局安装** 下述软件，否则忽略，
- [Chocolatey](https://chocolatey.org/install) ( 参阅 [`Windows 系统的包管理器 Chocolatey`](http://www.tuicool.com/articles/QV7VNrR) 以安装 )
- [Wget ( 管理员权限下运行 Power Shell 命令行界面输入 `choco install wget` 以安装 )](https://www.gnu.org/software/wget/)

无论你使用的是 Linux(Ubuntu, etc)、Unix(Mac OS X) 抑或 Windows 系统，**依序 全局安装** 下述软件，

- Git ( [win 2.11.1 / osx 2.11.1 / Linux](https://git-scm.com/) )
- [GitFlow ( 使用 Wget 的方式安装 )](https://github.com/nvie/gitflow/wiki/Windows#cygwin)
- [GitKraken ( Git 图形界面 )](https://www.gitkraken.com/)
- [GitDeep](http://www.syntevo.com/deepgit/)

> 依序完成上述预估耗时 15 分钟。

#### 征服 Git

通过 [`Try Git`](https://try.github.io/levels/1/challenges/1?__utma=1.580116084.1384070580.1384070580.1384070580.1&__utmb=1.14.10.1384070580&__utmc=1&__utmk=61742508&__utmv=-&__utmx=-&__utmz=1.1384070580.1.1.utmcsr%3D%28direct%29%7Cutmccn%3D%28direct%29%7Cutmcmd%3D%28none%29) 平台快速学习 Git 常用指令，尽管后期是通过 GitKraken 的图形界面操作，但是对常用 Git 指令的学习可以帮助理解 Git 及 [`git-flow`](https://github.com/nvie/gitflow) 工作流。( PS: 开发过程中你可以使用命令亦或是图形界面执行 Git 操作，哪个有快感用哪个 )

[GitKraken ( Git 图形界面 )](https://www.gitkraken.com/) 的使用参见它自己的[文档](https://support.gitkraken.com/)，易上手。

开展协作前，充分阅读、理解 [`git-flow`](https://github.com/nvie/gitflow) 工作流，可综合 [`Git Flow是什么?`](https://segmentfault.com/a/1190000006194051) & [`企业级开发：Gitflow Workflow工作流`](http://www.jianshu.com/p/104fa8b15d1e) 来理解。

熟悉 Github 的方方面面对基于 Git 的协作也会有各种便利之处。

> 在 Windwos 下开发的筒子们，如果你的 Git Bash 无法使用 Git Flow，就通过 Power Shell 进行操作。

### 使用 Git Flow 工作流

参阅 [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/) 以深入了解什么是 `Git Flow`，参阅 [Installing git-flow](https://github.com/nvie/gitflow/wiki/Installation) 安装。

### 借助 ZSH 加强你的命令行界面

#### 安装 OH-MY-ZSH

安装 [OH-MY-ZSH](http://ohmyz.sh/) 前，先确保成功安装了 [ZSH](https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH)。

接着，执行下述指令之一以完成 [OH-MY-ZSH](http://ohmyz.sh/) 的安装，

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

或者，

```shell
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

如果想要了解更多安装方面，查阅官方 [快速开始](https://github.com/robbyrussell/oh-my-zsh#getting-started) 文档。

#### 更新 OH-MY-ZSH 的配置

***这份配置文件（.zshrc）在当前系统用户根目录下***，Unix(Mac OS X) 下直接运行下述指令即可在 [Vim](https://vim.sourceforge.io/) 模式下编辑该配置文件，

```shell
vi ~/.zshrc
```

如果是 Linux(Ubuntu) 桌面系统的话，推荐用 **文本编辑器** 编辑。

默认情况下，配置文件（.zshrc）中会包含 `plugins=(git)` 这样的内容，可以通过全文搜索的办法定位到，替换成下述内容即可，

```
plugins=(git nvm rvm node yarn gulp grunt autojump aws bower python branch copydir copyfile cp docker-compose docker emoji-clock emoji encode64 gem git-extras git-flow-avh git-flow git-hubflow git-prompt git-remote-branch gitfast github gitignore history history-substring-search meteor npm pass pip sudo sublime svn vi-mode zsh_reload ubuntu)
```

> 依序完成上述预估耗时 5 分钟。

#### Linux 提示

- 配置命令行界面 `文件首选项` 时选中 `运行自定义命令而不是 Shell` 选项，并且在自定义命令域中输入 `zsh` 指令，如果你没有自定义 `zsh` 初始化指令化名的情况下。

> 依序完成上述预估耗时 5 分钟。

### 通过 NVM 管理不同版本的 Node.js

#### 安装 NVM

运行下述指令，

```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

如果想要了解更多，可以访问 [NVM 在 Github 上的项目](https://github.com/creationix/nvm)。

### 通过 RVM 管理不同版本的 Ruby

#### 安装 RVM

**依序 执行** 下述 2 条指令，

```
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB

\curl -sSL https://get.rvm.io | bash -s stable --ruby
```

如果想要了解更多安装方面，查阅 [Installing RVM](https://rvm.io/rvm/install)。

#### 更新 `.zshrc`

```shell
source /Users/whoami/.rvm/scripts/rvm #此处应更新为你本机的位置，一般 RVM 成功安装后会显示这个位置
```

### 统一使用 Atom/VSCode 编辑器

**实时构建** 的过程中不包含代码的各种检测可以带来更高的 **实时构建** 效率，基于这样的考虑，我们默认将诸如书写、类型、语法检测等任务交给编辑器以提升实时构建的效率等，也正是如此，我们需要统一编辑器的使用约定，

- 注重编辑器的提示界面，推荐使用 [Atom](https://atom.io/)；
- 更在乎编辑器的性能，推荐使用 [Visual Studio Code](https://code.visualstudio.com/)；

安装 Atom 插件，

```shell
sh ./tool/apm.global.install.sh   # 如果使用的是 OS X 系统
sh ./tool/apm.linux.global.install.sh   # 如果使用的是 Linux 系统
```

> 提示：如果你感到安装插件后，Atom 的运行速度明显降低，你可以临时禁用一些插件来解决这个问题。

### 配置运行前端工程的环境

#### 安装运行时

- [ruby 最新版](https://rubyinstaller.org/)
- [python 2.x 最新版](https://www.python.org/downloads/release/python-2713/)
- [node 最新版](https://nodejs.org/en/download/current/)
- [nginx 最新版
](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/)
- [redis 最新版](https://redis.io/topics/quickstart)
- [Rust 最新版](https://www.rust-lang.org/zh-CN/index.html)

#### 包管理器

- yarn ( 参见官方关于 [Yarn 的安装](https://yarnpkg.com/zh-Hans/docs/install) )
- npm ( 运行 `npm i -g npm` 以确保安装最新版 )
- apm  ( 参见官方关于 [apm 的安装](https://github.com/atom/apm#installing) )
- gem ( 一般会伴随着 ruby 的安装自动安装在你的系统当中，运行 `gem --version` 以检查 )
- cargo ( 一般会伴随着 rust 的安装自动安装在你的系统当中，运行 `cargo --version` 以检查 )

#### 其它

运行下面的指令安装不同运行时下需要的第三方库（记得验证这些库是否成功安装），

```shell
sh ./tool/gem.osx.install.sh   # 如果使用的是 OS X 系统
sh ./tool/gem.linux.install.sh   # 如果使用的是 Linux 系统

sh ./tool/yarn.global.install.sh

sh ./tool/cargo.install.sh
```

推荐深入研究上面 `shell` 脚本里头涉及到的第三方库。

> 完成上述预估耗时 25 分钟。

### 通过 Trello 解决协作中信息共享的问题

团队中协作的根本问题是信息的共享，我们主要借助 Trello 共享各方面工作流、任务动态等。

### 使用 Slack 自动化协作

正如前面所说，团队中协作的根本问题是信息的共享，所以我们借助 Slack 这样的平台，加速诸如 Git 提交、Trello 看板的操作、发布过程反馈等等信息的整合及快速流通，哪怕某个成员推送了代码也第一时间反馈给所有其他成员。



## 指南

### 工作流

- [Yarn](https://yarnpkg.com/zh-Hans/docs/yarn-workflow)
- Lerna
- Gitflow
- 持续集成

### 一个页面完成的标准

- 与后端的交互已经实现
- 用户界面业务逻辑 & 动效交互已经实现
- 界面状态健全
- IE 浏览器兼容性跨度 IE9+
- 复审结果完全处理掉

### 版本

- 遵循 [语义化版本 2.0.0](http://semver.org/lang/zh-CN/)

### 命名

- **文件命名**：小写，单数，若文件名包括若干单词，使用 `.` 分割（但推荐能用一个单词描述绝不用两个）：`smple.file.js`、`simple.file.scss`、`simple.file.png`；
- **文件夹命名**：小写，单数，若文件夹名包括若干单词，使用 `_` 分割（但推荐能用一个单词描述绝不用两个）：`node_modules`；
- Scss、JavaScript、Git 分支等 **命名方式** 参见下述文档；

### Scss

- [编写稳健、可维护和可扩展的 Sass](https://sass-guidelin.es/zh/)
- [OOCSS](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/) & [SMACSS](https://smacss.com/book/)
- [如何组织 CSS 属性（选择按逻辑组织的办法）](https://michael.blog/2017/03/30/organize-your-css-properties-however-you-dang-like/)

### JavaScript

- [函数式编程](https://zh.wikipedia.org/wiki/%E5%87%BD%E6%95%B8%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80)
- 使用 [ECMAScript 6](http://es6-features.org/) 编写
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [ES6 Cheatsheet](https://github.com/DrkSephy/es6-cheatsheet)
- [JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
- 工具函数使用 [Lodash](Lodash)、[Async](http://caolan.github.io/async/) 等
- 测试驱动

### 开放接口

- 使用 [Swagger](http://swagger.io/) 定义开放接口

### Git

- 使用 Github 托管、持续集成项目
- [Gitflow](http://nvie.com/posts/a-successful-git-branching-model/)
- [如何维护更新日志]() ( 更新日志绝对不应该是 Git 日志的堆砌物 )
- [Conventional Commits 1.0.0-beta](https://conventionalcommits.org/)
- [Better Git configuration](https://blog.scottnonnenberg.com/better-git-configuration/)
- 分支命名参考匈牙利命名法，单词都小写，单词之间用连字符连结

### Git 提交信息

提交信息应该清晰描述修改了什么以及其原因。

#### 原因

- 自动生成更新日志
- 查看简单的、与产品密切相关的提交历史（如，忽略工程方面的提交日志）

#### 第一行信息
- 概述修改了什么
- 少于 25 个汉字
- 可以的话精确指向到某个函数名等

#### 其它行信息
- 更详细地解释修改的原因
- 保持列款短于 72 字左右
- 分段

#### 示例
- `git commit -m 'feat(新功能): 初始提交首页'`
- `git commit -m 'fix(修复): 修复了获取不到字体文件的问题'`

#### 完整示例

```txt
feat(新功能): 一个新功能

更详细地解释事情，可能是一些关于这个问题的背景，等等。

提交消息的主体可以是几个段落，请适当自动换行，并保持列款短于 72 字左右。这样，Git 日志展示的东西是有缩进的。

修复: https://github.com/nodejs/node/issues/1337
关联: http://eslint.org/docs/rules/space-in-parens.html
```

#### 修改的主题

- **feat(新功能): 一个新功能**
- **fix(修复): :bug: `:bug:` 一个问题的修复**
- **docs(文档): :memo: `:memo:` 文档的变更**
- **style(格式): :art: `:art:` 对代码无意义无影响的修改，诸如：格式、标点符号等**
- **refactor(重构): 更新了算法、解决方案等属性的修改**
- **perf(性能): :racehorse: `:racehorse:` 提升性能的更改**
- **test(测试): :white_check_mark: `:white_check_mark:` 测试用例的增删改**
- **chore(*): 自动化管道、配置、依赖、运行时等修改**
- **improve(完善): :art: `:art:` 并非新功能，加强稳定性、扩展性、完整性等修改**
- **remove(移除): :fire: `:fire:` 专门移除功能 / 代码 / 文件等修改**

#### 其它

在提交消息的开始使用 **emoji**，
  * :penguin: `:penguin:` 修复在 Linux 上的问题
  * :apple: `:apple:` 修复在 macOS 上的问题
  * :checkered_flag: `:checkered_flag:` 修复在 Windows 上的问题
  * :green_heart: `:green_heart:` 修复持续集成工具的报错
  * :lock: `:lock:` 处理安全方面的新增、改进、修改
  * :arrow_up: `:arrow_up:` 升级依赖
  * :arrow_down: `:arrow_down:` 降级依赖
  * :shirt: `:shirt:` 移除 linter 规则

此外，工程当前严格遵守 [Conventional Commits 1.0.0-beta.1](https://conventionalcommits.org/) 提交公约并借助 [standard-version](https://github.com/conventional-changelog/standard-version) 自动生成更新日志。



## 其它

### 错误报告、混合请求标签

耐心等候... :laughing:



## 灵感

本文档一直受到以下项目的启发，

+ [contributing-template](https://github.com/nayafia/contributing-template/blob/master/CONTRIBUTING-template.md), Template for writing your own contributing guide
+ [Contributing to Atom](https://github.com/atom/atom/blob/master/CONTRIBUTING.md), A set of guidelines for contributing to Atom and its packages
+ [Wrangling Web Contributions: How to Build a CONTRIBUTING.md](http://mozillascience.github.io/working-open-workshop/contributing/), a workflow for multi-device websites.

+ [Open Source Guides](https://opensource.guide/)，Open source software is made by people just like you. Learn how to launch and grow your project.



## 下一步

一言不合开始疯狂地编码吧！:laughing::muscle:
