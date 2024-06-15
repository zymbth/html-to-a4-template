# html-to-a4-template

English | [中文](./README.zh-CN.md)

## Introduction

Convert web pages to A4 size for preview and printing.

> Currently, this utility use [cash-dom](https://github.com/fabiospampinato/cash) to manipulate element.
>
> [Github](https://github.com/zymbth/html-to-a4-template)
>
> [Git Page](https://zymbth.github.io/html-to-a4-template/)
>
> [Online Demo](https://codepen.io/zymbth/pen/rNgpMdm)

npm package: [html-to-a4-template](https://www.npmjs.com/package/html-to-a4-template)

lib size:

| file                     | size     | gzip    |
| :----------------------- | :------- | :------ |
| /dist/html2a4tmpl.es.js  | 29.60 kB | 9.34 kB |
| /dist/html2a4tmpl.umd.js | 23.01 kB | 8.54 kB |

### Design and implementation

The content of the webpage is too rich. In order to convert the webpage into the A4 template, the idea is as follows:

- First of all

The size of A4 paper is: `210mm * 294mm`. Put a web page with uncertain height into a container (`A4-Container`) equal to A4 paper.

- The browser's printing program

If you don't care about the output style, or you don't need to set the paging position, or you do not need to set the page header and footer. The browser's printing program is enough.

The browser printing program's print output results of the webpage may rigidly cut the coherent content (table, picture, etc.).

Expecting implementation: Mark the coherent content to display in the same page; mark "start another page"; the table across the page automatically paged and copy the thead, etc.

- **page**(`A4-PAGE`) and **paging unit**(`A4-Unit`)

At the beginning of design, all the children in the container were regarded as the paging unit. Traverse them in order, and create a new page when cross page, and then move the rest into the new page to recursively execute paging program.

In order to achieve the REQs mentioned above, the "page" is introduced, the container's children were regarded as page, which is the collection of the paging unit.

![paging](/doc/paging.png)

If you want to treat the container's children as paging unit, please append a page to contain them.

- The purpose of this tool is to convert the webpage into the webpage with A4 template. Yes, it is still webpage.
- Finally, you can simply preview, or invoke the browser printing program to print it. You can also obtain the webpage and styles, then send to back-end to generate PDF file via plugins like [puppeteer](https://github.com/puppeteer/puppeteer).

### `window.print`

Print or export to pdf via browser printing program.

**Note**: In preview, the `a4-page` has the style of the `margin`, `box-shadow`, etc., and the `height` is not fixed. When printing, preview's styles were removed via media query and fixed the page height.

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

## Installation

### Using Package Manager

```bash
# NPM
npm install html-to-a4-template

# Yarn
yarn add html-to-a4-template

# PNPM
pnpm add html-to-a4-template
```

### Import in Browser

utility:

```html
<head>
  <script src="https://unpkg.com/html-to-a4-template@0.6.4/dist/html2a4tmpl.umd.js"></script>
</head>
```

usage:

```js
const { execPaging } = html2a4tmpl()
// execute somewhere (Please ensure the webpage has been rendered before invoke `execPaging`)
execPaging()
```

## Usage

> The usage example below is based on Vue3, but this plugin is a js-based utility method that can be used in other frameworks.

### Paging Unit

| type | label | strategy |
| :--- | :--- | :--- |
| indivisible unit (default) | `.a4-unit` | move the element and the next all elements into next page |
| table | `.a4-table` | split at the page break, copy table header, then append the new table and next all elements into next page |
| unit-wrap | `.a4-unit-wrap` | It's a set of units, which has the similar split strategy as table. If the first child of a unit-wrap cross page, the unit-wrap overall will be moved to next page. Otherwise, it will be split, and the excess children will be moved to a newly cloned unit-wrap, which will be appended to the next page. |

If necessary, more common special cases will be added.

### Paging program

```js
/**
 * Util of convert html to a4 template
 *
 * @param {string|Element|HTMLCollection} root specify root element. Valid inputs: string(css selector), element(s)
 * @param {string} [mode='auto'] [manual|auto] manually/automatically mark page and page unit
 * @param {number} [recLimit=500] recursion limitation，avoid infinite loop when encounter paging bugs
 * @param {number} [pageLimit=500] paging limitation，avoid infinite loop when encounter paging bugs
 * @returns {Object} {
 *   execPaging: execute paging program (Please ensure the webpage has been rendered before invoke `execPaging`)
 * }
 */
function html2a4tmpl(root = 'a4-container', mode = 'auto', recLimit = 500, pageLimit = 500) {
  // ...
}
```

### Usage Demo

1. Auto paging

Automatically mark "page" and "paging unit" in a4 container(s)

```html
<template>
  <div class="container">
    <div>
      <p>...</p>
      <!-- more a4 paging unit -->
    </div>
    <!-- more a4 page -->
  </div>
  <!-- more a4 container -->
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

When using 'auto' mode, in order to correctly perform automatic marking, you need to understand how it is automatically marked:

- The `execPaging` method obtains the a4 container(s) based on the valid parameter passed in;
- Traverse the above containers and mark their child elements as the "page". Add mark the grandchild elements as "paging unit".

3. Manual paging

You can manually mark each "pages" and "paging units". (Unmarked elements will not participate in pagination, which might lead to paging bugs.)

```html
<template>
  <div class="container">
    <div class="a4-page">
      <p class="a4-unit">...</p>
      <!-- more paging units -->
    </div>
    <!-- more pages -->
  </div>
  <!-- more containers -->
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

3. Mixing the usage of two mode

The difference between the two is only in the marking stage.
