常用的序列列表

### 基础用法

基础的序列列表组件的用法。

::: demo 序列列表组件

```vue
<template>
   <series-list :seriesList="series"></series-list>
</template>

<script setup>
import { ref } from 'vue';

const series = [
  {
    index: 1,
    IsSelected: false,
    Thumbnail: '/img/series.png',
    Thickness: 10,
    Modality: 'CT',
    ImageCount: 100,
    Description: '膝关节序列',
  },
  {
    index: 2,
    IsSelected: false,
    Thumbnail: '/img/series.png',
    Thickness: 10,
    Modality: 'CT',
    ImageCount: 100,
    Description: '髋关节',
  },
  {
    index: 3,
    IsSelected: false,
    Thumbnail: '/img/series.png',
    Thickness: 10,
    Modality: 'CT',
    ImageCount: 100,
    Description: '髋关节',
  },
  {
    index: 4,
    IsSelected: false,
    Thumbnail: '/img/series.png',
    Thickness: 10,
    Modality: 'CT',
    ImageCount: 100,
    Description: '膝关节序列',
  },
  {
    index: 5,
    IsSelected: false,
    Thumbnail:'/img/series.png',
    Thickness: 10,
    Modality: 'CT',
    ImageCount: 100,
    Description: '髋关节',
  },
  {
    index: 6,
    IsSelected: false,
    Thumbnail:'/img/series.png',
    Thickness: 10,
    Modality: 'CT',
    ImageCount: 100,
    Description: '膝关节序列',
  },
];

const onSelectSeries = (series) => {
  console.log(series)
}
</script>
```

:::


## API
LayoutSwitch组件的属性说明如下：
| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| imagePath | 图片路径 | string | - |
| title | 按钮下方文字 | string | - |
| layoutName | 布局名称 | string | - |

## 事件
| 事件名称 | 说明 | 回调参数 |
| ---------| ---- | ------- |
| changeLayout | 点击按钮时的回调 | layoutName |
