import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '学习资料(分类)', link: '/blog/categories/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '最近更新', link: '/blog/archives/' },
  { text: '前往小红书', link: 'https://www.xiaohongshu.com/user/profile/62ea6374000000001f005c6c' }
  // {
  //   text: '笔记',
  //   items: [{ text: '示例', link: '/notes/demo/README.md' }]
  // },
])
