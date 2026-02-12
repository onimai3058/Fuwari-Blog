---
title: "给你的MC服务器增加语音功能"
published: 2026-01-15
description: "依然是MC服务器添砖加瓦，SVC（简单的语音聊天）"
image: ""
tags: [MC-MOD]
category: "MC"
draft: false
---
## MOD介绍

这是一款客户端+服务端的mod，它可以在MC中实现语音聊天功能

比起直接拨打QQ的语音通话，或者是Discord的语音频道，又或者是国内的OOPZ的语音，都不如直接在MC中实现语音。

这款模组不止实现了前几款软件的功能，还可以实现对应每一位玩家的位置，实现的方位变化，更容易分别在多名玩家中，谁在说话。

这是它的MC百科链接：[https://www.mcmod.cn/class/3693.html](https://www.mcmod.cn/class/3693.html)

当然在GitHub上也有他的身影：

::github{repo="henkelmax/simple-voice-chat"}

## 客户端安装

- 在MC百科中下载这款mod

:::warning
请下载你的游戏版本+模组加载器（Forge/Fabric）对应的模组文件
:::

- 将下载到的Jar文件复制到对应游戏版本文件夹下的`mods`文件夹中

- 启动游戏查看是否安装成功

- 配置按键，麦克风，确保可用

## 服务端安装

1. 首先确认你服务器核心版本（Paper、Purpur、Leaves、Fabric）并百度，它是否可以安装插件或者模组（或者直接查看服务器根目录下是否有`plugins`文件夹或者`mods`文件夹）

2. 下载服务端插件（模组）并放进`plugins`文件夹或者`mods`文件夹

3. 启动一次服务器核心，生成SVC模组配置文件

4. 修改SVC模组配置文件

- 作为模组安装后，会在`/config/voicechat`目录下生成`voicechat-server.properties`文件

- 作为插件安装后，会在`/plugins/voicechat`目录下生成`voicechat-server.properties`文件

5. 修改这个文件，搜索关键词：`port`找到类似于`port=31983`这里就是端口设置，你可以修改`port`后面的数值为你的端口，端口往往需要看到你的端口映射程序，如果你的服务器有公网IP，并且都是通过公网IP加入服务器的，那么你可以不做这一步

6. 此时再进入服务器，就可以通过SVC模组，进行语音操作了

接下来尝试与服务器其他玩家畅快进行语音沟通了，如果遇到问题，可以尝试询问AI