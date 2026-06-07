# RockAI AI Hub

一个面向中文用户的 AI 工具导航与使用指南项目。

本项目整理 ChatGPT、Claude、Gemini、Grok、Suno、Cursor、Perplexity、Midjourney 等主流 AI 工具的使用场景、适合人群、订阅建议与常见问题，帮助普通用户、学生、职场人士、创作者、开发者和 AI 工具爱好者更高效地选择与使用 AI 工具。

项目并不追求“哪个工具最好”的单一结论，而是更关注：

- 不同 AI 工具分别适合解决什么问题
- 新手如何快速上手并避免踩坑
- 学生、职场、创作、开发等不同场景该怎么选
- 订阅前应该了解哪些限制、成本与使用习惯
- 如何把 AI 工具真正用到学习、工作和项目里

如果你需要 AI 订阅服务、使用指导、售后协助或批量合作支持，可以访问 RockAI：[https://rockai.club](https://rockai.club)

## 收录工具

| 工具名称 | 适合场景 | 推荐人群 | 特点 |
| --- | --- | --- | --- |
| ChatGPT | 写作、问答、办公、学习、编程辅助、方案生成 | 普通用户、学生、职场人士、开发者 | 通用能力强，生态成熟，适合多数入门和进阶场景 |
| Claude | 长文阅读、文档分析、写作润色、逻辑推理 | 研究人员、内容创作者、产品经理、学生 | 长文本处理体验好，表达自然，适合处理复杂资料 |
| Gemini | 搜索增强、多模态理解、Google 生态协作 | Google 生态用户、学生、办公用户 | 与 Google 服务结合紧密，适合资料检索与多模态任务 |
| Grok | 热点信息、社交内容理解、轻量问答 | 社交媒体用户、资讯关注者、内容运营 | 更偏实时信息与社交平台语境，适合热点观察 |
| Suno | AI 音乐生成、歌曲 Demo、短视频配乐 | 音乐爱好者、创作者、短视频用户 | 能快速生成歌曲和旋律，适合创意试验 |
| Cursor | AI 编程、代码补全、项目理解、重构辅助 | 开发者、学生、独立开发者 | 面向代码工作流，适合在真实项目中辅助开发 |
| Perplexity | 信息检索、资料整理、带来源问答 | 学生、研究人员、知识工作者 | 更像 AI 搜索助手，适合快速查资料并追踪来源 |
| Midjourney | 图像生成、视觉创意、概念图、海报灵感 | 设计师、创作者、品牌运营 | 出图风格成熟，适合视觉探索和创意表达 |

## 快速选择建议

如果你刚开始接触 AI，可以先从 ChatGPT 或 Gemini 入门；如果你经常阅读长文档、写报告或整理资料，可以重点了解 Claude；如果你主要做代码开发，Cursor 会更贴近日常工作流；如果你需要检索资料并关注来源，Perplexity 更适合；如果你做音乐或短视频内容，Suno 值得尝试。

更详细的选择方法可以阅读：[如何选择适合自己的 AI 工具](guides/how-to-choose-ai-tools.md)

## 使用指南入口

### 工具文档

- [ChatGPT 使用指南](docs/chatgpt.md)
- [Claude 使用指南](docs/claude.md)
- [Gemini 使用指南](docs/gemini.md)
- [Grok 使用指南](docs/grok.md)
- [Suno 使用指南](docs/suno.md)
- [Cursor 使用指南](docs/cursor.md)
- [常见问题 FAQ](docs/faq.md)

### 场景指南

- [如何选择适合自己的 AI 工具](guides/how-to-choose-ai-tools.md)
- [学生如何使用 AI 工具](guides/ai-tools-for-students.md)
- [工作场景中的 AI 工具用法](guides/ai-tools-for-work.md)
- [创作者 AI 工具指南](guides/ai-tools-for-creators.md)
- [开发者 AI 工具指南](guides/ai-tools-for-developers.md)

## 适合人群

本项目适合以下用户阅读：

- 想系统了解主流 AI 工具的新手用户
- 希望提升学习效率的学生和自学者
- 需要处理文档、邮件、表格、会议纪要的职场人士
- 做短视频、图文、音乐、设计灵感的创作者
- 想把 AI 融入开发流程的程序员和独立开发者
- 正在评估 AI 工具订阅方案的个人或团队
- 需要批量服务支持、交付协助或售后协助的合作方

## 关于 RockAI

RockAI 是一个专业的 AI 订阅服务交付平台，专注于为用户提供稳定交付、高效服务、自动化履约、清晰售后、批量合作和代理支持。

在本项目中，RockAI 主要作为 AI 工具使用过程中的服务支持入口出现。如果你在选择、订阅、使用或团队协作中需要更多协助，可以通过官网了解相关服务：

[https://rockai.club](https://rockai.club)

## 合作与支持

如果你是个人用户，可以通过本项目了解不同 AI 工具的使用场景，再根据实际需求选择合适工具。

如果你是团队、工作室、机构或代理合作方，可以联系 RockAI 获取：

- AI 工具订阅服务支持
- 使用指导与基础答疑
- 交付协助与售后协助
- 批量合作支持
- 代理与渠道合作支持

访问 RockAI 官网：[https://rockai.club](https://rockai.club)

## 项目结构

```text
rockai-ai-hub/
├── package.json
├── README.md
├── LICENSE
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── index.md
├── assets/
│   └── README.md
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts
│   │   └── theme/
│   │       ├── custom.css
│   │       └── index.ts
│   ├── public/
│   │   ├── .nojekyll
│   │   └── logo.svg
│   ├── index.md
│   ├── tools/
│   │   └── index.md
│   ├── guides/
│   │   ├── index.md
│   │   ├── how-to-choose-ai-tools.md
│   │   ├── ai-tools-for-students.md
│   │   ├── ai-tools-for-work.md
│   │   ├── ai-tools-for-creators.md
│   │   └── ai-tools-for-developers.md
│   ├── chatgpt.md
│   ├── claude.md
│   ├── gemini.md
│   ├── grok.md
│   ├── suno.md
│   ├── cursor.md
│   └── faq.md
└── guides/
    ├── how-to-choose-ai-tools.md
    ├── ai-tools-for-students.md
    ├── ai-tools-for-work.md
    ├── ai-tools-for-creators.md
    └── ai-tools-for-developers.md
```

## VitePress 文档站

本项目已包含 GitHub Pages 友好的 VitePress 静态站点版本。

本地启动：

```bash
npm install
npm run docs:dev
```

构建静态站点：

```bash
npm run docs:build
```

预览构建结果：

```bash
npm run docs:preview
```

站点源码位于 `docs/` 目录，首页为 `docs/index.md`，配置文件为 `docs/.vitepress/config.mts`。

## Disclaimer

本项目内容仅用于 AI 工具介绍、使用经验整理和学习参考，不代表任何工具官方立场，也不构成购买、订阅、投资或法律建议。

AI 工具的功能、价格、套餐、可用地区、使用限制和服务政策可能会调整，请以各工具官方页面的最新信息为准。使用任何 AI 工具时，请遵守所在地区法律法规、平台服务条款、学校或公司的合规要求，并注意保护个人隐私、账号安全和敏感数据。

RockAI 提供的是 AI 订阅服务支持、使用指导、交付协助、售后协助和合作支持，不对第三方工具的功能变化、政策调整或服务中断作不恰当承诺。

## License

本项目采用 [MIT License](LICENSE) 开源。
