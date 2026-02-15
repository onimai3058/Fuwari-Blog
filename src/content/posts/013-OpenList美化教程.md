---
title: "OpenList丑？美化了解一下"
published: 2026-01-12
description: "013-原版OpenList（AList）的界面看久了，用久了审美疲劳了，来看看这篇美化教程，复制粘贴即可完成美化"
image: ""
tags: [OpenList]
category: "云项目"
draft: false
---
## OpenList-Moe项目介绍

这是一个OpenList美化项目

::github{repo="SajunaOo/OpenList-Moe"}

OpenList原版中只有纯色的背景，与普通的UI

但是在原版的设置中有这两个自定义功能：`自定义头部`和`自定义内容`

通过这两项就可以直接对OpenList进行美化操作

（所有内容均在最新版中通过测试，没有任何BUG，请旧版本用户，考虑升个级后再进行美化）

所有代码均来自他们的GitHub仓库中，如果后续他们有更新，你可以在他们的GitHub仓库的README中获取最新的代码

**对代码的自定义配置请移步他们的GitHub仓库查看**

## 自定义头部代码

::github{repo="SajunaOo/OpenList-Moe"}

```
<!-- 修改 href 和 font-family 以自定义字体，删除字体 <link> 和字体 CSS 则使用 OpenList 默认字体 -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@600&display=swap" rel="stylesheet">
<link href="https://cdn.jsdmirror.com/gh/SajunaOo/OpenList-Moe@dist/css/OpenList-Moe.min.css" rel="stylesheet">

<style>
/** 修改 URL 以自定义背景，删除背景 CSS 则使用 OpenList Moe 默认背景 */
:root {
  --moe-color-theme: 248 179 78; /** 主题色（必填） */
  --moe-bg-image-desktop: url("https://cdn.jsdmirror.com/gh/SajunaOo/OpenList-Moe-Image/light_desktop/早秋_2.webp"); /** 默认白天模式桌面端背景图 */
  --moe-bg-image-mobile: url("https://cdn.jsdmirror.com/gh/SajunaOo/OpenList-Moe-Image/light_mobile/沉浸感_3.webp"); /** 默认白天模式移动端背景图 */
}

.hope-ui-dark {
  --moe-bg-image-desktop: url("https://cdn.jsdmirror.com/gh/SajunaOo/OpenList-Moe-Image/dark_desktop/新春快乐_5.webp"); /** 默认夜间模式桌面端背景图 */
  --moe-bg-image-mobile: url("https://cdn.jsdmirror.com/gh/SajunaOo/OpenList-Moe-Image/dark_mobile/沉浸感_6.webp"); /** 默认夜间模式移动端背景图 */
}

/**
 * 自定义字体
 * 
 * - 全局字体
 * - Markdown 区域字体
 * - Aplayer 音乐播放器字体
 * - ArtPlayer 视频播放器和 tooltip 提示字体
 */
body, .markdown-body, .aplayer, .art-video-player, [class*=hint--]:after {
  font-family: 'Noto Serif SC' !important;
}
</style>
```

## JavaScript 和备案信息

在 OpenList 的 自定义内容 添加以下代码：

```
<script src="https://cdn.jsdmirror.com/gh/SajunaOo/OpenList-Moe@dist/js/OpenList-Moe.min.js"></script>

<!-- 如果你不需要添加备案号，请删除以下代码 -->
<div class="beian-container" style="text-align: center;" hidden>
  <a class="hope-anchor hope-c-PJLV-idrWMwW-css" href="https://beian.miit.gov.cn" target="_blank" rel="noopener" style="font-size: 14px;">
    豫 ICP 备 2025000000 号</a>
</div>

<script>
// 备案信息加载
(()=>{let _o;const _f=()=>{const e=document.querySelector('.footer'),t=document.querySelector('.beian-container');return e&&t&&(e.append(t),t.hidden=!1,_o?.disconnect(),_o=null,!0)};_f()||(_o=new MutationObserver(_f), _o.observe(document,{childList:1,subtree:1}))})();
</script>
```