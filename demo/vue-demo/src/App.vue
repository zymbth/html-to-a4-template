<script setup>
import { ref, onMounted, nextTick } from 'vue'
import pagingUtil from './utils/paging.js'
import { mockParagraph } from './utils/mock.js'

const { execPaging } = pagingUtil()

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

onMounted(() => {
  getData().then((res) => {
    tableData.value = res
    nextTick(() => {
      execPaging()
    })
  })
})

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
  <div id="print" class="print-container">
    <div class="break-page">
      <p v-for="p in paragraphs1" class="need-break" v-text="p.content"></p>
      <table class="break-table">
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
      <p v-for="p in paragraphs2" class="need-break" v-text="p.content"></p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.print-container:deep {
  p {
    text-indent: 2em;
  }
}
</style>
<style lang="scss">
@import './styles/print.css';
</style>