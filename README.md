# ark‘s blog

Arkana 的个人技术博客。腾讯云独立站和 GitHub Pages 使用同一份源码。

- 腾讯云主站为 [blog.lavoisierlab.cn](https://blog.lavoisierlab.cn/)。
- GitHub Pages 地址为 [panda-f.github.io](https://panda-f.github.io/)。

## 本地开发

使用 Node.js 24。

```sh
npm ci
npm run dev
```

运行 `npm run build` 生成 `dist/`。`SITE_URL` 决定构建使用的站点地址，默认使用腾讯云主站地址。

## 写文章

在 `src/posts/` 新建 Markdown 文件，提供标题、日期和摘要。文章首页索引和订阅源会随构建更新。

```markdown
---
title: 文章标题
date: 2026-11-23
description: 一句话说明这篇文章回答的问题。
---

文章正文。
```

推送 `main` 后，GitHub Actions 会重新部署 GitHub Pages。腾讯云使用本地构建的 `dist/`，部署目录是 `/var/www/ark-blog`。
