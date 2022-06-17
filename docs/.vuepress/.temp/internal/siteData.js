export const siteData = {
  "base": "/st-ui-doc/",
  "lang": "en-US",
  "title": "",
  "description": "",
  "head": [],
  "locales": {
    "/": {
      "lang": "zh-CN",
      "title": "首页",
      "description": "ST前端组件库",
      "head": [
        [
          "link",
          {
            "rel": "icon",
            "href": "/img/logo.png"
          }
        ]
      ]
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
