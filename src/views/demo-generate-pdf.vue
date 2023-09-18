<script setup>
import { ref, nextTick } from 'vue'
import { mockParagraph } from '@/utils/mock.js'
import html2a4tmpl from '@/lib/html2a4tmpl.js'
// import { jsPDF } from 'jspdf'
// import html2pdf from 'html2pdf.js'
// import exportWord from 'js-export-word'
import html2pdf from '@/utils/html2pdf-util.js'

// const fastDownloadIframe = ref()
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
      html2pdf()
    })
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
    <!-- <iframe ref="fastDownloadIframe" name="test-iframe" height="500px" width="100%"></iframe> -->
  </div>
  <div class="print-container" ref="previewRef">
    <div class="break-page">
      <template v-for="item in docData">
        <p v-if="item.type === 'p'" class="need-break" v-text="item.cnt" />
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
