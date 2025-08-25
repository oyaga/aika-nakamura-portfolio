<template>
  <section class="cta-section">
    <div class="cta-background">
      <div class="animated-gradient"></div>
      <div class="floating-elements">
        <div class="float-element" v-for="i in 6" :key="i"></div>
      </div>
    </div>
    
    <div class="container">
      <div class="cta-content">
        <div class="cta-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
            <path d="M2 17L12 22L22 17"/>
            <path d="M2 12L12 17L22 12"/>
          </svg>
        </div>
        
        <h2 class="cta-title">Pronto para Transformar Sua Ideia?</h2>
        <p class="cta-subtitle">
          Honramos seu legado, construímos seu futuro. Vamos juntos criar algo extraordinário.
        </p>
        
        <div class="cta-buttons">
          <a href="/contato" class="cta-primary">
            <span>Entre em Contato</span>
            <svg class="button-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </a>
          
          <a href="https://wa.me/5519993369603" target="_blank" class="cta-secondary">
            <span>WhatsApp</span>
            <svg class="button-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106"/>
            </svg>
          </a>
        </div>
         </div>
          </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Animações de entrada
  if (typeof window !== 'undefined' && window.gsap) {
    const tl = window.gsap.timeline({
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 70%'
      }
    })
    
    tl.fromTo('.cta-icon', 
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 0.8, ease: 'back.out(1.7)' }
    )
    .fromTo('.cta-title', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 }, '-=0.4'
    )
    .fromTo('.cta-subtitle', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 }, '-=0.3'
    )
    .fromTo('.cta-buttons', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 }, '-=0.2'
    )
    .fromTo('.stat-item', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, '-=0.3'
    )
    
    // Animação dos elementos flutuantes
    window.gsap.to('.float-element', {
      y: 'random(-20, 20)',
      x: 'random(-15, 15)',
      rotation: 'random(-180, 180)',
      duration: 'random(3, 6)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: {
        amount: 2,
        from: 'random'
      }
    })
  }
})
</script>

<style scoped>
.cta-section {
  position: relative;
  padding: 8rem 2rem;
  overflow: hidden;
  background: #0f172a;
  color: white;
}

.cta-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.animated-gradient {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, #9A3412, #EF4444, #f97316, #9A3412);
  background-size: 400% 400%;
  animation: gradient-shift 8s ease-in-out infinite;
  opacity: 0.1;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.float-element {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #f97316;
  border-radius: 50%;
  opacity: 0.6;
}

.float-element:nth-child(1) { top: 20%; left: 10%; }
.float-element:nth-child(2) { top: 60%; left: 20%; }
.float-element:nth-child(3) { top: 30%; left: 80%; }
.float-element:nth-child(4) { top: 70%; left: 75%; }
.float-element:nth-child(5) { top: 40%; left: 50%; }
.float-element:nth-child(6) { top: 80%; left: 60%; }

.container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
}

.cta-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  background: linear-gradient(135deg, #f97316, #EF4444);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 20px 40px rgba(239, 68, 68, 0.3);
}

.cta-icon svg {
  width: 40px;
  height: 40px;
}

.cta-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 1.5rem;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #f97316, #EF4444);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  line-height: 1.6;
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.cta-primary,
.cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cta-primary {
  background: linear-gradient(135deg, #f97316, #EF4444);
  color: white;
  box-shadow: 0 10px 30px rgba(239, 68, 68, 0.3);
}

.cta-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(239, 68, 68, 0.4);
}

.cta-secondary {
  background: transparent;
  color: #f97316;
  border: 2px solid #f97316;
}

.cta-secondary:hover {
  background: #f97316;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(249, 115, 22, 0.3);
}

.button-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.cta-primary:hover .button-icon,
.cta-secondary:hover .button-icon {
  transform: scale(1.1);
}


.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 900;
  color: #f97316;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Responsivo */
@media (max-width: 768px) {
  .cta-section {
    padding: 4rem 1rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-primary,
  .cta-secondary {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}

/* Respeitar preferências de movimento reduzido */
@media (prefers-reduced-motion: reduce) {
  .animated-gradient {
    animation: none;
  }
  
  .float-element {
    animation: none;
  }
  
  .cta-primary:hover,
  .cta-secondary:hover {
    transform: none;
  }
}
</style>