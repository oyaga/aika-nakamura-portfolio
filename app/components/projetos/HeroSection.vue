<template>
  <section class="hero-section">
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">Projetos</h1>
        <p class="hero-subtitle">Transformando ideias em realidade digital</p>
        <div class="hero-description">
          <p>Explore nossos trabalhos mais recentes em estratégias digitais, desenvolvimento e design.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Animação de entrada usando GSAP (quando disponível)
  if (typeof window !== 'undefined' && window.gsap) {
    window.gsap.fromTo('.hero-title', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    window.gsap.fromTo('.hero-subtitle', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
    )
    window.gsap.fromTo('.hero-description', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
    )
  }
})
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/Imagem/bg-projeto-aikawebp.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #f97316 0%, #EF4444 100%);
  mix-blend-mode: multiply;
  opacity: 0.8;
}

.container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.hero-content {
  color: white;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  font-family: 'Inter', sans-serif;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: -2px;
}

.hero-subtitle {
  font-size: clamp(1.25rem, 3vw, 2rem);
  font-weight: 300;
  margin-bottom: 2rem;
  opacity: 0.95;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.hero-description {
  max-width: 600px;
  margin: 0 auto;
}

.hero-description p {
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 400;
  line-height: 1.6;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

/* Efeitos responsivos */
@media (max-width: 768px) {
  .hero-section {
    background-attachment: scroll;
    min-height: 80vh;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .hero-title {
    letter-spacing: -1px;
  }
}

/* Animação de parallax sutil */
@media (prefers-reduced-motion: no-preference) {
  .hero-section {
    animation: subtle-parallax 20s ease-in-out infinite;
  }
}

@keyframes subtle-parallax {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}

/* Respeitar preferências de movimento reduzido */
@media (prefers-reduced-motion: reduce) {
  .hero-section {
    animation: none;
    background-attachment: scroll;
  }
}
</style>