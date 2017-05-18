# 发布

检查数据库，
```bash
redis-cli -h 127.0.0.1 -p 9686 -a <%- redisPassword %>
```

如果是第一次启动 Node 服务器, 执行下述指令，
```bash
yarn online
```

如果已经存在 `<%= projectName %>` Node 服务实例，执行下述指令完全重载即可，
```bash
yarn online-restart
```
