# Git 提交信息指南

提交信息应该清晰描述修改了什么以及其原因。

## 原因

- 自动生成更新日志
- 查看简单的、与产品密切相关的提交历史（如，忽略工程方面的提交日志）

## 第一行信息
- 概述修改了什么
- 少于 25 个汉字
- 可以的话精确指向到某个函数名等

## 其它行信息
- 更详细地解释修改的原因
- 保持列款短于 72 字左右
- 分段

## 示例
- `git commit -m 'feat(新功能): 初始提交首页'`
- `git commit -m 'fix(修复): 修复了获取不到字体文件的问题'`

## 完整示例

```txt
feat(新功能): 一个新功能

更详细地解释事情，可能是一些关于这个问题的背景，等等。

提交消息的主体可以是几个段落，请适当自动换行，并保持列款短于 72 字左右。这样，Git 日志展示的东西是有缩进的。

修复: https://github.com/nodejs/node/issues/1337
关联: http://eslint.org/docs/rules/space-in-parens.html
```

## 修改的主题

- `feat(新功能): 一个新功能`
- `fix(修复): 一个问题的修复`
- `docs(文档): 文档的变更`
- `style(格式): 对代码无意义无影响的修改，诸如：格式、标点符号等`
- `refactor(重构): 更新了算法、解决方案等属性的修改`
- `perf(性能): 提升性能的更改`
- `test(测试): 测试用例的增删改`
- `chore(*): 自动化管道、配置、依赖、运行时等修改`

此外，工程当前严格遵守 [Conventional Commits 1.0.0-beta.1](https://conventionalcommits.org/) 提交公约并借助 [standard-version](https://github.com/conventional-changelog/standard-version) 自动生成更新日志。
