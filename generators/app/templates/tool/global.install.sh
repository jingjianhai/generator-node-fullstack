#!/bin/sh

lowercase() {
  echo "$1" | sed "y/ABCDEFGHIJKLMNOPQRSTUVWXYZ/abcdefghijklmnopqrstuvwxyz/"
}

OS=`lowercase \`uname\``

echo "开始安装..."

echo "### Ruby 依赖"
if [[ "$OS" == 'darwin' ]]; then
  sudo gem install -n /usr/local/bin \
    scss_lint
elif [[ "$OS" == 'linux' ]]; then
  gem install \
    scss_lint
fi

echo "### Node 依赖"
yarn global add \
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

echo "### Atom 组件"
if [[ "$OS" == 'darwin' ]]; then
  apm install --no-confirm \
    activate-power-mode \
    advanced-open-file \
    an-old-hope-syntax \
    atom-beautify \
    atom-clock \
    auto-update-packages \
    autoclose-html \
    autocomplete-modules \
    autocomplete-paths \
    busy-signal \
    color-picker \
    custom-title \
    docblockr \
    editor-stats \
    editorconfig \
    emmet \
    file-icons \
    git-plus \
    git-time-machine \
    haskell-grammar \
    hey-pane \
    highlight-line \
    highlight-selected \
    intentions \
    language-babel \
    language-fish-shell \
    language-gradle \
    language-graphql \
    language-ini \
    language-lua \
    language-ocaml \
    language-pug \
    language-swift \
    language-thrift \
    language-unix-shell \
    linter-eslint \
    linter-jscs \
    linter-pug-lint \
    linter-scss-lint \
    linter-shellcheck \
    linter-tslint \
    linter-ui-default \
    linter \
    MagicPython \
    markdown-scroll-sync \
    markdown-writer \
    merge-conflicts \
    minimap-find-and-replace \
    minimap-highlight-selected \
    minimap \
    nuclide-format-js \
    nuclide \
    open-recent \
    pigments \
    pretty-json \
    project-manager \
    qolor \
    regex-railroad-diagram \
    remote-edit \
    set-syntax \
    seti-syntax \
    seti-ui \
    simple-drag-drop-text \
    sort-lines \
    split-diff \
    sync-settings \
    todo-show \
    tool-bar \
    travis-ci-status
elif [[ "$OS" == 'linux' ]]; then
  apm install --no-confirm \
    activate-power-mode \
    advanced-open-file \
    an-old-hope-syntax \
    atom-beautify \
    atom-clock \
    autoclose-html \
    autocomplete-modules \
    autocomplete-paths \
    busy-signal \
    color-picker \
    custom-title \
    docblockr \
    editor-stats \
    editorconfig \
    emmet \
    file-icons \
    git-plus \
    git-time-machine \
    haskell-grammar \
    hey-pane \
    highlight-line \
    highlight-selected \
    intentions \
    language-babel \
    language-fish-shell \
    language-gradle \
    language-graphql \
    language-ini \
    language-lua \
    language-ocaml \
    language-pug \
    language-swift \
    language-thrift \
    language-unix-shell \
    linter-eslint \
    linter-jscs \
    linter-pug-lint \
    linter-scss-lint \
    linter-shellcheck \
    linter-tslint \
    linter-ui-default \
    linter \
    MagicPython \
    markdown-scroll-sync \
    markdown-writer \
    merge-conflicts \
    minimap-find-and-replace \
    minimap-highlight-selected \
    minimap \
    nuclide-format-js \
    nuclide \
    open-recent \
    pigments \
    pretty-json \
    project-manager \
    qolor \
    regex-railroad-diagram \
    remote-edit \
    set-syntax \
    seti-syntax \
    seti-ui \
    simple-drag-drop-text \
    sort-lines \
    split-diff \
    sync-settings \
    todo-show \
    tool-bar \
    travis-ci-status
fi

echo "结束安装..."
