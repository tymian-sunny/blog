<template>
  <div class="comic-layout">
<div class="step-bar">
  <el-steps direction="vertical" :active="currentStep">
    <el-step @click="scrollToSection('#top', 0)">
      <template #title><span class="step-bubble">首页</span></template>
    </el-step>
    <el-step @click="scrollToSection('#status', 1)">
      <template #title><span class="step-bubble">属性</span></template>
    </el-step>
    <el-step @click="scrollToSection('#quests', 2)">
      <template #title><span class="step-bubble">任务卡</span></template>
    </el-step>
    <el-step @click="scrollToSection('#log', 3)">
      <template #title><span class="step-bubble">日志</span></template>
    </el-step>
  </el-steps>
</div>
    <header class="nav">
      <div class="nav-inner">
        <a href="#top" class="logo"><span class="badge">T</span>TYMIAN</a>
        <nav class="links">
          <a href="#top">首页</a>
          <a href="/article/">文章</a>
          <a href="/category/">类别</a>
          <a href="/tag/">TAG</a>
          <a href="/timeline/">时间线</a>
        </nav>
        <div style="display:flex;align-items:center;gap:12px;">
          <a class="btn-ghub" href="https://github.com/tymian-sunny" target="_blank" rel="noopener">GITHUB ↗</a>
          <button class="nav-toggle" @click="toggleMenu" aria-label="打开菜单">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <div class="mobile-links" v-show="isMenuOpen" @click="isMenuOpen = false">
        <a href="#top">首页</a>
        <a href="/article/">文章</a>
        <a href="/category/">类别</a>
        <a href="/tag/">TAG</a>
        <a href="/timeline/">时间线</a>
      </div>
    </header>

    <main id="top">
      <section class="hero">
        <svg class="speedlines" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <g stroke="#1B1B2F" stroke-width="2">
            <line x1="900" y1="350" x2="1220" y2="60"/>
            <line x1="900" y1="350" x2="1240" y2="180"/>
            <line x1="900" y1="350" x2="1250" y2="320"/>
            <line x1="900" y1="350" x2="1240" y2="470"/>
            <line x1="900" y1="350" x2="1200" y2="620"/>
            <line x1="900" y1="350" x2="1050" y2="660"/>
            <line x1="900" y1="350" x2="880" y2="680"/>
            <line x1="900" y1="350" x2="700" y2="640"/>
            <line x1="900" y1="350" x2="620" y2="520"/>
            <line x1="900" y1="350" x2="600" y2="380"/>
            <line x1="900" y1="350" x2="620" y2="200"/>
            <line x1="900" y1="350" x2="700" y2="60"/>
          </g>
        </svg>

        <div class="wrap hero-grid">
          <div>
            <span class="eyebrow-tag"><span class="dot"></span>SOFTWARE ENGINEER · 全栈开发者</span>

            <div class="title-panel">
              <div class="plate" aria-hidden="true"></div>
              <h1 class="hero-headline outline-text">
                全栈冒险<br>进行中
                <span class="en">LEVEL UP YOUR STACK</span>
              </h1>
            </div>

            <div class="speech-box">
              TYMIAN / 全栈工程师 —— 白天写代码，晚上刷动漫和复古游戏，偶尔两者一起干 (｡•̀ᴗ-)✧
            </div>

            <div class="hero-cta">
              <a href="#quests" class="btn btn-solid">查看任务卡 →</a>
              <a href="#log" class="btn btn-outline">阅读冒险日志</a>
            </div>
          </div>

          <div class="hero-art">
            <div class="burst" aria-hidden="true"></div>
            <div class="float-badge fb-1">LV.99<br>FULL STACK</div>
            <div class="float-badge fb-2">HP ████░ 88%</div>
            <div class="avatar-frame">
              <svg viewBox="0 0 240 260" aria-hidden="true">
                <ellipse cx="120" cy="236" rx="96" ry="20" fill="#1B1B2F" opacity=".12"/>
                <path d="M46 150 C40 90 70 34 120 34 C170 34 200 90 194 150 L188 190 L166 150 L162 200 L140 158 L134 210 L108 158 L100 210 L76 158 L70 196 L52 150 Z" fill="var(--pink)" stroke="#1B1B2F" stroke-width="4" stroke-linejoin="round"/>
                <path d="M60 150 C56 108 78 66 120 66 C160 66 184 108 180 150 C160 130 80 130 60 150 Z" fill="var(--pink-shadow)"/>
                <rect x="104" y="150" width="32" height="34" fill="var(--skin)" stroke="#1B1B2F" stroke-width="4"/>
                <path d="M104 168 h32 v10 h-32z" fill="var(--skin-shadow)"/>
                <circle cx="120" cy="126" r="58" fill="var(--skin)" stroke="#1B1B2F" stroke-width="4"/>
                <path d="M62 126 a58 58 0 0 0 30 50 C78 152 66 140 64 126 Z" fill="var(--skin-shadow)"/>
                <path d="M60 260 C60 210 86 190 120 190 C154 190 180 210 180 260 Z" fill="var(--blue)" stroke="#1B1B2F" stroke-width="4"/>
                <path d="M60 260 C60 224 78 206 96 198 L120 230 L144 198 C162 206 180 224 180 260 Z" fill="var(--white)"/>
                <path d="M108 198 L120 230 L132 198 L120 210 Z" fill="var(--blue-shadow)"/>
                <circle cx="60" cy="128" r="10" fill="var(--skin)" stroke="#1B1B2F" stroke-width="3.5"/>
                <circle cx="180" cy="128" r="10" fill="var(--skin)" stroke="#1B1B2F" stroke-width="3.5"/>
                <path d="M58 118 C50 70 78 30 120 30 C162 30 190 70 182 118 C178 92 160 62 120 62 C80 62 62 92 58 118 Z" fill="var(--pink)" stroke="#1B1B2F" stroke-width="4" stroke-linejoin="round"/>
                <path d="M96 40 L104 84 M120 34 L122 88 M144 40 L136 84" stroke="var(--pink-shadow)" stroke-width="5" stroke-linecap="round"/>
                <ellipse cx="150" cy="46" rx="10" ry="16" fill="var(--white)" opacity=".55" transform="rotate(18 150 46)"/>
                <path d="M84 112 q14 -8 26 -1" fill="none" stroke="#1B1B2F" stroke-width="4" stroke-linecap="round"/>
                <path d="M130 111 q14 -7 26 1" fill="none" stroke="#1B1B2F" stroke-width="4" stroke-linecap="round"/>
                <path d="M82 128 q14 -18 30 0 q-14 16 -30 0 Z" fill="var(--white)" stroke="#1B1B2F" stroke-width="3.5"/>
                <path d="M128 128 q14 -18 30 0 q-14 16 -30 0 Z" fill="var(--white)" stroke="#1B1B2F" stroke-width="3.5"/>
                <circle cx="99" cy="129" r="8" fill="var(--blue)"/>
                <circle cx="145" cy="129" r="8" fill="var(--blue)"/>
                <circle cx="99" cy="129" r="4" fill="#1B1B2F"/>
                <circle cx="145" cy="129" r="4" fill="#1B1B2F"/>
                <circle cx="96" cy="126" r="2" fill="var(--white)"/>
                <circle cx="142" cy="126" r="2" fill="var(--white)"/>
                <ellipse cx="84" cy="146" rx="9" ry="5.5" fill="var(--pink)" opacity=".55"/>
                <ellipse cx="156" cy="146" rx="9" ry="5.5" fill="var(--pink)" opacity=".55"/>
                <path d="M108 152 q12 8 24 0" fill="none" stroke="#1B1B2F" stroke-width="3.5" stroke-linecap="round"/>
                <g transform="translate(168,74) rotate(18)">
                  <rect x="-16" y="-11" width="32" height="22" rx="6" fill="var(--yellow)" stroke="#1B1B2F" stroke-width="3"/>
                  <text x="0" y="6" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="13" font-weight="800" fill="#1B1B2F">&lt;/&gt;</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="status" class="section-band">
        <div class="wrap about-grid">
          <div class="reveal">
            <h2 class="section-title">关于我 <span class="en">PLAYER PROFILE</span></h2>
            <p class="manifesto" style="margin-top:20px;">
              我是TYMIAN，一名全栈工程师，日常在 <strong>Vue.js</strong> 和 <strong>Spring Boot</strong> 之间横跳，
              偶尔折腾多模态大模型和 Python 脚本。习惯用 Vim 和 Obsidian 构建工作流，相信好的系统应该像好的分镜一样，结构清晰、一眼看懂发生了什么。
            </p>
            <div class="tag-row">
              <span class="tag-chip">☕ 三杯起送</span>
              <span class="tag-chip">✨ Live2D / 动漫</span>
              <span class="tag-chip">💻 Vim 键盘侠</span>
              <span class="tag-chip">🤖 AI 落地派</span>
            </div>
          </div>

          <div class="reveal">
            <h2 class="section-title">角色属性 <span class="en">CHARACTER STATUS</span></h2>
            <div class="status-card" style="margin-top:20px;">
              <div class="stat-row" v-for="stat in stats" :key="stat.label">
                <div class="stat-label">{{ stat.label }} <span class="lv">{{ stat.lv }}</span></div>
                <div class="gauge" :style="{ '--w': stat.percent + '%' }">
                  <div class="gauge-fill" :class="stat.colorClass"></div>
                </div>
                <span class="stat-sub">{{ stat.desc }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quests">
        <div class="wrap">
          <div class="section-head reveal">
            <h2 class="section-title">任务卡 <span class="en">QUEST CARDS</span></h2>
            <a href="https://github.com" target="_blank" rel="noopener" class="view-all">全部项目 ↗</a>
          </div>
          <div class="card-grid">
            <article class="card reveal" v-for="project in projects" :key="project.title">
              <div class="card-burst" aria-hidden="true"></div>
              <div class="card-top">
                <span class="quest-tag" :class="project.typeClass">{{ project.type }}</span>
                <span class="card-stars">{{ project.stars }}</span>
              </div>
              <h3>{{ project.title }}</h3>
              <p>{{ project.desc }}</p>
              <div class="card-tags">
                <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
              </div>
              <a :href="project.link" class="card-link">查看详情 →</a>
            </article>
          </div>
        </div>
      </section>

      <section id="log" class="section-band">
        <div class="wrap">
          <div class="section-head reveal">
            <h2 class="section-title">冒险日志 <span class="en">ADVENTURE LOG</span></h2>
            <a href="#" class="view-all">查看全部 →</a>
          </div>
          <div class="log-list reveal">
            <a :href="log.link" class="log-row" v-for="log in logs" :key="log.id">
              <span class="log-id">{{ log.id }}<span>{{ log.date }}</span></span>
              <span class="log-main">
                <h3>{{ log.title }}</h3>
                <p>{{ log.desc }}</p>
              </span>
              <span class="log-meta">
                <span class="stars">{{ log.stars }}</span>
                {{ log.readTime }}
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer id="contact">
      <div class="wrap footer-inner">
        <h2 class="footer-title">想聊聊项目，<br>或者只是打个招呼？</h2>
        <p class="footer-sub">LET'S TEAM UP →</p>
        <div class="pad-row">
          <a class="pad-btn pad-a" href="mailto:hi@chenyu.dev"><span>✉</span>MAIL</a>
          <a class="pad-btn pad-b" href="https://github.com" target="_blank" rel="noopener"><span>⌥</span>GH</a>
          <a class="pad-btn pad-x" href="#"><span>✕</span>X</a>
          <a class="pad-btn pad-y" href="#"><span>≡</span>RSS</a>
        </div>
        <div class="foot-bottom">
          <span>© 2026 TYMIAN · Vue3 重构版</span>
          <span>また会おうね (｡･ω･｡)ﾉ♡</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 当前激活的步骤索引 (0: 首页, 1: 属性, 2: 任务卡, 3: 冒险日志)
const currentStep = ref(0)

// 🔴 新增：控制是否是由点击激发的滚动锁定状态
let isScrolling = false
let scrollTimeout = null

// 1. 点击步骤条平滑滚动到对应锚点
const scrollToSection = (selector, stepIndex) => {
  // 🔴 锁定 Observer 监听，防止滚动时干扰
  isScrolling = true
  currentStep.value = stepIndex
  
  const element = document.querySelector(selector)
  if (element) {
    const offset = 70
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: selector === '#top' ? 0 : offsetPosition,
      behavior: 'smooth'
    })
    
    // 监听滚动停止，释放锁定状态
    const checkScrollEnd = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        isScrolling = false
        // 🔴 滚动完全停止后，主动调用一次边缘校准，确保高亮 100% 正确
        handleScrollFallback(true) 
        window.removeEventListener('scroll', checkScrollEnd)
      }, 100)
    }
    window.addEventListener('scroll', checkScrollEnd)
  }
}

// 移动端菜单状态
const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// 数据提取：属性面板
const stats = [
  { label: '前端 FRONTEND', lv: 'LV. 92', percent: 92, colorClass: 'g-pink', desc: 'Vue3 · RuoYi-Vue · TypeScript' },
  { label: '后端 BACKEND', lv: 'LV. 88', percent: 88, colorClass: 'g-blue', desc: 'Spring Boot 3 · Java · MyBatis' },
  { label: '多模态 AI INTEGRATION', lv: 'LV. 80', percent: 80, colorClass: 'g-green', desc: 'Whisper · VITS · YOLO · LLMs' },
  { label: '基建与工具 TOOLS', lv: 'LV. 75', percent: 75, colorClass: 'g-yellow', desc: 'Vim · Obsidian · Nginx · cpolar' }
]

// 数据提取：任务卡片
const projects = [
  { 
    title: '视障人士助行系统', 
    type: '主线任务', typeClass: 'quest-main', stars: '★★★★☆', 
    desc: '基于 WebRTC 与 YOLO 的实时场景识别与远程多模态大模型辅助系统，个人独立开发。', 
    tags: ['Spring Boot', 'YOLO', 'WebRTC'], link: '#' 
  },
  { 
    title: 'AI 动漫咨询站', 
    type: '支线任务', typeClass: 'quest-side', stars: '★★★☆☆', 
    desc: '集成爬虫信息采集与“数字人”交互的动漫资讯平台，支持语音问答。', 
    tags: ['Vue3', 'Whisper', 'MCP'], link: '#' 
  },
  { 
    title: '移动设备管理 (MDM)', 
    type: '主线任务', typeClass: 'quest-main', stars: '★★★★☆', 
    desc: 'Android 企业级应用控制与策略限制解决方案，Flutter-Java 混合架构。', 
    tags: ['Android', 'Java', 'Flutter'], link: '#' 
  },
  { 
    title: '全栈冒险日志', 
    type: '支线任务 · NEW', typeClass: 'quest-side', stars: '★★☆☆☆', 
    desc: '你正在看的这个页面 —— 赛璐璐漫画风格博客，使用 Vue 3 完美复刻重构。', 
    tags: ['Vue 3', 'CSS', 'JS'], link: '#' 
  }
]

// 数据提取：冒险日志
const logs = [
  { 
    id: 'NO. 041', date: '2026.06.28', 
    title: '古诗词鉴赏与评测 (CCL25)', 
    desc: '关于比赛要求、数据集处理以及基础模型改进的踩坑记录。', 
    stars: '★★★★☆', readTime: '8 分钟阅读', link: '#' 
  },
  { 
    id: 'NO. 040', date: '2026.05.14', 
    title: 'Vim 与 Obsidian 的工作流化学反应', 
    desc: '分享我的 Vim-surround 配置和 Obsidian 模板自动化工作流。', 
    stars: '★★★☆☆', readTime: '6 分钟阅读', link: '#' 
  },
  { 
    id: 'NO. 039', date: '2026.04.02', 
    title: '若依 (RuoYi) 框架魔改指北', 
    desc: '如何在现有的 RuoYi SpringBoot3 项目中优雅地接入独立客服模块。', 
    stars: '★★☆☆☆', readTime: '5 分钟阅读', link: '#' 
  },
  { 
    id: 'NO. 038', date: '2026.02.19', 
    title: '穿透内网：cpolar 与 cloudflared', 
    desc: '一次解决 SSH 连接失败与隧道凭证问题的除错实录。', 
    stars: '★★★★★', readTime: '10 分钟阅读', link: '#' 
  }
]

// 区域检测与动效全局监听
let sectionObserver = null
let observer = null

// 置顶/触底的兜底事件函数
const handleScrollFallback = (force = false) => {
  // 🔴 如果当前正在因为点击而平滑滚动，且没有被强制触发，直接拦截
  if (isScrolling && !force) return

  const scrollTop = window.scrollY || document.documentElement.scrollTop
  
  // 只要滚动条完全回到顶端（少于 10 像素误差），强制点亮第一个点
  if (scrollTop <= 10) {
    currentStep.value = 0
    return
  }

  // 兜底：如果滑到了最底部，强制点亮最后一个点
  const scrollHeight = document.documentElement.scrollHeight
  const clientHeight = document.documentElement.clientHeight
  if (scrollTop + clientHeight >= scrollHeight - 10) {
    currentStep.value = 3
  }
}

// 🔴 保存引用以便在 onUnmounted 中正确移除
const scrollHandler = () => handleScrollFallback(false)

onMounted(() => {
  // 挂载原生滚动监听，用来做核心兜底
  window.addEventListener('scroll', scrollHandler)

  // 区域检测：当某块区域进入视口时更新步骤条
  sectionObserver = new IntersectionObserver((entries) => {
    if (isScrolling) return

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id')
        if (id === 'top') currentStep.value = 0
        else if (id === 'status') currentStep.value = 1
        else if (id === 'quests') currentStep.value = 2
        else if (id === 'log') currentStep.value = 3
      }
    })
  }, { 
    rootMargin: '-70px 0px -40% 0px'
  })

  // 绑定监听这 4个 核心 section
  const sections = ['#top', '#status', '#quests', '#log']
  sections.forEach(selector => {
    const el = document.querySelector(selector)
    if (el) sectionObserver.observe(el)
  })

  // 滚动动画监听器
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.reveal, .gauge').forEach(el => observer.observe(el))
})

onUnmounted(() => {
  if (sectionObserver) sectionObserver.disconnect()
  if (observer) observer.disconnect()
  window.removeEventListener('scroll', scrollHandler)
  clearTimeout(scrollTimeout)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Zen+Maru+Gothic:wght@400;500;700;900&family=JetBrains+Mono:wght@500;700;800&display=swap');

.comic-layout .step-bar {
  position: fixed;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  height: 350px;
  z-index: 9999;
  pointer-events: all;

  background: var(--white);
  border: var(--line) solid var(--ink);
  border-radius: 999px;
  padding: 24px 13px;
  box-shadow: 4px 4px 0 var(--ink);
  display: flex;
  justify-content: center; /* 横向居中 .el-steps 本身 */
}

/* 🔴 接管纵向排布：不再依赖 Element Plus 的 JS 内联高度，
   改用 flex column + space-between 让 4 个节点在药丸里自动等距分布 */
.comic-layout .step-bar :deep(.el-steps) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background: transparent;
}

/* 🔴 强制每个 step 的盒子高度 = 图标高度，覆盖 Element Plus 写入的内联 height */
.comic-layout .step-bar :deep(.el-step) {
  position: relative;
  height: 32px !important;
  flex: none !important;
  display: flex;
  align-items: center;
  padding-bottom: 0 !important;
}

.comic-layout .step-bar :deep(.el-step__line) { display: none !important; }

.comic-layout .step-bar :deep(.el-step__head) {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* main/title 不占布局宽度，只作为 .step-bubble 的挂载点 */
.comic-layout .step-bar :deep(.el-step__main) {
  width: 0 !important;
  padding: 0 !important;
  overflow: visible !important;
}
.comic-layout .step-bar :deep(.el-step__title) {
  margin: 0 !important;
  padding: 0 !important;
  font-size: 0 !important;
}
.comic-layout .step-bar :deep(.el-step__description) { display: none; }

/* 圆点样式 */
.comic-layout .step-bar :deep(.el-step__icon) {
  width: 32px; height: 32px; border-radius: 50%;
  background: var(--white) !important;
  border: 2.5px solid var(--ink) !important;
  color: var(--ink) !important;
  font-family: var(--font-en) !important;
  font-weight: 800 !important;
  font-size: 13px !important;
  box-shadow: 2px 2px 0 var(--ink);
  cursor: pointer;
  transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
}
.comic-layout .step-bar :deep(.el-step__head:hover .el-step__icon) {
  transform: translate(-2px, -2px) scale(1.06);
  box-shadow: 4px 4px 0 var(--ink);
}

.comic-layout .step-bar :deep(.el-step:nth-child(1) .el-step__head.is-finish .el-step__icon),
.comic-layout .step-bar :deep(.el-step:nth-child(1) .el-step__head.is-process .el-step__icon) { background: var(--pink) !important; color: var(--white) !important; }
.comic-layout .step-bar :deep(.el-step:nth-child(2) .el-step__head.is-finish .el-step__icon),
.comic-layout .step-bar :deep(.el-step:nth-child(2) .el-step__head.is-process .el-step__icon) { background: var(--blue) !important; color: var(--white) !important; }
.comic-layout .step-bar :deep(.el-step:nth-child(3) .el-step__head.is-finish .el-step__icon),
.comic-layout .step-bar :deep(.el-step:nth-child(3) .el-step__head.is-process .el-step__icon) { background: var(--green) !important; color: var(--ink) !important; }
.comic-layout .step-bar :deep(.el-step:nth-child(4) .el-step__head.is-finish .el-step__icon),
.comic-layout .step-bar :deep(.el-step:nth-child(4) .el-step__head.is-process .el-step__icon) { background: var(--yellow) !important; color: var(--ink) !important; }

/* 🔴 气泡：相对 .el-step（现在精确等于 32px）定位，top:50% 与图标中心天然对齐 */
.comic-layout .step-bar .step-bubble {
  position: absolute;
  right: calc(100% + 14px);
  top: 50%;
  transform: translateY(-50%) scale(.85);
  transform-origin: right center;
  background: var(--white);
  border: 2px solid var(--ink);
  border-radius: 10px;
  padding: 7px 14px;
  font-family: var(--font-mono);
  font-weight: 800;
  font-size: 13px;      /* 略微调大，和圆点视觉重量匹配 */
  line-height: 1.4 !important; /* 🔴 覆盖从 .el-step__title 继承来的 line-height:0 */
  white-space: nowrap;
  box-shadow: 2px 2px 0 var(--ink);
  opacity: 0;
  pointer-events: none;
  transition: opacity .15s ease, transform .15s ease;
  z-index: 10000;
}
.comic-layout .step-bar .step-bubble::after {
  content: "";
  position: absolute;
  right: -6px;
  top: 50%;
  transform: translateY(-50%);
  border: 6px solid transparent;
  border-left-color: var(--ink);
}

.comic-layout .step-bar :deep(.el-step:hover .step-bubble) {
  opacity: 1;
  transform: translateY(-50%) scale(1);
}
.comic-layout .step-bar :deep(.el-step:has(.el-step__head.is-process) .step-bubble) {
  opacity: 1;
  transform: translateY(-50%) scale(1);
}

@media (max-width: 860px) {
  .comic-layout .step-bar { display: none; }
}

.comic-layout {
  --bg: #EAF4FF;
  --bg-panel: #FFFFFF;
  --ink: #1B1B2F;
  --pink: #FF3D7F;
  --pink-shadow: #C81856;
  --blue: #2FA8FF;
  --blue-shadow: #0E74C4;
  --yellow: #FFD93D;
  --yellow-shadow: #EAAE00;
  --green: #3DDC97;
  --green-shadow: #1FAE72;
  --purple: #8C6BFF;
  --skin: #FFE1C4;
  --skin-shadow: #F4C79E;
  --white: #FFFFFF;

  --font-display: 'Zen Maru Gothic', sans-serif;
  --font-en: 'Baloo 2', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --line: 3px;
  --line-thick: 4px;

  background: var(--bg);
  color: var(--ink);
  font-family: var(--font-display);
  font-weight: 400;
  line-height: 1.85;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
}

/* 移除原本直接重置元素的样式，采用层级限定避免污染全局 */
.comic-layout * { margin: 0; padding: 0; box-sizing: border-box; }
.comic-layout ::selection { background: var(--ink); color: var(--yellow); }
.comic-layout a { color: inherit; text-decoration: none; }
.comic-layout img, .comic-layout svg { display: block; max-width: 100%; }
.comic-layout .wrap { max-width: 1180px; margin: 0 auto; padding: 0 28px; }

/* comic outline text util */
.comic-layout .outline-text {
  color: var(--white);
  -webkit-text-stroke: 6px var(--ink);
  paint-order: stroke fill;
  text-shadow: none;
}

.comic-layout .halftone { background-image: radial-gradient(var(--ink) 1.4px, transparent 1.4px); background-size: 9px 9px; }

/* ---------- NAV ---------- */
.comic-layout header.nav { position: sticky; top: 0; z-index: 200; background: var(--bg); border-bottom: var(--line) solid var(--ink); }
.comic-layout .nav-inner { display: flex; align-items: center; justify-content: space-between; padding: 14px 28px; max-width: 1180px; margin: 0 auto; gap: 12px; }
.comic-layout .logo { display: flex; align-items: center; gap: 10px; font-family: var(--font-en); font-weight: 800; font-size: 19px; }
.comic-layout .logo .badge {
  width: 38px; height: 38px; border-radius: 50%;
  background: var(--pink); border: var(--line) solid var(--ink);
  display: flex; align-items: center; justify-content: center;
  color: var(--white); font-family: var(--font-display); font-weight: 900; font-size: 15px;
  box-shadow: 2px 2px 0 var(--ink);
  flex-shrink: 0;
}
.comic-layout nav.links { display: flex; gap: 8px; font-family: var(--font-en); font-size: 13px; font-weight: 700; }
.comic-layout nav.links a { padding: 8px 14px; border-radius: 999px; border: 2.5px solid transparent; transition: all .15s ease; }
.comic-layout nav.links a:hover { border-color: var(--ink); background: var(--white); box-shadow: 2px 2px 0 var(--ink); transform: translate(-1px,-1px); }
.comic-layout .btn-ghub {
  font-family: var(--font-en); font-weight: 800; font-size: 12.5px;
  background: var(--ink); color: var(--bg);
  border: var(--line) solid var(--ink); border-radius: 999px;
  padding: 9px 18px; box-shadow: 3px 3px 0 var(--pink);
  transition: transform .15s ease, box-shadow .15s ease;
  white-space: nowrap;
}
.comic-layout .btn-ghub:hover { transform: translate(2px,2px); box-shadow: 0 0 0 var(--pink); }
.comic-layout .nav-toggle { display: none; }

/* ---------- HERO ---------- */
.comic-layout .hero { position: relative; padding: 70px 0 60px; overflow: hidden; }
.comic-layout .speedlines { position: absolute; inset: 0; z-index: 0; opacity: .5; }
.comic-layout .hero-grid { position: relative; z-index: 2; display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 20px; align-items: center; }

.comic-layout .eyebrow-tag {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-en); font-weight: 700; font-size: 13px; letter-spacing: .03em;
  background: var(--yellow); border: 2.5px solid var(--ink); border-radius: 999px;
  padding: 6px 14px 6px 10px; box-shadow: 2px 2px 0 var(--ink);
}
.comic-layout .eyebrow-tag .dot { width: 8px; height: 8px; background: var(--pink); border-radius: 50%; border: 1.5px solid var(--ink); }

.comic-layout .title-panel { position: relative; margin: 22px 0 22px; }
.comic-layout .title-panel .plate {
  position: absolute; top: -14px; left: -18px;
  width: calc(100% + 60px); height: calc(100% + 32px);
  background: var(--pink); border: var(--line-thick) solid var(--ink);
  transform: rotate(-2.5deg);
  box-shadow: 6px 6px 0 var(--blue-shadow);
  z-index: -1;
}
.comic-layout .hero-headline {
  font-family: var(--font-display); font-weight: 900;
  font-size: clamp(32px, 5.4vw, 56px); line-height: 1.15;
  padding: 10px 6px;
}
.comic-layout .hero-headline .en {
  display: block; font-family: var(--font-en); font-weight: 800;
  font-size: .36em; color: var(--white); letter-spacing: .03em; margin-top: 10px;
  -webkit-text-stroke: 0;
}

.comic-layout .speech-box {
  position: relative; background: var(--white); border: var(--line) solid var(--ink);
  border-radius: 18px; padding: 16px 20px; max-width: 48ch;
  font-size: 14.5px; font-weight: 500; color: #3a3a3a;
  box-shadow: 4px 4px 0 var(--ink);
  margin-bottom: 30px;
}
.comic-layout .speech-box::after { content: ""; position: absolute; left: 34px; bottom: -14px; width: 0; height: 0; border: 12px solid transparent; border-top-color: var(--ink); }
.comic-layout .speech-box::before { content: ""; position: absolute; left: 37px; bottom: -9px; width: 0; height: 0; border: 9px solid transparent; border-top-color: var(--white); z-index: 1; }

.comic-layout .hero-cta { display: flex; gap: 16px; flex-wrap: wrap; }
.comic-layout .btn {
  font-family: var(--font-en); font-weight: 800; font-size: 14px;
  padding: 14px 26px; display: inline-flex; align-items: center; gap: 8px;
  border-radius: 999px; border: var(--line) solid var(--ink);
  transition: transform .12s ease, box-shadow .12s ease;
}
.comic-layout .btn-solid { background: var(--blue); color: var(--white); box-shadow: 4px 4px 0 var(--ink); }
.comic-layout .btn-solid:hover { transform: translate(4px,4px); box-shadow: 0 0 0 var(--ink); }
.comic-layout .btn-outline { background: var(--white); color: var(--ink); box-shadow: 4px 4px 0 var(--ink); }
.comic-layout .btn-outline:hover { transform: translate(4px,4px); box-shadow: 0 0 0 var(--ink); }

.comic-layout .hero-art { position: relative; display: flex; justify-content: center; align-items: center; min-height: 380px; }
.comic-layout .burst {
  position: absolute; width: 420px; height: 420px;
  background: repeating-conic-gradient(from 0deg, var(--yellow) 0deg 4deg, transparent 4deg 12deg);
  border-radius: 50%; opacity: .55; animation: spin 60s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.comic-layout .avatar-frame {
  position: relative; width: 290px; height: 290px;
  opacity: 0; animation: popIn .6s cubic-bezier(.34,1.56,.64,1) .2s forwards;
}
@keyframes popIn { from { opacity: 0; transform: scale(.7) rotate(-6deg); } to { opacity: 1; transform: scale(1) rotate(0); } }

.comic-layout .float-badge {
  position: absolute;
  background: var(--white); border: var(--line) solid var(--ink); border-radius: 14px;
  padding: 8px 12px; font-family: var(--font-mono); font-weight: 800; font-size: 12px;
  box-shadow: 3px 3px 0 var(--ink);
}
.comic-layout .fb-1 { top: 8px; left: -6px; background: var(--yellow); animation: bob 3s ease-in-out infinite; }
.comic-layout .fb-2 { bottom: 26px; right: -14px; background: var(--green); animation: bob 3.4s ease-in-out infinite .3s; }
@keyframes bob { 0%, 100% { transform: translateY(0) rotate(-3deg); } 50% { transform: translateY(-10px) rotate(3deg); } }

/* ---------- SECTION SHELL ---------- */
.comic-layout section { padding: 90px 0; position: relative; }
.comic-layout .section-band { border-top: var(--line) solid var(--ink); border-bottom: var(--line) solid var(--ink); background: var(--bg-panel); }
.comic-layout .section-head { display: flex; justify-content: space-between; align-items: flex-end; gap: 20px; margin-bottom: 46px; flex-wrap: wrap; }
.comic-layout .section-title {
  display: inline-flex; flex-direction: column;
  font-family: var(--font-display); font-weight: 900; font-size: clamp(24px, 3.6vw, 36px);
}
.comic-layout .section-title .en {
  font-family: var(--font-en); font-weight: 700; font-size: .36em; color: var(--pink);
  letter-spacing: .06em; text-transform: uppercase; margin-top: 6px;
}
.comic-layout .view-all {
  font-family: var(--font-en); font-weight: 700; font-size: 13px;
  border: 2.5px solid var(--ink); border-radius: 999px; padding: 8px 16px;
  box-shadow: 3px 3px 0 var(--ink); transition: all .15s ease;
}
.comic-layout .view-all:hover { transform: translate(3px,3px); box-shadow: 0 0 0 var(--ink); }

.comic-layout .reveal { opacity: 0; transform: translateY(26px); transition: opacity .55s ease, transform .55s ease; }
.comic-layout .reveal.in { opacity: 1; transform: translateY(0); }

/* ---------- ABOUT / STATUS ---------- */
.comic-layout .about-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: 54px; }
.comic-layout .manifesto { font-size: 16px; font-weight: 500; color: #333; }
.comic-layout .manifesto strong { background: var(--yellow); padding: 0 4px; border-radius: 4px; box-decoration-break: clone; }
.comic-layout .tag-row { margin-top: 24px; display: flex; gap: 10px; flex-wrap: wrap; }
.comic-layout .tag-chip {
  font-family: var(--font-mono); font-weight: 700; font-size: 12.5px;
  padding: 8px 14px; border-radius: 999px; border: 2.5px solid var(--ink);
  background: var(--white); box-shadow: 2px 2px 0 var(--ink);
}

.comic-layout .status-card { border: var(--line) solid var(--ink); border-radius: 20px; background: var(--bg); padding: 26px 26px 8px; box-shadow: 5px 5px 0 var(--ink); }
.comic-layout .stat-row { margin-bottom: 22px; }
.comic-layout .stat-label { display: flex; justify-content: space-between; align-items: center; font-family: var(--font-en); font-weight: 700; font-size: 13px; margin-bottom: 8px; }
.comic-layout .stat-label .lv { font-family: var(--font-mono); background: var(--ink); color: var(--bg); padding: 2px 8px; border-radius: 6px; font-size: 11.5px; }
.comic-layout .stat-sub { font-family: var(--font-mono); font-size: 10.5px; color: #666; display: block; margin-top: 2px; font-weight: 500; }
.comic-layout .gauge {
  height: 20px; border-radius: 999px; border: 2.5px solid var(--ink);
  background: var(--white); overflow: hidden; position: relative;
}
.comic-layout .gauge-fill {
  height: 100%; width: 0%;
  background-image: repeating-linear-gradient(90deg, currentColor 0 22px, transparent 22px 24px);
  background-color: currentColor;
  transition: width 1.1s cubic-bezier(.2,.8,.2,1); position: relative;
}
.comic-layout .gauge-fill::after { content: ""; position: absolute; inset: 0; background: repeating-linear-gradient(90deg, rgba(0,0,0,0) 0 20px, rgba(27,27,47,.35) 20px 23px); }
.comic-layout .gauge.in .gauge-fill { width: var(--w); }
.comic-layout .g-pink { color: var(--pink); } .comic-layout .g-blue { color: var(--blue); } .comic-layout .g-green { color: var(--green); } .comic-layout .g-yellow { color: var(--yellow-shadow); }

/* ---------- PROJECTS (quest cards) ---------- */
.comic-layout .card-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 30px; }
.comic-layout .card {
  position: relative; background: var(--white);
  border: var(--line) solid var(--ink); border-radius: 18px;
  padding: 26px; box-shadow: 6px 6px 0 var(--ink);
  transition: transform .2s ease, box-shadow .2s ease;
}
.comic-layout .card:nth-child(odd) { transform: rotate(-1deg); }
.comic-layout .card:nth-child(even) { transform: rotate(1deg); }
.comic-layout .card:hover { transform: rotate(0) translate(-3px,-3px); box-shadow: 9px 9px 0 var(--ink); }
.comic-layout .card-burst {
  position: absolute; top: -14px; right: -14px; width: 70px; height: 70px;
  background-image: radial-gradient(var(--ink) 1.6px, transparent 1.6px);
  background-size: 8px 8px; border-radius: 50%; opacity: .4; pointer-events: none;
}
.comic-layout .quest-tag {
  display: inline-block; font-family: var(--font-mono); font-weight: 800; font-size: 10.5px;
  padding: 3px 10px; border-radius: 999px; border: 2px solid var(--ink); letter-spacing: .03em;
}
.comic-layout .quest-main { background: var(--pink); color: var(--white); }
.comic-layout .quest-side { background: var(--green); color: var(--ink); }
.comic-layout .card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px; }
.comic-layout .card-stars { font-size: 13px; color: var(--yellow-shadow); letter-spacing: 1px; }
.comic-layout .card h3 { font-family: var(--font-display); font-weight: 900; font-size: 20px; margin: 6px 0 10px; }
.comic-layout .card p { font-size: 13.5px; font-weight: 500; color: #444; margin-bottom: 16px; }
.comic-layout .card-tags { display: flex; gap: 7px; flex-wrap: wrap; margin-bottom: 16px; }
.comic-layout .card-tags span { font-family: var(--font-mono); font-size: 10.5px; font-weight: 700; background: var(--ink); color: var(--bg); padding: 3px 9px; border-radius: 999px; }
.comic-layout .card-link { font-family: var(--font-en); font-weight: 800; font-size: 12.5px; display: inline-flex; align-items: center; gap: 6px; border-bottom: 3px solid var(--ink); padding-bottom: 1px; }
.comic-layout .card:hover .card-link { color: var(--pink); border-color: var(--pink); }

/* ---------- BLOG (adventure log) ---------- */
.comic-layout .log-list { display: flex; flex-direction: column; gap: 16px; }
.comic-layout .log-row {
  display: grid; grid-template-columns: 110px 1fr auto; gap: 20px; align-items: center;
  background: var(--white); border: 2.5px solid var(--ink); border-radius: 14px;
  padding: 18px 20px; transition: transform .15s ease, box-shadow .15s ease;
  box-shadow: 3px 3px 0 var(--ink);
}
.comic-layout .log-row:hover { transform: translate(-3px,-3px); box-shadow: 6px 6px 0 var(--ink); }
.comic-layout .log-id { font-family: var(--font-mono); font-weight: 800; font-size: 11.5px; color: var(--blue-shadow); }
.comic-layout .log-id span { display: block; font-family: var(--font-mono); font-weight: 500; font-size: 10.5px; color: #888; margin-top: 2px; }
.comic-layout .log-main h3 { font-family: var(--font-display); font-weight: 700; font-size: 16.5px; margin-bottom: 5px; }
.comic-layout .log-main p { font-size: 12.5px; font-weight: 500; color: #555; }
.comic-layout .log-meta { text-align: right; font-family: var(--font-mono); font-size: 11px; color: #666; }
.comic-layout .log-meta .stars { display: block; color: var(--yellow-shadow); font-size: 13px; margin-bottom: 4px; letter-spacing: 1px; }

/* ---------- FOOTER ---------- */
.comic-layout footer { padding: 80px 0 30px; background: var(--ink); color: var(--bg); position: relative; overflow: hidden; }
.comic-layout footer::before {
  content: "STAGE CLEAR"; position: absolute; top: -6px; left: 0; right: 0;
  text-align: center; font-family: var(--font-en); font-weight: 800;
  font-size: 14vw; color: rgba(255,255,255,.04); letter-spacing: .05em; white-space: nowrap; pointer-events: none;
}
.comic-layout .footer-inner { position: relative; z-index: 1; }
.comic-layout .footer-title { font-family: var(--font-display); font-weight: 900; font-size: clamp(26px, 4.4vw, 46px); max-width: 16ch; margin-bottom: 10px; }
.comic-layout .footer-sub { font-family: var(--font-en); font-weight: 700; color: var(--yellow); font-size: 14px; margin-bottom: 40px; }
.comic-layout .pad-row { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 48px; }
.comic-layout .pad-btn {
  width: 70px; height: 70px; border-radius: 50%;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  border: var(--line) solid var(--bg); font-family: var(--font-mono); font-weight: 800; font-size: 11px;
  transition: transform .15s ease;
}
.comic-layout .pad-btn span { font-size: 16px; }
.comic-layout .pad-btn:hover { transform: translateY(-6px) rotate(-6deg); }
.comic-layout .pad-a { background: var(--pink); color: var(--white); }
.comic-layout .pad-b { background: var(--blue); color: var(--white); }
.comic-layout .pad-x { background: var(--yellow); color: var(--ink); }
.comic-layout .pad-y { background: var(--green); color: var(--ink); }
.comic-layout .foot-bottom { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; padding-top: 24px; border-top: 1.5px solid rgba(234,244,255,.2); font-family: var(--font-mono); font-size: 11.5px; color: rgba(234,244,255,.6); }

/* ---------- RESPONSIVE ---------- */
@media (max-width: 860px) {
  .comic-layout .hero-grid { grid-template-columns: 1fr; }
  .comic-layout .hero-art { order: -1; margin-bottom: 10px; min-height: 300px; }
  .comic-layout .avatar-frame { width: 230px; height: 230px; }
  .comic-layout .burst { width: 320px; height: 320px; }
  .comic-layout .about-grid { grid-template-columns: 1fr; }
  .comic-layout .card-grid { grid-template-columns: 1fr; }
  .comic-layout .card:nth-child(odd), .comic-layout .card:nth-child(even) { transform: rotate(0); }
  .comic-layout nav.links { display: none; }
  .comic-layout .nav-toggle { display: flex; flex-direction: column; gap: 4px; background: none; border: none; cursor: pointer; padding: 8px; }
  .comic-layout .nav-toggle span { width: 22px; height: 3px; background: var(--ink); border-radius: 2px; }
  .comic-layout .mobile-links { display: flex; flex-direction: column; border-top: var(--line) solid var(--ink); font-family: var(--font-en); font-weight: 700; font-size: 14px; background: var(--bg-panel); }
  .comic-layout .mobile-links a { padding: 16px 28px; border-bottom: 1.5px solid rgba(27,27,47,.15); }
  .comic-layout .log-row { grid-template-columns: 1fr; text-align: left; gap: 6px; }
  .comic-layout .log-meta { text-align: left; }
}

@media (prefers-reduced-motion: reduce) {
  .comic-layout * { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
}
</style>