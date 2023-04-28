# html-to-a4-template

## Introduction

Convert web pages to A4 size for preview and printing. Automatically paginate page content based on the concepts of "pages" and "pagination elements": iterate through each page, paginate recursively within each page until no further pagination is required.

> Currently, this utility use `cash-dom` to manipulate element.
>
> Currently, you need to add class of each "pages" and "pagination elements.

```vue
<div class="break-page">
  <p class="need-break"></p>
  ...
</div>
<!-- more pages -->
```

## Installation

### Using Package Manager

install:

```bash
# NPM
npm install html-to-a4-template

# Yarn 
yarn add html-to-a4-template
```

usage:

```js
import html2a4tmpl from 'html-to-a4-template'

const { execPaging } = html2a4tmpl()
// execute somewhere
execPaging()
```

### Import in Browser

utils & css: 

```html
<head>
  <link rel="stylesheet" href="https://unpkg.com/html-to-a4-template@0.2.1/dist/print.css">
  <script src="https://unpkg.com/html-to-a4-template@0.2.1/dist/html2a4tmpl.umd.js"></script>
</head>
```

usage:

```js
const { execPaging } = html2a4tmpl()
// execute somewhere
execPaging()
```

