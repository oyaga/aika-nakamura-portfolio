<template>
  <section class="relative py-16 sm:py-20 md:py-24 overflow-hidden" style="background: linear-gradient(135deg, rgb(249, 115, 22) 0%, rgb(234, 88, 12) 50%, rgb(194, 65, 12) 100%);">
    <div class="absolute inset-0">
      <div class="absolute top-20 right-20 w-40 h-40 bg-white rounded-full opacity-10 animate-pulse"></div>
      <div class="absolute bottom-20 left-20 w-32 h-32 bg-white rounded-full opacity-10 animate-bounce"></div>
      <div class="absolute top-1/2 right-10 w-2 h-32 bg-white opacity-20 transform rotate-45"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-32 relative z-10">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16 sm:mb-20">
          <!-- Badge -->
          <div class="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm" style="background-color:rgba(255, 255, 255, 0.2);color:rgba(255, 255, 255, 0.9);">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 mr-2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Formulário de Contato
          </div>
          <!-- Title -->
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Envie sua <span class="relative" style="color:#ffffff;">
              Mensagem
              <div class="absolute -bottom-2 left-0 w-full h-1 opacity-50 rounded" style="background-color:#ffffff;"></div>
            </span>
          </h2>
          <!-- Description -->
          <p class="text-lg sm:text-xl text-orange-100 leading-relaxed max-w-3xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato em breve. Sua mensagem é importante para nós.
          </p>
        </div>

        <!-- Form Container -->
        <div class="form-wrapper relative">
          <!-- Form Background -->
          <div class="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl"></div>
          <div class="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
            <form id="contact-form" ref="formRef" class="space-y-8" @submit.prevent="submitForm">
              <!-- Grid Fields -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Nome -->
                <div class="form-group">
                  <label for="nome" class="form-label block text-sm font-semibold text-white mb-2">Nome Completo *</label>
                  <div class="relative">
                    <input 
                      type="text" 
                      id="nome" 
                      name="user_name"
                      v-model="form.name"
                      class="form-input w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-orange-200 focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm transition-all duration-300"
                      placeholder="Seu nome completo" 
                      required>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 text-orange-200">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- Empresa -->
                <div class="form-group">
                  <label for="empresa" class="form-label block text-sm font-semibold text-white mb-2">Empresa</label>
                  <div class="relative">
                    <input 
                      type="text" 
                      id="empresa" 
                      name="company"
                      v-model="form.company"
                      class="form-input w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-orange-200 focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm transition-all duration-300"
                      placeholder="Nome da sua empresa">
                    <div class="absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 text-orange-200">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- Email -->
                <div class="form-group">
                  <label for="email" class="form-label block text-sm font-semibold text-white mb-2">E-mail *</label>
                  <div class="relative">
                    <input 
                      type="email" 
                      id="email" 
                      name="user_email"
                      v-model="form.email"
                      class="form-input w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-orange-200 focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm transition-all duration-300"
                      placeholder="seu@email.com" 
                      required>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 text-orange-200">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- Telefone -->
                <div class="form-group">
                  <label for="telefone" class="form-label block text-sm font-semibold text-white mb-2">Telefone *</label>
                  <div class="relative">
                    <input 
                      type="tel" 
                      id="telefone" 
                      name="phone"
                      v-model="form.phone"
                      class="form-input w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-orange-200 focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm transition-all duration-300"
                      placeholder="(11) 99999-9999" 
                      maxlength="15" 
                      required>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 text-orange-200">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Serviço -->
              <div class="form-group">
                <label for="servico" class="form-label block text-sm font-semibold text-white mb-2">Serviço de Interesse</label>
                <select 
                  id="servico" 
                  name="service"
                  v-model="form.service"
                  class="form-select w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm transition-all duration-300 appearance-none">
                  <option value="" class="text-gray-900">Selecione um serviço</option>
                  <option value="Design de Interfaces" class="text-gray-900">Design de Interfaces</option>
                  <option value="Desenvolvimento Web" class="text-gray-900">Desenvolvimento Web</option>
                  <option value="Consultoria Digital" class="text-gray-900">Consultoria Digital</option>
                  <option value="Automação de Processos" class="text-gray-900">Automação de Processos</option>
                  <option value="Marketing Digital" class="text-gray-900">Marketing Digital</option>
                  <option value="Outros Serviços" class="text-gray-900">Outros</option>
                </select>
              </div>

              <!-- Mensagem -->
              <div class="form-group">
                <label for="mensagem" class="form-label block text-sm font-semibold text-white mb-2">Mensagem *</label>
                <textarea 
                  id="mensagem" 
                  name="message"
                  v-model="form.message"
                  class="form-textarea w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-orange-200 focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm transition-all duration-300 resize-none"
                  placeholder="Descreva suas necessidades ou dúvidas..." 
                  rows="6"
                  required></textarea>
              </div>

              <!-- Success Message -->
              <div 
                v-if="showSuccessMessage"
                class="p-4 rounded-lg bg-green-500/20 border border-green-500/50 backdrop-blur-sm animate-fade-in"
              >
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 class="text-green-400 font-semibold">Mensagem enviada com sucesso!</h3>
                    <p class="text-green-300 text-sm mt-1">Entrarei em contato em breve.</p>
                  </div>
                </div>
              </div>

              <!-- Error Message -->
              <div 
                v-if="showErrorMessage"
                class="p-4 rounded-lg bg-red-500/20 border border-red-500/50 backdrop-blur-sm animate-fade-in"
              >
                <div class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 class="text-red-400 font-semibold">Erro ao enviar mensagem</h3>
                    <p class="text-red-300 text-sm mt-1">{{ errorMessage }}</p>
                  </div>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="form-actions">
                <button 
                  type="submit"
                  :disabled="isSubmitting"
                  class="submit-button group relative w-full bg-gradient-to-r from-white to-orange-100 hover:from-orange-100 hover:to-white text-orange-600 font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg shadow-md overflow-hidden">
                  <!-- Button Background Effect -->
                  <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <!-- Icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6 inline mr-3 group-hover:rotate-12 transition-transform relative z-10">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  <!-- Text -->
                  <span class="relative z-10">{{ isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAGEM' }}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

// Form data
const form = ref({
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

// Form reference for EmailJS
const formRef = ref(null)

// Submission state
const isSubmitting = ref(false)

// Message states
const showSuccessMessage = ref(false)
const showErrorMessage = ref(false)
const errorMessage = ref('')

// Form submission handler
const submitForm = async () => {
  isSubmitting.value = true
  showSuccessMessage.value = false
  showErrorMessage.value = false
  errorMessage.value = ''
  
  try {
    // Send email using EmailJS
    await emailjs.sendForm(
      'service_1xzxuqt', 
      'template_6wlyhx9', 
      formRef.value, 
      'Dqa1q9GUlbK6NqH9r'
    )
    
    // Reset form
    form.value = {
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
    
    // Show success message
    showSuccessMessage.value = true
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccessMessage.value = false
    }, 5000)
  } catch (error) {
    console.error('FAILED...', error)
    
    // Set error message based on error type
    if (error.text) {
      errorMessage.value = error.text
    } else if (error.message) {
      errorMessage.value = error.message
    } else {
      errorMessage.value = 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.'
    }
    
    // Show error message
    showErrorMessage.value = true
    
    // Hide error message after 5 seconds
    setTimeout(() => {
      showErrorMessage.value = false
      errorMessage.value = ''
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Add any specific styles here if needed */
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