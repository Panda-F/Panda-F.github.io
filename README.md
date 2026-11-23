# ark‘s blog

Arkana’s technical blog. The Tencent Cloud site and GitHub Pages mirror share this source.

- Tencent Cloud site: [blog.lavoisierlab.cn](https://blog.lavoisierlab.cn/).
- GitHub Pages mirror: [panda-f.github.io](https://panda-f.github.io/).

## Development

Use Node.js 24.

```sh
npm ci
npm run dev
```

Run `npm run build` to generate `dist/`. Set `SITE_URL` to override the base URL, which defaults to the Tencent Cloud address.

## Writing

Add a Markdown file under `src/posts/` with a title, date, and description. The build updates the article list and feed automatically.

```markdown
---
title: Article title
date: 2026-11-23
description: A sentence describing the question this article answers.
---

Article text.
```

GitHub Actions redeploys the GitHub Pages mirror on pushes to `main`. The Tencent Cloud site serves the local build from `/var/www/ark-blog`.
