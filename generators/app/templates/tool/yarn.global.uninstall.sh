#!/bin/sh

echo "### 开始卸载全局 Node 依赖"

yarn global remove \
  autoprefixer \
  babel-cli \
  bower \
  browser-sync \
  caniuse-cmd \
  diff-so-fancy \
  eslint \
  gulp \
  jscs \
  lerna \
  mocha \
  node-gyp \
  node-pre-gyp \
  parker \
  pm2 \
  postcss-cli \
  pug-cli \
  space-hogs \
  vtop \

echo "卸载完成。"
