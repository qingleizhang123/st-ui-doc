import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Button", defineAsyncComponent(() => import("E:/demo/UI/st-ui-doc/docs/.vuepress/components/Button.vue"))),
      app.component("InputNumber", defineAsyncComponent(() => import("E:/demo/UI/st-ui-doc/docs/.vuepress/components/InputNumber.vue"))),
      app.component("MyTemplate", defineAsyncComponent(() => import("E:/demo/UI/st-ui-doc/docs/.vuepress/components/MyTemplate.vue"))),
      app.component("slider", defineAsyncComponent(() => import("E:/demo/UI/st-ui-doc/docs/.vuepress/components/slider.vue")))
  },
}
