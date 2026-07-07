<template>
  <div class="home">
    <section class="hero">
      <h1>我的博客</h1>
      <p>记录学习 / 技术 / 生活</p>
      <button @click="go">进入文章</button>
    </section>

    <section class="cards">
      <div class="card" v-for="item in list" :key="item.title">
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const list = [
  { title: '前端', desc: 'Vue / React / TS' },
  { title: '后端', desc: 'Java / Spring Boot' },
  { title: '运维', desc: 'Nginx / Docker' }
]

const go = () => {
  router.push('/posts/')
}
</script>

<style scoped>
.home {
  padding: 40px;
}
.hero {
  text-align: center;
  margin-bottom: 40px;
}
.cards {
  display: flex;
  gap: 16px;
}
.card {
  flex: 1;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>