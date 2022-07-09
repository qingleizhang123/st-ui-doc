import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";
import { path } from '@vuepress/utils';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { searchPlugin } from '@vuepress/plugin-search';
import { navbar } from './config/navbar';
import { sidebar } from './config/sidebar';
const demoblockPlugin = require('vuepress-plugin-demoblock-plus');

export default defineUserConfig({
  base: '/st-ui-doc/',
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
    repo: "https://github.com/qingleizhang123/st-ui-doc",
    docsDir: "docs",
    locales: {
      "/": {
        sidebar: sidebar,
        navbar: navbar,
      },
    },
    editLink: false,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
  }),
  markdown: {
    extractHeaders: {
      level: [2, 4],
    },
  },
  plugins: [
    demoblockPlugin(''),
    searchPlugin({
    }),
    [
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, './components'),
      }),
    ],
  ],
});
