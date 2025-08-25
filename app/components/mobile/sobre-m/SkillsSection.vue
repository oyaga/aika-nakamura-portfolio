<template>
  <section id="skills" class="mobile-skills-section" ref="mobileSkillsSection">
    <!-- Background Effects -->
    <div class="mobile-skills-bg">
      <div class="mobile-skills-grid"></div>
      <div class="mobile-skills-gradient"></div>
      <div class="mobile-tech-lines"></div>
    </div>
    
    <!-- Particles System -->
    <div class="mobile-skills-particles">
      <div v-for="i in 12" :key="i" class="mobile-skill-particle" :class="`particle-${i}`"></div>
    </div>
    
    <!-- Main Content -->
    <div class="mobile-skills-container">
      <!-- Header -->
      <div class="mobile-skills-header" ref="mobileSkillsHeader">
        <div class="mobile-skills-badge">
          <div class="mobile-skills-badge-dot"></div>
          <span class="mobile-skills-badge-text">EXPERTISE</span>
          <div class="mobile-skills-badge-line"></div>
        </div>
        
        <h2 class="mobile-skills-title">
          HABILIDADES & TECNOLOGIAS
        </h2>
        
        <p class="mobile-skills-subtitle">
          Dominando as mais avançadas tecnologias para criar soluções digitais inovadoras
        </p>
      </div>
      
      <!-- Skills Categories -->
      <div class="mobile-skills-categories" ref="mobileSkillsCategories">
        
        <!-- Technical Skills -->
        <div class="mobile-skill-category" ref="mobileTechnicalCategory">
          <div class="mobile-category-header">
            <h3 class="mobile-category-title">
              <span class="mobile-category-icon">DEV</span>
              Desenvolvimento
            </h3>
          </div>
          
          <div class="mobile-skills-list">
            <div 
              v-for="(skill, index) in mobileTechnicalSkills" 
              :key="skill.name"
              class="mobile-skill-item"
              @touchstart="onSkillTouch(index, 'technical')"
              @touchend="onSkillTouchEnd(index, 'technical')"
            >
              <div class="mobile-skill-info">
                <span class="mobile-skill-name">{{ skill.name }}</span>
                <span class="mobile-skill-level">{{ skill.level }}%</span>
              </div>
              <div class="mobile-skill-bar">
                <div class="mobile-skill-progress" :style="{ width: skill.level + '%' }"></div>
                <div class="mobile-skill-glow"></div>
              </div>
              <div class="mobile-skill-description">{{ skill.description }}</div>
            </div>
          </div>
        </div>
        
        <!-- AI Skills -->
        <div class="mobile-skill-category" ref="mobileAiCategory">
          <div class="mobile-category-header">
            <h3 class="mobile-category-title">
              <span class="mobile-category-icon">AI</span>
              Inteligência Artificial
            </h3>
          </div>
          
          <div class="mobile-skills-list">
            <div 
              v-for="(skill, index) in mobileAiSkills" 
              :key="skill.name"
              class="mobile-skill-item"
              @touchstart="onSkillTouch(index, 'ai')"
              @touchend="onSkillTouchEnd(index, 'ai')"
            >
              <div class="mobile-skill-info">
                <span class="mobile-skill-name">{{ skill.name }}</span>
                <span class="mobile-skill-level">{{ skill.level }}%</span>
              </div>
              <div class="mobile-skill-bar">
                <div class="mobile-skill-progress" :style="{ width: skill.level + '%' }"></div>
                <div class="mobile-skill-glow"></div>
              </div>
              <div class="mobile-skill-description">{{ skill.description }}</div>
            </div>
          </div>
        </div>
        
        <!-- Strategy Skills -->
        <div class="mobile-skill-category" ref="mobileStrategyCategory">
          <div class="mobile-category-header">
            <h3 class="mobile-category-title">
              <span class="mobile-category-icon">STR</span>
              Estratégia & Analytics
            </h3>
          </div>
          
          <div class="mobile-skills-list">
            <div 
              v-for="(skill, index) in mobileStrategySkills" 
              :key="skill.name"
              class="mobile-skill-item"
              @touchstart="onSkillTouch(index, 'strategy')"
              @touchend="onSkillTouchEnd(index, 'strategy')"
            >
              <div class="mobile-skill-info">
                <span class="mobile-skill-name">{{ skill.name }}</span>
                <span class="mobile-skill-level">{{ skill.level }}%</span>
              </div>
              <div class="mobile-skill-bar">
                <div class="mobile-skill-progress" :style="{ width: skill.level + '%' }"></div>
                <div class="mobile-skill-glow"></div>
              </div>
              <div class="mobile-skill-description">{{ skill.description }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Tech Stack -->
      <div class="mobile-tech-stack" ref="mobileTechStack">
        <h3 class="mobile-stack-title">Tecnologias Utilizadas</h3>
        <div class="mobile-tech-icons">
          <div 
            v-for="(tech, index) in mobileStackItems" 
            :key="tech.name"
            class="mobile-tech-icon"
            :title="tech.name"
          >
            <div class="mobile-tech-placeholder">
              {{ tech.name.charAt(0) }}
            </div>
            <span class="mobile-tech-name">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

// Template refs
const mobileSkillsSection = ref(null)
const mobileSkillsHeader = ref(null)
const mobileSkillsCategories = ref(null)
const mobileTechnicalCategory = ref(null)
const mobileAiCategory = ref(null)
const mobileStrategyCategory = ref(null)
const mobileTechStack = ref(null)

// Skills data - simplified for mobile
const mobileTechnicalSkills = ref([
  { name: 'WordPress', level: 95, description: 'CMS + ecosistema' },
  { name: 'HTML5', level: 92, description: 'Semântica e SEO' },
  { name: 'CSS3', level: 90, description: 'Layouts responsivos' },
  { name: 'JavaScript', level: 88, description: 'Interações front-end' },
  { name: 'Tailwind CSS', level: 92, description: 'Design system' },
  { name: 'GSAP', level: 85, description: 'Animações performáticas' }
])

const mobileAiSkills = ref([
  { name: 'Prompt Engineering', level: 98, description: 'Otimização de prompts IA' },
  { name: 'API Integration', level: 91, description: 'Integração de APIs' },
  { name: 'Workflow Automation', level: 94, description: 'Fluxos inteligentes' },
  { name: 'Data Processing', level: 86, description: 'Análise de dados' },
  { name: 'Cloud Services', level: 88, description: 'Plataformas em nuvem' }
])

const mobileStrategySkills = ref([
  { name: 'Digital Strategy', level: 95, description: 'Estratégias digitais' },
  { name: 'UX/UI Design', level: 89, description: 'Design de interfaces' },
  { name: 'Performance Analytics', level: 91, description: 'Métricas e conversão' },
  { name: 'SEO Optimization', level: 87, description: 'Otimização para buscas' },
  { name: 'Project Management', level: 92, description: 'Gestão de projetos' }
])

// Tech stack data
const mobileStackItems = ref([
  { name: 'Adobe' },
  { name: 'Nuxt.js' },
  { name: 'WordPress' },
  { name: 'AI Tools' },
  { name: 'Analytics' }
])

// Touch interaction functions
const onSkillTouch = (index, category) => {
  try {
    // Simple touch feedback
    const skillItems = document.querySelectorAll('.mobile-skill-item')
    if (skillItems[index]) {
      gsap.to(skillItems[index], { scale: 0.98, duration: 0.1 })
    }
  } catch (error) {
    console.log('Touch animation error:', error)
  }
}

const onSkillTouchEnd = (index, category) => {
  try {
    const skillItems = document.querySelectorAll('.mobile-skill-item')
    if (skillItems[index]) {
      gsap.to(skillItems[index], { scale: 1, duration: 0.2 })
    }
  } catch (error) {
    console.log('Touch release animation error:', error)
  }
}

onMounted(() => {
  try {
    // Set initial visibility
    const elements = [
      mobileSkillsHeader.value,
      mobileSkillsCategories.value,
      mobileTechStack.value
    ]
    
    elements.forEach(element => {
      if (element) {
        gsap.set(element, { opacity: 1, visibility: 'visible' })
      }
    })

    // Optimized entrance animations
    setTimeout(() => {
      if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline({ 
          defaults: { ease: "power2.out", duration: 0.4 }
        })

        // Mobile-optimized animation sequence
        tl.from(mobileSkillsHeader.value, { y: 20, opacity: 0 })
          .from('.mobile-skill-category', { 
            y: 15, 
            opacity: 0, 
            stagger: 0.1 
          }, "-=0.2")
          .from(mobileTechStack.value, { y: 15, opacity: 0 }, "-=0.1")
      }
    }, 100)

    // Continuous particle animation
    const particles = document.querySelectorAll('.mobile-skill-particle')
    if (particles.length > 0) {
      gsap.to(particles, {
        y: "random(-10, 10)",
        x: "random(-5, 5)",
        duration: 3,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 2,
          from: "random"
        }
      })
    }

  } catch (error) {
    console.log('GSAP animation error, elements will display normally:', error)
    // Fallback
    const fallbackElements = [
      mobileSkillsHeader.value,
      mobileSkillsCategories.value,
      mobileTechStack.value
    ]
    
    fallbackElements.forEach(element => {
      if (element) {
        element.style.opacity = '1'
        element.style.visibility = 'visible'
        element.style.transform = 'none'
      }
    })
  }
})
</script>

<style scoped>
/* Mobile Skills Section */
.mobile-skills-section {
  position: relative;
  min-height: 100vh;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  color: #ffffff;
  overflow: hidden;
}

/* Background Effects */
.mobile-skills-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.mobile-skills-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 100, 0, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 100, 0, 0.03) 1px, transparent 1px);
  background-size: 25px 25px;
  animation: mobileSkillsGridMove 20s linear infinite;
}

.mobile-skills-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6) 70%);
}

.mobile-tech-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(45deg, transparent 40%, rgba(255, 100, 0, 0.05) 50%, transparent 60%);
  background-size: 80px 80px;
  animation: mobileTechLinesMove 15s linear infinite;
}

@keyframes mobileSkillsGridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(25px, 25px); }
}

@keyframes mobileTechLinesMove {
  0% { background-position: 0 0; }
  100% { background-position: 80px 80px; }
}

/* Particles */
.mobile-skills-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.mobile-skill-particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255, 100, 0, 0.5);
  border-radius: 50%;
  pointer-events: none;
}

.particle-1 { top: 5%; left: 10%; }
.particle-2 { top: 15%; left: 90%; }
.particle-3 { top: 25%; left: 20%; }
.particle-4 { top: 35%; left: 80%; }
.particle-5 { top: 45%; left: 15%; }
.particle-6 { top: 55%; left: 85%; }
.particle-7 { top: 65%; left: 25%; }
.particle-8 { top: 75%; left: 75%; }
.particle-9 { top: 85%; left: 35%; }
.particle-10 { top: 95%; left: 65%; }
.particle-11 { top: 12%; left: 50%; }
.particle-12 { top: 88%; left: 5%; }

/* Main Container */
.mobile-skills-container {
  position: relative;
  z-index: 3;
  max-width: 100%;
}

/* Header */
.mobile-skills-header {
  text-align: center;
  margin-bottom: 3rem;
  opacity: 1;
  visibility: visible;
}

.mobile-skills-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  position: relative;
}

.mobile-skills-badge-dot {
  width: 6px;
  height: 6px;
  background: rgba(255, 100, 0, 0.8);
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(255, 100, 0, 0.5);
  animation: mobileSkillsBadgePulse 2s ease-in-out infinite;
}

.mobile-skills-badge-line {
  position: absolute;
  right: -1rem;
  top: 50%;
  width: 20px;
  height: 1px;
  background: linear-gradient(90deg, rgba(255, 100, 0, 0.5), transparent);
  transform: translateY(-50%);
}

@keyframes mobileSkillsBadgePulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
}

.mobile-skills-title {
  font-size: 1.8rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: -1px;
  text-shadow: 0 0 20px rgba(255, 100, 0, 0.3);
  line-height: 1.2;
}

.mobile-skills-subtitle {
  font-size: 0.9rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  max-width: 300px;
  margin: 0 auto;
  line-height: 1.5;
}

/* Skills Categories */
.mobile-skills-categories {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
  opacity: 1;
  visibility: visible;
}

.mobile-skill-category {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 100, 0, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
}

.mobile-category-header {
  margin-bottom: 1.5rem;
}

.mobile-category-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.mobile-category-icon {
  padding: 0.25rem 0.5rem;
  background: rgba(255, 100, 0, 0.2);
  border: 1px solid rgba(255, 100, 0, 0.4);
  border-radius: 6px;
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  font-weight: 600;
  color: rgba(255, 100, 0, 0.9);
}

/* Skills List */
.mobile-skills-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-skill-item {
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.mobile-skill-item:active {
  background: rgba(255, 100, 0, 0.1);
  border-color: rgba(255, 100, 0, 0.3);
}

.mobile-skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.mobile-skill-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
}

.mobile-skill-level {
  font-size: 0.8rem;
  font-weight: 700;
  color: rgba(255, 100, 0, 0.9);
  font-family: 'Courier New', monospace;
}

.mobile-skill-bar {
  position: relative;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-bottom: 0.5rem;
  overflow: hidden;
}

.mobile-skill-progress {
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 100, 0, 0.8), rgba(255, 100, 0, 0.6));
  border-radius: 2px;
  transition: width 0.8s ease;
  position: relative;
}

.mobile-skill-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 100, 0, 0.4), transparent);
  animation: mobileSkillGlow 2s ease-in-out infinite;
}

@keyframes mobileSkillGlow {
  0%, 100% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
}

.mobile-skill-description {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;
}

/* Tech Stack */
.mobile-tech-stack {
  text-align: center;
  opacity: 1;
  visibility: visible;
}

.mobile-stack-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.mobile-tech-icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.mobile-tech-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 100, 0, 0.2);
  border-radius: 12px;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  min-width: 80px;
}

.mobile-tech-icon:active {
  transform: scale(0.95);
  background: rgba(255, 100, 0, 0.1);
  border-color: rgba(255, 100, 0, 0.4);
}

.mobile-tech-placeholder {
  width: 32px;
  height: 32px;
  background: rgba(255, 100, 0, 0.2);
  border: 1px solid rgba(255, 100, 0, 0.4);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: rgba(255, 100, 0, 0.9);
  font-size: 1rem;
}

.mobile-tech-name {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-weight: 600;
}

/* Extra small screens */
@media (max-width: 375px) {
  .mobile-skills-section { padding: 2rem 0.75rem; }
  .mobile-skills-title { font-size: 1.6rem; }
  .mobile-skills-subtitle { font-size: 0.85rem; }
  .mobile-skill-category { padding: 1.25rem; }
  .mobile-tech-icons { gap: 0.75rem; }
  .mobile-tech-icon { min-width: 70px; padding: 0.75rem; }
}
</style>