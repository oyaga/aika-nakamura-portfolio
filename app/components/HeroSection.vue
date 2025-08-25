<template>
  <section ref="heroSection" class="hero-container" style="background-color: #f97316;">
    
    <!-- Background Effects -->
    <div class="background-effects">
      <div class="grid-pattern"></div>
      <div class="gradient-overlay"></div>
    </div>
    
    <!-- Particles System - Client Only -->
    <ClientOnly>
      <div class="particles-container">
        <div v-for="i in 20" :key="i" class="particle" :class="`particle-${i}`" ref="particles"></div>
      </div>
    </ClientOnly>
    
    <!-- HUD Elements -->
    <div class="hud-overlay" ref="hudOverlay">
      <!-- Top HUD -->
      <div class="hud-top">
        <div class="hud-corner top-left" ref="hudCorners"></div>
        <div class="hud-corner top-right" ref="hudCorners"></div>
        <div class="status-bar" ref="statusBar">
          <span class="status-text">SYSTEM ONLINE</span>
          <div class="status-dots">
            <div class="dot active"></div>
            <div class="dot active"></div>
            <div class="dot active"></div>
          </div>
        </div>
      </div>
      
      <!-- Central HUD Element (Data Stream) -->
      <div class="hud-center">
        <div class="data-stream" ref="dataStream">
          <span class="stream-text" data-text="AIKA.NAKAMURA.DIGITAL_ASSISTANT">AIKA.NAKAMURA.DIGITAL_ASSISTANT</span>
        </div>
      </div>
      
      <!-- Bottom HUD -->
      <div class="hud-bottom">
        <div class="hud-corner bottom-left" ref="hudCorners"></div>
        <div class="hud-corner bottom-right" ref="hudCorners"></div>
      </div>
      
      <!-- Side HUD Elements -->
      <div class="hud-left">
        <div class="radar-circle" ref="radarCircle">
          <div class="radar-sweep" ref="radarSweep"></div>
          <div class="radar-dot"></div>
        </div>
      </div>
      
      <div class="hud-right">
        <div class="data-panel" ref="dataPanel">
          <div class="data-line"></div>
          <div class="data-line"></div>
          <div class="data-line short"></div>
        </div>
      </div>
    </div>
    
    <!-- Border Frame -->
    <div class="border-frame"></div>
    
    <!-- Main Content -->
    <div class="hero-content">
      <div class="content-container">
        <!-- Content Grid -->
        <div class="content-grid">
          <!-- Left Column - Text Content -->
          <div class="text-column">
            <!-- Badge with Animation -->
            <div class="hero-badge" ref="heroBadge">
              <div class="badge-dot"></div>
              <span class="badge-text">DIGITAL ASSISTANT</span>
              <div class="badge-line"></div>
            </div>
            
            <!-- Welcome Text with Enhanced Styling -->
            <div ref="welcomeText" class="welcome-section">
              <p class="welcome-greeting">Opa! Tudo bem?</p>
              <p class="welcome-message">Bem-vindo ao futuro!</p>
            </div>
            
            <!-- Main Title with Better Hierarchy -->
            <div class="title-section">
              <h1 ref="mainTitle" class="hero-title">
                <span class="title-primary" ref="titlePrimary">AIKA NAKAMURA</span>
                <span class="title-secondary" ref="titleSecondary">DIGITAL SOLUTIONS</span>
              </h1>
              <div class="title-decoration">
                <div class="decoration-line"></div>
                <div class="decoration-dot"></div>
                <div class="decoration-line"></div>
              </div>
            </div>
            
            <!-- Enhanced Subtitle -->
            <div class="subtitle-section" ref="subtitleSection">
              <p class="hero-subtitle">Honramos seu legado, construímos seu futuro</p>
              <div class="subtitle-accent">
                <span class="accent-text">// Inovação • Tecnologia • Resultados</span>
              </div>
            </div>
            
            <!-- Enhanced CTA Section -->
            <div ref="ctaSection" class="cta-section">
              <!-- Primary CTA -->
              <div class="cta-group">
                <a href="#servicos" class="hero-cta primary" @click="scrollToServices">
                  <div class="cta-content">
                    <span class="cta-text">EXPLORAR SERVIÇOS</span>
                    <div class="cta-arrow">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                  <div class="cta-glow"></div>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Right Column - Enhanced Visual Content -->
          <div class="visual-column">
            <div ref="imageContainer" class="image-showcase">
              <!-- Main Image Frame with Enhanced Effects -->
              <div class="image-frame" ref="imageFrame">
                <div class="frame-border">
                  <img 
                    ref="mascotImage"
                    class="hero-image"
                    src="/aika-mascote.webp" 
                    alt="Aika Nakamura - Digital Assistant"
                  />
                  <div class="image-overlay"></div>
                  <div class="scan-line" ref="scanLine"></div>
                  <div class="hologram-effect"></div>
                </div>
                
                <!-- Enhanced Floating Elements -->
                <div class="floating-elements">
                  <div class="floating-element element-1">
                    <div class="element-icon">⚡</div>
                    <span class="element-text">Velocidade</span>
                    <div class="element-pulse"></div>
                  </div>
                  
                  <div class="floating-element element-2">
                    <div class="element-icon">🎯</div>
                    <span class="element-text">Precisão</span>
                    <div class="element-pulse"></div>
                  </div>
                  
                  <div class="floating-element element-3">
                    <div class="element-icon">🚀</div>
                    <span class="element-text">Inovação</span>
                    <div class="element-pulse"></div>
                  </div>
                  
                  <div class="floating-element element-4">
                    <div class="element-icon">💡</div>
                    <span class="element-text">Criatividade</span>
                    <div class="element-pulse"></div>
                  </div>
                </div>
              </div>
              
              <!-- Enhanced Background Decoration -->
              <div class="bg-decoration">
                <div class="decoration-circle circle-1"></div>
                <div class="decoration-circle circle-2"></div>
                <div class="decoration-circle circle-3"></div>
                <div class="decoration-grid"></div>
                <div class="tech-lines">
                  <div class="tech-line line-1"></div>
                  <div class="tech-line line-2"></div>
                  <div class="tech-line line-3"></div>
                </div>
              </div>
            </div>
          </div>
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
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'

// Template Refs
const heroSection = ref(null)
const imageContainer = ref(null)
const welcomeText = ref(null)
const mainTitle = ref(null)
const titlePrimary = ref(null)
const titleSecondary = ref(null)
const subtitleSection = ref(null)
const ctaSection = ref(null)
const mascotImage = ref(null)
const particles = ref([])
const hudOverlay = ref(null)
const hudCorners = ref([])
const statusBar = ref(null)
const dataStream = ref(null)
const radarCircle = ref(null)
const radarSweep = ref(null)
const dataPanel = ref(null)
const imageFrame = ref(null)
const scanLine = ref(null)
const heroBadge = ref(null)

// Mouse move handler - declare outside onMounted for cleanup
let handleMouseMove = null

onMounted(() => {
  // Delay animations to prevent hydration mismatches
  nextTick(() => {
    if (process.client) {
    // --- ENTRANCE ANIMATION --- //
    const tl = gsap.timeline({ 
      defaults: { ease: "power3.out", duration: 0.8 }
    });

    // Staggered HUD animation
    tl.from(hudCorners.value, { scale: 0, stagger: 0.1, duration: 0.5 })
      .from(statusBar.value, { y: -30, opacity: 0 }, "-=0.3")
      .from(dataStream.value, { y: 30, opacity: 0 }, "<" )
      .from(radarCircle.value, { scale: 0, rotation: -180, duration: 0.7 }, "<" )
      .from(dataPanel.value, { y: 20, opacity: 0 }, "<" )

    // Staggered text content animation
    .from(heroBadge.value, { x: -30, opacity: 0 }, "-=0.5")
      .from(welcomeText.value, { y: 30, opacity: 0 }, "<0.1")
      .from(titlePrimary.value, { x: -50, opacity: 0 }, "<0.1")
      .from(titleSecondary.value, { x: -50, opacity: 0 }, "<0.1")
      .from(subtitleSection.value, { scale: 0.8, opacity: 0 }, "<0.1")
      .from(ctaSection.value, { y: 30, opacity: 0 }, "<0.1")

    // Image animation
    .from(imageContainer.value, { scale: 0.8, opacity: 0, duration: 1.2 }, "-=0.8");

    // --- CONTINUOUS ANIMATIONS --- //

    // Radar sweep
    if (radarSweep.value) {
      gsap.to(radarSweep.value, {
        rotation: 360,
        duration: 3,
        ease: "none",
        repeat: -1
      });
    }

    // Scan line
    if (scanLine.value) {
      gsap.to(scanLine.value, {
        y: "500px",
        duration: 2.5,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 2
      });
    }

    // Particles
    if (particles.value && particles.value.length > 0) {
      particles.value.forEach(p => {
        if (p && heroSection.value) {
          gsap.set(p, {
            x: Math.random() * heroSection.value.offsetWidth,
            y: Math.random() * heroSection.value.offsetHeight,
            scale: gsap.utils.random(0.5, 1.2)
          });

          gsap.to(p, {
            y: "-=20",
            duration: gsap.utils.random(2, 4),
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
          });
        }
      });
    }

    // --- INTERACTIVE ANIMATIONS --- //

    // Mouse parallax effect
    handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30; // Increased intensity
      const y = (clientY / window.innerHeight - 0.5) * 30; // Increased intensity

      if (imageFrame.value) {
        gsap.to(imageFrame.value, { 
          rotationY: x,
          rotationX: -y,
          duration: 1,
          ease: "power2.out"
        });
      }

      if (hudOverlay.value) {
        gsap.to(hudOverlay.value, { 
          x: x * 0.5,
          y: y * 0.5,
          duration: 1,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    }
  });
});

onUnmounted(() => {
  if (handleMouseMove) {
    window.removeEventListener('mousemove', handleMouseMove);
  }
  gsap.killTweensOf([radarSweep.value, scanLine.value, ...particles.value, imageFrame.value, hudOverlay.value]);
});

// Scroll to services function
const scrollToServices = (e) => {
  // Only run on the client side
  if (process.client) {
    e.preventDefault();
    const servicesSection = document.getElementById('servicos');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
</script>

<style scoped>
/* Definição de variáveis para cores */
.hero-container {
  --color-white: #ffffff;
  --color-orange-500: #f97316;
  --color-green-active: #00ff00;
  --color-black-transparent: rgba(0, 0, 0, 0.3);
  --color-white-transparent: rgba(255, 255, 255, 0.5);
  --color-white-border: rgba(255, 255, 255, 0.2);
  --color-white-border-strong: rgba(255, 255, 255, 0.3);
  --color-orange-glow: #ff6a00;
  --color-red-glitch: red;
  --color-blue-glitch: blue;
  
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  color: var(--color-white);
}

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
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 70%);
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  opacity: 0.6;
}

.hud-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}

.hud-top, .hud-bottom {
  position: absolute;
  left: 0;
  right: 0;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.hud-top {
  top: 0;
}

.hud-bottom {
  bottom: 0;
}

.hud-top .status-bar {
  position: absolute;
  left: 50%;
  top: 6.5rem;
  transform: translateX(-50%);
  z-index: 15;
  pointer-events: auto;
}

.hud-center {
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  pointer-events: auto;
}

.hud-corner {
  width: 30px;
  height: 30px;
  position: absolute;
}

.hud-top .hud-corner.top-left {
  top: 1.5rem;
  left: 2rem;
}

.hud-top .hud-corner.top-right {
  top: 1.5rem;
  right: 2rem;
}

.hud-bottom .hud-corner.bottom-left {
  bottom: 1.5rem;
  left: 2rem;
}

.hud-bottom .hud-corner.bottom-right {
  bottom: 1.5rem;
  right: 2rem;
}

.hud-corner.top-left {
  border-top: 1px solid var(--color-white-transparent);
  border-left: 1px solid var(--color-white-transparent);
}

.hud-corner.top-right {
  border-top: 1px solid var(--color-white-transparent);
  border-right: 1px solid var(--color-white-transparent);
}

.hud-corner.bottom-left {
  border-bottom: 1px solid var(--color-white-transparent);
  border-left: 1px solid var(--color-white-transparent);
}

.hud-corner.bottom-right {
  border-bottom: 1px solid var(--color-white-transparent);
  border-right: 1px solid var(--color-white-transparent);
}

.status-bar, .data-stream {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  padding: 0.5rem 1rem;
  background: var(--color-black-transparent);
  border: 1px solid var(--color-white-border);
  border-radius: 4px;
  backdrop-filter: blur(5px);
  color: var(--color-white);
  z-index: 15;
}

.data-stream {
  cursor: pointer;
  z-index: 1001;
}

.status-text {
  font-weight: 600;
  z-index: 2;
}

.stream-text {
  position: relative;
  z-index: 2;
}

.data-stream:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(255, 100, 0, 0.5);
}

/* Glitch effect on hover */
.data-stream:hover .stream-text::before,
.data-stream:hover .stream-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-black-transparent);
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  color: var(--color-white);
  z-index: 1;
  pointer-events: none;
}

.data-stream:hover .stream-text::before {
  left: 2px;
  text-shadow: -2px 0 var(--color-red-glitch);
  animation: glitch-1 0.3s infinite linear alternate-reverse;
}

.data-stream:hover .stream-text::after {
  left: -2px;
  text-shadow: -2px 0 var(--color-blue-glitch);
  animation: glitch-2 0.3s infinite linear alternate-reverse;
}

@keyframes glitch-1 {
  0% { clip: rect(0, 900px, 20px, 0); }
  20% { clip: rect(0, 900px, 30px, 0); }
  40% { clip: rect(0, 900px, 10px, 0); }
  60% { clip: rect(0, 900px, 40px, 0); }
  80% { clip: rect(0, 900px, 20px, 0); }
  100% { clip: rect(0, 900px, 30px, 0); }
}

@keyframes glitch-2 {
  0% { clip: rect(0, 900px, 30px, 0); }
  20% { clip: rect(0, 900px, 10px, 0); }
  40% { clip: rect(0, 900px, 40px, 0); }
  60% { clip: rect(0, 900px, 20px, 0); }
  80% { clip: rect(0, 900px, 30px, 0); }
  100% { clip: rect(0, 900px, 10px, 0); }
}

.status-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-white-transparent);
}

.dot.active {
  background: var(--color-green-active);
  box-shadow: 0 0 8px var(--color-green-active);
}

.hud-left, .hud-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.hud-left {
  left: 2rem;
}

.hud-right {
  right: 2rem;
}

.radar-circle {
  width: 80px;
  height: 80px;
  border: 1px solid var(--color-white-border-strong);
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.radar-sweep {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(from 0deg, transparent, rgba(255, 100, 0, 0.3), transparent);
  clip-path: polygon(50% 50%, 0 0, 100% 0);
}

.radar-dot {
  width: 8px;
  height: 8px;
  background: var(--color-orange-glow);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--color-orange-glow);
}

.data-panel {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.data-line {
  width: 100px;
  height: 1px;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.5), transparent);
}

.data-line.short {
  width: 60px;
}

.border-frame {
  position: absolute;
  top: 2rem;
  left: 2rem;
  right: 2rem;
  bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  pointer-events: none;
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 8rem 2rem 2rem;
  margin-top: 4rem; /* Adiciona margem superior para não ficar em cima do header */
}

.content-container {
  width: 100%;
  margin: 0;
  padding: 0 2rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.text-column {
  margin-left: 2rem;
  z-index: 10;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  z-index: 15;
  position: relative;
  color: var(--color-white);
  font-weight: 600;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--color-white);
  border-radius: 50%;
  margin-right: 0.75rem;
  flex-shrink: 0;
}

.badge-text {
  font-weight: 600;
  z-index: 2;
  position: relative;
  white-space: nowrap;
}

.welcome-section {
  margin-bottom: 1.5rem;
}

.welcome-greeting {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  opacity: 0.8;
}

.welcome-message {
  font-size: 2rem;
  font-weight: 300;
}

.title-section {
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1rem;
}

.title-primary {
  display: block;
  font-weight: 800;
  letter-spacing: -1px;
}

.title-secondary {
  display: block;
  font-weight: 300;
  opacity: 0.9;
}

.subtitle-section {
  margin-bottom: 3rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  font-weight: 300;
  max-width: 80%;
  line-height: 1.6;
  opacity: 0.9;
}

.cta-section {
  margin-bottom: 3rem;
}

.hero-cta {
  position: relative;
  display: inline-block;
  text-decoration: none;
  margin-bottom: 2rem;
}

.cta-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  z-index: 2;
  position: relative;
}

.cta-text {
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.cta-arrow {
  transition: transform 0.3s ease;
}

.hero-cta:hover .cta-content {
  background: rgba(255, 255, 255, 0.1);
}

.hero-cta:hover .cta-arrow {
  transform: translateX(5px);
}



.visual-column {
  position: relative;
  z-index: 1;
}

.image-showcase {
  position: relative;
  display: flex;
  justify-content: center;
}

.image-frame {
  position: relative;
  width: 100%;
  max-width: 400px;
  perspective: 1000px;
}

.frame-border {
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  z-index: -1;
}

.image-overlay {
  position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  pointer-events: none;
}

.scan-line {
  position: absolute;
  top: -100%;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to bottom, transparent, rgba(255, 100, 0, 0.6), transparent);
  z-index: 5;
}

.floating-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.floating-element {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  z-index: 15;
}

.element-icon {
  font-size: 1rem;
}

.element-1 {
  top: -20px;
  right: 20%;
}

.element-2 {
  bottom: 20%;
  left: -30px;
}

.element-3 {
  bottom: -20px;
  right: 30%;
}

.element-4 {
  top: 50%;
  right: -40px;
  transform: translateY(-50%);
}

.element-pulse {
  position: absolute;
  inset: -5px;
  border: 1px solid rgba(255, 100, 0, 0.3);
  border-radius: inherit;
  animation: elementPulse 3s ease-in-out infinite;
}

@keyframes elementPulse {
  0%, 100% { opacity: 0; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}

.bg-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.decoration-circle {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 50%;
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -100px;
}

.circle-2 {
  width: 200px;
  height: 200px;
  bottom: -80px;
  left: -80px;
}

.circle-3 {
  width: 150px;
  height: 150px;
  top: 30%;
  right: 20%;
  animation: circleFloat 10s ease-in-out infinite;
}

@keyframes circleFloat {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(10px, -15px) rotate(120deg); }
  66% { transform: translate(-5px, 10px) rotate(240deg); }
}

.decoration-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 20px 20px;
}

.hologram-effect {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 70%
  );
  animation: hologramSweep 4s ease-in-out infinite;
  pointer-events: none;
}

@keyframes hologramSweep {
  0%, 100% { transform: translateX(-100%) skewX(-15deg); opacity: 0; }
  50% { transform: translateX(100%) skewX(-15deg); opacity: 1; }
}

.tech-lines {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.tech-line {
  position: absolute;
  background: linear-gradient(90deg, transparent, rgba(255, 100, 0, 0.3), transparent);
  height: 1px;
  animation-duration: 8s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.line-1 { top: 20%; left: -20%; right: -20%; animation-name: techLine1; }
.line-2 { top: 60%; left: -30%; right: -10%; animation-name: techLine2; animation-delay: -2s; }
.line-3 { top: 80%; left: -10%; right: -30%; animation-name: techLine3; animation-delay: -4s; }

@keyframes techLine1 { 0%, 100% { opacity: 0; transform: translateX(-50px); } 50% { opacity: 1; transform: translateX(0); } }
@keyframes techLine2 { 0%, 100% { opacity: 0; transform: translateX(30px); } 50% { opacity: 1; transform: translateX(0); } }
@keyframes techLine3 { 0%, 100% { opacity: 0; transform: translateX(-30px); } 50% { opacity: 1; transform: translateX(0); } }

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 3;
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

/* Desktop-only styles - Mobile handled by separate mobile components */
</style>