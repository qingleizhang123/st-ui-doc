import { defineUserConfig } from "@vuepress/cli";
import { prismjsPlugin } from "@vuepress/plugin-prismjs";
import { defaultTheme } from "@vuepress/theme-default";
import { path } from '@vuepress/utils';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { navbar } from './config/navbar';
import { sidebar } from './config/sidebar';
const locales = {
  '/': {
    'hide-text': 'Hide',
    'show-text': 'Expand',
    'copy-button-text': 'Copy',
    'copy-success-text': 'Copy success'
  },
   '/zh': {
    'hide-text': '隐藏代码',
    'show-text': '显示代码',
    'copy-button-text': '复制代码片段', 
    'copy-success-text': '复制成功'
  }
}

export default defineUserConfig({
  locales: {
    "/": {
      lang: "zh-CN",
      title: "首页",
      description: 'ST前端组件库',
      head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', {
          rel: 'icon',
          href: '/img/logo.png'
        }], // 增加一个自定义的 favicon(网页标签的图标)
      ],
    },
  },
  theme: defaultTheme({
    logo: '/img/logo.png',
    repo: "https://github.com/qingleizhang123/st-ui-v2",
    docsDir: "docs",
    locales: {
      "/": {
        sidebar: sidebar,
        navbar: navbar,
      },
    },
  }),
  markdown: {
    extractHeaders: {
      level: [2, 4],
    },
  },
  plugins: [
    prismjsPlugin({
      preloadLanguages: ["autohotkey", "dart", "r"],
    }),
    [
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, './components'),
      }),
    ],
  ],
});
