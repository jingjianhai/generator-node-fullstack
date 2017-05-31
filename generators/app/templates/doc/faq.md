# Error: Sending illegal frame (HEADERS) in CLOSED state

如果你是在谷歌浏览器中开发，访问如下地址，

```
chrome://flags/#allow-insecure-localhost
```

激活 `Allow invalid certificates for resources loaded from localhost.` 选项即可。

具体参见 **[Getting Chrome to accept self-signed localhost certificate](http://stackoverflow.com/questions/7580508/getting-chrome-to-accept-self-signed-localhost-certificate)**
这里的讨论。



# Failed to load resource: net::ERR_INSECURE_RESPONSE

退出自动化构建流，找到 `node_modules/http2/lib/protocol/stream.js` 文
件，寻找到第 **615** 的代码，如下，

```JavaScript
if (connectionError || streamError) {
```

更改为如下代码，

```JavaScript
if (connectionError || (streamError && !this._closedWithRst)) {
```

具体原因参见官方问题清单中 **[illegal frame HEADERS crash from Stream._pushUpstream](https://github.com/molnarg/node-http2/issues/147#issuecomment-204889402)**
的讨论。

保存文件后，重新运行自动化构建流即可。
