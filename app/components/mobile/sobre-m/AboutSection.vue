<template>
  <section id="about" class="mobile-about-section" ref="mobileAboutSection">
    <!-- Background Effects -->
    <div class="mobile-bg-effects">
      <div class="mobile-grid-pattern"></div>
      <div class="mobile-gradient-overlay"></div>
      <div class="mobile-circuit-lines"></div>
    </div>
    
    <!-- Particles System -->
    <div class="mobile-particles-container">
      <div v-for="i in 8" :key="i" class="mobile-particle" :class="`particle-${i}`"></div>
    </div>
    
    <!-- Main Content -->
    <div class="mobile-about-container">
      <!-- Image Section -->
      <div class="mobile-image-section">
        <div class="mobile-image-showcase" ref="mobileImageWrapper">
          <div class="mobile-image-frame">
            <img 
              src="/Imagem/Mascote/Aika e Nakamura 2.webp" 
              alt="Aika Nakamura - Digital Assistant" 
              class="mobile-about-image"
              ref="mobileAboutImage"
            />
            <div class="mobile-image-overlay"></div>
            <div class="mobile-scan-line" ref="mobileScanLine"></div>
          </div>
          
          <!-- Floating Tech Elements -->
          <div class="mobile-floating-tech tech-1" ref="mobileFloatingTech1">
            <div class="mobile-tech-icon">🛡️</div>
            <span class="mobile-tech-text">Guardiã</span>
          </div>
          
          <div class="mobile-floating-tech tech-2" ref="mobileFloatingTech2">
            <div class="mobile-tech-icon">⚡</div>
            <span class="mobile-tech-text">Execução</span>
          </div>
          
          <div class="mobile-floating-tech tech-3" ref="mobileFloatingTech3">
            <div class="mobile-tech-icon">🔮</div>
            <span class="mobile-tech-text">Preditiva</span>
          </div>
        </div>
      </div>
      
      <!-- Content Section -->
      <div class="mobile-content-section">
        <!-- Badge -->
        <div class="mobile-section-badge" ref="mobileSectionBadge">
          <div class="mobile-badge-dot"></div>
          <span class="mobile-badge-text">INTELIGÊNCIA ESTRATÉGICA</span>
          <div class="mobile-badge-line"></div>
        </div>
        
        <!-- Title -->
        <h2 class="mobile-section-title" ref="mobileSectionTitle">
          AIKA
        </h2>
        
        <!-- Subtitle -->
        <p class="mobile-section-subtitle" ref="mobileSectionSubtitle">
          Inteligência Estratégica & Guardiã Digital
        </p>
        
        <!-- Description -->
        <div class="mobile-description-content" ref="mobileDescriptionContent">
          <p class="mobile-description-text">
            Aika é a personificação da filosofia <strong>"Legado & Futuro"</strong> de Nakamura. 
            Criada como extensão de sua mente visionária, ela é a <strong>inteligência que traduz estratégia em ação impecável</strong>.
          </p>
          
          <p class="mobile-description-text">
            Aika é a <strong>guardiã digital</strong> que conecta a alma do negócio do cliente aos resultados extraordinários no futuro digital. 
            Sua existência é definida pela <strong>lealdade e precisão</strong>.
          </p>
          
          <p class="mobile-description-highlight">
            "Nakamura é o arquiteto da visão, Aika é a engenheira da execução."
          </p>
          
          <!-- CTA to Skills Section -->
          <div class="mobile-about-cta-container">
            <a href="#skills" class="mobile-about-skills-cta" @click="scrollToSkills">
              <span class="mobile-cta-text">Capacidades técnicas da Aika</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mobile-cta-arrow">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          
          <!-- CTA to Contact Page -->
          <div class="mobile-about-cta-container">
            <NuxtLink to="/contato" class="mobile-about-contact-cta">
              <span class="mobile-cta-text">Entrar em Contato</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mobile-cta-arrow">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { NuxtLink } from '#components'

// Template refs
const mobileAboutSection = ref(null)
const mobileImageWrapper = ref(null)
const mobileAboutImage = ref(null)
const mobileScanLine = ref(null)
const mobileFloatingTech1 = ref(null)
const mobileFloatingTech2 = ref(null)
const mobileFloatingTech3 = ref(null)
const mobileSectionBadge = ref(null)
const mobileSectionTitle = ref(null)
const mobileSectionSubtitle = ref(null)
const mobileDescriptionContent = ref(null)

// Scroll to skills function
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

onMounted(() => {
  try {
    // Set initial opacity for all elements
    const allElements = [
      mobileImageWrapper.value,
      mobileSectionBadge.value,
      mobileSectionTitle.value,
      mobileSectionSubtitle.value,
      mobileDescriptionContent.value
    ]
    
    allElements.forEach(element => {
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
        tl.from(mobileImageWrapper.value, { y: 20, opacity: 0 })
          .from(mobileSectionBadge.value, { y: 15, opacity: 0 }, "-=0.2")
          .from(mobileSectionTitle.value, { y: 15, opacity: 0 }, "-=0.15")
          .from(mobileSectionSubtitle.value, { y: 10, opacity: 0 }, "-=0.1")
          .from(mobileDescriptionContent.value, { y: 15, opacity: 0 }, "-=0.1")
      }
    }, 100)

    // Continuous animations
    if (mobileScanLine.value && mobileAboutImage.value) {
      // Get the actual height of the mobile image container  
      const mobileImageHeight = mobileAboutImage.value.offsetHeight || 300
      
      gsap.to(mobileScanLine.value, {
        y: mobileImageHeight - 40, // Account for padding and stop before bottom
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 2
      })
    }

    // Floating tech elements animation
    const floatingTech = [mobileFloatingTech1.value, mobileFloatingTech2.value, mobileFloatingTech3.value]
    floatingTech.forEach((tech, index) => {
      if (tech) {
        gsap.to(tech, {
          y: "random(-5, 5)",
          x: "random(-3, 3)",
          rotation: "random(-2, 2)",
          duration: 3 + index * 0.5,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 0.2
        })
      }
    })

  } catch (error) {
    console.log('GSAP animation error, elements will display normally:', error)
    // Fallback: ensure all elements are visible
    const fallbackElements = [
      mobileImageWrapper.value,
      mobileSectionBadge.value,
      mobileSectionTitle.value,
      mobileSectionSubtitle.value,
      mobileDescriptionContent.value
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
/* Mobile About Section */
.mobile-about-section {
  position: relative;
  min-height: 100vh;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #ffffff;
  overflow: hidden;
}

/* Background Effects */
.mobile-bg-effects {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.mobile-grid-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: mobileGridMove 20s linear infinite;
}

.mobile-gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 70%);
}

.mobile-circuit-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(45deg, transparent 40%, rgba(255, 100, 0, 0.05) 50%, transparent 60%),
    linear-gradient(-45deg, transparent 40%, rgba(255, 255, 255, 0.02) 50%, transparent 60%);
  background-size: 100px 100px, 80px 80px;
  animation: mobileCircuitFlow 15s linear infinite;
}

@keyframes mobileGridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}

@keyframes mobileCircuitFlow {
  0% { background-position: 0 0, 0 0; }
  100% { background-position: 100px 100px, -80px -80px; }
}

/* Particles */
.mobile-particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.mobile-particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  pointer-events: none;
  animation: mobileParticleFloat 4s ease-in-out infinite;
}

.particle-1 { top: 10%; left: 20%; animation-delay: 0s; }
.particle-2 { top: 30%; left: 80%; animation-delay: 0.5s; }
.particle-3 { top: 50%; left: 15%; animation-delay: 1s; }
.particle-4 { top: 70%; left: 85%; animation-delay: 1.5s; }
.particle-5 { top: 20%; left: 60%; animation-delay: 2s; }
.particle-6 { top: 80%; left: 40%; animation-delay: 2.5s; }
.particle-7 { top: 40%; left: 90%; animation-delay: 3s; }
.particle-8 { top: 90%; left: 10%; animation-delay: 3.5s; }

@keyframes mobileParticleFloat {
  0%, 100% { opacity: 0.4; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-10px); }
}

/* Main Container */
.mobile-about-container {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 100%;
}

/* Image Section */
.mobile-image-section {
  order: 1;
  display: flex;
  justify-content: center;
}

.mobile-image-showcase {
  position: relative;
  width: 100%;
  max-width: 300px;
}

.mobile-image-frame {
  position: relative;
  border: 1px solid rgba(255, 100, 0, 0.3);
  border-radius: 16px;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  overflow: hidden;
}

.mobile-about-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  display: block;
  position: relative;
  z-index: 1;
}

.mobile-image-overlay {
  position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;
  border: 1px solid rgba(255, 100, 0, 0.2);
  border-radius: 12px;
  pointer-events: none;
}

.mobile-scan-line {
  position: absolute;
  top: 1rem; /* Start within the frame padding */
  left: 1.5rem;
  right: 1.5rem;
  height: 2px;
  background: linear-gradient(to right, transparent, rgba(255, 100, 0, 0.8), transparent);
  box-shadow: 0 0 8px rgba(255, 100, 0, 0.6);
  z-index: 5;
  transform: translateY(0); /* Start from the actual top position */
}

/* Floating Tech Elements */
.mobile-floating-tech {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 100, 0, 0.3);
  border-radius: 12px;
  backdrop-filter: blur(5px);
  font-size: 0.7rem;
  z-index: 10;
}

.mobile-tech-icon {
  font-size: 0.8rem;
}

.tech-1 {
  top: -10px;
  right: 10%;
}

.tech-2 {
  bottom: 15%;
  left: -15px;
}

.tech-3 {
  bottom: -10px;
  right: 20%;
}

/* Content Section */
.mobile-content-section {
  order: 2;
  text-align: center;
  padding: 1rem 0;
}

/* Badge */
.mobile-section-badge {
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
  opacity: 1;
}

.mobile-badge-dot {
  width: 6px;
  height: 6px;
  background: rgba(255, 100, 0, 0.8);
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(255, 100, 0, 0.5);
  animation: mobileBadgePulse 2s ease-in-out infinite;
}

.mobile-badge-line {
  position: absolute;
  right: -1rem;
  top: 50%;
  width: 20px;
  height: 1px;
  background: linear-gradient(90deg, rgba(255, 100, 0, 0.5), transparent);
  transform: translateY(-50%);
}

@keyframes mobileBadgePulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
}

/* Title */
.mobile-section-title {
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: -1px;
  text-shadow: 0 0 20px rgba(255, 100, 0, 0.3);
  line-height: 1.2;
}

/* Subtitle */
.mobile-section-subtitle {
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  line-height: 1.5;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

/* Description */
.mobile-description-content {
  opacity: 1;
  visibility: visible;
}

.mobile-description-text {
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  text-align: left;
}

.mobile-description-text strong {
  color: rgba(255, 100, 0, 0.9);
  font-weight: 600;
}

.mobile-description-highlight {
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 100, 0, 0.9);
  text-align: center;
  margin: 1.5rem 0;
  padding: 1rem;
  border: 1px solid rgba(255, 100, 0, 0.3);
  border-radius: 12px;
  background: rgba(255, 100, 0, 0.05);
  backdrop-filter: blur(5px);
}

/* CTA */
.mobile-about-cta-container {
  margin-top: 2rem;
  text-align: center;
}

.mobile-about-skills-cta,
.mobile-about-contact-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 100, 0, 0.1);
  border: 1px solid rgba(255, 100, 0, 0.3);
  border-radius: 25px;
  text-decoration: none;
  color: #ffffff;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.mobile-about-skills-cta:hover,
.mobile-about-contact-cta:hover {
  background: rgba(255, 100, 0, 0.2);
  border-color: rgba(255, 100, 0, 0.6);
  transform: translateY(-2px);
}

.mobile-cta-arrow {
  transition: transform 0.3s ease;
}

.mobile-about-skills-cta:hover .mobile-cta-arrow,
.mobile-about-contact-cta:hover .mobile-cta-arrow {
  transform: translateX(3px);
}

/* Extra small screens */
@media (max-width: 375px) {
  .mobile-about-section { padding: 2rem 0.75rem; }
  .mobile-section-title { font-size: 1.75rem; }
  .mobile-section-subtitle { font-size: 0.9rem; }
  .mobile-description-text { font-size: 0.85rem; }
  .mobile-image-showcase { max-width: 250px; }
}
</style>