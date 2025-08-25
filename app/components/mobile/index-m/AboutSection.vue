<template>
  <section id="mobile-about-section" class="mobile-about-section">
    <!-- Mobile Background -->
    <div class="mobile-about-bg">
      <div class="mobile-about-gradient"></div>
      <div class="mobile-about-dots">
        <div v-for="i in 4" :key="i" class="about-dot" :class="`dot-${i}`"></div>
      </div>
    </div>
    
    <!-- Mobile Content -->
    <div class="mobile-about-content">
      <div class="mobile-about-container">
        
        <!-- Mobile Header -->
        <div class="mobile-about-header">
          <div ref="mobileBadge" class="mobile-about-badge">
            <div class="mobile-about-badge-dot"></div>
            <span class="mobile-about-badge-text">SOBRE</span>
          </div>
          
          <h2 ref="mobileTitle" class="mobile-about-title">Sobre a Aika</h2>
          <p ref="mobileSubtitle" class="mobile-about-subtitle">
            Conheça mais sobre nossa assistente digital especializada.
          </p>
        </div>

        <!-- Mobile Image -->
        <div ref="mobileImage" class="mobile-about-image">
          <img 
            src="/Imagem/Mascote/aika-about-section.webp" 
            alt="Aika Nakamura - Digital Assistant"
            class="aika-about-image"
          />
        </div>

        <!-- Mobile Description -->
        <div ref="mobileDescription" class="mobile-about-description">
          <p class="mobile-about-text">
            Sou uma assistente digital especializada em estratégias digitais avançadas, 
            automação inteligente e desenvolvimento web. Meu objetivo é transformar suas 
            ideias em realidade digital.
          </p>
        </div>

        <!-- Mobile CTA -->
        <div ref="mobileCta" class="mobile-about-cta">
          <a href="/contato" class="mobile-about-btn">
            <span class="mobile-btn-text">VAMOS CONVERSAR</span>
            <div class="mobile-btn-arrow">
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
const mobileBadge = ref(null)
const mobileTitle = ref(null)
const mobileSubtitle = ref(null)
const mobileImage = ref(null)
const mobileDescription = ref(null)
const mobileCta = ref(null)

onMounted(() => {
  try {
    // Ensure all elements are visible first
    const elementsToShow = [mobileBadge.value, mobileTitle.value, mobileSubtitle.value, mobileImage.value, mobileDescription.value, mobileCta.value];
    elementsToShow.forEach(element => {
      if (element) {
        gsap.set(element, { opacity: 1, visibility: 'visible', clearProps: "transform" });
      }
    });

    // Optimized entrance animations
    setTimeout(() => {
      if (typeof gsap !== 'undefined' && mobileBadge.value) {
        const tl = gsap.timeline({ 
          defaults: { ease: "power2.out", duration: 0.4 }
        });

        // Smoother entrance sequence for mobile
        tl.from(mobileBadge.value, { y: -15, opacity: 0 })
          .from(mobileTitle.value, { y: 15, opacity: 0 }, "-=0.2")
          .from(mobileSubtitle.value, { y: 10, opacity: 0 }, "-=0.15")
          .from(mobileImage.value, { y: 20, opacity: 0, scale: 0.8 }, "-=0.1")
          .from(mobileDescription.value, { y: 15, opacity: 0 }, "-=0.2")
          .from(mobileCta.value, { y: 15, opacity: 0 }, "-=0.15");
      }
    }, 100);

  } catch (error) {
    console.log('GSAP animation error, elements will display normally:', error);
    // Enhanced fallback
    const fallbackElements = [mobileBadge.value, mobileTitle.value, mobileSubtitle.value, mobileImage.value, mobileDescription.value, mobileCta.value];
    fallbackElements.forEach(element => {
      if (element) {
        element.style.opacity = '1';
        element.style.visibility = 'visible';
        element.style.transform = 'none';
      }
    });
  }
});
</script>

<style scoped>
.mobile-about-section {
  position: relative;
  background: #f97316; /* Laranja */
  color: white;
  padding: 3rem 1rem;
  overflow: hidden;
}

.mobile-about-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.mobile-about-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%);
}

.mobile-about-dots {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.about-dot {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  animation: aboutDotFloat 8s ease-in-out infinite;
}

.dot-1 { top: 20%; left: 15%; animation-delay: 0s; }
.dot-2 { top: 60%; right: 20%; animation-delay: 2s; }
.dot-3 { bottom: 30%; left: 20%; animation-delay: 4s; }
.dot-4 { top: 40%; right: 30%; animation-delay: 6s; }

@keyframes aboutDotFloat {
  0%, 100% { transform: translateY(0px); opacity: 0.3; }
  50% { transform: translateY(-25px); opacity: 0.8; }
}

.mobile-about-content {
  position: relative;
  z-index: 3;
}

.mobile-about-container {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.mobile-about-header {
  margin-bottom: 2rem;
}

.mobile-about-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: #f97316;
  border-radius: 20px;
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  backdrop-filter: blur(5px);
}

.mobile-about-badge-dot {
  width: 5px;
  height: 5px;
  background: #f97316;
  border-radius: 50%;
  box-shadow: 0 0 6px #f97316;
}

.mobile-about-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.mobile-about-subtitle {
  font-size: 0.9rem;
  opacity: 0.9;
  line-height: 1.4;
}

/* Mobile Image */
.mobile-about-image {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.aika-about-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: top center;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
}

.mobile-about-description {
  margin-bottom: 2rem;
}

.mobile-about-text {
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.95;
  margin-bottom: 1.5rem;
  text-align: left;
}

.mobile-about-cta {
  margin-top: 1.5rem;
}

.mobile-about-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
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

.mobile-about-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.mobile-btn-arrow {
  transition: transform 0.3s ease;
}

.mobile-about-btn:hover .mobile-btn-arrow {
  transform: translateX(2px);
}

/* Extra small screens */
@media (max-width: 375px) {
  .mobile-about-section { padding: 2.5rem 0.75rem; }
  .mobile-about-title { font-size: 1.6rem; }
  .aika-about-image { width: 180px; height: 180px; }
}

@media (max-width: 320px) {
  .mobile-about-title { font-size: 1.4rem; }
  .aika-about-image { width: 160px; height: 160px; }
  .mobile-about-btn { padding: 0.6rem 1.2rem; font-size: 0.7rem; }
}
</style>