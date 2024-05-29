<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { mockParagraph } from '@/utils/mock.js'
import html2a4tmpl from '@/lib/html2a4tmpl.js'

const tableData = ref([])
const paragraphs1 = Array.from({ length: 5 }).map((_, idx) => {
  return {
    id: idx + 1,
    content: mockParagraph()
  }
})
const paragraphs2 = Array.from({ length: 6 }).map((_, idx) => {
  return {
    id: idx + 1,
    content: mockParagraph()
  }
})

let execPaging = ref(null)

onMounted(() => {
  execPaging.value = html2a4tmpl(document.getElementsByClassName('container')).execPaging;

  getData().then((res) => {
    tableData.value = res
    // nextTick(() => {
    //   execPaging()
    // })
  })
})
defineExpose({ execPaging })

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Array.from({ length: 100 }).map((_, idx) => {
        return {
          id: idx + 1,
          name: `Name ${idx}`,
          age: Math.floor(Math.random() * 100)
        }
      }))
    }, 300);
  })
}
</script>

<template>
  <div class="container">
    <div>
      <p v-for="p in paragraphs1" v-text="p.content"></p>
      <table>
        <thead>
          <tr>
            <th v-for="th in 6" width="1%">Th - {{ th }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row,rIdx) in tableData">
            <td v-for="(td,cIdx) in 6">Td - {{ rIdx }} - {{ cIdx }}</td>
          </tr>
        </tbody>
      </table>
      <div class="wrap-break">
        <p v-for="p in paragraphs2" v-text="p.content"></p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.print-container :deep(p) {
  text-indent: 2em;
}
</style>