import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'RockAI AI Hub',
  description: '面向中文用户的 AI 工具导航与使用指南',
  lang: 'zh-CN',
  base: process.env.BASE_PATH || '/',
  cleanUrls: false,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    ['meta', { property: 'og:title', content: 'RockAI AI Hub' }],
    ['meta', { property: 'og:description', content: '中文 AI 工具导航、场景教程与使用指南' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'RockAI AI Hub',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '工具指南',
        items: [
          { text: '工具导航总览', link: '/tools/' },
          { text: 'ChatGPT', link: '/chatgpt' },
          { text: 'Claude', link: '/claude' },
          { text: 'Gemini', link: '/gemini' },
          { text: 'Grok', link: '/grok' },
          { text: 'Suno', link: '/suno' },
          { text: 'Cursor', link: '/cursor' }
        ]
      },
      {
        text: '场景教程',
        items: [
          { text: '场景教程总览', link: '/guides/' },
          { text: '如何选择 AI 工具', link: '/guides/how-to-choose-ai-tools' },
          { text: '学生使用 AI', link: '/guides/ai-tools-for-students' },
          { text: '工作场景 AI', link: '/guides/ai-tools-for-work' },
          { text: '创作者 AI', link: '/guides/ai-tools-for-creators' },
          { text: '开发者 AI', link: '/guides/ai-tools-for-developers' }
        ]
      },
      { text: '常见问题', link: '/faq' },
      { text: 'RockAI 官网', link: 'https://rockai.club' }
    ],
    sidebar: {
      '/guides/': [
        {
          text: '场景教程',
          items: [
            { text: '场景教程总览', link: '/guides/' },
            { text: '如何选择 AI 工具', link: '/guides/how-to-choose-ai-tools' },
            { text: '学生使用 AI', link: '/guides/ai-tools-for-students' },
            { text: '工作场景 AI', link: '/guides/ai-tools-for-work' },
            { text: '创作者 AI', link: '/guides/ai-tools-for-creators' },
            { text: '开发者 AI', link: '/guides/ai-tools-for-developers' }
          ]
        }
      ],
      '/tools/': [
        {
          text: '工具指南',
          items: [
            { text: '工具导航总览', link: '/tools/' },
            { text: 'ChatGPT', link: '/chatgpt' },
            { text: 'Claude', link: '/claude' },
            { text: 'Gemini', link: '/gemini' },
            { text: 'Grok', link: '/grok' },
            { text: 'Suno', link: '/suno' },
            { text: 'Cursor', link: '/cursor' },
            { text: '常见问题', link: '/faq' }
          ]
        }
      ],
      '/': [
        {
          text: '工具指南',
          items: [
            { text: '工具导航总览', link: '/tools/' },
            { text: 'ChatGPT', link: '/chatgpt' },
            { text: 'Claude', link: '/claude' },
            { text: 'Gemini', link: '/gemini' },
            { text: 'Grok', link: '/grok' },
            { text: 'Suno', link: '/suno' },
            { text: 'Cursor', link: '/cursor' }
          ]
        },
        {
          text: '场景教程',
          items: [
            { text: '如何选择 AI 工具', link: '/guides/how-to-choose-ai-tools' },
            { text: '学生使用 AI', link: '/guides/ai-tools-for-students' },
            { text: '工作场景 AI', link: '/guides/ai-tools-for-work' },
            { text: '创作者 AI', link: '/guides/ai-tools-for-creators' },
            { text: '开发者 AI', link: '/guides/ai-tools-for-developers' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '页面目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated: {
      text: '最后更新'
    },
    footer: {
      message: 'AI 工具知识库与使用指南，内容仅供学习参考。',
      copyright: 'Copyright © 2026 RockAI'
    }
  }
})
