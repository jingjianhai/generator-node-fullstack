---
layout: page
title: 构建任务
---

> 提示：这里列出来的都是些经常会使用到的指令，其它指令可以
在 `package.json` 的 `scripts` 下找到。

```shell
yarn pre-dev
```
:point_up: 第一次准备开发前先执行该指令安装项目需要的依赖，也可通过
运行该指令重新安装项目的所有依赖。

```shell
yarn remount
```
:point_up: 重新安装所有依赖，即使之前已经安装了。

```shell
yarn start
```
:point_up: 进入开发模式。

```shell
yarn test
```
:point_up: 执行测试用例。

```shell
yarn flow
```
:point_up: 专门针对 JavaScript 的 [静态类型检测](https://flow.org/)。

```shell
yarn lint
```
:point_up: 检测代码。
