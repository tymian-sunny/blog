<script setup>
import { useRoute, usePageData } from 'vuepress/client'
import { computed } from 'vue'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import Tags from '../components/Tags.vue'
import Time from '../components/Time.vue'

const route = useRoute()
const page = usePageData()
const isPostPage = computed(() => route.path.startsWith('/posts/'))
const fileName = computed(() => page.value.filePathRelative || '')
const displayName = computed(() => {
  if (!fileName.value) return ''
  return fileName.value.split('/').pop()?.replace(/\.md$/, '') ?? ''
})
</script>

<template>
  <ParentLayout>
    <template #page-top>
      <div v-if="isPostPage && fileName" class="post-meta">
        <h1 class="file-path">{{ displayName }}</h1>
        <div class="meta-row">
          <Time class="time-fixed"/>
          <span class="meta-divider">·</span>
          <Tags class="tags-fixed"/>
        </div>
      </div>
    </template>
  </ParentLayout>
</template>

<style scoped>
.post-meta {
  max-width: var(--content-width);
  margin: 40px auto 24px;
  padding: 0 2.5rem;
  border-bottom: 1px solid var(--c-border, #eaecef);
  padding-bottom: 20px;
}

.file-path {
  margin: 0 0 12px;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.3;
  color: #000000;
}

.meta-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 0.85em;
  color: var(--c-text-lighter, #999);
}

.meta-divider {
  color: var(--c-text-lighter, #999);
  opacity: 0.6;
}

.time-fixed {
  display: flex;
  align-items: center;
  gap: 4px;
}

.tags-fixed {
  display: flex;
  align-items: center;
}

@media (max-width: 959px) {
  .post-meta {
    padding: 0 2rem 16px;
  }
}

@media (max-width: 419px) {
  .post-meta {
    padding: 0 1.5rem 16px;
  }
  .file-path {
    font-size: 22px;
  }
}
</style>