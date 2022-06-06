import type { SidebarConfig } from "@vuepress/theme-default";
export const sidebar: SidebarConfig = {
  '/components/': [{
    text: '通用',
    children: [{
      text: 'Button 按钮',
      link: '/components/pages/Button',
    }],
    collapsible: false
  }, {
    text: '数据录入',
    children: [{
      text: 'Slider 滑动组件',
      link: '/components/pages/Slider',
    }],
    collapsible: false
  },
  {
    text: '数字输入框',
    
    children: [{
      text: 'InputNumber 数字输入框',
      link: '/components/pages/InputNumber',
    }],
    collapsible: false
  },
  ],
}
