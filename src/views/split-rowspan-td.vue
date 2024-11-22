<script setup>
import html2a4tmpl from '@/lib/html2a4tmpl.js'
import { mockParagraph } from '@/utils/mock.js'
import { onMounted, ref } from 'vue'

const execPaging = ref(null)

onMounted(() => {
  execPaging.value = html2a4tmpl(null, 'manual').execPaging

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
      <div style="border: 1px solid gray; padding: 10px; margin: 10px 0; height: 766px">
        TEST BLOCK(height: 800px)
      </div>
      <h3 class="a4-unit">
        Table with 6 columns
      </h3>
      <table class="a4-table">
        <thead>
          <tr>
            <th v-for="th in 6" :key="th" width="1%">
              Th - {{ th }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="t in 3" :key="t">
            <td v-for="d in 6" :key="d">
              -
            </td>
          </tr>
          <!-- Start: merge cells -->
          <tr>
            <td>-</td>
            <td rowspan="5" colspan="3" class="highlight-td">
              Test Cell 1
            </td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>-</td>
            <td rowspan="5" class="highlight-td">
              Test Cell 2
            </td>
            <td>-</td>
          </tr>
          <tr v-for="t in 3" :key="t">
            <td v-for="d in 2" :key="d">
              -
            </td>
          </tr>
          <tr>
            <td v-for="d in 5" :key="d">
              -
            </td>
          </tr>
          <!-- End: merge cells -->
          <tr v-for="t in 8" :key="t">
            <td v-for="d in 6" :key="d">
              -
            </td>
          </tr>
        </tbody>
      </table>
      <div class="a4-unit-wrap">
        <p v-for="(p, index) in paragraphs1" :key="index" v-text="p.content" />
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
