<template>
  <section class="mobile-projetos-hero">
    <div class="mobile-bg-projetos">
      <div class="mobile-gradient-projetos"></div>
    </div>
    
    <div class="mobile-projetos-content">
      <div class="mobile-projetos-container">
        
        <div ref="mobileBadge" class="mobile-projetos-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <span>PORTFÓLIO</span>
        </div>
        
        <h1 ref="mobileTitle" class="mobile-projetos-title">
          Nossos <span class="title-highlight">Projetos</span>
        </h1>
        
        <p ref="mobileSubtitle" class="mobile-projetos-subtitle">
          Conheça alguns dos projetos que desenvolvemos com tecnologia e criatividade.
        </p>
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const mobileBadge = ref(null)
const mobileTitle = ref(null)
const mobileSubtitle = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ 
    defaults: { ease: "power2.out", duration: 0.6 }
  });

  tl.from(mobileBadge.value, { y: -20, opacity: 0 })
    .from(mobileTitle.value, { y: 30, opacity: 0 }, "-=0.3")
    .from(mobileSubtitle.value, { y: 20, opacity: 0 }, "-=0.3");
});
</script>

<style scoped>
.mobile-projetos-hero {
  position: relative;
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  color: white;
  padding: 4rem 1rem 3rem;
  text-align: center;
}

.mobile-bg-projetos {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.mobile-gradient-projetos {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
}

.mobile-projetos-content {
  position: relative;
  z-index: 3;
}

.mobile-projetos-container {
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-projetos-badge {
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
  margin: 0 auto;
}

.mobile-projetos-title {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

.title-highlight {
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.mobile-projetos-subtitle {
  font-size: 1rem;
  line-height: 1.4;
  opacity: 0.9;
  margin: 0;
}

@media (max-width: 375px) {
  .mobile-projetos-title { font-size: 1.75rem; }
  .mobile-projetos-subtitle { font-size: 0.9rem; }
}
</style>