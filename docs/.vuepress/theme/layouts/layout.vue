<script setup>
import { useRoute } from 'vuepress/client'
import { computed } from 'vue'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import Tags from '../components/Tags.vue'

// 只在文章页面（/posts/ 路径）显示 Tags
const route = useRoute()
const isPostPage = computed(() => route.path.startsWith('/posts/'))
</script>

<template>
  <ParentLayout>
    <template #page-top>
      <Tags v-if="isPostPage" />
    </template>
  </ParentLayout>
</template>
