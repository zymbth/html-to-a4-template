# html-to-a4-template

[English](./README.md) | 中文

## 一、介绍

将网页转换成 A4 尺寸，用以预览打印。对页面内容自动分页，分页基于“页”与“分页单元”两个概念：遍历每个页，页内，递归地分页直至无需再分页。

> 当前，本工具方法使用 [cash-dom](https://github.com/fabiospampinato/cash) 操作 DOM 元素

npm 包: [html-to-a4-template](https://www.npmjs.com/package/html-to-a4-template)

打包后大小：

| file                     | size     | gzip    |
| :----------------------- | :------- | :------ |
| /dist/html2a4tmpl.es.js  | 29.66 kB | 9.29 kB |
| /dist/html2a4tmpl.umd.js | 22.92 kB | 8.47 kB |

## 二、安装

### 1. 使用包管理器

安装:

```bash
# NPM
npm install html-to-a4-template

# Yarn
yarn add html-to-a4-template

# PNPM
pnpm add html-to-a4-template
```

### 2. CDN 引入

引入工具方法:

```html
<head>
  <script src="https://unpkg.com/html-to-a4-template@0.6.4/dist/html2a4tmpl.umd.js"></script>
</head>
```

使用：

```js
const { execPaging } = html2a4tmpl()
// 在某处执行 (参考下一节)
execPaging()
```

## 三、使用

> 下面的示例基于 Vue3，但此工具方法基于 js，不限使用框架

### 设计及实现思路

网页的内容实在过于丰富，为了实现将网页转换成 A4 模板，思路如下：

- 首先
  A4 纸的尺寸为：`210mm * 294mm`。将一个高度不定的网页塞入一个宽度与 A4 纸相等的容器(`a4-container`)中。
- 浏览器打印方法
  如果不在乎样式，不需要设置分页位置，也不需要设置页眉页脚，大可以将上面的容器扔给浏览器的打印程序，任务完成，本工具完全是多余的。
  浏览器打印程序对网页的打印输出结果，其分页可能会生硬切割原本连贯的内容(表格、图片等等)。
  期望实现：设置不跨页内容，超出则将整体移至下一页；设置“另起一页”标记；表格跨页自动分页并复制表头等等自定义需求
- 页与分页单元
  本分页方法最开始的思路是将容器内所有子元素视作分页单元(`a4-unit`)，遍历它们，超出则创建新页，后续元素移至新页，新页继续执行分页方法直至分页完成。
  为了实现上一步所说的功能，引入了“页”(`a4-page`)，将容器子元素视作页，也就是分页单元的集合。遍历页，依次在每一页内执行分页方法
- 本工具的目的是将网页转换成 A4 格式的网页，是的，它仍然是网页。你可以单纯的预览，也可以借用浏览器打印方法所见即所得地打印它，还可以获取转换后的网页及样式，借用服务端插件生成 pdf 文档并自动保存。

### 分页单元

| 类型 | 标识 | 方案 |
| :---- | :---- | :---- |
| 不可拆分单元（默认） | `.a4-unit`  | 整体移动到下一页 |
| 表格 | `.a4-table` | 在跨页处拆分表格，复制表头，新的表格及后续元素插入到下一页。可自动处理纵向合并的单元格 |
| 分页单元容器 | `.a4-unit-wrap` | 与表格类似，容器内首个元素跨页则从容器处拆分，否则，从容器内拆分，将超出的元素移至新克隆一个新的容器，插入到下一页 |

更多常见的类型会被陆续补充进工具方法中

### 分页方法

`execPaging` 方法接收一个参数，它的有效值包括：字符串、元素、元素列表（HTMLCollection），其它值按上一种方式分页。

### 使用示例

分页方法允许使用手动分页、自动分页两种**模式**

1. 手动分页

通过手动给“页”与“分页单元”添加类标识(未标识的不会参与分页中)

```vue
<template>
  <div class="container">
    <div class="a4-page">
      <p class="a4-unit">...</p>
      <!-- 更多“分页单元” -->
    </div>
    <!-- 更多“页” -->
  </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue'
import html2a4tmpl from 'html-to-a4-template'
import { getData } from 'your-api.js'

onMounted(() => {
  const { execPaging } = html2a4tmpl('.container')

  getData().then(res => {
    // render page by api response
    nextTick(() => {
      execPaging()
    })
  })
})
</script>
```

使用这种方式可以控制哪些需要分页，代价是需要手动标识它们

2. 自动分页

指定执行分页的根元素，自动扫描“页”与“分页单元”并添加类标识

```vue
<template>
  <div class="container">
    <div>
      <p>...</p>
      <!-- 更多“分页单元” -->
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
  const { execPaging } = html2a4tmpl('.container', 'auto')

  getData().then(res => {
    // render page by api response
    nextTick(() => {
      execPaging()
    })
  })
})
</script>
```

相比于上一种方式，这种方式下可以省去手动标识，为了正确的自动标识，你需要了解它是如何自动标识：

- `execPaging` 方法根据传入的有效参数获取“页”的父元素(们)
- 遍历上一步的父元素，给他们的子元素添加“页”标识，子元素的子元素添加相应的“分页单元”标识
- 自动标识结束

3. 手动标记 & 自动标记 混用

你完全可以既手动标记“页”与“分页单元”，又指定在特定容器内进行自动标记。两者的区别只在标记阶段
