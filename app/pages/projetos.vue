<template>
  <div>
    <Header />
    
    <!-- Hero and Projects Sections with Client-Only rendering -->
    <ClientOnly>
      <template v-if="device.isMobile">
        <MobileProjetosHeroSection />
        <MobileProjetosProjectsSection />
      </template>
      <template v-else>
        <HeroSection />
        <ProjectsSection />
      </template>
      <template #fallback>
        <!-- Fallback content while loading -->
        <div class="projects-placeholder">
          <div class="placeholder-content">
            <div class="placeholder-badge"></div>
            <div class="placeholder-title"></div>
            <div class="placeholder-subtitle"></div>
            <div class="placeholder-grid">
              <div class="placeholder-card"></div>
              <div class="placeholder-card"></div>
            </div>
          </div>
        </div>
      </template>
    </ClientOnly>
    
    <CTASection />
    <Footer />
  </div>
</template>

<script setup>
import HeroSection from '~/components/projetos/HeroSection.vue'
import ProjectsSection from '~/components/projetos/ProjectsSection.vue'
import CTASection from '~/components/projetos/CTASection.vue'

// Lazy import mobile components
const MobileProjetosHeroSection = defineAsyncComponent(() => import('~/components/mobile/projetos-m/HeroSection.vue'))
const MobileProjetosProjectsSection = defineAsyncComponent(() => import('~/components/mobile/projetos-m/ProjectsSection.vue'))

// Device detection
const device = useDevice()

useHead({
  title: 'Projetos - Aika Nakamura',
  meta: [
    { 
      name: 'description', 
      content: 'Conheça os projetos e trabalhos realizados por Aika Nakamura em estratégias digitais e desenvolvimento. Transformando ideias em realidade digital.' 
    },
    {
      property: 'og:title',
      content: 'Projetos - Aika Nakamura'
    },
    {
      property: 'og:description',
      content: 'Conheça os projetos e trabalhos realizados por Aika Nakamura em estratégias digitais e desenvolvimento. Transformando ideias em realidade digital.'
    },
    {
      property: 'og:image',
      content: '/Imagem/aika-ophen-graph.webp'
    },
    {
      property: 'og:url',
      content: 'https://www.aikanakamura.com/projetos'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Projetos - Aika Nakamura'
    },
    {
      name: 'twitter:description',
      content: 'Conheça os projetos e trabalhos realizados por Aika Nakamura em estratégias digitais e desenvolvimento. Transformando ideias em realidade digital.'
    },
    {
      name: 'twitter:image',
      content: '/Imagem/aika-ophen-graph.webp'
    }
  ]
})
</script>

<style scoped>
/* Projects Placeholder Styles */
.projects-placeholder {
  position: relative;
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  color: white;
  padding: 4rem 1rem 6rem;
  text-align: center;
  min-height: 600px;
}

.placeholder-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.placeholder-badge {
  width: 100px;
  height: 30px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  animation: pulse 1.5s ease-in-out infinite;
}

.placeholder-title {
  width: 300px;
  height: 50px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  animation: pulse 1.5s ease-in-out infinite;
  animation-delay: 0.2s;
}

.placeholder-subtitle {
  width: 400px;
  height: 24px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
  animation-delay: 0.4s;
}

.placeholder-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 800px;
  margin-top: 2rem;
}

.placeholder-card {
  height: 200px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  animation: pulse 1.5s ease-in-out infinite;
  animation-delay: 0.6s;
}

@keyframes pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

@media (max-width: 768px) {
  .projects-placeholder {
    padding: 3rem 1rem 4rem;
    min-height: 400px;
  }
  
  .placeholder-title {
    width: 250px;
    height: 40px;
  }
  
  .placeholder-subtitle {
    width: 280px;
    height: 20px;
  }
  
  .placeholder-grid {
    grid-template-columns: 1fr;
  }
  
  .placeholder-card {
    height: 150px;
  }
}
</style>