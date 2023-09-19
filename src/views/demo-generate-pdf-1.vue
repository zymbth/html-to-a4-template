<script setup>
import { ref, nextTick } from 'vue'
import { mockParagraph } from '@/utils/mock.js'
import html2a4tmpl from '@/lib/html2a4tmpl.js'

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

const previewRef = ref()
function testFunc() {
  getData(tmpl).then(res => {
    docData.value = res
    nextTick(() => {
      html2a4tmpl().execPaging()
      const hideFrame = document.createElement('iframe')
      hideFrame.name = 'print-iframe'
      hideFrame.onload = handleIframeLoaded
      // hideFrame.style.display = 'none' // 隐藏 iframe
      hideFrame.style.display = 'block'
      hideFrame.style.height = '700px'
      hideFrame.style.width = '1100px'
      hideFrame.src = '/demo.html'
      document.body.appendChild(hideFrame)
    })
  })
}
function handleIframeLoaded() {
  console.log('iframeLoaded', this.contentWindow.name, this.contentWindow)
  // console.log(previewRef.value)
  // console.log(this.contentWindow.document.body)
  const element = previewRef.value
  const target = this.contentWindow.document.body
  target.innerHTML = ''
  if (element) {
    const clone = element.cloneNode(true)
    target.appendChild(clone)
  }
  // const closePrint = () => {
  //   document.body.removeChild(this)
  // }
  // this.contentWindow.onbeforeunload = closePrint
  // this.contentWindow.onafterprint = closePrint
  setTimeout(() => {
    console.log('xxxxxxxxxxxxx')
    // this.contentWindow.print()

    // let doc = new jsPDF()
    // // doc.html(this.contentWindow.document, {
    // doc.html(new XMLSerializer().serializeToString(this.contentWindow.document), {
    //   callback: function (pdf) {
    //     console.log('pdf: ', pdf);
    //     pdf.save('test.pdf')
    //   },
    // })

    htmlToPdf(this.contentWindow.document)
    // htmlToPdf('<h1>Hello, PDF!</h1><p>This is an example HTML.</p>')
  }, 1000)
}
async function htmlToPdf(docstr) {
  const htmlBlob = new Blob([new XMLSerializer().serializeToString(docstr)], {
    type: 'text/html',
  })
  const formData = new FormData()
  formData.append('htmlFile', htmlBlob, 'report.html')

  // fetch('/pdf/upload', {
  fetch('http://localhost:3000/upload', {
    method: 'POST',
    body: formData,
    headers: {
      'X-Forwarded-Host': 'localhost:3000',
      'X-Forwarded-Proto': 'http',
    },
  })
    .then(response => response.blob())
    .then(blob => {
      // 处理响应的文件
      console.log('响应文件')
      let link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'unknown-file-name'
      link.click()
      URL.revokeObjectURL(blob)
    })
    .catch(error => {
      // 处理错误
      console.error('未响应文件')
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
    <div></div>
  </div>
  <div class="print-container" ref="previewRef">
    <div class="break-page">
      <template v-for="item in docData">
        <p v-if="item.type === 'p'" class="need-break" v-text="item.cnt" style="color: red" />
        <table v-else-if="item.type === 'table'" class="break-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in item.cnt">
              <td>{{ row.id }}</td>
              <td>{{ row.name }}</td>
              <td>{{ row.age }}</td>
            </tr>
          </tbody>
        </table>
      </template>
    </div>
  </div>
</template>
<style scoped>
.print-container:deep p {
  text-indent: 2em;
}
</style>
