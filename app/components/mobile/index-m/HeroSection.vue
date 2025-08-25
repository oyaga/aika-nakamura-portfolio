<template>
  <section ref="heroSectionMobile" class="hero-mobile-container" style="background-color: #f97316;">
    
    <!-- Simplified Background Effects -->
    <div class="bg-mobile">
      <div class="gradient-mobile"></div>
      <div class="particles-mobile">
        <div v-for="i in 8" :key="i" class="particle-mobile" :class="`particle-${i}`"></div>
      </div>
    </div>
    
    <!-- Mobile Content -->
    <div class="hero-mobile-content">
      <div class="content-mobile-container">
        
        <!-- Mobile Badge -->
        <div ref="mobileBadge" class="mobile-badge">
          <div class="badge-dot-mobile"></div>
          <span class="badge-text-mobile">DIGITAL ASSISTANT</span>
        </div>
        
        <!-- Mobile Welcome -->
        <div ref="mobileWelcome" class="welcome-mobile">
          <p class="greeting-mobile">Opa! Tudo bem?</p>
          <p class="message-mobile">Bem-vindo ao futuro!</p>
        </div>
        
        <!-- Mobile Image -->
        <div ref="mobileImage" class="image-mobile-container">
          <div class="image-mobile-frame">
            <img 
              class="mobile-mascot"
              src="/Imagem/icon-aika.webp" 
              alt="Aika Nakamura - Digital Assistant"
            />
            <div class="mobile-glow"></div>
          </div>
        </div>
        
        <!-- Mobile Title -->
        <div ref="mobileTitle" class="title-mobile-section">
          <h1 class="mobile-hero-title">
            <span class="mobile-title-primary">AIKA NAKAMURA</span>
            <span class="mobile-title-secondary">DIGITAL SOLUTIONS</span>
          </h1>
          <div class="mobile-title-line"></div>
        </div>
        
        <!-- Mobile Subtitle -->
        <div ref="mobileSubtitle" class="subtitle-mobile-section">
          <p class="mobile-subtitle">Honramos seu legado, construímos seu futuro</p>
          <p class="mobile-accent">Inovação • Tecnologia • Resultados</p>
        </div>
        
        <!-- Mobile CTA -->
        <div ref="mobileCta" class="cta-mobile-section">
          <a href="#servicos" class="mobile-hero-cta" @click="scrollToServices">
            <span class="mobile-cta-text">EXPLORAR SERVIÇOS</span>
            <div class="mobile-cta-arrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </a>
        </div>
        
        <!-- Mobile Scroll Indicator -->
        <div class="mobile-scroll">
          <div class="mobile-scroll-line"></div>
          <span class="mobile-scroll-text">SCROLL</span>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'

// Template Refs
const heroSectionMobile = ref(null)
const mobileBadge = ref(null)
const mobileWelcome = ref(null)
const mobileImage = ref(null)
const mobileTitle = ref(null)
const mobileSubtitle = ref(null)
const mobileCta = ref(null)

onMounted(() => {
  // Delay animations to prevent hydration mismatches
  nextTick(() => {
    if (process.client) {
    // Mobile optimized entrance animation
    const tl = gsap.timeline({ 
      defaults: { ease: "power2.out", duration: 0.6 }
    });

    // Simplified entrance sequence for mobile
    tl.from(mobileBadge.value, { y: -20, opacity: 0 })
      .from(mobileWelcome.value, { y: 20, opacity: 0 }, "-=0.3")
      .from(mobileImage.value, { scale: 0.8, opacity: 0 }, "-=0.2")
      .from(mobileTitle.value, { y: 30, opacity: 0 }, "-=0.4")
      .from(mobileSubtitle.value, { y: 20, opacity: 0 }, "-=0.3")
      .from(mobileCta.value, { y: 20, opacity: 0 }, "-=0.2");

    // Simple floating animation for mobile image
    gsap.to(mobileImage.value, {
      y: "-10px",
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });
    }
  });
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
.hero-mobile-container {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.bg-mobile {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.gradient-mobile {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 70%);
}

.particles-mobile {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.particle-mobile {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  animation: floatMobile 4s ease-in-out infinite;
}

.particle-1 { top: 10%; left: 20%; animation-delay: 0s; }
.particle-2 { top: 20%; right: 15%; animation-delay: 0.5s; }
.particle-3 { top: 60%; left: 10%; animation-delay: 1s; }
.particle-4 { bottom: 30%; right: 20%; animation-delay: 1.5s; }
.particle-5 { top: 40%; left: 60%; animation-delay: 2s; }
.particle-6 { bottom: 20%; left: 30%; animation-delay: 2.5s; }
.particle-7 { top: 70%; right: 40%; animation-delay: 3s; }
.particle-8 { bottom: 60%; right: 60%; animation-delay: 3.5s; }

@keyframes floatMobile {
  0%, 100% { transform: translateY(0px); opacity: 0.4; }
  50% { transform: translateY(-15px); opacity: 0.8; }
}

.hero-mobile-content {
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 400px;
  text-align: center;
  padding: 2rem 0;
  margin-top: 2rem;
}

.content-mobile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.mobile-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(5px);
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.badge-dot-mobile {
  width: 6px;
  height: 6px;
  background: #00ff00;
  border-radius: 50%;
  box-shadow: 0 0 8px #00ff00;
}

.welcome-mobile {
  text-align: center;
}

.greeting-mobile {
  font-size: 1rem;
  margin-bottom: 0.25rem;
  opacity: 0.8;
}

.message-mobile {
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 0;
}

.image-mobile-container {
  position: relative;
  margin: 1rem 0;
}

.image-mobile-frame {
  position: relative;
  width: 200px;
  height: 200px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  overflow: hidden;
}

.mobile-mascot {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.mobile-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
  animation: mobileGlow 3s ease-in-out infinite;
}

@keyframes mobileGlow {
  0%, 100% { opacity: 0; transform: rotate(0deg); }
  50% { opacity: 1; transform: rotate(180deg); }
}

.title-mobile-section {
  text-align: center;
}

.mobile-hero-title {
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 0.5rem;
}

.mobile-title-primary {
  display: block;
  font-weight: 800;
  letter-spacing: -1px;
  font-size: 1.6rem;
}

.mobile-title-secondary {
  display: block;
  font-weight: 300;
  opacity: 0.9;
  font-size: 1.2rem;
}

.mobile-title-line {
  width: 60px;
  height: 2px;
  background: white;
  margin: 0.5rem auto;
  opacity: 0.6;
}

.subtitle-mobile-section {
  text-align: center;
  max-width: 300px;
}

.mobile-subtitle {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: 0.5rem;
  opacity: 0.9;
}

.mobile-accent {
  font-size: 0.8rem;
  opacity: 0.7;
  font-family: 'Courier New', monospace;
  letter-spacing: 1px;
}

.cta-mobile-section {
  margin-top: 1rem;
}

.mobile-hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  text-decoration: none;
  color: white;
  border-radius: 25px;
  transition: all 0.3s ease;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.mobile-hero-cta:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.mobile-cta-arrow {
  transition: transform 0.3s ease;
}

.mobile-hero-cta:hover .mobile-cta-arrow {
  transform: translateX(3px);
}

.mobile-scroll {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  opacity: 0.6;
}

.mobile-scroll-line {
  width: 1px;
  height: 30px;
  background: rgba(255, 255, 255, 0.5);
  animation: scrollPulse 2s ease-in-out infinite;
}

.mobile-scroll-text {
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

/* Extra mobile responsiveness */
@media (max-width: 375px) {
  .mobile-hero-title { font-size: 1.5rem; }
  .mobile-title-primary { font-size: 1.4rem; }
  .mobile-title-secondary { font-size: 1rem; }
  .mobile-subtitle { font-size: 0.9rem; }
  .image-mobile-frame { width: 180px; height: 180px; }
}

@media (max-width: 320px) {
  .hero-mobile-container { padding: 0.5rem; }
  .mobile-hero-title { font-size: 1.3rem; }
  .mobile-title-primary { font-size: 1.2rem; }
  .mobile-title-secondary { font-size: 0.9rem; }
  .image-mobile-frame { width: 160px; height: 160px; }
  .mobile-hero-cta { padding: 0.6rem 1.2rem; font-size: 0.7rem; }
}
</style>