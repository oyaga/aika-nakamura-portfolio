<template>
  <section class="projects-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Nossos Projetos</h2>
        <p class="section-subtitle">Soluções inovadoras que honram seu legado e constroem seu futuro</p>
      </div>
      
      <div class="projects-grid">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="project-card"
          :data-project="project.id"
        >
          <a 
            :href="project.link?.url || '#'" 
            :target="project.link?.url ? '_blank' : '_self'"
            :rel="project.link?.url ? 'noopener noreferrer' : ''"
            class="card-link"
            @mouseenter="handleCardHover"
            @mouseleave="handleCardLeave"
          >
            <div class="card-inner">
              <div class="card-front">
                <div class="card-image">
                  <img :src="project.image" :alt="project.title" />
                  <div class="glitch-overlay"></div>
                </div>
                <div class="card-content">
                  <h3 class="card-title">{{ project.title }}</h3>
                  <p class="card-description">{{ project.description }}</p>
                  <div class="card-tags">
                    <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
                  </div>
                </div>
              </div>
              <div class="card-back">
                <div class="card-details">
                  <h3>{{ project.title }}</h3>
                  <p>{{ project.fullDescription }}</p>
                  <div class="card-features">
                    <ul>
                      <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
                    </ul>
                  </div>
                  <button class="card-cta">{{ project.link?.label || 'Ver Projeto' }}</button>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const projects = ref([
  {
    id: 'aika-whatsapp',
    title: 'Aika pelo WhatsApp',
    description: 'Assistente digital inteligente integrada ao WhatsApp para atendimento automatizado.',
    fullDescription: 'Sistema completo de atendimento automatizado via WhatsApp, utilizando IA para responder dúvidas e direcionar clientes de forma eficiente.',
    image: '/Imagem/Card Projetos/card-aika.webp',
    tags: ['WhatsApp', 'IA', 'Chatbot'],
    features: [
      'Integração completa com WhatsApp Business',
      'Respostas inteligentes com IA',
      'Dashboard de gerenciamento',
      'Relatórios de performance'
    ],
    link: {
      url: '#',
      label: 'Em breve'
    }
  },
  {
    id: 'prime-fort',
    title: 'Prime Fort Serviços',
    description: 'A Prime Fort oferece soluções completas em segurança patrimonial.',
    fullDescription: 'A Prime Fort oferece soluções completas em segurança patrimonial, portaria terceirizada e facilities management com tecnologia de ponta e equipe especializada.',
    image: '/Imagem/Card Projetos/card-prime-fort-servicos.webp',
    tags: ['Segurança', 'Portaria', 'Facilities', 'Tecnologia'],
    features: [
      'Arquitetura de microserviços',
      'Criptografia de ponta a ponta',
      'Interface responsiva',
      'Relatórios em tempo real'
    ],
    link: {
      url: 'https://primefortservicos.com.br',
      label: 'Visitar site'
    }
  }
])

let glitchInterval = null

const handleCardHover = (event) => {
  const card = event.currentTarget.closest('.project-card')
  
  // Animação 3D
  if (typeof window !== 'undefined' && window.gsap) {
    window.gsap.to(card, {
      rotationY: 180,
      duration: 0.6,
      ease: 'power2.inOut'
    })
  }
  
  // Iniciar efeito glitch
  startGlitchEffect(card)
}

const handleCardLeave = (event) => {
  const card = event.currentTarget.closest('.project-card')
  
  // Voltar posição original
  if (typeof window !== 'undefined' && window.gsap) {
    window.gsap.to(card, {
      rotationY: 0,
      duration: 0.6,
      ease: 'power2.inOut'
    })
  }
  
  // Parar efeito glitch
  stopGlitchEffect(card)
}

const startGlitchEffect = (card) => {
  const glitchOverlay = card.querySelector('.glitch-overlay')
  if (!glitchOverlay) return
  
  glitchInterval = setInterval(() => {
    const effects = ['glitch-1', 'glitch-2', 'glitch-3']
    const randomEffect = effects[Math.floor(Math.random() * effects.length)]
    
    glitchOverlay.className = 'glitch-overlay ' + randomEffect
    
    setTimeout(() => {
      glitchOverlay.className = 'glitch-overlay'
    }, 150)
  }, 300)
}

const stopGlitchEffect = (card) => {
  if (glitchInterval) {
    clearInterval(glitchInterval)
    glitchInterval = null
  }
  
  const glitchOverlay = card.querySelector('.glitch-overlay')
  if (glitchOverlay) {
    glitchOverlay.className = 'glitch-overlay'
  }
}

onMounted(() => {
  // Animação de entrada dos cards
  if (typeof window !== 'undefined' && window.gsap) {
    window.gsap.fromTo('.project-card', 
      { opacity: 0, y: 60, rotationX: -15 },
      { 
        opacity: 1, 
        y: 0, 
        rotationX: 0,
        duration: 1, 
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%'
        }
      }
    )
  }
})
</script>

<style scoped>
.projects-section {
  padding: 8rem 2rem;
  background: #1a1a1a;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: #f44003;
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;
}

.section-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #fafcfe;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  perspective: 1000px;
}

.project-card {
  height: 500px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.1s ease;
}

.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
  cursor: pointer;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  background: white;
}

.card-back {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #9A3412 0%, #EF4444 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.card-image {
  position: relative;
  height: 60%;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .card-image img {
  transform: scale(1.1);
}

.glitch-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.glitch-1 {
  background: linear-gradient(90deg, transparent 0%, #f97316 50%, transparent 100%);
  animation: glitch-slide 0.15s ease-in-out;
}

.glitch-2 {
  background: linear-gradient(0deg, transparent 0%, #EF4444 50%, transparent 100%);
  animation: glitch-vertical 0.15s ease-in-out;
}

.glitch-3 {
  background: radial-gradient(circle, #f97316 0%, transparent 70%);
  animation: glitch-pulse 0.15s ease-in-out;
}

@keyframes glitch-slide {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes glitch-vertical {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

@keyframes glitch-pulse {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.3; }
}

.card-content {
  padding: 2rem;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.card-description {
  color: #64748b;
  line-height: 1.5;
  flex-grow: 1;
}

.card-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.tag {
  background: #f1f5f9;
  color: #475569;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
}

.card-details {
  text-align: center;
}

.card-details h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.card-details p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.card-features ul {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.card-features li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.card-features li:last-child {
  border-bottom: none;
}

.card-cta {
  background: white;
  color: #9A3412;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Responsivo */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .project-card {
    height: 400px;
  }
  
  .projects-section {
    padding: 4rem 1rem;
  }
}

/* Respeitar preferências de movimento reduzido */
@media (prefers-reduced-motion: reduce) {
  .project-card {
    transition: none;
  }
  
  .card-image img {
    transition: none;
  }
  
  .glitch-1,
  .glitch-2,
  .glitch-3 {
    animation: none;
  }
}
</style>