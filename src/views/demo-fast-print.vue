<script setup>
import { ref, nextTick } from 'vue'
import { mockParagraph } from '@/utils/mock.js'
import html2a4tmpl from '@/lib/html2a4tmpl.js'
import { jsPDF } from 'jspdf'
import html2pdf from 'html2pdf.js'
import exportWord from 'js-export-word'

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

    // var myBlob = new Blob([new XMLSerializer().serializeToString(this.contentWindow.document)], {
    //   type: 'text/html',
    // })
    // let link = document.createElement('a')
    // link.href = URL.createObjectURL(myBlob)
    // link.download = 'unknown-file-name'
    // link.click()
    // URL.revokeObjectURL(blob)

    // let doc = new jsPDF()
    // // doc.html(this.contentWindow.document, {
    // doc.html(new XMLSerializer().serializeToString(this.contentWindow.document), {
    //   callback: function (pdf) {
    //     console.log('pdf: ', pdf);
    //     pdf.save('test.pdf')
    //   },
    // })

    // html2pdf().from(this.contentWindow.document).save()
    // html2pdf().from(new XMLSerializer().serializeToString(this.contentWindow.document)).save()
    // html2pdf(this.contentWindow.document)
    // html2pdf()
    //   .from(new XMLSerializer().serializeToString(this.contentWindow.document))
    //   .outputPdf()
    //   .then(res => console.log('output', res))

    const wrap = this.contentWindow.document.body
    const config = {
      addStyle: false, // 是否导出样式，默认为true，此操作会将所有样式转换成行内样式导出
      fileName: 'textExportWord', // 导出文件名
      toImg: [],//['.need-to-img', '.bg-danger'], // 页面哪些部分需要转化成图片，例如echart图表之类
      success() {
        console.log('yyyyyyyyyyyyyyyyyyy')
      }, // 完成之后回调，一般页面篇幅比较大，时间比较长
    }
    exportWord(wrap, config, 'word') //这里进行了改造因为要修改里面的方法将word文件流提交到后台
  }, 1000)
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
    <!-- <iframe ref="fastDownloadIframe" name="test-iframe" height="500px" width="100%"></iframe> -->
  </div>
  <div class="print-container" ref="previewRef">
    <div class="break-page">
      <template v-for="item in docData">
        <p
          v-if="item.type === 'p'"
          class="need-break"
          v-text="item.cnt"
          style="color: red;" />
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
