<template>
  <div>
    <Header />
    
    <!-- Responsive Components with ClientOnly to prevent hydration mismatches -->
    <ClientOnly>
      <!-- Mobile Components -->
      <template v-if="shouldUseMobile">
        <MobileHeroSection />
        <MobileServicesSection />
        <MobileAboutSection />
        <MobileContactSection />
      </template>
      
      <!-- Desktop Components -->
      <template v-else>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </template>
      
      <!-- Fallback content during hydration -->
      <template #fallback>
        <div class="loading-fallback">
          <div class="loading-content">
            <div class="loading-spinner"></div>
            <p>Carregando...</p>
          </div>
        </div>
      </template>
    </ClientOnly>
    
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Direct imports for mobile components to avoid async hydration issues
import MobileHeroSection from '~/components/mobile/index-m/HeroSection.vue'
import MobileServicesSection from '~/components/mobile/index-m/ServicesSection.vue'
import MobileAboutSection from '~/components/mobile/index-m/AboutSection.vue'
import MobileContactSection from '~/components/mobile/index-m/ContactSection.vue'

// Reactive mobile state with consistent SSR/client detection
const isMobileScreen = ref(false)

// Only detect mobile on client side to avoid hydration mismatches
if (process.client) {
  onMounted(() => {
    const updateMobileDetection = () => {
      const width = window.innerWidth
      isMobileScreen.value = width <= 1024
    }
    
    updateMobileDetection()
    window.addEventListener('resize', updateMobileDetection)
  })
}

// Simple mobile detection - only after client-side hydration
const shouldUseMobile = computed(() => {
  return isMobileScreen.value
})

// Meta tags para SEO e Open Graph
useHead({
  title: 'Aika Nakamura - Design & Development',
  meta: [
    { name: 'description', content: 'Portfólio de Aika Nakamura, especialista em design e desenvolvimento de interfaces com foco em performance e experiência do usuário.' },
    // Open Graph
    { property: 'og:title', content: 'Aika Nakamura - Design & Development' },
    { property: 'og:description', content: 'Portfólio de Aika Nakamura, especialista em design e desenvolvimento de interfaces com foco em performance e experiência do usuário.' },
    { property: 'og:image', content: '/Imagem/aika-ophen-graph.webp' },
    { property: 'og:url', content: 'https://www.aikanakamura.com' },
    { property: 'og:type', content: 'website' },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Aika Nakamura - Design & Development' },
    { name: 'twitter:description', content: 'Portfólio de Aika Nakamura, especialista em design e desenvolvimento de interfaces com foco em performance e experiência do usuário.' },
    { name: 'twitter:image', content: '/Imagem/aika-ophen-graph.webp' }
  ]
})
</script>

<style scoped>
/* Loading fallback styles */
.loading-fallback {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  color: white;
}

.loading-content {
  text-align: center;
  padding: 2rem;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-content p {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.9;
}
</style>