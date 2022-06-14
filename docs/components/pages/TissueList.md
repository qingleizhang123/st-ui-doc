常用的组织列表

### 基础用法

基础的组织列表组件的用法。

::: demo 使用组织列表

```vue
<template>
  <tissue-list :tissueList="tissues"></tissue-list>
</template>

<script setup>
import { ref } from 'vue';

const tissues = [
  {
    tissueId: 1,
    name: '组织1',
    color: 'rgba(255,255,255,1)',
    visibility: true,
    isSelected: false,
    volume: 100,
    vrAlpha: 70,
    mprAlpha: 70,
    deleteEnabled: true,
    selected: false,
  },
  {
    tissueId: 2,
    name: '组织2',
    color: 'rgba(255,255,255,1)',
    visibility: true,
    isSelected: false,
    volume: 100,
    vrAlpha: 70,
    mprAlpha: 70,
    deleteEnabled: true,
    selected: false,
  },
  {
    tissueId: 3,
    name: '组织3',
    color: 'rgba(255,255,255,1)',
    visibility: true,
    isSelected: false,
    volume: 100,
    vrAlpha: 70,
    mprAlpha: 70,
    deleteEnabled: true,
    selected: false,
  },
];

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
