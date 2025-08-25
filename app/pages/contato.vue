<template>
  <div>
    <Header />
    
    <!-- Header and Contact Form Sections with Client-Only rendering -->
    <ClientOnly>
      <template v-if="device.isMobile">
        <MobileContatoHeaderSection />
        <MobileContatoContactFormSection />
      </template>
      <template v-else>
        <ContatoHeaderSection />
        <ContatoContactFormSection />
      </template>
      <template #fallback>
        <!-- Fallback content while loading -->
        <div class="contact-placeholder">
          <div class="placeholder-content">
            <div class="placeholder-badge"></div>
            <div class="placeholder-title"></div>
            <div class="placeholder-subtitle"></div>
            <div class="placeholder-form">
              <div class="placeholder-input"></div>
              <div class="placeholder-input"></div>
              <div class="placeholder-textarea"></div>
              <div class="placeholder-button"></div>
            </div>
          </div>
        </div>
      </template>
    </ClientOnly>
    
    <Footer />
  </div>
</template>

<script setup>
import Footer from '~/components/Footer.vue'
import ContatoHeaderSection from '~/components/contato/HeaderSection.vue'
import ContatoContactFormSection from '~/components/contato/ContactFormSection.vue'

// Lazy import mobile components
const MobileContatoHeaderSection = defineAsyncComponent(() => import('~/components/mobile/contato-m/HeaderSection.vue'))
const MobileContatoContactFormSection = defineAsyncComponent(() => import('~/components/mobile/contato-m/ContactFormSection.vue'))

// Device detection
const device = useDevice()

// SEO metadata
useHead({
  title: 'Contato - Aika Nakamura',
  meta: [
    { 
      name: 'description', 
      content: 'Entre em contato com Aika Nakamura para discutir projetos, parcerias ou tirar dúvidas sobre design e desenvolvimento digital.' 
    },
    {
      property: 'og:title',
      content: 'Contato - Aika Nakamura'
    },
    {
      property: 'og:description',
      content: 'Entre em contato com Aika Nakamura para discutir projetos, parcerias ou tirar dúvidas sobre design e desenvolvimento digital.'
    },
    {
      property: 'og:image',
      content: '/Imagem/aika-ophen-graph.webp'
    },
    {
      property: 'og:url',
      content: 'https://www.aikanakamura.com/contato'
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
      content: 'Contato - Aika Nakamura'
    },
    {
      name: 'twitter:description',
      content: 'Entre em contato com Aika Nakamura para discutir projetos, parcerias ou tirar dúvidas sobre design e desenvolvimento digital.'
    },
    {
      name: 'twitter:image',
      content: '/Imagem/aika-ophen-graph.webp'
    }
  ]
})
</script>

<style scoped>
/* Contact Placeholder Styles */
.contact-placeholder {
  position: relative;
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  color: white;
  padding: 4rem 1rem 6rem;
  text-align: center;
  min-height: 700px;
}

.placeholder-content {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.placeholder-badge {
  width: 80px;
  height: 30px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  animation: pulse 1.5s ease-in-out infinite;
}

.placeholder-title {
  width: 250px;
  height: 50px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  animation: pulse 1.5s ease-in-out infinite;
  animation-delay: 0.2s;
}

.placeholder-subtitle {
  width: 350px;
  height: 24px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
  animation-delay: 0.4s;
}

.placeholder-form {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
}

.placeholder-input {
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  animation: pulse 1.5s ease-in-out infinite;
  animation-delay: 0.6s;
}

.placeholder-textarea {
  height: 120px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  animation: pulse 1.5s ease-in-out infinite;
  animation-delay: 0.8s;
}

.placeholder-button {
  height: 50px;
  width: 150px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  margin: 0 auto;
  animation: pulse 1.5s ease-in-out infinite;
  animation-delay: 1s;
}

@keyframes pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

@media (max-width: 768px) {
  .contact-placeholder {
    padding: 3rem 1rem 4rem;
    min-height: 500px;
  }
  
  .placeholder-title {
    width: 200px;
    height: 40px;
  }
  
  .placeholder-subtitle {
    width: 280px;
    height: 20px;
  }
}
</style>