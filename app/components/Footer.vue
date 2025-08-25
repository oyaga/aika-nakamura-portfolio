<template>
  <footer class="bg-[#1a1a1a] text-white">
    <div class="container mx-auto px-4 py-6">
      <!-- Main footer content -->
      <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8">
        <!-- Brand column -->
        <div class="lg:col-span-1">
          <div class="mb-6">
            <h2 class="text-2xl font-bold mb-3">AIKA NAKAMURA</h2>
            <p class="opacity-80 mb-6 max-w-md text-sm">
              Honramos seu legado, construímos seu futuro. Especialista em estratégias digitais avançadas.
            </p>
          </div>
          
          <div class="flex space-x-4">
            <a href="https://github.com/oyaga" target="_blank" rel="noopener noreferrer" 
               class="w-10 h-10 rounded-full bg-orange-700 flex items-center justify-center transition-all hover:bg-orange-600 hover:scale-110"
               aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/felipe-nakamura-dsg/" target="_blank" rel="noopener noreferrer" 
               class="w-10 h-10 rounded-full bg-orange-700 flex items-center justify-center transition-all hover:bg-orange-600 hover:scale-110"
               aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Navigation column -->
        <div class="lg:col-span-1">
          <h3 class="text-lg font-semibold mb-4 relative pb-2">
            <span class="relative z-10">Navegação</span>
            <span class="absolute bottom-0 left-0 w-10 h-0.5 bg-orange-400"></span>
          </h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="opacity-80 hover:opacity-100 transition-opacity hover:text-orange-200 block py-1">Início</NuxtLink></li>
            <li><NuxtLink to="/sobre" class="opacity-80 hover:opacity-100 transition-opacity hover:text-orange-200 block py-1">Sobre</NuxtLink></li>
            <li><a href="#servicos" class="opacity-80 hover:opacity-100 transition-opacity hover:text-orange-200 block py-1">Serviços</a></li>
            <li><NuxtLink to="/contato" class="opacity-80 hover:opacity-100 transition-opacity hover:text-orange-200 block py-1">Contato</NuxtLink></li>
          </ul>
        </div>
        
        <!-- Contact column -->
        <div class="lg:col-span-1">
          <h3 class="text-lg font-semibold mb-4 relative pb-2">
            <span class="relative z-10">Contato</span>
            <span class="absolute bottom-0 left-0 w-10 h-0.5 bg-orange-400"></span>
          </h3>
          <ul class="space-y-4">
            <li class="flex items-start">
              <div class="w-8 h-8 rounded-full bg-orange-700 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <a href="mailto:felipe.kenji@hotmail.com" 
                 class="opacity-90 hover:opacity-100 transition-opacity hover:text-orange-200 hover:underline text-sm">
                felipe.kenji@hotmail.com
              </a>
            </li>
            <li class="flex items-start">
              <div class="w-8 h-8 rounded-full bg-orange-700 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <a href="https://wa.me/5519993369603" target="_blank" rel="noopener noreferrer" 
                 class="opacity-90 hover:opacity-100 transition-opacity hover:text-orange-200 hover:underline text-sm">
               19 99336-9603
              </a>
            </li>
            <li class="flex items-start">
              <div class="w-8 h-8 rounded-full bg-orange-700 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span class="opacity-90 text-sm">Campinas, Brasil</span>
            </li>
          </ul>
        </div>
        
        <!-- Newsletter column -->
        <div class="lg:col-span-1">
          <h3 class="text-lg font-semibold mb-4 relative pb-2">
            <span class="relative z-10">Newsletter</span>
            <span class="absolute bottom-0 left-0 w-10 h-0.5 bg-orange-400"></span>
          </h3>
          <p class="opacity-80 mb-4 text-sm">
            Inscreva-se para receber atualizações e novidades.
          </p>
          <form class="flex flex-col space-y-3" @submit.prevent="subscribeNewsletter">
            <input 
              v-model="newsletterEmail"
              type="email" 
              placeholder="Seu e-mail" 
              class="bg-orange-700/50 border border-orange-600 rounded-lg px-4 py-2 text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            >
            <button 
              type="submit"
              :disabled="isSubscribing"
              class="bg-orange-600 hover:bg-orange-500 text-white font-medium rounded-lg px-4 py-2 transition-colors duration-300 disabled:opacity-50"
            >
              {{ isSubscribing ? 'Enviando...' : 'Inscrever-se' }}
            </button>
          </form>
          
          <!-- Success Message -->
          <div 
            v-if="showNewsletterSuccess"
            class="mt-3 p-3 rounded-lg bg-green-500/20 border border-green-500/50 backdrop-blur-sm animate-fade-in"
          >
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-green-400 text-sm">Inscrição realizada com sucesso!</span>
            </div>
          </div>

          <!-- Error Message -->
          <div 
            v-if="showNewsletterError"
            class="mt-3 p-3 rounded-lg bg-red-500/20 border border-red-500/50 backdrop-blur-sm animate-fade-in"
          >
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-red-400 text-sm">{{ newsletterError }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Footer bottom -->
      <div class="border-t border-orange-700 mt-10 pt-6 text-center">
        <p class="opacity-70 text-sm">
          &copy; {{ new Date().getFullYear() }} Aika Nakamura / Felipe Nakamura. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

// Newsletter form data
const newsletterEmail = ref('')
const isSubscribing = ref(false)
const showNewsletterSuccess = ref(false)
const showNewsletterError = ref(false)
const newsletterError = ref('')

// Newsletter subscription handler
const subscribeNewsletter = async () => {
  if (!newsletterEmail.value) return
  
  isSubscribing.value = true
  showNewsletterSuccess.value = false
  showNewsletterError.value = false
  newsletterError.value = ''
  
  try {
    // Create a form data object for EmailJS
    const formData = new FormData()
    formData.append('email', newsletterEmail.value)
    
    // Send email using EmailJS
    // Note: You'll need to create a specific template for newsletter subscriptions
    await emailjs.send(
      'service_1xzxuqt', 
      'template_su109xb', 
      {
        user_email: newsletterEmail.value,
        message: 'Nova inscrição na newsletter'
      },
      'Dqa1q9GUlbK6NqH9r'
    )
    
    // Show success message
    showNewsletterSuccess.value = true
    
    // Reset form
    newsletterEmail.value = ''
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showNewsletterSuccess.value = false
    }, 5000)
  } catch (error) {
    console.error('FAILED...', error)
    
    // Set error message
    if (error.text) {
      newsletterError.value = error.text
    } else if (error.message) {
      newsletterError.value = error.message
    } else {
      newsletterError.value = 'Ocorreu um erro ao realizar a inscrição. Por favor, tente novamente.'
    }
    
    // Show error message
    showNewsletterError.value = true
    
    // Hide error message after 5 seconds
    setTimeout(() => {
      showNewsletterError.value = false
      newsletterError.value = ''
    }, 5000)
  } finally {
    isSubscribing.value = false
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}
</style>