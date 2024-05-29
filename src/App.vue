<script setup>
import { ref, nextTick } from 'vue'
import assignRoot from '@/views/demo-assign-root.vue'
import paggingSpecificElements from '@/views/demo-pagging-specific-els.vue'
import { useI18n } from './vue-i18n'

const { t } = useI18n()

const assignRootRef = ref(),
  paggingSpecificElementsRef = ref()
const currNo = ref(1)
const views = [
  { no: 1, title: t('menu.pagingViaRoot'), value: assignRootRef },
  { no: 2, title: t('menu.pagingViaSpecificEl'), value: paggingSpecificElementsRef },
]

const handleClick = no => (currNo.value = no)

const refreshComp = () => {
  const tmp = currNo.value
  currNo.value = -1
  nextTick(() => (currNo.value = tmp))
}

const startPaging = () => {
  const currComp = views.find(p => p.no === currNo.value)?.value
  if (!currComp) return
  currComp.value.execPaging()
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
        >{{ view.title }}</span
      >
    </div>
    <assignRoot ref="assignRootRef" v-if="currNo === 1" />
    <paggingSpecificElements ref="paggingSpecificElementsRef" v-else-if="currNo === 2" />
    <div v-else></div>
    <div class="btns">
      <button @click="refreshComp">Refresh</button>
      <button @click="startPaging">Paging</button>
      <button @click="execPrint">Print</button>
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
