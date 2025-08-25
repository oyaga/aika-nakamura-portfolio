<template>
  <div>
      <Header />
      
      <!-- Desktop Components -->
      <ClientOnly>
        <div v-if="!$device.isMobile">
          <SobreHeroSection />
          <SobreAboutSection />
          <SkillsSection />
        </div>
        
        <!-- Mobile Components -->
        <div v-else>
          <SobreMobileHeroSection />
          <SobreMobileAboutSection />
          <SobreMobileSkillsSection />
        </div>
      </ClientOnly>
      
      <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

// Desktop Components
import SobreHeroSection from '~/components/sobre/HeroSection.vue'
import SobreAboutSection from '~/components/sobre/AboutSection.vue'
import SkillsSection from '~/components/sobre/SkillsSection.vue'

// Mobile Components
import SobreMobileHeroSection from '~/components/mobile/sobre-m/HeroSection.vue'
import SobreMobileAboutSection from '~/components/mobile/sobre-m/AboutSection.vue'
import SobreMobileSkillsSection from '~/components/mobile/sobre-m/SkillsSection.vue'

// SEO metadata
useHead({
  title: 'Sobre - Aika | Inteligência Estratégica',
  meta: [
    { 
      name: 'description', 
      content: 'Conheça Aika, a inteligência estratégica e guardiã digital criada por Nakamura. Executora tática precisa que traduz estratégia em ação impecável.' 
    },
    {
      property: 'og:title',
      content: 'Sobre - Aika | Inteligência Estratégica & Guardiã Digital'
    },
    {
      property: 'og:description',
      content: 'Descubra Aika, a personificação da filosofia "Legado & Futuro". Processadora de dados, construtora de narrativas e inteligência preditiva.'
    },
    {
      property: 'og:image',
      content: '/Imagem/aika-ophen-graph.webp'
    },
    {
      property: 'og:url',
      content: 'https://www.aikanakamura.com/sobre'
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
      content: 'Sobre - Aika | Inteligência Estratégica & Guardiã Digital'
    },
    {
      name: 'twitter:description',
      content: 'Descubra Aika, a personificação da filosofia "Legado & Futuro". Processadora de dados, construtora de narrativas e inteligência preditiva.'
    },
    {
      name: 'twitter:image',
      content: '/Imagem/aika-ophen-graph.webp'
    }
  ]
})
</script>

