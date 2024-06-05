<script setup>
import { ref, onMounted } from 'vue'
import { mockParagraph } from './utils/mock.js'
import html2a4tmpl from 'html-to-a4-template'

const containerRef = ref()
const execPaging = ref()

onMounted(() => {
  execPaging.value = html2a4tmpl(containerRef.value).execPaging

  getData().then(res => {
    tableData.value = res
  })
})

const tableData = ref([])
const paragraphs1 = Array.from({ length: 5 }).map((_, idx) => {
  return {
    id: idx + 1,
    content: mockParagraph(),
  }
})
const paragraphs2 = Array.from({ length: 6 }).map((_, idx) => {
  return {
    id: idx + 1,
    content: mockParagraph(),
  }
})

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        Array.from({ length: 100 }).map((_, idx) => {
          return {
            id: idx + 1,
            name: `Name ${idx}`,
            age: Math.floor(Math.random() * 100),
          }
        })
      )
    }, 300)
  })
}

const startPaging = () => execPaging.value?.()
const execPrint = () => window.print()
const refreshComp = () => location.reload()
</script>
<template>
  <div>
    <div ref="containerRef">
      <div>
        <p v-for="p in paragraphs1" v-text="p.content"></p>
        <table>
          <thead>
            <tr>
              <th v-for="th in 6" width="1%">Th - {{ th }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rIdx) in tableData">
              <td v-for="(td, cIdx) in 6">Td - {{ rIdx }} - {{ cIdx }}</td>
            </tr>
          </tbody>
        </table>
        <div class="a4-unit-wrap">
          <p v-for="p in paragraphs2" v-text="p.content"></p>
        </div>
      </div>
    </div>
    <div class="btns">
      <button @click="refreshComp">Refresh</button>
      <button @click="startPaging">Paging</button>
      <button @click="execPrint">Print</button>
    </div>
  </div>
</template>
<style scoped>
.btns {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  border: 1px solid #666;
  border-radius: 4px;
  background-color: #f0f3f3;
}
.btns button + button {
  margin-left: 10px;
}

@media print {
  .btns {
    display: none;
  }
}
</style>
