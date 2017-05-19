# NODE 全栈工程生成器 &middot; ![Developing](https://img.shields.io/badge/status-is%20developing-green.svg?style=flat) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) [![build status](https://gitlab.com/dandan-repos/generator-node-fullstack/badges/master/build.svg)](https://gitlab.com/dandan-repos/generator-node-fullstack/commits/master)  [![](https://i.github-camo.com/4e28b9f959b945ab207f9d727d5390f17fe7d3d2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f576f726b666c6f772d676974666c6f772d2d6272616e6368696e672d2d6d6f64656c2d3831413143312e737667)](http://nvie.com/posts/a-successful-git-branching-model)

这是一个 **面向前端工程师** 的 Node 全栈工程生成器，主要包括以下几个主要特点，
- 离线优先；
- 结构优先，不包含 `React`、`Angular`、`bootstrap`、`foundation` 等 `web` 前端 `css`、`js` 框架；
- 高质量第三方底层组件优先；
- 全栈遵循 MVC 设计模式；
- 基于 `Node`、`Express`、`Redis`、`MongoDB` 等服务器端技术。

***你不一定会在这儿找到令你惊讶的东西，但是 `dandan.com` 需要你的热情！^_^***



## 目录

- 生成器参数
- 工程介绍
- 待实现
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



### 工程介绍

- `--skip-welcome-message`
- `--skip-install-message`
- `--skip-install`



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



### 待实现

- [ ] 通过服务工作线程 & HTML5 应用缓存两者融合离线应用的优点
- [ ] E2E 测试
- [ ] 兼容性测试
- [ ] 真机测试
- [ ] 不同网络类型下访问效率测试
- [ ] WebPagetest 测试
- [ ] sitespeed.io 测试
- [ ] Lighthouse 测试（待定）
- [ ] 实时更新用户界面
- [ ] 实时重载 NODE 服务
- [ ] 较好地支持全栈开发
- [ ] 生成器：新建页面



### 技术栈

下述为约定好的主要技术栈，

- [ ] Node.js
- [ ] Express.js
- [ ] Redis
- [ ] MongoDB
- [ ] PM2
- [ ] Gulp
- [ ] Webpack
- [ ] Mocha
- [ ] Chai
- [ ] Sinon
- [ ] Babel.js
- [ ] Flowtype
- [ ] Pug
- [ ] Sass
- [ ] Socket.io
- [ ] Animate.css
- [ ] Async.js
- [ ] Lodash.js
- [ ] Immutable.js
- [ ] PouchDB
- [ ] jQyery
- [ ] jQyery UI - Datepicker
- [ ] jQuery Validation
- [ ] Nicescroll.js
- [ ] Lazysizes.js
- [ ] iCheck
- [ ] Select2
- [ ] 百度地图
- [ ] Modernizr.js
- [ ] Browsersync



### 浏览器支持

- [ ] IE 9+
- [ ] Chrome 50+

上述并非表明不支持其它浏览器，只不过我们专注于支持上述浏览器。



### 灵感

一直受到以下项目的启发，

+ [AngularJS Full-Stack](https://github.com/angular-fullstack), Yeoman generator for AngularJS with an Express server;
+ [RealWorld Example App](https://github.com/gothinkster/realworld), Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more;
+ [Web Starter Kit](https://github.com/google/web-starter-kit), a workflow for multi-device websites.
