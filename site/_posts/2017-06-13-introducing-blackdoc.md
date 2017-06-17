---
layout: post
title: 介绍
---

这是一个专注于真实生产场景的 Node 全栈工程生成器，主要包括以下几个主要特点，
- 专注于非单页、渐进式、前后端分离 Web 站点 / 应用；
- 强调 [`DevOps`](https://zh.wikipedia.org/zh-cn/DevOps) 思想及相关实现；
- 自动化优先；
- 离线优先；
- 结构优先；
- 不包含 `React`、`Angular`、`bootstrap`、`foundation` 等 `web` 前端 `css`、`js` 框架，高质量第三方底层组件优先；
- 适配微服务、Serverless 等架构模型；
- 前后 2 端均遵循 MVC 设计模式；
- 基于 `Node`、`Express`、`Redis`、`MongoDB` 等服务器端技术；

***你不一定会在这儿找到令你惊讶的东西，但是 `generator-node-fullstack` 需要你的热情！^_^***



## 目录

- 生成器参数
- 有效的生成器
- 工程介绍
- 技术栈
- 浏览器支持
- 灵感



### 生成器参数

- `--skip-welcome-message`
- `--skip-install-message`
- `--skip-install`



### 有效的生成器

- App
  - `yo node-fullstack`（`yo node-fullstack:app`亦可）
- Utility
  - `yo node-fullstack:new-page`
  - `yo node-fullstack:new-ui-component`



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
- [ ] Firefox 45+
- [ ] Safati 6.2.8+
- [ ] Opera 38+

***上述并非表明不支持其它浏览器，只不过我们专注于支持上述浏览器。***
