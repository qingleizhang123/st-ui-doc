常用的布局切换按钮。

### 基础用法

基础的布局切换按钮用法。

::: demo 使用布局切换按钮，点击发送不同的布局

```vue
<template>
  <layout-switch :imgPath="imgPath" :title="title" :layoutName="layoutName" @changeLayout="changeLayout"></layout-switch>
  <layout-switch :imgPath="imgPath2" :title="title2" :layoutName="layoutName2" @changeLayout="changeLayout2"></layout-switch>
</template>

<script setup>
import { ref } from 'vue';

const title = '1x2';
const title2 = '2x2';
const layoutName = '1x2hip';
const layoutName2 = '2x2hip';
const imgPath = '/img/layout_12.svg';
const imgPath2 = '/img/layout.png';

const changeLayout = (layoutName) => {
  console.log(layoutName)
}
</script>
```

:::


### API
LayoutSwitch组件的属性说明如下：
| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| imagePath | 图片路径 | string | - |
| title | 按钮下方文字 | string | - |
| layoutName | 布局名称 | string | - |

### 事件
| 事件名称 | 说明 | 回调参数 |
| ---------| ---- | ------- |
| changeLayout | 点击按钮时的回调 | layoutName |
