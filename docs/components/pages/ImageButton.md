常用的操作按钮。

### 基础用法

基础的按钮用法。

::: demo 使用ImageButton可以快速生成带image图像的button

```vue
<template>
  <image-button :imgPath="imgPath" :title="title" @change="change"></image-button>
</template>

<script setup>
import { ref } from 'vue';

const title = '手动配准';
const imgPath = '/img/logo.png';

const change = () => {
  console.log('change');
}
</script>
```

:::


### API
ImageButton按钮的属性说明如下：
| 属性      | 说明         | 类型    | 默认值 |
| --------- | ------------ | ------- | ------ |
| imagePath | 图片路径     | string  | -      |
| title     | 按钮下方文字 | string  | -      |
| selected  | 按钮是否选中 | boolean | false  |


### 事件
| 事件名称 | 说明 | 回调参数 |
| ---------| ---- | ------- |
| change | 点击按钮时的回调 | (event) => void |
