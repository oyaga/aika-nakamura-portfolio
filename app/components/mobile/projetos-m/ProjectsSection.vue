<template>
  <section class="mobile-projects-section">
    
    <div class="mobile-projects-content">
      <div class="mobile-projects-container">
        
        <!-- Projects Grid -->
        <div ref="mobileProjectsGrid" class="mobile-projects-grid">
          <div v-for="(project, index) in mobileProjects" :key="index" 
               class="mobile-project-card" 
               :class="`project-${index + 1}`">
            <div class="mobile-project-image">
              <img :src="project.image" :alt="project.title" />
              <div class="mobile-project-overlay">
                <div class="project-tech">
                  <span v-for="tech in project.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
                </div>
              </div>
            </div>
            <div class="mobile-project-content">
              <h3 class="mobile-project-title">{{ project.title }}</h3>
              <p class="mobile-project-description">{{ project.description }}</p>
              <div class="mobile-project-features">
                <ul>
                  <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const mobileProjectsGrid = ref(null)

const mobileProjects = ref([
  {
    title: 'Aika Portfolio',
    description: 'Portfolio digital com animações avançadas e design futurístico.',
    image: '/Imagem/Card Projetos/card-aika.webp',
    technologies: ['Nuxt.js', 'GSAP', 'TailwindCSS'],
    features: ['Animações GSAP', 'Design Responsivo', 'Performance Otimizada']
  },
  {
    title: 'Prime Fort Serviços',
    description: 'Plataforma completa para gestão de serviços empresariais.',
    image: '/Imagem/Card Projetos/card-prime-fort-servicos.webp',
    technologies: ['Vue.js', 'API Rest', 'Dashboard'],
    features: ['Gestão Completa', 'Relatórios', 'Integração APIs']
  }
])

onMounted(() => {
  const tl = gsap.timeline({ 
    defaults: { ease: "power2.out", duration: 0.5 }
  });

  tl.from(mobileProjectsGrid.value?.children || [], { 
    y: 40, 
    opacity: 0, 
    stagger: 0.2 
  });
});
</script>

<style scoped>
.mobile-projects-section {
  background: #1a1a1a;
  color: white;
  padding: 3rem 1rem;
}

.mobile-projects-content {
  position: relative;
  z-index: 3;
}

.mobile-projects-container {
  max-width: 400px;
  margin: 0 auto;
}

.mobile-projects-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.mobile-project-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.mobile-project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.mobile-project-image {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
}

.mobile-project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mobile-project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 1rem;
}

.mobile-project-card:hover .mobile-project-overlay {
  opacity: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(249, 115, 22, 0.8);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 500;
}

.mobile-project-content {
  padding: 1.5rem;
}

.mobile-project-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.mobile-project-description {
  font-size: 0.85rem;
  opacity: 0.8;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.mobile-project-features ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.mobile-project-features li {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  font-size: 0.7rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 375px) {
  .mobile-projects-section { padding: 2.5rem 0.75rem; }
  .mobile-project-content { padding: 1.25rem; }
}
</style>