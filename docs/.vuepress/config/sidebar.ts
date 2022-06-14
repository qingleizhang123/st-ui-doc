import type { SidebarConfig } from "@vuepress/theme-default";
export const sidebar: SidebarConfig = {
  '/components/': [{
    text: '通用',
    children: [{
      text: 'ImageButton 按钮',
      link: '/components/pages/ImageButton',
    }],
    collapsible: false
  }, {
    text: '布局切换',
    children: [{
      text: 'LayoutSwitch 组件',
      link: '/components/pages/LayoutSwitch',
    }],
    collapsible: false
  },
  {
    text: '序列列表',
    children: [{
      text: 'SeriesList 组件',
      link: '/components/pages/SeriesList',
    }],
    collapsible: false
  },
  {
    text: '组织列表',
    children: [{
      text: 'TissueList 组件',
      link: '/components/pages/TissueList',
    }],
    collapsible: false
  },
  ],
}
