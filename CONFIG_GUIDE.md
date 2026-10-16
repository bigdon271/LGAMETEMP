# 通用游戏站配置指南

## 1 设置站点身份

编辑 `config/site.config.ts`：填写 `metadata.name`、`description`、`author`、真实联系邮箱以及 `about`、`privacy`、`terms`。`theme` 支持 warm、ocean、forest、sunset、cyber、minimal；`appearance` 控制 light 或 dark。

`images` 指向 Logo、favicon、分享图。正式分享图建议使用 PNG/JPEG/WebP；默认 SVG 仅作为本地模板演示，部分社交平台不会显示 SVG 分享图。

不要复用“官方站”“我们开发这些游戏”等未经确认的身份陈述。隐私与条款要对应真实游戏嵌入、托管、分析与广告服务；阅读修改后再设置 `legalReviewed: true`。

## 2 添加游戏

在 `config/games/library.ts` 复制完整配置条目，更新字典键与 `slug`，两者必须一致。slug 只允许小写字母、数字和单个连字符连接，不得与 About、Contact 等系统路由重名。

```ts
{
  slug: 'my-game',
  name: 'My Game',
  published: false,
  demo: false,
  shortDesc: 'Describe the actual game in one sentence.',
  image: '/assets/my-game/cover.webp',
  iframeSrc: 'https://your-game-provider.com/embed/project-id',
  sourceUrl: 'https://your-game-provider.com/project/project-id',
  author: 'Actual game author',
  seo: {
    title: 'My Game — Play Online',
    description: 'An accurate description of this particular game.',
    ogImage: '/assets/my-game/share.png',
  },
  player: {
    width: 4,
    height: 3,
    reloadWarning: 'Reloading may clear unsaved progress.',
  },
  controls: [{ action: 'Move', input: 'Arrow keys' }],
  deviceNote: 'Keyboard required.',
  relatedSlugs: [],
  content: {
    whatIs: {
      title: 'About My Game', description: 'Write from actual testing.',
      logo: '/assets/my-game/logo.webp', logoAlt: 'My Game logo',
    },
    howToPlay: {
      title: 'How to play', description: 'Explain the actual start and controls.',
      image: '/assets/my-game/controls.webp', imageAlt: 'My Game controls',
    },
    faq: {
      title: 'Questions',
      items: [{ id: 'save', question: 'Is progress saved?', answer: 'Describe verified behavior.' }],
    },
  },
}
```

上面的域名只是字段示例，必须替换成真实且经过验证的嵌入地址。先填写完整配置，再把 `published` 设为 true。手机可访问父页面不代表 iframe 游戏支持触屏。

- `iframeSrc` 支持站内绝对路径或 HTTPS URL，不需要 `.embed` rewrite。
- `sourceUrl` 是独立原作入口，绝不用于推荐跳转。
- `player.width/height` 定义整个嵌入播放器的比例，包括游戏自身控制栏；例如 482/412。
- `player.allow` 可设置经过验证的 Permissions Policy，默认 `fullscreen`。
- `player.sandbox` 可选，根据游戏兼容性和来源评估设置；模板不会擅自增加可能导致游戏失效的 sandbox 限制。
- `reloadWarning` 必须准确说明重新加载的影响。父页面通常无法控制跨域游戏内部存档或重开逻辑。
- `relatedSlugs` 缺省时推荐其他所有已发布游戏；空数组表示不显示推荐；配置的草稿或未选中游戏会被过滤。
- `features` 可选。FAQ 的 `id` 在当前游戏内必须唯一。
- 本地资源应放在 `public/`，配置路径不含 `public` 前缀。

## 3 选择首页与子游戏

```ts
mainGameSlug: 'my-game',
subGameSlugs: ['another-game'],
```

主游戏必须存在且已发布，只在 `/` 展示，`/my-game/` 不生成重复页。子游戏需要同时在 `subGameSlugs` 中且 `published: true`，才能生成页面。

站点支持仅一个主游戏：设置 `subGameSlugs: []`。未发布游戏和未选中游戏都不能通过输入 URL 绕过发布列表。

所有入口由同一个 `catalog` 生成，包括路由、Footer、推荐与 Sitemap。不要另外维护一套手写链接列表。

## 4 预览与正式索引

复制 `.env.example` 为 `.env.local`，先使用：

```dotenv
SITE_URL=http://localhost:3000
SITE_INDEXABLE=false
```

预览 HTML 输出 noindex，预览 Sitemap 为空，构建产物 `_headers` 为 Cloudflare 增加 `X-Robots-Tag: noindex, nofollow`。robots.txt 允许抓取，以便读取 noindex。敏感预览仍应由托管平台访问控制保护；robots 和 noindex 都不是访问权限控制。

准备好真实站点后再使用真实 HTTPS 域名与 `SITE_INDEXABLE=true`，并重新构建。域名必须是 origin，不包含目录、用户名、查询参数或 fragment。生产构建校验会拒绝本地域名、演示游戏、未确认的基础信息页和缺失邮箱。

不要只把演示配置的 `demo` 改成 false 来绕过检查；需要填写真实游戏与对应内容。替换演示资源后，也移除不使用的 `public/demo/` 和示例图片，避免被复制到产物。不要重新放回整个 `examples/legacy-public/`。

配置在构建时读取；修改环境变量后必须重新构建才能改变静态站点。切换预览/正式构建后检查整个 `out/`，不要混用两次构建的文件。

## 5 验证与上线

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

浏览器回归用例以仓库默认的两个演示游戏为 fixture。换成正式游戏后，需要同步调整测试断言和设备测试；不应直接删除验收步骤。

默认构建检查：一个 H1、一个 iframe、已发布页面与 Sitemap 一致、本地链接存在、主游戏无重复 URL、资源不超过 25 MiB、404 文件存在。类型检查与配置检查是互补关系。

部署到 Cloudflare 时修改 `wrangler.jsonc` 的 name，上传 `out/`。模板本次没有部署任何云项目。其他静态平台需要自行设置尾斜杠与真实 404，不要把所有未知路径返回首页 HTTP 200。

在真实测试域名中验证每款第三方游戏：加载、菜单、战斗或主要玩法、键盘焦点、触屏、音频、全屏和重新加载。模板无法可靠确定跨域 iframe 中的游戏是否已经成功运行；页面提供重试说明和可选原作链接，不用 iframe onload 宣称游戏已启动。

Google Search Console、统计和广告均按具体站点另行接入。模板没有虚构验证码、广告账号、评分或 `game_started` 统计。
