<template>
  <section class="relative py-20 bg-gradient-to-br from-orange-500 to-orange-600 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 right-20 w-64 h-64 bg-white rounded-full opacity-10 animate-pulse"></div>
      <div class="absolute bottom-20 left-20 w-48 h-48 bg-white rounded-full opacity-5 animate-bounce" style="animation-duration: 4s;"></div>
      <div class="absolute top-1/2 left-1/4 w-2 h-64 bg-white opacity-20 transform rotate-45"></div>
    </div>
    
    <!-- Header inside this section -->
    <Header class="absolute top-0 left-0 w-full z-20" />
    
    <div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10 pt-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Content Section -->
        <div class="text-center lg:text-left">
          <div class="inline-flex items-center px-6 py-3 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mr-2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Fale Conosco
          </div>

          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
            Entre em <span class="text-white">Contato</span>
          </h1>

          <p class="text-xl sm:text-2xl text-orange-100 leading-relaxed mb-12 max-w-3xl mx-auto lg:mx-0">
            Estou aqui para ajudar você. Entre em contato e descubra como posso transformar suas ideias em realidade digital.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 mb-12">
            <div class="text-center">
              <div class="text-3xl sm:text-4xl font-bold text-white mb-2">24h</div>
              <div class="text-sm text-orange-200 uppercase tracking-wide">Atendimento</div>
            </div>
            <div class="text-center">
              <div class="text-3xl sm:text-4xl font-bold text-white mb-2">100%</div>
              <div class="text-sm text-orange-200 uppercase tracking-wide">Dedicação</div>
            </div>
            <div class="text-center">
              <div class="text-3xl sm:text-4xl font-bold text-white mb-2">10+</div>
              <div class="text-sm text-orange-200 uppercase tracking-wide">Projetos</div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="mailto:felipe.kenji@hotmail.com" 
               class="group bg-gradient-to-r from-white to-orange-100 hover:from-orange-100 hover:to-white text-orange-600 font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 mr-2 inline group-hover:scale-110 transition-transform">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Enviar Email
            </a>
            <button @click="openWhatsApp('5519993369603', 'Olá! Vi a página de contato e gostaria de conhecer mais sobre os serviços.')"
                    class="group bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg shadow-md">
              <svg class="w-5 h-5 mr-2 inline group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
              </svg>
              WhatsApp
            </button>
          </div>
        </div>

        <!-- Contact Cards Section -->
        <div class="space-y-6">
          <!-- Phone Card -->
          <div class="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
            <div class="flex items-center space-x-4">
              <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-orange-500">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white mb-1">Telefone</h3>
                <p class="text-2xl font-bold text-white">19 99336-9603</p>
                <p class="text-orange-200 text-sm">Atendimento 24 horas</p>
              </div>
            </div>
          </div>

          <!-- Email Card -->
          <div class="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
            <div class="flex items-center space-x-4">
              <div class="w-16 h-16 bg-orange-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-white">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white mb-1">E-mail</h3>
                <p class="text-lg font-semibold text-white">felipe.kenji@hotmail.com</p>
                <p class="text-orange-200 text-sm">Resposta em até 2 horas</p>
              </div>
            </div>
          </div>

          <!-- Location Card -->
          <div class="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
            <div class="flex items-center space-x-4">
              <div class="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-white">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white mb-1">Localização</h3>
                <p class="text-lg font-semibold text-white">Campinas - SP</p>
                <p class="text-orange-200 text-sm">Atendemos todo Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Header from '~/components/Header.vue'

const openWhatsApp = (phone, message) => {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
</script>

<style scoped>
/* Add any specific styles here if needed */
</style>