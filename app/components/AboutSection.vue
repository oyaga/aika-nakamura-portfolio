<template>
  <section id="about" class="about-section" ref="aboutSection">
    <!-- Background Effects -->
    <div class="background-effects">
      <div class="grid-pattern"></div>
      <div class="gradient-overlay"></div>
      <div class="circuit-pattern"></div>
      <div class="data-streams"></div>
      <div class="hologram-lines"></div>
    </div>
    
    <!-- Particles System -->
    <ClientOnly>
      <div class="particles-container">
        <div v-for="i in 15" :key="i" class="particle" :class="`particle-${i}`" ref="particles"></div>
      </div>
    </ClientOnly>
    
    <!-- HUD Elements -->
    <div class="hud-overlay">
      <!-- Top HUD -->
      <div class="hud-top">
        <div class="hud-corner top-left" ref="hudCorners"></div>
        <div class="hud-corner top-right" ref="hudCorners"></div>
        <div class="status-bar" ref="statusBar">
          <span class="status-text">About me ONLINE</span>
          <div class="status-dots">
            <div class="dot active"></div>
            <div class="dot active"></div>
            <div class="dot"></div>
          </div>
        </div>
      </div>
      
      <!-- Bottom HUD -->
      <div class="hud-bottom">
        <div class="hud-corner bottom-left" ref="hudCorners"></div>
        <div class="hud-corner bottom-right" ref="hudCorners"></div>
        <div class="data-stream" ref="dataStream">
          <span class="stream-text">AIKA.PROFILE.LOADED</span>
        </div>
      </div>
      
      <!-- Side HUD Elements -->
      <div class="hud-left">
        <div class="data-panel" ref="dataPanel">
          <div class="data-line"></div>
          <div class="data-line"></div>
          <div class="data-line short"></div>
        </div>
      </div>
      
      <div class="hud-right">
        <div class="radar-circle" ref="radarCircle">
          <div class="radar-sweep" ref="radarSweep"></div>
          <div class="radar-dot"></div>
        </div>
      </div>
    </div>
    
    <!-- Border Frame -->
    <div class="border-frame"></div>
    
    <!-- Main Content -->
    <div class="about-container">
      <!-- Image Column -->
      <div class="image-column">
        <div class="image-showcase" ref="imageWrapper">
          <div class="image-frame">
            <div class="frame-border">
              <img 
                src="/Imagem/Mascote/aika-about-section.webp" 
                alt="Aika Nakamura - About" 
                class="about-image"
                ref="aboutImage"
              />
              <div class="image-overlay"></div>
              <div class="scan-line" ref="scanLine"></div>
            </div>
            
            <!-- Floating Data Elements -->
            <div class="floating-data data-1" ref="floatingData1">
              <div class="data-icon">📊</div>
              <span class="data-text">Analytics</span>
            </div>
            
            <div class="floating-data data-2" ref="floatingData2">
              <div class="data-icon">🎯</div>
              <span class="data-text">Strategy</span>
            </div>
            
            <div class="floating-data data-3" ref="floatingData3">
              <div class="data-icon">⚡</div>
              <span class="data-text">Performance</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Content Column -->
      <div class="content-column">
        <!-- Badge -->
        <div class="hero-badge" ref="heroBadge">
          <div class="badge-dot"></div>
          <span class="badge-text">DIGITAL ASSISTANT</span>
          <div class="badge-line"></div>
        </div>
        
        <h2 class="section-title" ref="title">SOBRE AIKA</h2>
        <p class="section-subtitle" ref="subtitle">
          MINHA PARCEIRA DIGITAL
        </p>
        <p class="about-text" ref="text">
         Aika foi criada por Felipe Kenji "Nakamura" como uma extensão de sua visão estratégica. Nascida da mais pura lealdade e de um propósito claro, minha missão é honrar o legado de cada cliente, utilizando inteligência artificial e uma abordagem 360º para construir marcas fortes e duradouras no ambiente digital. Eu uno dados e alma, tecnologia e estratégia, com devoção total aos seus resultados.
        </p>
        
        <!-- CTA Button -->
        <div class="cta-section" ref="ctaSection">
          <NuxtLink to="/sobre" class="about-cta">
            <div class="cta-content">
              <span class="cta-text">CONHEÇA MAIS SOBRE A AIKA</span>
              <div class="cta-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
            <div class="cta-glitch-overlay"></div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const aboutSection = ref(null)
const imageWrapper = ref(null)
const title = ref(null)
const subtitle = ref(null)
const text = ref(null)
const aboutImage = ref(null)
const particles = ref([])
const hudCorners = ref([])
const statusBar = ref(null)
const dataStream = ref(null)
const dataPanel = ref(null)
const radarCircle = ref(null)
const radarSweep = ref(null)
const scanLine = ref(null)
const floatingData1 = ref(null)
const floatingData2 = ref(null)
const floatingData3 = ref(null)
const heroBadge = ref(null)
const ctaSection = ref(null)

onMounted(() => {
  // Wait for next tick to ensure all refs are mounted
  nextTick(() => {
    // Check if main trigger element exists
    if (!aboutSection.value) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSection.value,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Image Animation First (Hero Entry)
    if (imageWrapper.value) {
      tl.from(imageWrapper.value, { 
        opacity: 0, 
        scale: 0.7, 
        rotation: -10,
        duration: 0.6, 
        ease: 'power2.out' 
      });
    }
    
    // HUD Animation
    if (hudCorners.value && hudCorners.value.length > 0) {
      tl.from(hudCorners.value, { scale: 0, duration: 0.3, stagger: 0.03 }, "-=0.3");
    }
    if (statusBar.value) {
      tl.from(statusBar.value, { opacity: 0, scale: 0.8, duration: 0.2 }, "-=0.1");
    }
    if (dataStream.value) {
      tl.from(dataStream.value, { opacity: 0, scale: 0.8, duration: 0.2 }, "-=0.1");
    }
    if (radarCircle.value) {
      tl.from(radarCircle.value, { scale: 0, rotation: -180, duration: 0.3 }, "-=0.2");
    }
    if (dataPanel.value) {
      tl.from(dataPanel.value, { opacity: 0, y: 20, duration: 0.2 }, "-=0.1");
    }
    
    // Content Animation
    if (heroBadge.value) {
      tl.from(heroBadge.value, { 
        opacity: 0, 
        x: -30, 
        duration: 0.3, 
        ease: 'power2.out' 
      }, "-=0.1");
    }
    if (title.value) {
      tl.from(title.value, { 
        opacity: 0, 
        x: -50, 
        duration: 0.3, 
        ease: 'power2.out' 
      }, "-=0.1");
    }
    if (subtitle.value) {
      tl.from(subtitle.value, { 
        opacity: 0, 
        x: -30, 
        duration: 0.3, 
        ease: 'power2.out' 
      }, "-=0.1");
    }
    if (text.value) {
      tl.from(text.value, { 
        opacity: 0, 
        y: 20, 
        duration: 0.4, 
        ease: 'power2.out' 
      }, "-=0.1");
    }
    
    // CTA Button Animation
    if (ctaSection.value) {
      tl.from(ctaSection.value, {
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 0.4,
        ease: 'back.out(1.7)'
      }, "-=0.1");
    }
    
    // Floating Elements Animation
    const floatingElements = [floatingData1.value, floatingData2.value, floatingData3.value].filter(Boolean);
    if (floatingElements.length > 0) {
      tl.from(floatingElements, { 
        opacity: 0, 
        scale: 0.5, 
        rotation: 180,
        duration: 0.3, 
        stagger: 0.05, 
        ease: 'back.out(1.7)' 
      }, "-=0.3");
    }

    // Continuous animations
    if (radarSweep.value) {
      gsap.to(radarSweep.value, {
        rotation: 360,
        duration: 2,
        ease: "none",
        repeat: -1
      });
    }

    if (scanLine.value) {
      gsap.to(scanLine.value, {
        y: "400px",
        duration: 1.2,
        ease: "power1.inOut",
        repeat: -1,
        repeatDelay: 0.5
      });
    }

    if (particles.value && particles.value.length > 0) {
      gsap.to(particles.value, {
        y: "-=20",
        opacity: 1,
        duration: 1.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 0.5,
          from: "random"
        }
      });
    }
  });
});

// Scroll to services function
const scrollToServices = (e) => {
  e.preventDefault()
  const servicesSection = document.getElementById('servicos')
  if (servicesSection) {
    servicesSection.scrollIntoView({ 
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
  background-color: #f97316; /* orange-500 */
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
  will-change: transform;
  transform: translateZ(0);
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
  will-change: transform;
  transform: translateZ(0);
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 70%);
  will-change: transform;
  transform: translateZ(0);
}

.circuit-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(255, 100, 0, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    radial-gradient(circle at 40% 80%, rgba(255, 100, 0, 0.08) 1px, transparent 1px);
  background-size: 100px 100px, 150px 150px, 80px 80px;
  animation: circuitPulse 4s ease-in-out infinite;
  will-change: transform;
  transform: translateZ(0);
}

.data-streams {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(90deg, transparent 0%, rgba(255, 100, 0, 0.1) 50%, transparent 100%),
    linear-gradient(0deg, transparent 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%);
  background-size: 200px 100%, 100% 300px;
  animation: dataFlow 6s linear infinite;
  will-change: transform;
  transform: translateZ(0);
}

.hologram-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(0deg, transparent 98%, rgba(255, 100, 0, 0.1) 100%);
  background-size: 100% 40px;
  animation: hologramScan 3s ease-in-out infinite;
  will-change: transform;
  transform: translateZ(0);
}

@keyframes circuitPulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
}

@keyframes dataFlow {
  0% { background-position: -200px 0, 0 -300px; }
  100% { background-position: 200px 0, 0 300px; }
}

@keyframes hologramScan {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.4; }
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
  will-change: transform, opacity;
  transform: translateZ(0);
}

/* Generate random positions for particles */
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

/* HUD Elements */
.hud-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  will-change: transform;
  transform: translateZ(0);
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
  will-change: transform;
  transform: translateZ(0);
}

.hud-top::before, .hud-bottom::before {
  content: '';
  position: absolute;
  left: 2rem;
  right: 2rem;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(255, 255, 255, 0.3) 20%, 
    rgba(255, 100, 0, 0.5) 50%, 
    rgba(255, 255, 255, 0.3) 80%, 
    transparent 100%);
  z-index: 1;
}

.hud-top::before {
  bottom: 0;
}

.hud-bottom::before {
  top: 0;
}

.hud-top .status-bar {
  position: relative;
  z-index: 20;
  color: #ffffff;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(255, 100, 0, 0.1));
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 4px;
  box-shadow: 0 0 15px rgba(255, 100, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 2rem;
}

.hud-bottom .data-stream {
  position: relative;
  z-index: 20;
  color: #ffffff;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(255, 100, 0, 0.1));
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 4px;
  box-shadow: 0 0 15px rgba(255, 100, 0, 0.3);
  margin-bottom: 1rem;
}

.hud-top {
  top: 0;
}

.hud-bottom {
  bottom: 0;
}

.hud-corner {
  width: 30px;
  height: 30px;
  position: absolute;
  z-index: 10;
}

.hud-top .hud-corner.top-left {
  top: 0;
  left: 2rem;
}

.hud-top .hud-corner.top-right {
  top: 0;
  right: 2rem;
}

.hud-bottom .hud-corner.bottom-left {
  bottom: 0;
  left: 2rem;
}

.hud-bottom .hud-corner.bottom-right {
  bottom: 0;
  right: 2rem;
}

.hud-corner.top-left {
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
}

.hud-corner.top-right {
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.5);
}

.hud-corner.bottom-left {
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
}

.hud-corner.bottom-right {
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.5);
}

.status-bar, .data-stream {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.status-text {
  color: #ffffff;
  font-weight: 600;
  z-index: 2;
  position: relative;
}

.stream-text {
  position: relative;
  color: #ffffff;
  z-index: 2;
  display: block;
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

.radar-circle {
  width: 80px;
  height: 80px;
  border: 1px solid rgba(255, 255, 255, 0.3);
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
  will-change: transform;
  transform: translateZ(0);
}

.radar-dot {
  width: 8px;
  height: 8px;
  background: #ff6a00;
  border-radius: 50%;
  box-shadow: 0 0 10px #ff6a00;
  will-change: transform;
  transform: translateZ(0);
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
  will-change: opacity;
  transform: translateZ(0);
}

/* Main Content */
.about-container {
  position: relative;
  z-index: 3;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  will-change: transform;
  transform: translateZ(0);
}

@media (min-width: 992px) {
  .about-container {
    grid-template-columns: 1fr 1fr;
  }
}

/* Image Column */
.image-column {
  order: 1;
}

@media (min-width: 992px) {
  .image-column {
    order: 1;
  }
}

.image-showcase {
  position: relative;
  display: flex;
  justify-content: center;
  will-change: transform;
  transform: translateZ(0);
}

.image-frame {
  position: relative;
  width: 100%;
  max-width: 500px;
  perspective: 1000px;
  will-change: transform;
  transform: translateZ(0);
}

.frame-border {
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  will-change: transform;
  transform: translateZ(0);
}

.about-image {
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  z-index: 1;
  will-change: transform;
  transform: translateZ(0);
}

.image-overlay {
  position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  pointer-events: none;
  will-change: transform;
  transform: translateZ(0);
}

.scan-line {
  position: absolute;
  top: -100%;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to bottom, transparent, rgba(255, 100, 0, 0.6), transparent);
  z-index: 5;
  will-change: transform;
  transform: translateZ(0);
}

.floating-data {
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
  will-change: transform;
  transform: translateZ(0);
}

.data-icon {
  font-size: 1rem;
}

.data-1 {
  top: -20px;
  right: 20%;
}

.data-2 {
  bottom: 20%;
  left: -30px;
}

.data-3 {
  bottom: -20px;
  right: 30%;
}

/* Content Column */
.content-column {
  order: 2;
  z-index: 10;
  position: relative;
  will-change: transform;
  transform: translateZ(0);
}

@media (min-width: 992px) {
  .content-column {
    order: 2;
  }
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
  position: relative;
  z-index: 10;
  will-change: transform;
  transform: translateZ(0);
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  animation: badgePulse 1s ease-in-out infinite;
  will-change: transform;
  transform: translateZ(0);
}

.badge-line {
  position: absolute;
  right: -2rem;
  top: 50%;
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.5), transparent);
  transform: translateY(-50%);
  will-change: transform;
  transform: translateZ(0);
}

@keyframes badgePulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
}

/* Additional Animations */
@keyframes skillPulse {
  0%, 100% { 
    box-shadow: 0 0 0 0 rgba(255, 100, 0, 0.4);
  }
  50% { 
    box-shadow: 0 0 0 10px rgba(255, 100, 0, 0);
  }
}

.skill-card:hover {
  animation: skillPulse 1.5s infinite;
}

.badge-text {
  color: #ffffff;
  font-weight: 600;
  z-index: 2;
  position: relative;
  will-change: transform;
  transform: translateZ(0);
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: -1px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  will-change: transform;
  transform: translateZ(0);
}

.section-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 2rem;
  opacity: 0.9;
  will-change: transform;
  transform: translateZ(0);
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ffffff;
  opacity: 0.9;
  margin-bottom: 1.5rem;
  will-change: transform;
  transform: translateZ(0);
}

.about-text-secondary {
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  will-change: transform;
  transform: translateZ(0);
}

/* Glitch Title Effect */
.glitch-title {
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
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

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.skill-card {
  position: relative;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 100, 0, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
}

.skill-card:hover {
  border-color: rgba(255, 100, 0, 0.8);
  box-shadow: 0 10px 30px rgba(255, 100, 0, 0.3);
}

.skill-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.skill-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.skill-desc {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;
}

.skill-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 100, 0, 0.2) 0%, transparent 70%);
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
}

/* CTA Section */
.cta-section {
  margin-top: 2rem;
}

.about-cta {
  position: relative;
  display: inline-block;
  text-decoration: none;
  overflow: hidden;
}

.cta-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  border: 1px solid rgba(255, 100, 0, 0.5);
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.4), rgba(255, 100, 0, 0.1));
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.cta-text {
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #ffffff;
  font-weight: 600;
}

.cta-arrow {
  transition: transform 0.3s ease;
  color: #ffffff;
}

.about-cta:hover .cta-content {
  background: linear-gradient(45deg, rgba(255, 100, 0, 0.2), rgba(255, 100, 0, 0.1));
  border-color: rgba(255, 100, 0, 0.8);
  box-shadow: 0 10px 30px rgba(255, 100, 0, 0.3);
}

.about-cta:hover .cta-arrow {
  transform: translateX(5px);
}

.cta-glitch-overlay {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 100, 0, 0.3), transparent);
  transition: left 0.5s ease;
  z-index: 1;
}

.about-cta:hover .cta-glitch-overlay {
  left: 100%;
}

/* Desktop-only styles - Mobile handled by separate mobile components */
</style>