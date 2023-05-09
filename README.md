# html-to-a4-template

English | [中文](./README.zh-CN.md)

## Introduction

Convert web pages to A4 size for preview and printing. Automatically paginate page content based on the concepts of "pages" and "pagination elements": iterate through each page, paginate recursively within each page until no further pagination is required.

> Currently, this utility use [cash-dom](https://github.com/fabiospampinato/cash) to manipulate element.

## Installation

> The usage example below is based on Vue3, but this plugin is a js-based utility method that can be used in other frameworks.

### Using Package Manager

install:

```bash
# NPM
npm install html-to-a4-template

# Yarn 
yarn add html-to-a4-template
```

usage:

1. You can manually add class of each "pages" and "pagination elements". (unidentified elements will not participate in pagination)

```vue
<template>
  <div class="break-page">
    <p class="need-break">...</p>
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

2. You can specify the root element(s), which would automatically scanned "pages" and "pagination elements" to add class

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

### Import in Browser

utility:

```html
<head>
  <script src="https://unpkg.com/html-to-a4-template@0.4.0/dist/html2a4tmpl.umd.js"></script>
</head>
```

usage:

```js
const { execPaging } = html2a4tmpl()
// execute somewhere (Please refer to the previous section.)
execPaging()
```

## lib size

| file | size | gzip |
|:-----|:-----|:----|
| html2a4tmpl.es.js | 28.3 kB | 9.0 kB |
| html2a4tmpl.umd.js | 21.8 kB | 8.2 kB |
