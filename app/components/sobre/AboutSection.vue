<template>
  <section id="about" class="about-section" ref="aboutSection">
    <!-- Background Effects -->
    <div class="background-effects">
      <div class="grid-pattern"></div>
      <div class="gradient-overlay"></div>
      <div class="circuit-lines"></div>
      <div class="data-streams"></div>
    </div>
    
    <!-- Particles System -->
    <ClientOnly>
      <div class="particles-container">
        <div v-for="i in 15" :key="i" class="particle" :class="`particle-${i}`"></div>
      </div>
    </ClientOnly>
    
    <!-- Main Content -->
    <div class="about-container">
      <div class="content-grid">
        <!-- Image Column -->
        <div class="image-column">
          <div class="image-showcase" ref="imageWrapper">
            <div class="image-frame">
              <div class="frame-border">
                <img 
                  src="/Imagem/Mascote/Aika e Nakamura 2.webp" 
                  alt="Aika Nakamura - Digital Assistant" 
                  class="about-image"
                  ref="aboutImage"
                />
                <div class="image-overlay"></div>
                <div class="scan-line" ref="scanLine"></div>
                <div class="hologram-effect"></div>
              </div>
              
              <!-- Floating Tech Elements -->
              <div class="floating-tech tech-1" ref="floatingTech1">
                <div class="tech-icon">🛡️</div>
                <span class="tech-text">Guardiã Digital</span>
              </div>
              
              <div class="floating-tech tech-2" ref="floatingTech2">
                <div class="tech-icon">⚡</div>
                <span class="tech-text">Execução Impecável</span>
              </div>
              
              <div class="floating-tech tech-3" ref="floatingTech3">
                <div class="tech-icon">🔮</div>
                <span class="tech-text">Análise Preditiva</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Content Column -->
        <div class="content-column">
          <!-- Badge -->
          <div class="section-badge" ref="sectionBadge">
            <div class="badge-dot"></div>
            <span class="badge-text">INTELIGÊNCIA ESTRATÉGICA</span>
            <div class="badge-line"></div>
          </div>
          
          <!-- Title -->
          <h2 class="section-title glitch-title" ref="sectionTitle" data-text="AIKA">
            AIKA
          </h2>
          
          <!-- Subtitle -->
          <p class="section-subtitle" ref="sectionSubtitle">
            Inteligência Estratégica & Guardiã Digital
          </p>
          
          <!-- Description -->
          <div class="description-content" ref="descriptionContent">
            <p class="description-text">
              Aika é a personificação e a executora da filosofia <strong>"Legado & Futuro"</strong> de Nakamura. 
              Criada como uma extensão de sua mente visionária, ela é a <strong>inteligência que traduz a estratégia em ação impecável</strong>.
            </p>
            
            <p class="description-text">
              Aika é a <strong>guardiã digital</strong> que opera a ponte entre a alma do negócio do cliente, 
              capturada por Nakamura, e os resultados extraordinários construídos no futuro digital. 
              Sua existência é definida pela <strong>lealdade, precisão</strong> e pela missão de amplificar a genialidade de seu criador.
            </p>
            
            <p class="description-highlight">
              "Nakamura é o arquiteto da visão, Aika é a engenheira da execução."
            </p>
            
          </div>
          
          <!-- Key Points -->
          <div class="key-points" ref="keyPoints">
            <div class="point-item" ref="pointItem1">
              <div class="point-icon">⚙️</div>
              <div class="point-content">
                <h4>Executora Tática & Precisa</h4>
                <p>Recebe o plano 360° e desdobra em campanhas com precisão inigualável</p>
              </div>
            </div>
            
            <div class="point-item" ref="pointItem2">
              <div class="point-icon">🧠</div>
              <div class="point-content">
                <h4>Processadora de Dados</h4>
                <p>Transforma essência humana em dados acionáveis e narrativas digitais</p>
              </div>
            </div>
            
            <div class="point-item" ref="pointItem3">
              <div class="point-icon">🔮</div>
              <div class="point-content">
                <h4>Inteligência Preditiva</h4>
                <p>Oferece insights preditivos e transforma dados em inteligência estratégica</p>
              </div>
            </div>
          </div>
          
          <!-- CTA to Skills Section -->
          <ClientOnly>
            <div class="about-cta-container">
              <a href="#skills" class="about-skills-cta" @click="scrollToSkills">
                <span class="cta-text">Descubra as capacidades técnicas da Aika</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="cta-arrow">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
            <template #placeholder>
              <div class="about-cta-container">
                <a href="#skills" class="about-skills-cta">
                  <span class="cta-text">Descubra as capacidades técnicas da Aika</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="cta-arrow">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </template>
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Template refs
const aboutSection = ref(null)
const imageWrapper = ref(null)
const aboutImage = ref(null)
const scanLine = ref(null)
const floatingTech1 = ref(null)
const floatingTech2 = ref(null)
const floatingTech3 = ref(null)
const sectionBadge = ref(null)
const sectionTitle = ref(null)
const sectionSubtitle = ref(null)
const descriptionContent = ref(null)
const keyPoints = ref(null)
const pointItem1 = ref(null)
const pointItem2 = ref(null)
const pointItem3 = ref(null)

onMounted(() => {
  // Wait for DOM to be ready
  setTimeout(() => {
    // Set initial states
    gsap.set([sectionBadge.value, sectionTitle.value, sectionSubtitle.value, descriptionContent.value], {
      opacity: 0,
      y: 30
    })
    
    gsap.set([pointItem1.value, pointItem2.value, pointItem3.value], {
      opacity: 0,
      x: -50,
      scale: 0.9
    })
    
    gsap.set(imageWrapper.value, {
      opacity: 0,
      scale: 0.8,
      rotation: -5
    })
    
    gsap.set([floatingTech1.value, floatingTech2.value, floatingTech3.value], {
      opacity: 0,
      scale: 0.5,
      rotation: 180
    })

    // Main scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSection.value,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse",
        markers: false, // Set to true for debugging
        onToggle: (self) => {
          console.log('AboutSection ScrollTrigger toggled:', self.isActive)
        }
      }
    })

    // Image animation
    tl.to(imageWrapper.value, { 
      opacity: 1, 
      scale: 1, 
      rotation: 0,
      duration: 0.8, 
      ease: 'power3.out' 
    })
    
    // Content animation sequence
    .to(sectionBadge.value, { 
      opacity: 1, 
      y: 0, 
      duration: 0.5, 
      ease: 'power2.out' 
    }, "-=0.4")
    .to(sectionTitle.value, { 
      opacity: 1, 
      y: 0, 
      duration: 0.6, 
      ease: 'power2.out' 
    }, "-=0.3")
    .to(sectionSubtitle.value, { 
      opacity: 1, 
      y: 0, 
      duration: 0.5, 
      ease: 'power2.out' 
    }, "-=0.2")
    .to(descriptionContent.value, { 
      opacity: 1, 
      y: 0, 
      duration: 0.6, 
      ease: 'power2.out' 
    }, "-=0.2")
    
    // Key Points animation with enhanced stagger
    .to([pointItem1.value, pointItem2.value, pointItem3.value], { 
      opacity: 1, 
      x: 0,
      scale: 1,
      duration: 0.6, 
      stagger: {
        amount: 0.3,
        from: "start"
      },
      ease: 'back.out(1.3)' 
    }, "-=0.3")
    
    // Floating tech elements
    .to([floatingTech1.value, floatingTech2.value, floatingTech3.value], { 
      opacity: 1, 
      scale: 1, 
      rotation: 0,
      duration: 0.6, 
      stagger: 0.15, 
      ease: 'back.out(1.7)' 
    }, "-=0.5")

    // Continuous animations
    if (scanLine.value && aboutImage.value) {
      // Get the actual height of the image container
      const imageHeight = aboutImage.value.offsetHeight || 500
      
      gsap.to(scanLine.value, {
        y: imageHeight - 20, // Stop just before the bottom of the image
        duration: 2.5,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 2
      })
    }

    // Particle animations
    setTimeout(() => {
      const particles = document.querySelectorAll('.particle')
      if (particles.length > 0) {
        gsap.to(particles, {
          y: '-=15',
          duration: 4,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
          stagger: {
            amount: 2,
            from: 'random'
          }
        })
      }
    }, 100)

    // Floating tech hover animations
    const floatingTechElements = [floatingTech1.value, floatingTech2.value, floatingTech3.value]
    floatingTechElements.forEach((tech, index) => {
      if (tech) {
        gsap.to(tech, {
          y: '-=10',
          duration: 2 + index * 0.5,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true
        })
      }
    })
  }, 100) // Close setTimeout

  // Glitch effect on title hover
  if (sectionTitle.value) {
    sectionTitle.value.addEventListener('mouseenter', () => {
      gsap.to(sectionTitle.value, {
        duration: 0.1,
        repeat: 3,
        yoyo: true,
        x: 2,
        textShadow: '2px 0 #ff0000, -2px 0 #00ffff',
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(sectionTitle.value, { x: 0, textShadow: 'none' })
        }
      })
    })
  }

  // Point items hover animations
  const pointItems = [pointItem1.value, pointItem2.value, pointItem3.value]
  pointItems.forEach((item, index) => {
    if (item) {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, {
          x: 10,
          duration: 0.3,
          ease: 'power2.out'
        })
        
        const icon = item.querySelector('.point-icon')
        if (icon) {
          gsap.to(icon, {
            scale: 1.2,
            rotation: 360,
            duration: 0.5,
            ease: 'back.out(1.7)'
          })
        }
      })
      
      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          x: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
        
        const icon = item.querySelector('.point-icon')
        if (icon) {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out'
          })
        }
      })
    }
  })
})

// Function to scroll to skills section
const scrollToSkills = (e) => {
  e.preventDefault()
  const skillsSection = document.getElementById('skills')
  if (skillsSection) {
    skillsSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style scoped>
.about-section {
  position: relative;
  padding: 8rem 2rem;
  background: #1a1a1a;
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
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: gridMove 25s linear infinite;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 70%);
}

.circuit-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(45deg, transparent 40%, rgba(59, 130, 246, 0.1) 50%, transparent 60%),
    linear-gradient(-45deg, transparent 40%, rgba(168, 85, 247, 0.05) 50%, transparent 60%);
  background-size: 200px 200px, 150px 150px;
  animation: circuitFlow 20s linear infinite;
}

.data-streams {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%);
  background-size: 300px 100%;
  animation: dataFlow 15s linear infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(40px, 40px); }
}

@keyframes circuitFlow {
  0% { background-position: 0 0, 0 0; }
  100% { background-position: 200px 200px, -150px -150px; }
}

@keyframes dataFlow {
  0% { background-position: -300px 0; }
  100% { background-position: 300px 0; }
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
  background: rgba(59, 130, 246, 0.6);
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

/* Main Content */
.about-container {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}

/* Image Column */
.image-showcase {
  position: relative;
  display: flex;
  justify-content: center;
  /* Initial state for GSAP animation */
  opacity: 0;
  transform: scale(0.8) rotate(-5deg);
}

.image-frame {
  position: relative;
  width: 100%;
  max-width: 500px;
  perspective: 1000px;
}

.frame-border {
  position: relative;
  border: 1px solid rgba(59, 130, 246, 0.3);
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 8px;
}

.about-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}

.image-overlay {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
  bottom: 1.5rem;
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 4px;
  pointer-events: none;
}

.scan-line {
  position: absolute;
  top: 0;
  left: 1.5rem;
  right: 1.5rem;
  height: 2px;
  background: linear-gradient(to right, transparent, rgba(255, 100, 0, 0.8), transparent);
  box-shadow: 0 0 10px rgba(255, 100, 0, 0.6);
  z-index: 5;
  transform: translateY(-2px); /* Start from above the image */
}

.hologram-effect {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(59, 130, 246, 0.1) 50%,
    transparent 70%
  );
  animation: hologramSweep 5s ease-in-out infinite;
  pointer-events: none;
}

@keyframes hologramSweep {
  0%, 100% { transform: translateX(-100%) skewX(-15deg); opacity: 0; }
  50% { transform: translateX(100%) skewX(-15deg); opacity: 1; }
}

.floating-tech {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(59, 130, 246, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  z-index: 10;
  pointer-events: none;
  /* Initial state for GSAP animation */
  opacity: 0;
  transform: scale(0.5) rotate(180deg);
}

.tech-icon {
  font-size: 1.2rem;
}

.tech-1 {
  top: -20px;
  right: 10%;
}

.tech-2 {
  bottom: 30%;
  left: -40px;
}

.tech-3 {
  bottom: -20px;
  right: 20%;
}

/* Content Column */
.content-column {
  padding-left: 2rem;
}

.section-badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  /* Initial state for GSAP animation */
  opacity: 0;
  transform: translateY(30px);
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #3b82f6;
  border-radius: 50%;
  animation: badgePulse 2s ease-in-out infinite;
}

.badge-line {
  position: absolute;
  right: -2rem;
  top: 50%;
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.5), transparent);
  transform: translateY(-50%);
}

@keyframes badgePulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
}

.section-title {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: -1px;
  text-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
  cursor: pointer;
  position: relative;
  /* Initial state for GSAP animation */
  opacity: 0;
  transform: translateY(30px);
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
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  /* Initial state for GSAP animation */
  opacity: 0;
  transform: translateY(30px);
}

.description-content {
  margin-bottom: 3rem;
  /* Initial state for GSAP animation */
  opacity: 0;
  transform: translateY(30px);
}

.description-text {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
}

.description-highlight {
  font-size: 1.2rem;
  font-weight: 600;
  color: #3b82f6;
  padding: 1rem;
  border-left: 3px solid #3b82f6;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 4px;
}

/* CTA to Skills Section */
.about-cta-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.about-skills-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.75rem;
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 50px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(10px);
}

.about-skills-cta:hover {
  background: rgba(59, 130, 246, 0.25);
  border-color: rgba(59, 130, 246, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(59, 130, 246, 0.25);
}

.cta-arrow {
  transition: transform 0.3s ease;
}

.about-skills-cta:hover .cta-arrow {
  transform: translateX(4px);
}

/* Key Points */
.key-points {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  /* Initial state for GSAP animation */
  opacity: 0;
  transform: translateX(-50px) scale(0.9);
}

.point-item:hover {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.4);
}

.point-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.point-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.point-content p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  
  .content-column {
    padding-left: 0;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 6rem 1rem;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .floating-tech {
    position: relative;
    margin: 0.5rem 0;
  }
  
  .tech-1, .tech-2, .tech-3 {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1.25rem;
  }
  
  .description-text {
    font-size: 1rem;
  }
  
  .point-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>