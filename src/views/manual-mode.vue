<script setup>
import html2a4tmpl from '@/lib/html2a4tmpl.js'
import { mockParagraph } from '@/utils/mock.js'
import { onMounted, ref } from 'vue'

const execPaging = ref(null)

onMounted(() => {
  execPaging.value = html2a4tmpl('.a4-container', 'manual').execPaging

  getData().then((res) => {
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
  return new Promise((resolve) => {
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

defineExpose({ execPaging })
</script>

<template>
  <div class="a4-container">
    <div class="a4-page">
      <p v-for="(p, index) in paragraphs1" :key="index" class="a4-unit" v-text="p.content" />
      <table class="a4-table">
        <thead>
          <tr>
            <th v-for="th in 6" :key="th" width="1%">
              Th - {{ th }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rIdx) in tableData" :key="rIdx">
            <td v-for="(td, cIdx) in 6" :key="cIdx">
              Td - {{ rIdx }} - {{ cIdx }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="a4-unit-wrap">
        <p v-for="(p, index) in paragraphs2" :key="index" v-text="p.content" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.a4-container :deep(p) {
  text-indent: 2em;
}
</style>
