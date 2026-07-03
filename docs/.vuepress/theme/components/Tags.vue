<script setup>
import { usePageFrontmatter } from 'vuepress/client'
import { computed } from 'vue'

const frontmatter = usePageFrontmatter()

const tags = computed(() => {
  const raw = frontmatter.value?.tags || frontmatter.value?.tag || []
  return Array.isArray(raw) ? raw : []
})
</script>

<template>
  <div v-if="tags.length" class="tags-fixed">
    <a
      v-for="tag in tags"
      :key="tag"
      class="tag"
      :href="`/tag/${tag}/`"
    >
      # {{ tag }}
    </a>
  </div>
</template>

<style scoped>
.tags-fixed {
  max-width: 740px;
  margin: 0 auto 20px;
  padding: 0 24px;
}

.tag {
  display: inline-block;
  font-size: 14px;
  color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-brand);
  border-radius: 4px;
  padding: 2px 10px;
  margin: 4px 6px 4px 0;
  text-decoration: none;
  transition: all 0.2s ease;
}

.tag:hover {
  color: var(--vp-c-bg);
  background-color: var(--vp-c-brand);
  text-decoration: none;
}
</style>