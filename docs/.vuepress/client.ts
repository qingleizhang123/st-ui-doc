import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import STUI from 'uih-st-ui'
import 'uih-st-ui/dist/uih-st-ui.css'

import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(Antd)
    app.use(STUI)
  }
})
