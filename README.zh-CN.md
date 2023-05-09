# html-to-a4-template

[English](./README.md) | 中文

## 一、介绍

将网页转换成A4尺寸，用以预览打印。对页面内容自动分页，分页基于“页”与“分页元素”两个概念：遍历每个页，页内，递归地分页直至无需再分页。

> 当前，本工具方法使用 [cash-dom](https://github.com/fabiospampinato/cash) 操作DOM元素

库大小：

| file | size | gzip |
|:-----|:-----|:----|
| html2a4tmpl.es.js | 28.3 kB | 9.0 kB |
| html2a4tmpl.umd.js | 21.8 kB | 8.2 kB |

## 二、安装

> 下面的示例基于 Vue3，但此工具方法基于js，可以用在其它框架中

### 1. 使用包管理器

安装:

```bash
# NPM
npm install html-to-a4-template

# Yarn 
yarn add html-to-a4-template
```

使用:

1) 可以通过手动给“页”与“分页元素”添加类标识(未标识的不会参与分页中)

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

使用这种方式可以控制哪些需要分页，代价是需要手动标识它们

2) 可以指定执行分页的根元素，自动扫描“页”与“分页元素”并添加类标识

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

`execPaging` 方法接收一个参数，它的有效值包括：字符串、元素、元素列表，其它值按上一种方式分页。

相比于上一种方式，这种方式下可以省去手动标识，为了正确的自动标识，你需要了解它是如何自动标识：

- `execPaging` 方法根据传入的有效参数获取“页”的父元素(们)
- 遍历上一步的父元素，给他们的子元素添加“页”标识，子元素的子元素添加相应的“分页元素”标识
- 自动标识结束

### 2. CND引入

引入工具方法:

```html
<head>
  <script src="https://unpkg.com/html-to-a4-template@0.4.0/dist/html2a4tmpl.umd.js"></script>
</head>
```

使用:

```js
const { execPaging } = html2a4tmpl()
// 在某处执行 (参考上一节)
execPaging()
```

## 三、其它

### 分页元素

| 类型 | 标识 | 方案 |
|:-----|:-----|:----|
| 不可拆分单元（默认） | `.need-break` | 整体移动到下一页 |
| 表格 | `.break-table` | 在跨页处拆分表格，复制表头，新的表格及后续元素插入到下一页。可自动处理纵向合并的单元格 |

更多常见的类型会被陆续补充进工具方法中
