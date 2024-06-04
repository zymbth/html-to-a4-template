<script setup>
import { ref, nextTick, computed } from 'vue'
import AutoModeComp from '@/views/auto-mode.vue'
import ManualModeComp from '@/views/manual-mode.vue'
import SplitRowspanTDCell from '@/views/split-rowspan-td.vue'
import langComp from './components/lang.vue'

const currNo = ref(1)
const views = ref([
  { no: 1, title: 'menu.autoMode' },
  { no: 2, title: 'menu.manualMode' },
  { no: 3, title: 'menu.splitRowspanTd' },
])

const handleClick = no => (currNo.value = no)

const refreshComp = () => {
  const tmp = currNo.value
  currNo.value = -1
  nextTick(() => (currNo.value = tmp))
}

const currView = computed(() => {
  switch (currNo.value) {
    case 1:
      return AutoModeComp
    case 2:
      return ManualModeComp
    case 3:
      return SplitRowspanTDCell
    default:
      return undefined
  }
})

const compViewRef = ref(null)
const startPaging = () => {
  compViewRef.value?.execPaging()
}

const execPrint = () => window.print()
</script>

<template>
  <div>
    <div class="views">
      <span
        :class="['view', { active: view.no === currNo }]"
        v-for="view in views"
        :key="view.no"
        @click="handleClick(view.no)"
        >{{ $t(view.title) }}</span
      >
      <langComp class="lang" />
    </div>
    <component ref="compViewRef" v-if="currView" :is="currView" />
    <div class="btns">
      <button @click="refreshComp">{{ $t('menu.refresh') }}</button>
      <button @click="startPaging">{{ $t('menu.paging') }}</button>
      <button @click="execPrint">{{ $t('menu.print') }}</button>
    </div>
  </div>
</template>

<style scoped>
.views {
  padding: 20px;
  border-bottom: 1px solid rgba(60, 60, 60, 0.12);
}
.view {
  color: #333;
  cursor: pointer;
}
.view.active {
  color: var(--theme-color);
  cursor: default;
}
.view + .view {
  margin-left: 10px;
}
.lang {
  float: right;
  color: #333;
}
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
  .views,
  .btns {
    display: none;
  }
}
</style>
