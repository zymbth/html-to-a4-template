# html-to-a4-template

[English](./README.md) | 中文

## 介绍

将网页转换成A4尺寸，用以预览打印。对页面内容自动分页，分页基于“页”与“分页元素”两个概念：遍历每个页，页内，递归地分页直至无需再分页。

> 当前，本工具方法使用 `cash-dom` 操作DOM元素

## 安装

> 下面的示例基于 Vue3，但此工具方法基于js，可以用在其它框架中

### 使用包管理器

安装:

```bash
# NPM
npm install html-to-a4-template

# Yarn 
yarn add html-to-a4-template
```

使用:

1. 可以通过手动给“页”与“分页元素”添加类标识(未标识的不会参与分页中)

```vue
<template>
  <div class="break-page">
    <p class="need-break">...</p>
    <!-- 更多“分页元素” -->
  </div>
  <!-- 更多“页” -->
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue'
import html2a4tmpl from 'html-to-a4-template'
import { getData } from 'your-api.js'

onMounted(() => {
  const { execPaging } = html2a4tmpl()

  getData().then((res) => {
    // render page by api response
    nextTick(() => {
      execPaging()
    })
  })
})
</script>
```

1. 可以指定执行分页的根元素，自动扫描“页”与“分页元素”并添加类标识

```vue
<template>
  <div class="container">
    <div>
      <p>...</p>
      <!-- 更多“分页元素” -->
    </div>
    <!-- 更多“页” -->
  </div>
  <!-- 更多容器 -->
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue'
import html2a4tmpl from 'html-to-a4-template'
import { getData } from 'your-api.js'

onMounted(() => {
  const { execPaging } = html2a4tmpl(document.getElementsByClassName('container'))

  getData().then((res) => {
    // render page by api response
    nextTick(() => {
      execPaging()
    })
  })
})
</script>
```

### CND引入

引入工具方法及样式:

```html
<head>
  <link rel="stylesheet" href="https://unpkg.com/html-to-a4-template@0.2.1/dist/print.css">
  <script src="https://unpkg.com/html-to-a4-template@0.2.1/dist/html2a4tmpl.umd.js"></script>
</head>
```

使用:

```js
const { execPaging } = html2a4tmpl()
// 在某处执行 (参考上一节)
execPaging()
```
