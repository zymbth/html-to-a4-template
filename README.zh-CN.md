# html-to-a4-template

[English](./README.md) | 中文

## 一、介绍

本工具用于将网页转换成 A4 尺寸，用以预览、打印。

> 当前，本工具方法使用 [cash-dom](https://github.com/fabiospampinato/cash) 操作 DOM 元素
>
> [项目源码](https://github.com/zymbth/html-to-a4-template)
>
> [Git Page](https://zymbth.github.io/html-to-a4-template/)
>
> [Online Demo](https://codepen.io/zymbth/pen/rNgpMdm)

npm 包: [html-to-a4-template](https://www.npmjs.com/package/html-to-a4-template)

打包后大小：

| file                     | size     | gzip    |
| :----------------------- | :------- | :------ |
| /dist/html2a4tmpl.es.js  | 29.60 kB | 9.34 kB |
| /dist/html2a4tmpl.umd.js | 23.01 kB | 8.54 kB |

### 设计及实现思路

网页的内容实在过于丰富，为了实现将网页转换成 A4 模板，思路如下：

- 首先

A4 纸的尺寸为：`210mm * 294mm`。将一个高度不定的网页塞入一个宽度与 A4 纸相等的容器(`a4-container`)中。

- 浏览器打印方法

如果不在乎样式，不需要设置分页位置，也不需要设置页眉页脚，大可以将上面的容器扔给浏览器的打印程序，任务完成，本工具完全是多余的。

浏览器打印程序对网页的打印输出结果，其分页可能会生硬切割原本连贯的内容(表格、图片等等)。

期望实现：设置不跨页内容，超出则将整体移至下一页；设置“另起一页”标记；表格跨页自动分页并复制表头等等自定义需求

- **页**与**分页单元**

本工具最开始的思路是将容器内所有子元素视作分页单元(`a4-unit`)，顺序遍历它们，超出则创建新页，后续元素移至新页，递归地对新页分页直至完成。

为了实现上一步所说的功能，引入了“页”(`a4-page`)，将容器子元素视作页，它是分页单元的集合。遍历每个页，依次在页内执行分页方法。

![paging](/doc/paging.png)

如果不需要“页”，将容器内所有子元素视作分页单元来进行分页，可以在容器内创建一个页来包裹它们。

- 本工具的目的是将网页转换成 A4 格式的网页，是的，它仍然是网页。
- 最终，你可以单纯的预览，也可以借用浏览器打印方法所见即所得地打印它，还可以获取转换后的网页及样式，调用后端插件(如：[puppeteer](https://github.com/puppeteer/puppeteer))成 pdf 文档。

### `window.print`

分页完成后，通过`window.print`方法打印或导出pdf。

**注意**：预览时，`a4-page`存在外边距、阴影等样式，高度未固定为a4纸的高度。但在打印时，通过媒体查询移除了不必要的样式，并固定高度。

从`print.css`中截取了相关样式:

```css
.a4-container {
  /* ... */
  width: 210mm;
}
.a4-page {
  /* ... */
  box-shadow: 0 0 8px 4px #ccc;
  margin-top: 20px;
  page-break-after: always;
  min-height: 294mm;
}
.a4-page:first-child {
  margin-top: 30px;
}
.a4-page:last-child {
  page-break-after: unset;
  margin-bottom: 20px;
}

@media print {
  .a4-container {
    width: 100% !important;
  }
  .a4-container .a4-page {
    box-shadow: none;
    margin: 0;
    max-height: 294mm;
  }
  .a4-page:first-child {margin-top:0}

  @page {
    size: a4;
    padding: 0;
    margin: 0;
  }
}
```

## 二、安装

### 1. 使用包管理器

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
// 在某处执行 (请确保页面已经渲染完毕再执行)
execPaging()
```

## 三、使用

> 下面的示例基于 Vue3，但此工具方法基于 js，不限使用框架

### 分页单元

| 类型 | 标识 | 方案 |
| :---- | :---- | :---- |
| 不可拆分单元（默认） | `.a4-unit`  | 整体移动到下一页 |
| 表格 | `.a4-table` | 在跨页处拆分表格，复制表头，新的表格及后续元素插入到下一页。可自动处理纵向合并的单元格 |
| 分页单元容器 | `.a4-unit-wrap` | 与表格类似，容器内首个元素跨页则从容器处拆分，否则，从容器内拆分，将超出的元素移至新克隆一个新的容器，插入到下一页 |

如有必要，后续会加入其它的类型的分页单元

### 分页方法

```js
/**
 * 公共分页工具方法
 *
 * @param {string|Element|HTMLCollection} root 页面容器，可传入选择器、元素、元素集合
 * @param {string} [mode='auto'] [manual|auto] manual: 手动设置页容器和分页单元; auto: 指定root为页面根元素，自动将其所有子元素设置为分页容器，所有孙子元素设置为分页单元
 * @param {number} [recLimit=500] 递归限制，避免出现分页bug时死循环
 * @param {number} [pageLimit=500] 分页限制，避免出现分页bug时死循环
 * @returns {Object} {
 *   execPaging: 执行分页（请确保页面已经渲染完毕再执行）
 * }
 */
function html2a4tmpl(root = 'a4-container', mode = 'auto', recLimit = 500, pageLimit = 500) {
  // ...
}
```

### 使用示例

分页方法允许使用手动分页、自动分页两种**模式**

1. 自动分页

指定执行分页的根元素，分页程序会自动将它的子元素和孙子元素分别标记为“页”与“分页单元”

```html
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

自动模式下，可以省去手动标识，为了正确的自动标识，你需要了解它是如何自动标识：

- `execPaging` 方法根据传入的有效参数获取“页”的父元素(们)
- 遍历上一步的父元素，给他们的子元素添加“页”标识，孙子元素添加相应的“分页单元”标识

2. 手动分页

通过手动给“页”与“分页单元”添加类标识(未标识的不会参与分页中，可能会导致分页异常)

```html
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

3. 手动标记 & 自动标记 混用

你完全可以既手动标记“页”与“分页单元”，又指定在特定容器内进行自动标记。两者的区别只在标记阶段
