# About 关于

你好，我是IKUN_3058

这是一个基于[Fuwari](https://github.com/saicaca/fuwari)搭建的博客，它用了名为[Astro](https://astro.build)的框架
::github{repo="withastro/astro"}
::github{repo="saicaca/fuwari"}

## 艰难抉择

最开始，在刚刚接触到博客这个东西的时候，我看到了许多优秀的博客

我在找Hexo建站教程的时候发现了“[小明的部落格](https://www.xmdblog.com/)”

这的确是一个非常优秀的博客

他所使用的是Hexo

并且使用了[安知鱼](https://github.com/anzhiyu-c/hexo-theme-anzhiyu)主题

我也尝试了Hexo，但是我感觉Hexo也有许多不足

Hexo 生成的是纯 HTML/CSS/JS 文件，没有后端数据库和服务器逻辑，无法直接实现动态功能

每次发布新文章或修改内容，都需要执行 hexo clean → hexo g → hexo d 三步操作

当博客文章数量过多，执行 hexo g 生成静态文件的时间会明显变长

等等（也许这些原因都是在说服我自己，但是我确确实实是不怎么喜欢Hexo）

后来，经过一番搜索，发现到了Astro这个博客框架

也同时看到了网上一些大佬的作品

后来就开始一步一步安装部署

## 左右为难

Astro框架是静态博客，自然可以通过一些静态网页托管平台部署，从而不需要服务器

静态网页部署到网络是确实不是一件难事，网上确实有诸多平台：

Github Pages：完全免费，无流量限制，但是国内访问速度较慢

Netlify：国内平台，访问速度快，但是免费版有流量限制（每月 1GB）

Vercel：部署速度极快，提交代码秒级生效，但是国内访问速度不稳定（比Github Pages要好）

Cloudflare Pages：免费版无带宽 / 流量限制，但是配置项较多，新手需学习成本

最后的最后，我经过一个晚上的寻找，发现了EdgeOne Pages

这是腾讯云海外版的静态网页服务，完全免费，不限制流量传输，全球CDN（中国大陆需要备案）

然后就部署到了EdgeOne Pages平台上面

## 特别鸣谢

这些开源项目

::github{repo="withastro/astro"}
::github{repo="saicaca/fuwari"}

Edgeone平台
https://pages.edgeone.ai/zh

CloudFlare平台
https://dash.cloudflare.com/

等等，以及为所有爱好者提供免费资源的平台，感谢你们
