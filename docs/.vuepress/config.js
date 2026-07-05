import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Tymian的博客',
  description: '分享来自各处的见闻',

  extendsPageData: (page) => {
    return {
      filePathRelative: page.filePathRelative,
    }
  },

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      '/',
      {
        text: '文章',
        link: '/article/',
      },
      {
        text: '类别',
        link: '/category/',
      },
      {
        text: 'Tag',
        link: '/tag/',
      },
      {
        text: '时间线',
        link: '/timeline/',
      },
    ],
  }),

  plugins: [
    blogPlugin({
      // 修改 filter 函数，排除特定文件夹并只处理 tags 包含 public 的文章
      filter: ({ filePathRelative, frontmatter }) => {
        // 硬编码要排除的文件夹
        const excludedFolders = ['.obsidian', '.trash', '模板'];
        return (
          typeof filePathRelative === 'string' &&
          filePathRelative.startsWith('posts/') &&
          // 排除特定文件夹
          !excludedFolders.some(folder => filePathRelative.startsWith(`posts/${folder}/`)) &&
          // 只包含 public 标签的文章
          (
            Array.isArray(frontmatter?.tag) && frontmatter.tag.includes('public') ||
            Array.isArray(frontmatter?.tags) && frontmatter.tags.includes('public')
          )
        );
      },
      // 文章信息（保持不变）
      getInfo: ({ frontmatter, title, data, filePathRelative }) => ({
        title,
        author: frontmatter?.author || '',
        date: frontmatter?.date || null,
        category: frontmatter?.category || [],
        tag: frontmatter?.tag || frontmatter?.tags || [], // 兼容 tags
        excerpt:
          typeof frontmatter?.excerpt === 'string'
            ? frontmatter.excerpt
            : data?.excerpt || '',
        filePathRelative: filePathRelative || '', // 容错
      }),

      // 自动摘要过滤（保持不变）
      excerptFilter: ({ frontmatter }) =>
        !frontmatter?.home &&
        frontmatter?.excerpt !== false &&
        typeof frontmatter?.excerpt !== 'string',

      category: [
        {
          key: 'category',
          getter: (page) => page?.frontmatter?.category || [],
          layout: 'Category',
          itemLayout: 'Category',
          frontmatter: () => ({
            title: 'Categories',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Category ${name}`,
            sidebar: false,
          }),
        },
        {
          key: 'tag',
          getter: (page) =>
            page?.frontmatter?.tag || page?.frontmatter?.tags || [],
          layout: 'Tag',
          itemLayout: 'Tag',
          frontmatter: () => ({
            title: 'Tags',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Tag ${name}`,
            sidebar: false,
          }),
        },
      ],

      type: [
        {
          key: 'article',
          // 去掉 archive 的文章
          filter: (page) => !page?.frontmatter?.archive,
          layout: 'Article',
          frontmatter: () => ({
            title: 'Articles',
            sidebar: false,
          }),
          // 排序：sticky > date
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter?.sticky && pageB.frontmatter?.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky

            if (pageA.frontmatter?.sticky && !pageB.frontmatter?.sticky) return -1
            if (!pageA.frontmatter?.sticky && pageB.frontmatter?.sticky) return 1

            if (!pageB.frontmatter?.date) return 1
            if (!pageA.frontmatter?.date) return -1

            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            )
          },
        },
        {
          key: 'timeline',
          // 只有带日期的文章才进入时间线
          filter: (page) => page.frontmatter?.date instanceof Date,
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
          layout: 'Timeline',
          frontmatter: () => ({
            title: 'Timeline',
            sidebar: false,
          }),
        },
      ],

      hotReload: true,
    }),
  ],

  bundler: viteBundler(),
})