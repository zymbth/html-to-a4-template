<script setup>
import { ref, computed, shallowRef } from 'vue'
import assignRoot from '@/views/demo-assign-root.vue'
import paggingSpecificElements from '@/views/demo-pagging-specific-els.vue'

// const currView = shallowRef(baseView)

const currNo = ref(1)
const views = shallowRef([
  { no: 1, title: 'Assign root Element(s)', value: assignRoot },
  { no: 2, title: 'Pagging by specific elements', value: paggingSpecificElements }
])
const currView = computed(() => views.value.find(v => v.no === currNo.value)?.value)

const handleClick = no => currNo.value = no
</script>

<template>
  <div>
    <div class="views">
      <span
        :class="['view',{'active':view.no === currNo}]"
        v-for="view in views"
        :key="view.no"
        @click="handleClick(view.no)"
      >{{ view.title }}</span>
    </div>
    <component :is="currView" />
  </div>
</template>

<style scoped>
.views {
  padding: 20px;
}
.view {
  color: #333;
  cursor: pointer;
}
.view.active {
  color: var(--theme-color);
  cursor: default;
}
.view + .view {margin-left:10px}


@media print {
  .views {display:none}
}
</style>