<script setup>
import { ref, onMounted } from 'vue'
import { mockParagraph } from '@/utils/mock.js'
import html2a4tmpl from '@/lib/html2a4tmpl.js'

let execPaging = ref(null)

onMounted(() => {
  execPaging.value = html2a4tmpl('.container', 'manual').execPaging

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

defineExpose({ execPaging })
</script>

<template>
  <div class="a4-container">
    <div class="a4-page">
      <div style="border: 1px solid gray; padding: 10px; margin: 10px 0; height: 766px">
        TEST BLOCK(height: 800px)
      </div>
      <h3 class="a4-unit">Table with 6 columns</h3>
      <table class="a4-table">
        <thead>
          <tr>
            <th v-for="th in 6" width="1%">Th - {{ th }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="_ in 3">
            <td v-for="__ in 6">-</td>
          </tr>
          <!-- Start: merge cells -->
          <tr>
            <td>-</td>
            <td rowspan="5" colspan="3" class="highlight-td">Test Cell 1</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>-</td>
            <td rowspan="5" class="highlight-td">Test Cell 2</td>
            <td>-</td>
          </tr>
          <tr v-for="_ in 3">
            <td v-for="_ in 2">-</td>
          </tr>
          <tr>
            <td v-for="_ in 5">-</td>
          </tr>
          <!-- End: merge cells -->
          <tr v-for="_ in 8">
            <td v-for="__ in 6">-</td>
          </tr>
        </tbody>
      </table>
      <div class="a4-unit-wrap">
        <p v-for="p in paragraphs1" v-text="p.content"></p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.a4-container :deep(p) {
  text-indent: 2em;
}
.highlight-td {
  background-color: aqua;
}
</style>
