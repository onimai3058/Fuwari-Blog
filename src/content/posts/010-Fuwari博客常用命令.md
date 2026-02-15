---
title: Fuwari博客常用命令
published: 2026-01-06
description: '010-记录Fuwari博客常用的一些命令，使用它们不断更新、调试你的博客'
image: ''
tags: ["Astro","静态网页"]
category: '静态网页'
draft: false 
lang: ''
---

## 安装依赖

```
pnpm install
```

## 启动本地预览

```
pnpm dev
```

此时使用浏览器打开[http://localhost:4321](http://localhost:4321)

停止使用Ctrl+C

## 新建文章

```
pnpm new-post+(文章名称)
```

## 修改文章的FrontMatter

按照这样的格式修改FrontMatter：

```
---
title: "这里写标题"
published: YYYY-MM-DD
description: "文章的摘要"
image: ""
tags: ["标签1", "标签2"]
category: "分类名"
draft: false
---
```

其中image的英文半角引号内是你当前文章的封面图路径或URL

draft则是选择你这篇文章是否作为草稿，false是直接发布（会再部署后显示），true是保存为草稿（不会再部署后显示）

在本地预览的时候，不论你设置的是否为草稿，都会显示

## 文章Markdown中的提示块

```
:::note
这是一个note块
:::

:::tip
这是一个tip块
:::

:::important
这是一个important块
:::

:::warning
这是一个warning块
:::

:::caution
这是一个caution块
:::

:::tip[自定义]
这是一个tip图标+自定义文字块
:::

:::note[自定义]
这是一个note图标+自定义文字块
:::
```

:::note
这是一个note块
:::

:::tip
这是一个tip块
:::

:::important
这是一个important块
:::

:::warning
这是一个warning块
:::

:::caution
这是一个caution块
:::

:::tip[自定义]
这是一个tip图标+自定义文字块
:::

:::note[自定义]
这是一个note图标+自定义文字块
:::

## GitHub仓库卡片

```
::github{repo="作者/仓库名"}
```

（在仓库链接中Github后面一段获取，如github.com/withastro/astro，的withastro/astro）

## 插入某些平台所支持的iframe插件

### 网易云外链播放器

网易云可以在网页端直接生成外链播放器

（VIP歌曲需要用户登录网易云网页端，有Cookie才可以播放）

示例：

```
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450 src="//music.163.com/outchain/player?type=0&id=9083490466&auto=1&height=430"></iframe>
```

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450 src="//music.163.com/outchain/player?type=0&id=9083490466&auto=1&height=430"></iframe>

### BiliBili外链视频播放器

在B站网页端的任意视频中点击获取分享链接，插入到你的Markdown中就可以实现播放

(用Fuwari官方文档直接演示了)

```
<iframe width="100%" height="468" src="//player.bilibili.com/player.html?bvid=BV1fK4y1s7Qf&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
```

<iframe width="100%" height="468" src="//player.bilibili.com/player.html?bvid=BV1fK4y1s7Qf&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>