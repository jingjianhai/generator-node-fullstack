![Developing](https://img.shields.io/badge/status-is%20developing-green.svg?style=flat) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests) [![Coverage Status](https://coveralls.io/repos/github/huso-io/generator-node-fullstack/badge.svg?branch=master)](https://coveralls.io/github/huso-io/generator-node-fullstack?branch=master) [![codecov](https://codecov.io/gh/huso-io/generator-node-fullstack/branch/master/graph/badge.svg)](https://codecov.io/gh/huso-io/generator-node-fullstack) [![Build Status](https://travis-ci.org/huso-io/generator-node-fullstack.svg?branch=master)](https://travis-ci.org/huso-io/generator-node-fullstack) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/4b1e1575d7a440f5a9df5c3b543ced40)](https://www.codacy.com/app/swzyocowboy/generator-node-fullstack?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=huso-io/generator-node-fullstack&amp;utm_campaign=Badge_Grade) [![codebeat badge](https://codebeat.co/badges/3de4b956-7b4b-470d-9712-683c812718ea)](https://codebeat.co/projects/github-com-huso-io-generator-node-fullstack-master) [![Issue Stats](http://issuestats.com/github/huso-io/generator-node-fullstack/badge/issue?style=flat)](http://issuestats.com/github/huso-io/generator-node-fullstack) [![Issue Stats](http://issuestats.com/github/huso-io/generator-node-fullstack/badge/pr?style=flat)](http://issuestats.com/github/huso-io/generator-node-fullstack) [![dependencies Status](https://david-dm.org/huso-io/generator-node-fullstack/status.svg)](https://david-dm.org/huso-io/generator-node-fullstack) [![devDependencies Status](https://david-dm.org/huso-io/generator-node-fullstack/dev-status.svg)](https://david-dm.org/huso-io/generator-node-fullstack?type=dev) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) [![](https://i.github-camo.com/4e28b9f959b945ab207f9d727d5390f17fe7d3d2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f576f726b666c6f772d676974666c6f772d2d6272616e6368696e672d2d6d6f64656c2d3831413143312e737667)](http://nvie.com/posts/a-successful-git-branching-model) [![Open Source Guides](https://img.shields.io/badge/OpenOpen%20Source-Guide-yellow.svg)](https://opensource.guide/) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fhuso-io%2Fgenerator-node-fullstack.svg?type=shield)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fhuso-io%2Fgenerator-node-fullstack?ref=badge_shield)



# [NODE 全栈工程生成器](https://git.io/vHBfO)

主要包括以下几个主要特点，
- 专注于非单页 Web 应用；
- 离线优先；
- 结构优先；
- 不包含 `React`、`Angular`、`bootstrap`、`foundation` 等 `web` 前端 `css`、`js` 框架，高质量第三方底层组件优先；
- 适配微服务、Serverless 等架构模型；
- 遵循 MVC 设计模式；
- 基于 `Node`、`Express`、`Redis`、`MongoDB` 等服务器端技术。

***你不一定会在这儿找到令你惊讶的东西，但是 `generator-node-fullstack` 需要你的热情！^_^***



## 目录

- 生成器参数
- 有效的生成器
- 工程介绍
- 技术栈
- 浏览器支持
- 灵感
- 参与维护：开始前的准备工作
- 参与维护：如何快速开始？
- 参与维护：目录结构介绍
- 参与维护：接下来要实现些什么?
- 参与维护：发现了问题如何反馈？
- 参与维护：我想帮忙一起写代码!
- 参与维护：我有一个想法，但是我不懂如何去编写程序!



### 生成器参数

- `--skip-welcome-message`
- `--skip-install-message`
- `--skip-install`



### 有效的生成器

- App
  - `yo node-fullstack`（`yo node-fullstack:app`亦可）
- Utility
  - `yo node-fullstack:new-page`



### 工程介绍

| 功能 | 描述 |
|------|------|
| Express.js | Node.js Web 全栈开发 |
| HTTPS | 在开发活动中基于 HTTPS 传输协议 |
| MVC | 融入了 MVC 设计模式的工程 & 代码结构 |
| Pug 预处理 | 转译 Pug 为普通的 HTML，将模板、函数、变量等编程方式引入视图工程中 |
| Sass 预处理 | 转译 SCSS 为普通的 CSS，将变量、函数等编程方式引入样式表工程中 |
| 通过 Babel.js 支持 ES6、7 | 应用 JavaScript 最新特性，借助 Babel 转译成高质量 ES5 脚本，以广泛支持尽可能多的浏览器 |
| 代码检测 | 通过 Google 定义的 JavaScript 指南检测 JavaScript，通过 scss-lint 检测 SCSS 等 |
| 静态资源指纹码 | 强制浏览器重新抓取资源 |
| 性能优化 | 压缩、混合 JavaScript、CSS、HTML，优化图片等，确保页面足够瘦小 |
| 静态资源压缩 | 借助 Gzip、Brotli 两种压缩方式，确保最大化下载效率 |
| 内置 HTTP 服务器 | 一个内置的服务器确保你可以在本地预览你的页面 |
| 模拟数据 | 通过内置的 HTTP 服务器模拟路由 & 数据 |
| 灵活的数据连接配置 | 通过注入的代码轻松切换本地模拟的数据抑或远程数据 |
| 实时浏览器刷新 | 当页面及其相关文件被修改后实时刷新浏览器以呈现最新页面 |
| 跨设备同步预览 | 无论页面滚动、点击、实时刷新、表单提交等均支持多设备之间实时同步 |
| PageSpeed Insight | 形成页面性能检测报告 |
| 功能测试 | 确保功能运作正常且具备最大容错性 |
| 基准测试 | 在浏览器端对需要测试的程序展开测试并生成基准报告 |
| 测试覆盖率 | 生成详细的针对测试时代码被覆盖率的报告 |
| Git 提交倒钩 | 未通过代码检测的情况下无法提交代码 |
| 更新日志 | 语义化版本，并记录所有版本的重大变动 |



### 技术栈

下述为约定好的主要技术栈，

- [ ] Node.js
- [ ] Express.js
- [ ] Redis
- [ ] MongoDB
- [ ] PM2
- [ ] Browsersync
- [ ] Gulp
- [ ] Webpack
- [ ] Mocha
- [ ] Chai
- [ ] Sinon
- [ ] Babel.js
- [ ] Flowtype
- [ ] Pug
- [ ] Sass
- [ ] Async.js
- [ ] Lodash.js
- [ ] Immutable.js
- [ ] PouchDB
- [ ] ...



### 浏览器支持

- [ ] IE 9+
- [ ] Chrome 50+

上述并非表明不支持其它浏览器，只不过我们专注于支持上述浏览器。



### 灵感

一直受到以下项目的启发，

+ [AngularJS Full-Stack](https://github.com/angular-fullstack), Yeoman generator for AngularJS with an Express server;
+ [RealWorld Example App](https://github.com/gothinkster/realworld), Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more;
+ [Web Starter Kit](https://github.com/google/web-starter-kit), a workflow for multi-device websites.
