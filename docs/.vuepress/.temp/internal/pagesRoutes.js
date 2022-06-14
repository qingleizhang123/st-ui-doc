import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-1020f180","/components/",{"title":""},["/components/index.html","/components/README.md"]],
  ["v-97cac252","/components/pages/ImageButton.html",{"title":""},["/components/pages/ImageButton","/components/pages/ImageButton.md"]],
  ["v-5d612751","/components/pages/InputNumber.html",{"title":"Input 输入"},["/components/pages/InputNumber","/components/pages/InputNumber.md"]],
  ["v-28da18a0","/components/pages/LayoutSwitch.html",{"title":""},["/components/pages/LayoutSwitch","/components/pages/LayoutSwitch.md"]],
  ["v-488f9699","/components/pages/SeriesList.html",{"title":""},["/components/pages/SeriesList","/components/pages/SeriesList.md"]],
  ["v-579c9feb","/components/pages/TissueList.html",{"title":""},["/components/pages/TissueList","/components/pages/TissueList.md"]],
  ["v-7d85779a","/document/introduction/",{"title":""},["/document/introduction/index.html","/document/introduction/README.md"]],
  ["v-5851f53c","/document/tips/",{"title":"帮助"},["/document/tips/index.html","/document/tips/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
