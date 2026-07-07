<script setup>
import { usePageFrontmatter } from 'vuepress/client'
import { computed } from 'vue'

const frontmatter = usePageFrontmatter()

const date = computed(() => {
  const raw = frontmatter.value?.date
  if (!raw) return ''
  const d = new Date(raw)
  if (isNaN(d.getTime())) return ''

  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
})
</script>

<template>
  <div v-if="date" >
    <svg class="icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
    <a>&nbsp;&nbsp;</a>
    <span>{{ date }}</span>
  </div>
</template>

<style scoped>
.icon {
  flex-shrink: 0;
}
</style>