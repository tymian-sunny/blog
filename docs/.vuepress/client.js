import { defineClientConfig } from 'vuepress/client'
import Article from './layouts/Article.vue'
import Category from './layouts/Category.vue'
import Tag from './layouts/Tag.vue'
import Timeline from './layouts/Timeline.vue'
import Layout from './theme/layouts/layout.vue'
import Home from './layouts/Home.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default defineClientConfig({
  // we provide some blog layouts
  enhance({ app }) {
    app.use(ElementPlus)
  },
  layouts: {
    Home,
    Layout,
    Article,
    Category,
    Tag,
    Timeline,
  },
})
