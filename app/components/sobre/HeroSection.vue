<template>
  <section class="hero-section" ref="heroSection">
    <!-- Background Effects -->
    <div class="background-effects">
      <div class="grid-pattern"></div>
      <div class="gradient-overlay"></div>
      <div class="neural-network"></div>
      <div class="energy-waves"></div>
    </div>
    
    <!-- Particles System -->
    <ClientOnly>
      <div class="particles-container">
        <div v-for="i in 20" :key="i" class="particle" :class="`particle-${i}`"></div>
      </div>
    </ClientOnly>
    
    <!-- HUD Elements -->
    <div class="hud-overlay">
      <div class="hud-corners">
        <div class="corner top-left"></div>
        <div class="corner top-right"></div>
        <div class="corner bottom-left"></div>
        <div class="corner bottom-right"></div>
      </div>
      
      <div class="status-bar" ref="statusBar">
        <span class="status-text">SOBRE.AIKA.PROFILE</span>
        <div class="status-dots">
          <div class="dot active"></div>
          <div class="dot active"></div>
          <div class="dot active"></div>
        </div>
      </div>
    </div>
    
    <!-- Main Content -->
    <div class="hero-content">
      <div class="content-container">
        
        <!-- Title -->
        <h1 class="hero-title glitch-title" ref="heroTitle" data-text="AIKA NAKAMURA">
          AIKA NAKAMURA
        </h1>
        
        <!-- Subtitle -->
        <p class="hero-subtitle" ref="heroSubtitle">
          Assistente Digital Especializada em Estratégias Avançadas
        </p>
        
        <!-- Description -->
        <p class="hero-description" ref="heroDescription">
          Revolucionando processos digitais através da fusão perfeita entre criatividade humana e precisão de máquina. 
          Especializada em automação inteligente, análise de dados e desenvolvimento web de alta performance.
        </p>
        
        
        
        <!-- CTA Buttons -->
        <div class="cta-group" ref="ctaGroup">
          <a href="#about" class="hero-cta primary" @click="scrollToSection">
            <span class="cta-text">CONHECER MAIS</span>
            <div class="cta-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            <div class="cta-glow"></div>
          </a>
          
          <NuxtLink to="/contato" class="hero-cta secondary">
            <span class="cta-text">ENTRAR EM CONTATO</span>
            <div class="cta-glow"></div>
          </NuxtLink>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <div class="scroll-line"></div>
      <div class="scroll-text">SCROLL</div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { NuxtLink } from '#components'

// Template refs
const heroSection = ref(null)
const statusBar = ref(null)
const heroTitle = ref(null)
const heroSubtitle = ref(null)
const heroDescription = ref(null)
const ctaGroup = ref(null)

onMounted(() => {
  // Entrance animation timeline
  const tl = gsap.timeline({ 
    defaults: { ease: "power3.out", duration: 0.8 }
  })

  // HUD entrance
  tl.from('.corner', { scale: 0, stagger: 0.1, duration: 0.5 })
    .from(statusBar.value, { y: -30, opacity: 0 }, "-=0.3")

  // Content entrance
  .from(heroTitle.value, { x: -50, opacity: 0 }, "-=0.2")
    .from(heroSubtitle.value, { y: 30, opacity: 0 }, "-=0.1")
    .from(heroDescription.value, { y: 30, opacity: 0 }, "-=0.1")
    .from(ctaGroup.value, { y: 30, opacity: 0 }, "-=0.1")

  // Continuous animations
  // Particle animations (using CSS animations for better performance)
  const particles = document.querySelectorAll('.particle')
  if (particles.length > 0) {
    gsap.to(particles, {
      y: '-=20',
      duration: 3,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 2,
        from: 'random'
      }
    })
  }

  // Glitch effect on title hover
  if (heroTitle.value) {
    heroTitle.value.addEventListener('mouseenter', () => {
      gsap.to(heroTitle.value, {
        duration: 0.1,
        repeat: 3,
        yoyo: true,
        x: 2,
        textShadow: '2px 0 #ff0000, -2px 0 #00ffff',
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(heroTitle.value, { x: 0, textShadow: 'none' })
        }
      })
    })
  }
})

// Scroll to section function
const scrollToSection = (e) => {
  e.preventDefault()
  const target = e.currentTarget.getAttribute('href').substring(1)
  const element = document.getElementById(target)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  overflow: hidden;
  color: #ffffff;
  display: flex;
  align-items: center;
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
  background: radial-gradient(circle at center, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 70%);
}

.neural-network {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(255, 100, 0, 0.1) 2px, transparent 2px),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 150px 150px, 100px 100px;
  animation: neuralPulse 12s ease-in-out infinite;
}

.energy-waves {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(45deg, transparent 40%, rgba(255, 100, 0, 0.05) 50%, transparent 60%);
  background-size: 400px 400px;
  animation: energyFlow 10s linear infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(30px, 30px); }
}

@keyframes neuralPulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.02); }
}

@keyframes energyFlow {
  0% { background-position: 0 0; }
  100% { background-position: 400px 400px; }
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
  width: 3px;
  height: 3px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  pointer-events: none;
}

/* Generate random positions */
.particle:nth-child(1) { top: 10%; left: 15%; }
.particle:nth-child(2) { top: 25%; left: 80%; }
.particle:nth-child(3) { top: 40%; left: 30%; }
.particle:nth-child(4) { top: 60%; left: 70%; }
.particle:nth-child(5) { top: 80%; left: 20%; }
.particle:nth-child(6) { top: 15%; left: 60%; }
.particle:nth-child(7) { top: 35%; left: 90%; }
.particle:nth-child(8) { top: 55%; left: 10%; }
.particle:nth-child(9) { top: 75%; left: 50%; }
.particle:nth-child(10) { top: 20%; left: 40%; }
.particle:nth-child(11) { top: 45%; left: 85%; }
.particle:nth-child(12) { top: 65%; left: 25%; }
.particle:nth-child(13) { top: 85%; left: 75%; }
.particle:nth-child(14) { top: 30%; left: 5%; }
.particle:nth-child(15) { top: 70%; left: 95%; }
.particle:nth-child(16) { top: 12%; left: 35%; }
.particle:nth-child(17) { top: 38%; left: 65%; }
.particle:nth-child(18) { top: 58%; left: 15%; }
.particle:nth-child(19) { top: 78%; left: 85%; }
.particle:nth-child(20) { top: 22%; left: 75%; }

/* HUD Elements */
.hud-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.hud-corners {
  position: absolute;
  top: 2rem;
  left: 2rem;
  right: 2rem;
  bottom: 2rem;
}

.corner {
  position: absolute;
  width: 30px;
  height: 30px;
}

.corner.top-left {
  top: 0;
  left: 0;
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  border-left: 2px solid rgba(255, 255, 255, 0.5);
}

.corner.top-right {
  top: 0;
  right: 0;
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  border-right: 2px solid rgba(255, 255, 255, 0.5);
}

.corner.bottom-left {
  bottom: 0;
  left: 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  border-left: 2px solid rgba(255, 255, 255, 0.5);
}

.corner.bottom-right {
  bottom: 0;
  right: 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  border-right: 2px solid rgba(255, 255, 255, 0.5);
}

.status-bar {
  position: absolute;
  top: 6.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  pointer-events: auto;
}

.status-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
}

.dot.active {
  background: #00ff00;
  box-shadow: 0 0 8px #00ff00;
}

/* Content */
.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 0 2rem;
  margin-top: 4rem; /* Adiciona margem superior para não ficar em cima do header */
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}


.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: -2px;
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

.hero-subtitle {
  font-size: clamp(1.2rem, 3vw, 2rem);
  font-weight: 300;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 3rem;
  opacity: 0.8;
}


/* CTA Buttons */
.cta-group {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-cta {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  text-decoration: none;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  transition: all 0.3s ease;
  overflow: hidden;
}

.hero-cta.primary {
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.hero-cta.secondary {
  border: 2px solid rgba(255, 100, 0, 0.5);
  background: rgba(255, 100, 0, 0.1);
  color: #ffffff;
}

.hero-cta:hover {
  transform: translateY(-2px);
}

.hero-cta.primary:hover {
  border-color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
}

.hero-cta.secondary:hover {
  border-color: rgba(255, 100, 0, 0.8);
  background: rgba(255, 100, 0, 0.2);
  box-shadow: 0 10px 30px rgba(255, 100, 0, 0.3);
}

.cta-arrow {
  transition: transform 0.3s ease;
}

.hero-cta:hover .cta-arrow {
  transform: translateX(5px);
}

.cta-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.hero-cta:hover .cta-glow {
  left: 100%;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  animation: scrollBounce 2s ease-in-out infinite;
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.5);
}

.scroll-text {
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

@keyframes scrollBounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-10px); }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content {
    padding: 0 1rem;
  }
  
  .cta-group {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-cta {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style>