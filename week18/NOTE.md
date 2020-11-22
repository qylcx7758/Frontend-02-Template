## 发布系统

1. Web服务器本质上来说就是一个Socket服务端，在不停地接受着客户端的请求，然后针对每一个客户端的请求进行处理，处理完毕就即时关闭连接。而我们的浏览器则是一个Socket客户端，通过TCP协议向服务端发送HTTP请求报文。
2. 实现web线上服务
- 下载安装VM Box, Ubuntu 镜像
- 新建一个Node Server（Linux，Ubuntu-64bit）
- 启动Node Server的时候引入Ubuntu 镜像
- Ubuntu 镜像启动后需要更改镜像地址
- 填写用户名，服务器名，密码
- 勾选Install OpenSSH server
- 安装完毕，点击Reboot重启
- 手动重启
- 输入账户名/密码登录