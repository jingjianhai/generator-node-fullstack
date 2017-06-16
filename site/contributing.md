---
layout: page
title: 参与贡献
---

:+1::tada: 首先，谢谢你花时间来做贡献！:tada::+1:

下面是一系列贡献指南，适用于 [HUSO](https://github.com/huso-io) 下所有的项目。他们既是指南也是约定。



## 目录

行为准则

[我不想阅读这么大篇幅的文档，我只是想提个问题!!!](#我不想阅读这么大篇幅的文档我只是想提个问题)

[在开始前应该知道些什么？](#在开始前应该知道些什么)
  - [设计初衷](#设计初衷)

[我该如何贡献？](#我该如何贡献？)
  - [报告错误（BUG）](#报告错误bug)
  - [建议改进](#建议改进)
  - [贡献代码](#贡献代码)
  - [混合请求（PR）](#混合请求pr)

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



## 我不想阅读这么大篇幅的文档，我只是想提个问题!!!
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

- **文件命名**：小写，单数，若文件名包括若干单词，使用 `.` 分割：`smple.file.js`、`simple.file.scss`、`simple.file.png`；
- **文件夹命名**：小写，单数，若文件夹名包括若干单词，使用 `_` 分割：`node_modules`；
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

完成[开发前要做的准备](https://github.com/huso-io/generator-node-fullstack/blob/master/doc/predev.md)后，一言不合开始疯狂地编码吧！:laughing::muscle:
