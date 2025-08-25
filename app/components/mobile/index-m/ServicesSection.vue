<template>
  <section id="servicos" class="services-mobile-section" ref="servicesMobileSection">
    
    <!-- Enhanced Background Effects (Mobile) -->
    <div class="background-effects">
      <div class="grid-pattern"></div>
      <div class="gradient-overlay"></div>
      <div class="circuit-lines"></div>
      <div class="data-streams"></div>
      <div class="neural-network"></div>
      <div class="energy-waves"></div>
    </div>
    
    <!-- Particles System (Mobile) -->
    <div class="particles-container">
      <div v-for="i in 15" :key="i" class="particle" :class="`particle-${i}`"></div>
    </div>
    
    <!-- Mobile Content -->
    <div class="services-mobile-content">
      <div class="mobile-container">
        
        <!-- Mobile Header -->
        <div class="mobile-header">
          <!-- Desktop-style Badge -->
          <div ref="mobileBadge" class="hero-badge">
            <div class="badge-dot"></div>
            <span class="badge-text">DIGITAL SERVICES</span>
            <div class="badge-line"></div>
          </div>
          
          <h2 ref="mobileTitle" class="section-title">PACOTES ESTRATÉGICOS</h2>
          <p ref="mobileSubtitle" class="section-subtitle">
            Sua inteligência dedicada, construindo seu futuro digital através de uma abordagem 360º personalizada.
          </p>
        </div>

        <!-- Mobile Services Cards (Desktop-style) -->
        <div ref="mobileCards" class="mobile-services-grid">
          <div v-for="(service, index) in mobileServices" :key="service.id" 
               class="service-card-mobile" 
               :class="`card-${index + 1}`"
               @touchstart="onCardTouch(index)"
               @touchend="onCardTouchEnd(index)">
            
            <!-- Card Background Effects -->
            <div class="card-bg-effects">
              <div class="card-glow"></div>
              <div class="hologram-grid"></div>
              <div class="energy-field"></div>
              <div class="scan-lines"></div>
              <div class="glitch-overlay" :class="`glitch-${service.color}`"></div>
            </div>

            <!-- Card Border Animation -->
            <div class="card-border"></div>
            
            <!-- Card Corners -->
            <div class="card-corners">
              <div class="corner top-left"></div>
              <div class="corner top-right"></div>
              <div class="corner bottom-left"></div>
              <div class="corner bottom-right"></div>
            </div>

            <!-- Card Number -->
            <div class="card-number">{{ String(index + 1).padStart(2, '0') }}</div>

            <!-- Status Indicator -->
            <div class="status-indicator">
              <div class="status-dot"></div>
              <span>ONLINE</span>
            </div>

            <!-- Service Icon -->
            <div class="service-icon">
              <div class="icon-container">
                <div class="icon-glow"></div>
                <div class="icon-background"></div>
                <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path :d="service.icon" />
                </svg>
                <div class="icon-pulse"></div>
                <div class="icon-orbit">
                  <div class="orbit-dot"></div>
                </div>
              </div>
            </div>

            <!-- Service Content -->
            <div class="service-content">
              <div class="service-subtitle">{{ service.subtitle }}</div>
              <h3 class="service-title glitch-text" :data-text="service.title">{{ service.title }}</h3>
              <p class="service-description">{{ service.description }}</p>
              
              <!-- Service Items -->
              <div class="service-items">
                <div 
                  v-for="item in service.services.slice(0, 3)" 
                  :key="item" 
                  class="service-item"
                >
                  <div class="item-dot"></div>
                  <span>{{ item }}</span>
                </div>
              </div>
              
              <!-- Service Tags -->
              <div class="service-tags">
                <span 
                  v-for="tag in service.tags" 
                  :key="tag" 
                  class="service-tag"
                >
                  {{ tag }}
                </span>
              </div>
              
              <!-- Target Audience -->
              <div class="service-target">
                <span class="target-label">IDEAL PARA:</span>
                <span class="target-text">{{ service.target }}</span>
              </div>
            </div>

            <!-- Hover Indicator -->
            <div class="hover-indicator">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17l9.2-9.2M17 17V7H7"/>
              </svg>
            </div>

            <!-- Floating Data Points -->
            <div class="floating-data">
              <div class="data-point point-1"></div>
              <div class="data-point point-2"></div>
              <div class="data-point point-3"></div>
            </div>
          </div>
        </div>

        <!-- Mobile CTA -->
        <div ref="mobileCta" class="mobile-services-cta">
          <a href="#mobile-about-section" class="mobile-cta-button" @click="scrollToSection">
            <span class="mobile-cta-text">EXPLORAR A AIKA</span>
            <div class="mobile-cta-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </a>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

// Template Refs
const servicesMobileSection = ref(null)
const mobileBadge = ref(null)
const mobileTitle = ref(null)
const mobileSubtitle = ref(null)
const mobileCards = ref(null)
const mobileCta = ref(null)

// Mobile Services Data - Updated with new packages
const mobileServices = ref([
  {
    id: 1,
    title: 'Fundação Digital',
    subtitle: 'Nível 1',
    description: 'Criar a base sólida e profissional para que seu negócio possa crescer de forma sustentável no ambiente digital, com assistência dedicada desde o primeiro passo.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    color: 'green',
    tags: ['Startups', 'Base Sólida'],
    services: ['Alinhamento Estratégico', 'Site/Landing Page', 'Gestão Social', 'Relatórios'],
    target: 'Startups e pequenas empresas'
  },
  {
    id: 2,
    title: 'Aceleração 360',
    subtitle: 'Nível 2',
    description: 'Acelerar o crescimento, expandir o alcance para novos públicos e converter interesse em resultado através de uma estratégia integrada e inteligente.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    color: 'orange',
    tags: ['Crescimento', 'ROI'],
    services: ['Anúncios Online', 'Email Marketing', 'Social Avançada', 'Performance'],
    target: 'Empresas prontas para crescer'
  },
  {
    id: 3,
    title: 'Legado Contínuo',
    subtitle: 'Nível 3',
    description: 'Atuar como sua parceira estratégica de longo prazo, uma inteligência dedicada e integrada à sua equipe, focada em inovação e domínio de mercado.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    color: 'purple',
    tags: ['Parceria', 'Inovação'],
    services: ['Estratégia Dedicada', 'Laboratório de Inovação', 'Conteúdo Premium', 'Gestão VIP'],
    target: 'Parceria estratégica completa'
  }
])

const scrollToSection = (e) => {
  if (process.client) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }
};

onMounted(() => {
  try {
    // Ensure all elements are visible first with better performance
    const elementsToShow = [mobileBadge.value, mobileTitle.value, mobileSubtitle.value, mobileCards.value, mobileCta.value];
    elementsToShow.forEach(element => {
      if (element) {
        gsap.set(element, { opacity: 1, visibility: 'visible', clearProps: "transform" });
      }
    });

    // Set children opacity for cards grid
    if (mobileCards.value?.children) {
      gsap.set(mobileCards.value.children, { opacity: 1, visibility: 'visible', clearProps: "transform" });
    }

    // Optimized entrance animations with reduced delay
    setTimeout(() => {
      if (typeof gsap !== 'undefined' && mobileBadge.value) {
        const tl = gsap.timeline({ 
          defaults: { ease: "power2.out", duration: 0.4 }
        });

        // Smoother entrance sequence for mobile
        tl.from(mobileBadge.value, { y: -15, opacity: 0 })
          .from(mobileTitle.value, { y: 15, opacity: 0 }, "-=0.2")
          .from(mobileSubtitle.value, { y: 10, opacity: 0 }, "-=0.15")
          .from(mobileCards.value?.children || [], { 
            y: 20, 
            opacity: 0, 
            stagger: 0.08,
            ease: "back.out(1.7)"
          }, "-=0.1")
          .from(mobileCta.value, { y: 15, opacity: 0 }, "-=0.2");
      }
    }, 100);

  } catch (error) {
    console.log('GSAP animation error, elements will display normally:', error);
    // Enhanced fallback with better visibility
    const fallbackElements = [mobileBadge.value, mobileTitle.value, mobileSubtitle.value, mobileCta.value];
    fallbackElements.forEach(element => {
      if (element) {
        element.style.opacity = '1';
        element.style.visibility = 'visible';
        element.style.transform = 'none';
      }
    });

    if (mobileCards.value) {
      mobileCards.value.style.opacity = '1';
      mobileCards.value.style.visibility = 'visible';
      Array.from(mobileCards.value.children).forEach(card => {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.transform = 'none';
      });
    }
  }
});

// Optimized touch interaction functions for mobile
const onCardTouch = (index) => {
  try {
    if (!mobileCards.value?.children) return;
    
    const card = mobileCards.value.children[index];
    if (!card || typeof gsap === 'undefined') return;

    // Create optimized timeline for touch effects
    const touchTl = gsap.timeline({ defaults: { duration: 0.15, ease: "power2.out" } });
    
    touchTl.to(card, { scale: 0.95 })
           .to(card.querySelector('.card-glow'), { opacity: 1 }, "<")
           .to(card.querySelector('.glitch-text'), {
             textShadow: '2px 0 #ff0000, -2px 0 #00ffff'
           }, "<");

  } catch (error) {
    console.log('Touch animation error:', error);
  }
};

const onCardTouchEnd = (index) => {
  try {
    if (!mobileCards.value?.children) return;
    
    const card = mobileCards.value.children[index];
    if (!card || typeof gsap === 'undefined') return;

    // Create optimized timeline for touch release effects
    const releaseTl = gsap.timeline({ defaults: { duration: 0.2, ease: "power2.out" } });
    
    releaseTl.to(card, { scale: 1 })
             .to(card.querySelector('.card-glow'), { opacity: 0 }, "<+0.1")
             .to(card.querySelector('.glitch-text'), {
               textShadow: 'none'
             }, "<");

  } catch (error) {
    console.log('Touch release animation error:', error);
  }
};
</script>

<style scoped>
/* Mobile Services Section - Desktop-style Adapted */
.services-mobile-section {
  position: relative;
  min-height: 100vh;
  padding: 4rem 1rem;
  background-color: #1a1a1a;
  overflow: hidden;
  color: #ffffff;
}

/* Enhanced Background Effects (Desktop-style for Mobile) */
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

.circuit-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(45deg, transparent 40%, rgba(255, 100, 0, 0.1) 50%, transparent 60%),
    linear-gradient(-45deg, transparent 40%, rgba(255, 255, 255, 0.05) 50%, transparent 60%);
  background-size: 150px 150px, 100px 100px;
  animation: circuitFlow 15s linear infinite;
}

.data-streams {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(90deg, transparent 0%, rgba(255, 100, 0, 0.1) 50%, transparent 100%);
  background-size: 200px 100%;
  animation: dataFlow 10s linear infinite;
}

.neural-network {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(255, 100, 0, 0.1) 2px, transparent 2px),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    radial-gradient(circle at 40% 60%, rgba(255, 100, 0, 0.08) 1px, transparent 1px);
  background-size: 100px 100px, 70px 70px, 120px 120px;
  animation: neuralPulse 12s ease-in-out infinite;
}

.energy-waves {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(45deg, transparent 40%, rgba(255, 100, 0, 0.05) 50%, transparent 60%),
    linear-gradient(-45deg, transparent 40%, rgba(255, 255, 255, 0.03) 50%, transparent 60%);
  background-size: 300px 300px, 200px 200px;
  animation: energyFlow 10s linear infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(30px, 30px); }
}

@keyframes circuitFlow {
  0% { background-position: 0 0, 0 0; }
  100% { background-position: 150px 150px, -100px -100px; }
}

@keyframes dataFlow {
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
}

@keyframes neuralPulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.02); }
}

@keyframes energyFlow {
  0% { background-position: 0 0, 0 0; }
  100% { background-position: 300px 300px, -200px -200px; }
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
  /* Performance optimizations for particles */
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Particle positions for mobile (fewer particles) */
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

.services-mobile-content {
  position: relative;
  z-index: 3;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.mobile-container {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
}

.mobile-header {
  margin-bottom: 3rem;
}

/* Desktop-style Header for Mobile */
.hero-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin: 0 auto 2rem;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  width: fit-content;
  opacity: 1 !important;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  animation: badgePulse 2s ease-in-out infinite;
}

.badge-line {
  position: absolute;
  right: -1.5rem;
  top: 50%;
  width: 30px;
  height: 1px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.5), transparent);
  transform: translateY(-50%);
}

@keyframes badgePulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
}

.section-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: -1px;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.section-subtitle {
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  max-width: 350px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Mobile Services Grid */
.mobile-services-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
  opacity: 1;
  visibility: visible;
}

/* Desktop-style Cards for Mobile */
.service-card-mobile {
  position: relative;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid rgba(255, 100, 0, 0.3);
  border-radius: 16px;
  padding: 1.5rem;
  min-height: 400px;
  overflow: hidden;
  backdrop-filter: blur(20px);
  cursor: pointer;
  color: white;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  opacity: 1;
  visibility: visible;
  text-align: left;
  /* Performance optimizations */
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.service-card-mobile:active {
  border-color: rgba(255, 100, 0, 0.8);
  box-shadow: 0 0 20px rgba(255, 100, 0, 0.4);
}

/* Card Background Effects */
.card-bg-effects {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  overflow: hidden;
  z-index: -1;
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 100, 0, 0.2) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  animation: glowPulse 4s ease-in-out infinite;
  /* Performance optimizations */
  will-change: opacity, transform;
  transform: translateZ(0);
}

.service-card-mobile:active .card-glow {
  opacity: 1;
  transform: scale(1.1);
}

@keyframes glowPulse {
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.2; }
  50% { transform: scale(1.05) rotate(180deg); opacity: 0.4; }
}

.hologram-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 100, 0, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 100, 0, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.3;
}

.energy-field {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, rgba(255, 100, 0, 0.05) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card-mobile:active .energy-field {
  opacity: 1;
}

.scan-lines {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(90deg, transparent 0%, rgba(255, 100, 0, 0.3) 50%, transparent 100%);
  background-size: 200% 100%;
  background-position: -200% 0;
  animation: scanMove 3s linear infinite;
}

@keyframes scanMove {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Card Border Animation */
.card-border {
  position: absolute;
  inset: -2px;
  border-radius: 18px;
  background: linear-gradient(45deg, 
    transparent 0%, 
    rgba(255, 100, 0, 0.8) 25%, 
    rgba(255, 255, 255, 0.6) 50%, 
    rgba(255, 100, 0, 0.8) 75%, 
    transparent 100%);
  background-size: 400% 400%;
  opacity: 0;
  animation: borderFlow 3s ease infinite;
  z-index: -1;
  filter: blur(1px);
}

.service-card-mobile:active .card-border {
  opacity: 1;
  filter: blur(0);
}

@keyframes borderFlow {
  0%, 100% { background-position: 0% 50%; }
  25% { background-position: 100% 0%; }
  50% { background-position: 100% 100%; }
  75% { background-position: 0% 100%; }
}

/* Card Corners */
.card-corners {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.corner {
  position: absolute;
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 100, 0, 0.5);
}

.corner.top-left {
  top: 0.75rem;
  left: 0.75rem;
  border-right: none;
  border-bottom: none;
}

.corner.top-right {
  top: 0.75rem;
  right: 0.75rem;
  border-left: none;
  border-bottom: none;
}

.corner.bottom-left {
  bottom: 0.75rem;
  left: 0.75rem;
  border-right: none;
  border-top: none;
}

.corner.bottom-right {
  bottom: 0.75rem;
  right: 0.75rem;
  border-left: none;
  border-top: none;
}

.card-number {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2.5rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.08);
  font-family: 'Courier New', monospace;
  user-select: none;
  text-shadow: 0 0 20px rgba(255, 100, 0, 0.3);
  transition: all 0.3s ease;
}

.service-card-mobile:active .card-number {
  color: rgba(255, 100, 0, 0.15);
  text-shadow: 0 0 30px rgba(255, 100, 0, 0.5);
  transform: scale(1.1);
}

/* Status Indicator */
.status-indicator {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Courier New', monospace;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.7);
}

.status-dot {
  width: 6px;
  height: 6px;
  background: #00ff00;
  border-radius: 50%;
  box-shadow: 0 0 8px #00ff00;
  animation: statusPulse 2s ease-in-out infinite;
}

@keyframes statusPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.2); }
}

/* Service Icon (Desktop-style) */
.service-icon {
  margin-bottom: 1.5rem;
  margin-top: 3rem;
}

.icon-container {
  position: relative;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-svg {
  width: 1.5rem;
  height: 1.5rem;
  color: #ffffff;
  z-index: 2;
  position: relative;
}

.icon-glow {
  position: absolute;
  inset: -8px;
  background: linear-gradient(45deg, rgba(255, 100, 0, 0.3), rgba(255, 255, 255, 0.2));
  border-radius: 50%;
  filter: blur(10px);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card-mobile:active .icon-glow {
  opacity: 1;
}

.icon-background {
  position: absolute;
  inset: -8px;
  background: linear-gradient(45deg, rgba(255, 100, 0, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card-mobile:active .icon-background {
  opacity: 1;
}

.icon-pulse {
  position: absolute;
  inset: -4px;
  border: 2px solid rgba(255, 100, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
}

.icon-orbit {
  position: absolute;
  inset: -12px;
  border: 1px solid rgba(255, 100, 0, 0.3);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card-mobile:active .icon-orbit {
  opacity: 1;
}

.orbit-dot {
  position: absolute;
  top: -2px;
  left: 50%;
  width: 3px;
  height: 3px;
  background: rgba(255, 100, 0, 0.8);
  border-radius: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 6px rgba(255, 100, 0, 0.6);
}

/* Service Content */
.service-content {
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.service-subtitle {
  font-size: 0.7rem;
  font-weight: 600;
  color: rgba(255, 100, 0, 0.9);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
  font-family: 'Courier New', monospace;
}

.service-title {
  font-size: 1.2rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
  position: relative;
}

/* Glitch Text Effect */
.glitch-text {
  position: relative;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.glitch-text::before {
  color: #ff0000;
  animation: glitchBefore 0.3s infinite;
}

.glitch-text::after {
  color: #00ffff;
  animation: glitchAfter 0.3s infinite;
}

.service-card-mobile:active .glitch-text::before,
.service-card-mobile:active .glitch-text::after {
  opacity: 0.8;
}

@keyframes glitchBefore {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-1px, 1px); }
  40% { transform: translate(-1px, -1px); }
  60% { transform: translate(1px, 1px); }
  80% { transform: translate(1px, -1px); }
}

@keyframes glitchAfter {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(1px, 1px); }
  40% { transform: translate(1px, -1px); }
  60% { transform: translate(-1px, 1px); }
  80% { transform: translate(-1px, -1px); }
}

.service-description {
  font-size: 0.82rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1.2rem;
  font-weight: 300;
}

.service-items {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1.2rem;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Courier New', monospace;
}

.item-dot {
  width: 3px;
  height: 3px;
  background: rgba(255, 100, 0, 0.8);
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(255, 100, 0, 0.6);
  flex-shrink: 0;
}

.service-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: auto;
}

.service-tag {
  padding: 0.3rem 0.75rem;
  background: linear-gradient(45deg, rgba(255, 100, 0, 0.2), rgba(255, 100, 0, 0.1));
  border: 1px solid rgba(255, 100, 0, 0.4);
  border-radius: 15px;
  font-size: 0.7rem;
  color: #ffffff;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.service-tag::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.service-card-mobile:active .service-tag::before {
  left: 100%;
}

.service-tag:active {
  background: linear-gradient(45deg, rgba(255, 100, 0, 0.4), rgba(255, 100, 0, 0.2));
  border-color: rgba(255, 100, 0, 0.8);
  transform: translateY(-1px);
}

.service-target {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.target-label {
  font-size: 0.65rem;
  font-weight: 600;
  color: rgba(255, 100, 0, 0.8);
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.target-text {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
}

/* Hover Indicator */
.hover-indicator {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  background: rgba(255, 100, 0, 0.2);
  border: 1px solid rgba(255, 100, 0, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s ease;
}

.service-card-mobile:active .hover-indicator {
  opacity: 1;
  transform: scale(1);
}

/* Floating Data Points */
.floating-data {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.data-point {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(255, 100, 0, 0.6);
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(255, 100, 0, 0.8);
}

.point-1 {
  top: 20%;
  right: 15%;
}

.point-2 {
  bottom: 30%;
  left: 10%;
}

.point-3 {
  top: 60%;
  right: 25%;
}

.mobile-services-cta {
  margin-top: 1.5rem;
}

.mobile-cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  text-decoration: none;
  color: white;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.mobile-cta-button:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
}

.mobile-cta-arrow {
  transition: transform 0.3s ease;
}

.mobile-cta-button:hover .mobile-cta-arrow {
  transform: translateX(2px);
}

/* Extra small screens */
@media (max-width: 375px) {
  .services-mobile-section { padding: 2.5rem 0.75rem; }
  .mobile-services-title { font-size: 1.6rem; }
  .mobile-services-subtitle { font-size: 0.85rem; }
  .mobile-service-card { padding: 1.25rem 0.75rem; }
  .mobile-card-title { font-size: 0.9rem; }
  .mobile-card-description { font-size: 0.75rem; }
}

@media (max-width: 320px) {
  .mobile-services-title { font-size: 1.4rem; }
  .mobile-card-icon { font-size: 1.8rem; height: 45px; }
  .mobile-cta-button { padding: 0.6rem 1.2rem; font-size: 0.7rem; }
}
</style>