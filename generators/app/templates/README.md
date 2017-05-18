# <%= projectName %> &middot; [![](https://i.github-camo.com/4e28b9f959b945ab207f9d727d5390f17fe7d3d2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f576f726b666c6f772d676974666c6f772d2d6272616e6368696e672d2d6d6f64656c2d3831413143312e737667)](http://nvie.com/posts/a-successful-git-branching-model) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) [![](https://img.shields.io/badge/status-is%20developing-green.svg?style=flat)](#plugin) ![Developing](https://img.shields.io/badge/status-is%20developing-green.svg?style=flat)

<%= projectDescription %>

***你不一定会在这儿找到令你惊讶的东西，但是 `dandan.com` 需要你的热情！^_^***



## 目录

- 工程介绍
- 待实现
- 灵感
- 开始前准备工作
- 如何快速开始？
- 目录结构介绍
- 接下来要实现些什么?
- 发现了问题如何反馈？
- 我想帮忙一起写代码!
- 我有一个想法，但是我不懂如何去编写程序!



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



### 待实现,

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
- [ ] 生成器



### 灵感

一直受到以下项目的启发，

+ [AngularJS Full-Stack](https://github.com/angular-fullstack), Yeoman generator for AngularJS with an Express server;
+ [RealWorld Example App](https://github.com/gothinkster/realworld), Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more;
+ [Web Starter Kit](https://github.com/google/web-starter-kit), a workflow for multi-device websites.



### 开始前准备工作

切记仔细查阅[「Web 前端工程开发环境须知」](https://shimo.im/doc/911wq57rFPUEnnic/)。



### 如何快速开始？

如果你已经在自己的电脑上完全配置了 `dandan.com` 的 [*开发环境*](https://shimo.im/doc/911wq57rFPUEnnic/ '点击 · Click')，你可以克隆一份 [*"dandan.com" 主要镜像*](https://gitlab.com/dandan-repos/dandan.com '点击 · Click') 副本至指定文件目录：

```bash
git clone https://gitlab.com/dandan-repos/dandan.com.git
```

克隆成功后，进入 `dandan.com` 文件夹，安装所有依赖：

```bash
yarn install
```

如果你所处网络环境访问（境）外网存在不稳定的情况且没法儿使用 VPN 访问相关国外代理服务器，那么你可以通过国内 [*TAONPM*](http://npm.taobao.org/ '点击 · Click') 安装所有依赖：

```bash
npm i --registry=https://registry.npm.taobao.org
```

如果你需要在安装的过程中输出相关安装日志，可在上述命令后按需添加 `-d` 或 `-dd` 或 `-ddd` 参数。

至此，所有依赖就安装完了。**开始编辑这个工程**吧！

> 也许在开始之前，你会想了解下有哪些主要构建指令，参阅 `./doc/commands.md` 文档。



### 目录结构

```
root/                 # 工程根目录存放所有工程文件，诸如：package.json, gulpfile.js, .editorconfig 等。
├── [.git]
├── [.nyc_output]     # 存放自动化代码覆盖率测试缓存文件
├── [.tmp]            # 存放自动化工程中的缓存文件
├── [.vscode]         # 存放针对 VS Code 编辑器的配置
├── [app]             # 预处理目录，存放各类需要按某种规则被处理的图片。
├── [dist]            # 生成目录，存放各类按某种规则被处理后的图片。
├── [doc]             # 存放诸如：工程说明、指南、参阅资源等文档。
├── [node_modules]    # Node.js 模块存放处。
├── [test]            # 存放各中测试文件。
├── [task]            # 存放自动化任务文件。
```


### `dandan.com` 接下来要实现些什么?

你可以在 [*Trello*](https://trello.com/b/K9JicM3n '点击 · Click') 上查看 `dandan.com` 的开发、计划等
动态，我们在 [*Trello*](https://trello.com/b/K9JicM3n '点击 · Click') 上头更多地会进行各种讨论、信息
收集等活动。

### 发现 `BUG`!!!

如果你发现一些问题，无论是在什么样的情况下发现的这个问题，无论这个问题
的性质如何（比如，某个问题只是需要在文档中以文字形式作相关提示），可以在
[*Gitlab Issues*](https://gitlab.com/dandan-repos/dandan.com/issues '点击 · Click') 上查看是否存在相关特征描述的条目，如果不存在，我们欢迎你提出相关问题，我们一起讨论！

### 我想帮忙一起写代码!!!

那真的是太棒了！热烈欢迎！但是前提是你是来产生效率的，而非单纯的学习。

### 我有一个想法，但是我不懂如何去编写程序!!!

如果你在功能上或者其他方面有些自己的想法，请查阅
[*Trello*](https://trello.com/b/DSpV62Nl '点击 · Click') 面板
上的 `想法，Idea` 列表内是否已经存在相关的卡片，如果不存在，我们欢迎你通过各种例举、论证的方式阐述、贴出自
己的想法，我们一起讨论。如果你的想法非常棒，我们会通知你、将你的提议加入功能储备，并竭尽可能尽快去实现它！
