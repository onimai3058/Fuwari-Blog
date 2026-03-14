---
title: 自动构建Fuwari博客
published: 2026-03-14
description: '027-通过GitHub Actions自动构建Fuwari博客'
image: ''
tags: ["Astro","GitHub"]
category: '脚本'
draft: false 
lang: ''
---
## 前言

现在的个人博客大部分都是静态网页了，一方面避免了服务器的费用，有效降低博客成本

Fuwari 是一个基于 Astro 的静态博客主题，它的博客文章都是 Markdown 格式的，博客之前的文章也有讲

大部分都部署在Vercel或者CloudFlare Pages上，但是这样的方式使用云构建时不时就容易出问题，

比如构建失败，或者构建时间太长，这些问题都比较麻烦。

所以我就想通过 GitHub Actions 自动构建 Fuwari 博客，这样就可以避免这些问题了。

## 原理

这个项目的实现比较简单，就是在 GitHub 仓库中添加一个 GitHub Actions 工作流，

当有新的博客文章发布时，就会触发这个工作流，自动构建 Fuwari 博客。

`actions/setup-node@v4`配置中，我们指定了 Node.js 的版本为 20

`corepack enable`启用Node.js的Corepack功能

`corepack prepare pnpm@latest --activate`安装最新版本的PNPM

`pnpm --version`检查PNPM是否安装成功

执行以上安装依赖和构建的命令

将./dist目录上传到“dist”分支，就实现了自动构建 Fuwari 博客

这样子部署的GitHub Action不需要单独配置GitHub Tokens，他可以实现自动调用同一仓库，实现提交代码

并且会使用今日的日期来作为构建产物上传到的提交信息

## 实现

你只需要在你的仓库中心间一份工作流配置文件，就可以实现自动构建 Fuwari 博客了。

路径：`.github/workflows/main.yml`

代码：

```
name: 构建并上传到“dist”分支

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: 检查源码
        uses: actions/checkout@v4

      - name: 配置Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: 安装PNPM
        run: |
          corepack enable
          corepack prepare pnpm@latest --activate
          pnpm --version

      - name: 安装依赖
        run: pnpm install

      - name: 构建
        run: pnpm build

      - name: 获取今日日期
        run: echo "DATE=$(date +'%Y-%m-%d')" >> $GITHUB_ENV

      - name: 上传到“dist”分支
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          publish_branch: dist
          commit_message: "build: site update ${{ env.DATE }}"
          force_orphan: true

```

写好后，就可以在 GitHub 仓库中看到这个工作流了。

当有新的提交后，就会触发这个工作流，自动构建 Fuwari 博客。