# html-to-a4-template

English | [中文](./README.zh-CN.md)

## Introduction

Convert web pages to A4 size for preview and printing. Automatically paginate page content based on the concepts of "pages" and "pagination elements": iterate through each page, paginate recursively within each page until no further pagination is required.

> Currently, this utility use [cash-dom](https://github.com/fabiospampinato/cash) to manipulate element.

npm package: [html-to-a4-template](https://www.npmjs.com/package/html-to-a4-template)

lib size:

| file | size | gzip |
|:-----|:-----|:----|
| /dist/html2a4tmpl.es.js | 29.66 kB | 9.29 kB |
| /dist/html2a4tmpl.umd.js | 22.92 kB | 8.47 kB |

## Installation and Usage

> The usage example below is based on Vue3, but this plugin is a js-based utility method that can be used in other frameworks.

### Using Package Manager

install:

```bash
# NPM
npm install html-to-a4-template

# Yarn 
yarn add html-to-a4-template

# PNPM
pnpm add html-to-a4-template
```

usage:

1) You can manually add class of each "pages" and "pagination elements". (unidentified elements will not participate in pagination)

```vue
<template>
  <div class="a4-page">
    <p class="a4-unit">...</p>
    <!-- more pagination elements -->
  </div>
  <!-- more pages -->
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

2) You can specify the root element(s), which would automatically scanned "pages" and "pagination elements" to add class

```vue
<template>
  <div class="container">
    <div>
      <p>...</p>
      <!-- more pagination elements -->
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

The `execPaging` method takes one parameter, whose valid values include: string, element, element list (HTMLCollection), and other values are paged in the same way as the previous method.

Compared with the previous method, this method can eliminate the need for manual labeling. In order to correctly perform automatic labeling, you need to understand how it is automatically labeled:

- The `execPaging` method obtains the parent element(s) of the "page" based on the valid parameter passed in;
- Traverse the parent elements obtained in the previous step and add the "page" label to their child elements. Add the corresponding "pagination element" label to the child elements' child elements

3) Mixing the use of two methods
You can manually mark "pages" and "pagination elements", and specify automatic marking within a specific container. The only difference between the two is in the marking stage.

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
// execute somewhere (Please refer to the previous section.)
execPaging()
```

## Other

### Pagination Elements

| type | label | strategy |
|:-----|:-----|:----|
| indivisible unit (default) | `.a4-unit` | move the element and the next all elements into next page |
| table | `.a4-table` | split at the page break, copy table header, then insert the new table and next all elements into next page |
| wrap | `.a4-unit-wrap` | Similar to table, if the first element within a container spans across pages, it will be split from the container. Otherwise, it will be split from within the container, and the excess elements will be moved to a newly cloned container and inserted into the next page. |

More common special cases will be gradually added to this utility
