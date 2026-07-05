<script setup>
import { useRoute, usePageData } from 'vuepress/client'
import { computed } from 'vue'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import Tags from '../components/Tags.vue'

const displayName = computed(() => {
  if (!fileName.value) return ''

  return fileName.value
    .split('/')
    .pop()
    ?.replace(/\.md$/, '') ?? ''
})

const route = useRoute()
const page = usePageData()

const isPostPage = computed(() => route.path.startsWith('/posts/'))
const fileName = computed(() => page.value.filePathRelative || '')
</script>

<template>
  <ParentLayout>
    <template #page-top>
      <div v-if="isPostPage && fileName" class="file-path">
        {{ displayName }}
      </div>
      <Tags v-if="isPostPage" />
    </template>
  </ParentLayout>
</template>

<style scoped>
.file-path[data-v-e449b0d6]{
  font-size: 32px;
  font-style: bold;
  color: #d4d6b0;
  max-width: var(--content-width); /* 而不是写死 740px */
  margin: 0 auto 0px;
  padding: 0 2.5rem; /* 对应桌面端 2.5rem */
}

@media (max-width: 959px) {
  .file-path[data-v-e449b0d6]{
    padding: 0 2rem;
  }
}

@media (max-width: 419px) {
  .file-path[data-v-e449b0d6]{
    padding: 0 1.5rem;
  }
}
</style>