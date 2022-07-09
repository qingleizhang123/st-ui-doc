export const themeData = {
  "logo": "/img/logo.png",
  "repo": "https://github.com/qingleizhang123/st-ui-doc",
  "docsDir": "docs",
  "locales": {
    "/": {
      "sidebar": {
        "/components/": [
          {
            "text": "通用",
            "children": [
              {
                "text": "ImageButton 按钮",
                "link": "/components/pages/ImageButton"
              }
            ],
            "collapsible": false
          },
          {
            "text": "布局切换",
            "children": [
              {
                "text": "LayoutSwitch 组件",
                "link": "/components/pages/LayoutSwitch"
              }
            ],
            "collapsible": false
          },
          {
            "text": "序列列表",
            "children": [
              {
                "text": "SeriesList 组件",
                "link": "/components/pages/SeriesList"
              }
            ],
            "collapsible": false
          },
          {
            "text": "组织列表",
            "children": [
              {
                "text": "TissueList 组件",
                "link": "/components/pages/TissueList"
              }
            ],
            "collapsible": false
          }
        ],
        "/document/introduction": [
          {
            "text": "安装",
            "children": [
              {
                "text": "安装",
                "link": "/document/introduction/install"
              }
            ]
          },
          {
            "text": "启动",
            "children": [
              {
                "text": "启动",
                "link": "/document/introduction/start"
              }
            ]
          },
          {
            "text": "注意事项",
            "children": [
              {
                "text": "注意事项",
                "link": "/document/introduction/tips"
              }
            ]
          }
        ]
      },
      "navbar": [
        {
          "text": "组件",
          "link": "/components/"
        },
        {
          "text": "文档",
          "link": "/document/introduction"
        },
        {
          "text": "工具箱",
          "children": [
            {
              "text": "在线编辑",
              "children": [
                {
                  "text": "图片压缩",
                  "link": "https://tinypng.com/"
                }
              ]
            },
            {
              "text": "在线服务",
              "children": [
                {
                  "text": "阿里云",
                  "link": "https://www.aliyun.com/"
                },
                {
                  "text": "腾讯云",
                  "link": "https://cloud.tencent.com/"
                }
              ]
            },
            {
              "text": "博客指南",
              "children": [
                {
                  "text": "掘金",
                  "link": "https://juejin.im/"
                },
                {
                  "text": "CSDN",
                  "link": "https://blog.csdn.net/"
                }
              ]
            }
          ]
        }
      ],
      "selectLanguageName": "English"
    }
  },
  "editLink": false,
  "editLinkText": "在 GitHub 上编辑此页",
  "lastUpdatedText": "上次更新",
  "contributorsText": "贡献者",
  "navbar": [],
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "lastUpdated": true,
  "contributors": true,
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
