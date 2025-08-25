<template>
  <section class="mobile-sobre-hero">
    <div class="mobile-bg-sobre">
      <div class="mobile-gradient-sobre"></div>
    </div>
    
    <div class="mobile-sobre-content">
      <div class="mobile-sobre-container">
        
        <div ref="mobileBadge" class="mobile-sobre-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>SOBRE</span>
        </div>
        
        <div ref="mobileImage" class="mobile-sobre-image">
          <img src="/Imagem/icon-aika.webp" alt="Aika Nakamura" />
        </div>
        
        <h1 ref="mobileTitle" class="mobile-sobre-title">
          Sobre <span class="title-highlight">Aika Nakamura</span>
        </h1>
        
        <p ref="mobileSubtitle" class="mobile-sobre-subtitle">
          Assistente digital especializada em estratégias digitais avançadas e automação inteligente.
        </p>
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const mobileBadge = ref(null)
const mobileImage = ref(null)
const mobileTitle = ref(null)
const mobileSubtitle = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ 
    defaults: { ease: "power2.out", duration: 0.6 }
  });

  tl.from(mobileBadge.value, { y: -20, opacity: 0 })
    .from(mobileImage.value, { scale: 0.8, opacity: 0 }, "-=0.3")
    .from(mobileTitle.value, { y: 30, opacity: 0 }, "-=0.3")
    .from(mobileSubtitle.value, { y: 20, opacity: 0 }, "-=0.3");
});
</script>

<style scoped>
.mobile-sobre-hero {
  position: relative;
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  color: white;
  padding: 4rem 1rem 3rem;
  text-align: center;
}

.mobile-bg-sobre {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.mobile-gradient-sobre {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
}

.mobile-sobre-content {
  position: relative;
  z-index: 3;
}

.mobile-sobre-container {
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.mobile-sobre-badge {
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
}

.mobile-sobre-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.mobile-sobre-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mobile-sobre-title {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

.title-highlight {
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.mobile-sobre-subtitle {
  font-size: 1rem;
  line-height: 1.4;
  opacity: 0.9;
  margin: 0;
  text-align: center;
}

@media (max-width: 375px) {
  .mobile-sobre-title { font-size: 1.75rem; }
  .mobile-sobre-subtitle { font-size: 0.9rem; }
  .mobile-sobre-image { width: 130px; height: 130px; }
}
</style>