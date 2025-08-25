<template>
  <section id="skills" class="skills-section" ref="skillsSection">
    <!-- Background Effects -->
    <div class="background-effects">
      <div class="grid-pattern"></div>
      <div class="gradient-overlay"></div>
      <div class="tech-lines"></div>
      <div class="data-matrix"></div>
    </div>
    
    <!-- Particles System -->
    <ClientOnly>
      <div class="particles-container">
        <div v-for="i in 25" :key="i" class="particle" :class="`particle-${i}`"></div>
      </div>
      <template #placeholder>
        <div class="particles-container"></div>
      </template>
    </ClientOnly>
    
    <!-- Main Content -->
    <div class="skills-container">
      <!-- Header -->
      <div class="section-header" ref="sectionHeader">
        <div class="section-badge">
          <div class="badge-dot"></div>
          <span class="badge-text">EXPERTISE</span>
          <div class="badge-line"></div>
        </div>
        
        <h2 class="section-title glitch-title" data-text="HABILIDADES & TECNOLOGIAS">
          HABILIDADES & TECNOLOGIAS
        </h2>
        
        <p class="section-subtitle">
          Dominando as mais avancadas tecnologias para criar solucoes digitais inovadoras
        </p>
      </div>
      
      <!-- Skills Grid -->
      <div class="skills-grid" ref="skillsGrid">
        <!-- Technical Skills -->
        <div class="skill-category" ref="technicalCategoryRef">
          <div class="category-header">
            <h3 class="category-title">
              <span class="category-icon">DEV</span>
              Desenvolvimento
            </h3>
          </div>
          
          <div class="skills-list">
            <div 
              v-for="(skill, index) in technicalSkills" 
              :key="skill.name"
              class="skill-item"
              :ref="(el) => setSkillItemRef(el, 'technical', index)"
              @mouseenter="animateSkill"
              @mouseleave="resetSkill"
            >
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                <div class="skill-glow"></div>
              </div>
              <div class="skill-description">{{ skill.description }}</div>
            </div>
          </div>
        </div>
        
        <!-- AI & Automation Skills -->
        <div class="skill-category" ref="aiCategoryRef">
          <div class="category-header">
            <h3 class="category-title">
              <span class="category-icon">AI</span>
              IA & Automacao
            </h3>
          </div>
          
          <div class="skills-list">
            <div 
              v-for="(skill, index) in aiSkills" 
              :key="skill.name"
              class="skill-item"
              :ref="(el) => setSkillItemRef(el, 'ai', index)"
              @mouseenter="animateSkill"
              @mouseleave="resetSkill"
            >
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                <div class="skill-glow"></div>
              </div>
              <div class="skill-description">{{ skill.description }}</div>
            </div>
          </div>
        </div>
        
        <!-- Strategy & Analytics -->
        <div class="skill-category" ref="strategyCategoryRef">
          <div class="category-header">
            <h3 class="category-title">
              <span class="category-icon">STR</span>
              Estrategia & Analytics
            </h3>
          </div>
          
          <div class="skills-list">
            <div 
              v-for="(skill, index) in strategySkills" 
              :key="skill.name"
              class="skill-item"
              :ref="(el) => setSkillItemRef(el, 'strategy', index)"
              @mouseenter="animateSkill"
              @mouseleave="resetSkill"
            >
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                <div class="skill-glow"></div>
              </div>
              <div class="skill-description">{{ skill.description }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Tech Stack Icons -->
      <div class="tech-stack" ref="techStackRef">
        <h3 class="stack-title">Tecnologias Utilizadas</h3>
        <div class="tech-icons">
          <div 
            v-for="(tech, index) in techStack" 
            :key="tech.name"
            class="tech-icon"
            :ref="(el) => setTechIconRef(el, index)"
            :title="tech.name"
          >
            <img :src="tech.icon" :alt="tech.name" @error="handleImageError" />
            <div class="tech-glow"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useNuxtApp } from '#app'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Template refs
const skillsSection = ref(null)
const sectionHeader = ref(null)
const skillsGrid = ref(null)
const technicalCategoryRef = ref(null)
const aiCategoryRef = ref(null)
const strategyCategoryRef = ref(null)
const skillItemsRefs = ref({
  technical: [],
  ai: [],
  strategy: []
})
// Computed skillItems array for animations
const skillItems = ref([])
const techIcons = ref([])
const techStackRef = ref(null)

// Function to set skill item refs
const setSkillItemRef = (el, category, index) => {
  if (el) {
    // Ensure the array for this category exists
    if (!skillItemsRefs.value[category]) {
      skillItemsRefs.value[category] = []
    }
    skillItemsRefs.value[category][index] = el
  }
}

// Function to set tech icon refs
const setTechIconRef = (el, index) => {
  if (el) {
    techIcons.value[index] = el
  }
}

// Skills data
const technicalSkills = ref([
  { name: 'WordPress', level: 95, description: 'CMS + ecosistema (Gutenberg, ACF, plugins, REST API)' },
  { name: 'HTML5', level: 92, description: 'Semântica, acessibilidade e SEO on-page' },
  { name: 'CSS3', level: 90, description: 'Layouts responsivos (Flex/Grid), boas práticas e otimização' },
  { name: 'JavaScript', level: 88, description: 'Interações no front, fetch/REST, módulos e tooling básico' },
  { name: 'Tailwind CSS', level: 92, description: 'Design system utilitário, componentes e theming' },
  { name: 'GSAP', level: 85, description: 'Animações performáticas, timelines e scroll-based' }
])

const aiSkills = ref([
  { "name": "Prompt Engineering", "level": 98, "description": "Criação e otimização de prompts avançados para IA generativa" },
  { "name": "API Integration", "level": 91, "description": "Integração e orquestração via APIs de IA e sistemas web" },
  { "name": "Workflow Automation", "level": 94, "description": "Construção de fluxos inteligentes para otimizar processos" },
  { "name": "Data Processing", "level": 86, "description": "Tratamento, transformação e análise prática de dados" },
  { "name": "Cloud Services", "level": 88, "description": "Uso de plataformas em nuvem (VPS, Firebase, Vercel) para deploy e escalabilidade" },
  { "name": "Version Control (Git)", "level": 92, "description": "Gerenciamento de código com Git e GitHub, colaboração e CI/CD" }
])

const strategySkills = ref([
  { "name": "Digital Strategy", "level": 95, "description": "Planejamento de estratégias digitais personalizadas, campanhas omnichannel e presença de marca" },
  { "name": "UX/UI Design", "level": 89, "description": "Criação de interfaces e protótipos no Figma, design system e usabilidade focada no usuário" },
  { "name": "Performance Analytics", "level": 91, "description": "Monitoramento de métricas com Google Analytics 4, Tag Manager e relatórios de conversão" },
  { "name": "SEO Optimization", "level": 87, "description": "Otimização on-page, performance técnica e estratégias de ranqueamento em buscadores" },
  { "name": "Project Management", "level": 92, "description": "Gestão de projetos digitais com metodologias ágeis (Scrum/Kanban) e colaboração em equipe" },
  { "name": "Creative Tools", "level": 90, "description": "Domínio do pacote Adobe (Photoshop, Illustrator, After Effects) para design e produção visual" }
])

// Tech stack data with fallback icons
const techStack = ref([
  { name: 'Adobe', icon: '/icons/adobe.svg' },
  { name: 'Figma', icon: '/icons/figma.svg' },
  { name: 'Nuxt.js', icon: '/icons/document.svg' },
  { name: 'WordPress', icon: '/icons/wordpress.svg' }
])

// Function to handle image loading errors
const handleImageError = (event) => {
  console.log('Image failed to load:', event.target.src)
  // Set a fallback image or hide the icon
  event.target.style.display = 'none'
}

// Function to check if icon files exist
const checkIconFiles = () => {
  techStack.value.forEach((tech, index) => {
    const img = new Image()
    img.onload = () => {
      console.log('Icon loaded successfully:', tech.icon)
    }
    img.onerror = () => {
      console.log('Icon failed to load:', tech.icon)
    }
    img.src = tech.icon
  })
}

onMounted(() => {
  // Check if icon files exist
  checkIconFiles()
  
  // Flatten skillItemsRefs into a single array for animations
  skillItems.value = [
    ...skillItemsRefs.value.technical,
    ...skillItemsRefs.value.ai,
    ...skillItemsRefs.value.strategy
  ]
  
  nextTick(() => {
    // Scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: skillsSection.value,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    // Header animation
    if (sectionHeader.value) {
      tl.from(sectionHeader.value, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
      })
    }
    
    // Categories animation
    const categoryElements = [technicalCategoryRef.value, aiCategoryRef.value, strategyCategoryRef.value].filter(el => el)
    if (categoryElements.length > 0) {
      tl.from(categoryElements, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out'
      }, "-=0.4")
    }
    
    // Skills animation
    if (skillItems.value && skillItems.value.length > 0) {
      // Ensure items are visible before animation
      skillItems.value.forEach(item => {
        if (item) {
          gsap.set(item, { opacity: 1, x: 0 })
        }
      })
      
      // Optional: Add a subtle entrance animation
      tl.from(skillItems.value, {
        opacity: 0,
        x: -20,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power2.out'
      }, "-=0.3")
    }
    
    // Tech stack animation
    if (techStackRef.value) {
      tl.from(techStackRef.value, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out'
      }, "-=0.2")
    }
    
    if (techIcons.value && techIcons.value.length > 0) {
      tl.from(techIcons.value, {
        opacity: 0,
        scale: 0.5,
        rotation: 180,
        duration: 0.4,
        stagger: 0.05,
        ease: 'back.out(1.7)'
      }, "-=0.3")
    }

    // Animate skill progress bars
    setTimeout(() => {
      skillItems.value.forEach((item, index) => {
        const progressBar = item?.querySelector('.skill-progress')
        if (progressBar) {
          // Get the target width from the style attribute
          const targetWidth = progressBar.style.width
          // Reset width to 0 for animation
          progressBar.style.width = '0%'
          // Animate to target width
          gsap.to(progressBar, {
            width: targetWidth,
            duration: 1.5,
            ease: 'power2.out',
            delay: index * 0.1 // Stagger the animations
          })
        }
      })
    }, 500) // Increased delay to ensure elements are visible before animation
  })

  // Continuous animations
  setTimeout(() => {
    const particles = document.querySelectorAll('.particle')
    if (particles.length > 0) {
      gsap.to(particles, {
        y: '-=20',
        duration: 4,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 3,
          from: 'random'
        }
      })
    }
  }, 100)

  setTimeout(() => {
    if (techIcons.value && techIcons.value.length > 0) {
      // Ensure icons are visible before animation
      techIcons.value.forEach(icon => {
        if (icon) {
          gsap.set(icon, { opacity: 1, scale: 1 })
        }
      })
      
      // Animate icons
      gsap.from(techIcons.value, {
        opacity: 0,
        scale: 0.5,
        rotation: 180,
        duration: 0.4,
        stagger: 0.05,
        ease: 'back.out(1.7)'
      })
    }
  }, 600) // Increased delay to ensure icons are rendered

  // Continuous floating animation for icons
  setTimeout(() => {
    if (techIcons.value && techIcons.value.length > 0) {
      techIcons.value.forEach((icon, index) => {
        if (icon) {
          gsap.to(icon, {
            y: '-=5',
            duration: 2 + index * 0.3,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true
          })
        }
      })
    }
  }, 1000) // Delayed start for floating animation

  // Glitch effect on title hover
  const title = sectionHeader.value?.querySelector('.glitch-title')
  if (title) {
    title.addEventListener('mouseenter', () => {
      gsap.to(title, {
        duration: 0.1,
        repeat: 3,
        yoyo: true,
        x: 2,
        textShadow: '2px 0 #ff0000, -2px 0 #00ffff',
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(title, { x: 0, textShadow: 'none' })
        }
      })
    })
  }
})

// Skill item animations
const animateSkill = (event) => {
  const item = event.currentTarget
  const glow = item.querySelector('.skill-glow')
  
  gsap.to(item, {
    x: 10,
    duration: 0.3,
    ease: 'power2.out'
  })
  
  gsap.to(glow, {
    opacity: 1,
    scale: 1.1,
    duration: 0.3,
    ease: 'power2.out'
  })
}

const resetSkill = (event) => {
  const item = event.currentTarget
  const glow = item.querySelector('.skill-glow')
  
  gsap.to(item, {
    x: 0,
    duration: 0.3,
    ease: 'power2.out'
  })
  
  gsap.to(glow, {
    opacity: 0,
    scale: 1,
    duration: 0.3,
    ease: 'power2.out'
  })
}
</script>

<style scoped>
.skills-section {
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  overflow: hidden;
  color: #ffffff;
}

/* Background Effects */
.background-effects {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.grid-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  animation: gridMove 20s linear infinite;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 70%);
}

.tech-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(45deg, transparent 40%, rgba(255, 100, 0, 0.1) 50%, transparent 60%),
    linear-gradient(-45deg, transparent 40%, rgba(255, 255, 255, 0.05) 50%, transparent 60%);
  background-size: 200px 200px, 150px 150px;
  animation: techFlow 15s linear infinite;
}

.data-matrix {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(255, 100, 0, 0.1) 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 100px 100px, 150px 150px;
  animation: matrixPulse 10s ease-in-out infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(30px, 30px); }
}

@keyframes techFlow {
  0% { background-position: 0 0, 0 0; }
  100% { background-position: 200px 200px, -150px -150px; }
}

@keyframes matrixPulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
}

/* Particles */
.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  pointer-events: none;
}

/* Generate random positions */
.particle:nth-child(1) { top: 5%; left: 10%; }
.particle:nth-child(2) { top: 15%; left: 85%; }
.particle:nth-child(3) { top: 25%; left: 25%; }
.particle:nth-child(4) { top: 35%; left: 75%; }
.particle:nth-child(5) { top: 45%; left: 15%; }
.particle:nth-child(6) { top: 55%; left: 65%; }
.particle:nth-child(7) { top: 65%; left: 95%; }
.particle:nth-child(8) { top: 75%; left: 5%; }
.particle:nth-child(9) { top: 85%; left: 55%; }
.particle:nth-child(10) { top: 95%; left: 35%; }
.particle:nth-child(11) { top: 12%; left: 45%; }
.particle:nth-child(12) { top: 22%; left: 80%; }
.particle:nth-child(13) { top: 32%; left: 20%; }
.particle:nth-child(14) { top: 42%; left: 90%; }
.particle:nth-child(15) { top: 52%; left: 30%; }
.particle:nth-child(16) { top: 62%; left: 70%; }
.particle:nth-child(17) { top: 72%; left: 40%; }
.particle:nth-child(18) { top: 82%; left: 85%; }
.particle:nth-child(19) { top: 92%; left: 15%; }
.particle:nth-child(20) { top: 18%; left: 60%; }
.particle:nth-child(21) { top: 28%; left: 50%; }
.particle:nth-child(22) { top: 38%; left: 10%; }
.particle:nth-child(23) { top: 48%; left: 95%; }
.particle:nth-child(24) { top: 58%; left: 25%; }
.particle:nth-child(25) { top: 68%; left: 75%; }

/* Main Content */
.skills-container {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem; /* Add some padding for smaller screens */
}

/* Header */
.section-header {
  text-align: center;
  margin-bottom: 6rem;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #ffffff;
  border-radius: 50%;
  animation: badgePulse 2s ease-in-out infinite;
}

.badge-line {
  position: absolute;
  right: -2rem;
  top: 50%;
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.5), transparent);
  transform: translateY(-50%);
}

@keyframes badgePulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
}

.section-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: -1px;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
  cursor: pointer;
  position: relative;
}

.glitch-title::before,
.glitch-title::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
}

.glitch-title::before {
  color: #ff0000;
  z-index: -1;
}

.glitch-title::after {
  color: #00ffff;
  z-index: -2;
}

.section-subtitle {
  font-size: 1.25rem;
  font-weight: 300;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
  line-height: 1.6;
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  margin-bottom: 6rem;
}

.skill-category {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 100, 0, 0.3);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.category-header {
  margin-bottom: 2rem;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.category-icon {
  font-size: 1.2rem;
  font-weight: 900;
  padding: 0.5rem;
  background: rgba(255, 100, 0, 0.2);
  border-radius: 8px;
  border: 1px solid rgba(255, 100, 0, 0.5);
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  opacity: 1;
}

.skill-item {
  position: relative;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: 1;
  display: block;
  transform: translateX(0); /* Ensure items are in normal position */
}

.skill-item:hover {
  background: rgba(255, 100, 0, 0.1);
  border-color: rgba(255, 100, 0, 0.3);
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.skill-name {
  font-weight: 600;
  font-size: 1rem;
}

.skill-level {
  font-family: 'Courier New', monospace;
  font-weight: 700;
  color: #ff6600;
}

.skill-bar {
  position: relative;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #ff6600, #ffffff);
  border-radius: 2px;
  width: 0%;
}

.skill-glow {
  position: absolute;
  top: -2px;
  left: 0;
  right: 0;
  bottom: -2px;
  background: linear-gradient(90deg, transparent, rgba(255, 102, 0, 0.5), transparent);
  opacity: 0;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.skill-description {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;
}

/* Tech Stack */
.tech-stack {
  text-align: center;
  margin-top: 4rem; /* Add some space above the tech stack */
}

.stack-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #ffffff;
}

.tech-icons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem; /* Add some padding for smaller screens */
}

.tech-icon {
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 10;
  opacity: 1;
  margin: 0 auto; /* Center the icon container horizontally */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

.tech-icon img {
  width: 40px;
  height: 40px;
  filter: brightness(0) invert(1);
  transition: all 0.3s ease;
  display: block;
  opacity: 1;
  /* Fallback for when image doesn't load */
  background-color: transparent;
  color: white;
  font-size: 24px;
  text-align: center;
  line-height: 40px;
  /* Ensure the image is centered within the flex container */
  object-fit: contain;
  object-position: center;
  /* Add these properties to ensure proper centering */
  margin: 0;
  padding: 0;
}

.tech-glow {
  position: absolute;
  inset: -4px;
  background: linear-gradient(45deg, transparent, rgba(255, 100, 0, 0.3), transparent);
  border-radius: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tech-icon:hover .tech-glow {
  opacity: 1;
}

/* Responsive */
@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .skills-section {
    padding: 6rem 1rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .skill-category {
    padding: 1.5rem;
  }
  
  .tech-icons {
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    gap: 1rem;
  }
  
  .tech-icon {
    width: 60px;
    height: 60px;
  }
  
  .tech-icon img {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
  }
  
  .skill-item {
    padding: 0.75rem;
  }
  
  .skill-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
}
</style>