<script setup>
import { ref, nextTick } from 'vue'
import assignRoot from '@/views/demo-assign-root.vue'
import paggingSpecificElements from '@/views/demo-pagging-specific-els.vue'
import langComp from './components/lang.vue'

const assignRootRef = ref(),
  paggingSpecificElementsRef = ref()
const currNo = ref(1)
const views = ref([
  { no: 1, title: 'menu.pagingViaRoot', value: assignRootRef },
  { no: 2, title: 'menu.pagingViaSpecificEl', value: paggingSpecificElementsRef },
])

const handleClick = no => (currNo.value = no)

const refreshComp = () => {
  const tmp = currNo.value
  currNo.value = -1
  nextTick(() => (currNo.value = tmp))
}

const startPaging = () => {
  const currComp = views.value.find(p => p.no === currNo.value)?.value
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
        >{{ $t(view.title) }}</span
      >
      <langComp class="lang" />
    </div>
    <assignRoot ref="assignRootRef" v-if="currNo === 1" />
    <paggingSpecificElements ref="paggingSpecificElementsRef" v-else-if="currNo === 2" />
    <div v-else></div>
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
