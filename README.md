# Browser Game Site Template

通用的浏览器游戏站模板。首页展示主游戏，每个已发布的子游戏拥有独立 URL、播放器、操作说明、相关推荐和 SEO 元数据。默认内容是两个本地交互演示，不绑定任何特定游戏关键词。

技术栈：Next.js 16、React 19、TypeScript、Tailwind CSS 3、现有 Radix/shadcn 组件。站点静态导出到 `out/`，不需要数据库或 Node 生产服务器。

## 本地运行

使用 Node.js 22.13 或更高版本（建议 Node 22 LTS）和 npm。

```bash
npm ci
npm run dev
```

默认地址为 `http://localhost:3000`。默认禁止索引，示例游戏与界面均可离线运行，不会下载 Google Fonts。

## 检查与构建

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run preview
```

`build` 会先检查配置和本地资源，再静态导出，最后检查页面、链接、Sitemap、404 和单文件大小。`preview` 服务 `out/`，未知地址返回真实 HTTP 404；它仅用于本地预览，不是生产服务器。

浏览器回归测试使用本机 Google Chrome：

```bash
npm run test:e2e
```

没有 Chrome 时，在 Playwright 配置中移除 `channel: 'chrome'` 并运行 `npx playwright install chromium`。测试自动启动 4173 端口的静态预览服务；先完成 `npm run build`。移动项目使用 Chromium 设备模拟，不替代真实 iOS/Safari 验收。

## 新游戏站需要修改的文件

- `config/site.config.ts`：站名、域名、主游戏、子游戏列表、主题、联系与基础信息页。
- `config/games/library.ts`：游戏、iframe、封面、操作说明、FAQ、来源和 SEO。
- `public/`：实际使用的游戏封面、站点图标，以及可选本地游戏文件。
- `.env.local`：构建时的 `SITE_URL`、`SITE_INDEXABLE`；参照 `.env.example`。

完整步骤、配置字段、单游戏模式和发布流程见 [CONFIG_GUIDE.md](./CONFIG_GUIDE.md)。

## 模板规则

- 主游戏只发布在 `/`；子游戏在 `/{slug}/`。
- `published: false` 的子游戏不生成页面，不进入推荐、Footer 和 Sitemap。
- `sourceUrl` 仅作原作链接，推荐卡片始终跳到本站。
- 首页和子页共享 `GamePageTemplate`；每页一个 H1、一个 iframe。
- 每款游戏独立设置播放器比例，支持 Reload 确认和 Fullscreen 状态同步。
- FAQ 使用原生 disclosure，答案保留在初始 HTML，不依赖 JavaScript 才能读取。
- 默认 `SITE_INDEXABLE=false`；开启索引前必须替换演示内容并完成配置检查。
- 不自动安装广告或分析脚本，不生成虚构评分和搜索功能。

## 静态部署

将 `out/` 部署到支持目录索引与 404 的静态托管平台。仓库提供 Cloudflare Workers Static Assets 的 `wrangler.jsonc` 示例，未知路径使用 `404-page`，不用 SPA 首页兜底。

正式发布前修改 Worker 名称与真实域名；在构建环境填写 `SITE_URL`。不要把 `.next/`、源码或历史示例目录当作静态产物上传。部署后重新检查响应状态、资源和真实游戏操作。

## 历史示例

`examples/legacy-public/` 与 `examples/legacy-config/` 保存改造前的旧站素材和配置，方便查阅。它们不进入发布产物，也不参与 TypeScript 检查。旧游戏大文件没有删除，但不再占用新模板部署空间。保留的素材不代表已核实使用权限。

`docs/` 中已有的项目研究记录予以保留，不参与通用模板运行或发布。

## 依赖检查记录

2026-10-16 的 `npm audit` 仍报告 10 项告警（3 中等、7 高），来自 `braces` 和 `postcss-selector-parser`，并向 Tailwind、ESLint 等构建工具依赖链传播。这些解析器不作为站点服务端运行；本次没有使用 `npm audit fix --force` 强行跨主版本替换。后续升级构建依赖时需重新检查这两项及其上游修复，不能把构建通过当作零漏洞证明。
