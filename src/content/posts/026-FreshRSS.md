---
title: 告别一切广告！纯粹的阅读，纯粹的阅读体验
published: 2026-03-03
description: '026-介绍如何快速部署 FreshRSS，帮你高效管理，提升阅读体验'
image: ''
tags: [RSS]
category: '云项目'
draft: false 
lang: ''
---
## 啥是FreshRSS？

::github{repo="FreshRSS/FreshRSS"}

他是一个开源项目

- 支持 OPML 导入导出，轻松迁移现有 RSS 订阅

- 智能过滤 & 标签管理，让阅读更高效

- 高性能，低资源占用，适合 Docker/Nginx/Apache 部署

- 多设备支持，适配 Web 端 + 移动端 + 浏览器插件

- 支持 WebHook、API、插件扩展，可玩性极高

## 使用Docker快速部署

```
services:
  freshrss:
    image: freshrss/freshrss:latest
    container_name: freshrss
    restart: always
    environment:
      - CRON_MIN=*/30       # 建议刷新频率为每小时两次左右
      - TZ=Asia/Shanghai
    volumes:
      - share/Container/freshrss/data:/var/www/FreshRSS/data
      - share/Container/freshrss/extensions:/var/www/FreshRSS/extensions
    ports:
      - 3638:80     # 左侧端口可改  
    depends_on:
      - postgres
 
# 数据库，本身内置SQLite
# 如果用内置，下面版块直接删掉就行
# 上面的 depends_on 部分也删除

  postgres:
    image: postgres:alpine
    container_name: freshrss-postgres
    environment:
      - POSTGRES_USER=freshrss    
      - POSTGRES_PASSWORD=freshrss    
      - POSTGRES_DB=freshrss
    volumes:
      - share/Container/freshrss/freshrss-postgres-data:/var/lib/postgresql/data
    restart: always
```

冒号左侧的文件映射目录也请按个人实际情况进行修改

部署完毕后，WEB输入NAS_IP:3638即可访问

经过一系列部署操作你就可以进入他的主页，你还需要导入订阅源

成果图：

![](/img/026/P1.png)

## 使用PHP虚拟主机来部署

这样部署，不需要单独的服务器，你可以寻找网上便宜的虚拟主机（甚至免费的）

直接在FreshRSS项目中下载下来源代码

::github{repo="FreshRSS/FreshRSS"}

![](/img/P2.png)

上传到你的虚拟主机，绑定上你的域名（免费二级域也行，B站教程多），设置好运行目录

通过打开你的域名打开FreshRSS，完成初始化操作就可以正常使用了

## 第三方软件

FreshRSS支持三方API，所以可以使用三方软件添加上FreshRSS，直接在本地客户端实现查看文章

![](/img/P3.png)

![](/img/P4.png)

软件推荐：

::github{repo="yang991178/fluent-reader"}

::github{repo="yang991178/fluent-reader-lite"}