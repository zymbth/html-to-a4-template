<script setup>
import { ref, nextTick } from 'vue'
import { mockParagraph } from '@/utils/mock.js'
import html2a4tmpl from '@/lib/html2a4tmpl.js'

const fastDownloadIframe = ref()
const docData = ref([])
const tmpl = [
  { type: 'p' },
  { type: 'p' },
  { type: 'p' },
  { type: 'p' },
  { type: 'p' },
  { type: 'p' },
  { type: 'p' },
  { type: 'p' },
  { type: 'table', amount: 20 },
  { type: 'p' },
  { type: 'p' },
  { type: 'p' },
  { type: 'p' },
  { type: 'p' },
  { type: 'p' },
  { type: 'table', amount: 50 },
  { type: 'p' },
  { type: 'p' },
  { type: 'p' },
  { type: 'p' },
  { type: 'p' },
  { type: 'p' },
  { type: 'p' },
  { type: 'p' },
]

function testFunc() {
  getData(tmpl).then(res => {
    docData.value = res
    // fastDownloadIframe.value.src = './test.html'
    fastDownloadIframe.value.srcdoc = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Fast Download Page</title>
        </head>
        <body>
          <div id="iframe-page">Hello!</div>
        </body>
        <style>
          html,body {margin:0}
        </style>
      </html>`
    const iframeWindow = fastDownloadIframe.value.contentWindow
    console.log('iframeWindow: ', iframeWindow, iframeWindow.name)
    // const scriptElement = iframeWindow.document.createElement('script')
    // scriptElement.src = './test.js'
    // scriptElement.innerHTML = 'console.log("this", this);';
    // iframeWindow.document.body.appendChild(scriptElement)
    setTimeout(() => {
      const rootEl = iframeWindow.document.getElementById('iframe-page')
      console.log(rootEl)
      generatePageByData(rootEl)
      nextTick(() => {

        html2a4tmpl.call(iframeWindow,rootEl).execPaging?.()
      })
    }, 300)
  })
}

function generatePageByData(root) {
  root.innteHTML = ''
  const pageEl = document.createElement('div')
  root.appendChild(pageEl)
  docData.value.forEach(({ type, cnt }) => {
    switch (type) {
      case 'p':
        const pEl = document.createElement('p')
        // pEl.className = 'need-break'
        pEl.innerText = cnt
        pageEl.appendChild(pEl)
        break
      case 'table':
        const cols = Object.keys(cnt[0]).length
        const tbEl = document.createElement('table')
        // tbEl.className = 'need-break'
        tbEl.innteHTML = `
          <thead>
            <tr>${Array.from({ length: cols }).map((_, idx) => `<th>TH - ${idx + 1}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${cnt.map((row, rIdx) => {
              return `<tr>${Object.entries(row)
                .map(([key, val], cIdx) => `<td>${val}</td>`).join('')}</tr>`
            }).join('')}
          </tbody>
        `
        pageEl.appendChild(tbEl)
        break
      default:
        break
    }
    return { type, cnt }
  })
}

function getData(tmpl) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        tmpl.map(item => {
          let cnt = ''
          switch (item.type) {
            case 'p':
              cnt = mockParagraph()
              break
            case 'table':
              cnt = Array.from({ length: item.amount }).map((_, idx) => {
                return {
                  id: idx + 1,
                  name: `Name ${idx}`,
                  age: Math.floor(Math.random() * 100),
                }
              })
              break
            default:
              break
          }
          return { type: item.type, cnt }
        })
      )
    }, 300)
  })
}
</script>

<template>
  <div>
    <h3>TEST</h3>
    <button @click="testFunc">Start</button>
    <hr />
    <iframe ref="fastDownloadIframe" name="test-iframe" height="500px" width="100%"></iframe>
  </div>
</template>
<style scoped>
.print-container:deep p {
  text-indent: 2em;
}
</style>
