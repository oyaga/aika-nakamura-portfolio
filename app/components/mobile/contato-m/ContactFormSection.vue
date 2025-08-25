<template>
  <section class="mobile-form-section">
    <!-- Mobile Background -->
    <div class="mobile-form-bg">
      <div class="mobile-form-gradient"></div>
      <div class="mobile-form-shapes">
        <div class="form-shape shape-1"></div>
        <div class="form-shape shape-2"></div>
      </div>
    </div>

    <!-- Mobile Content -->
    <div class="mobile-form-content">
      <div class="mobile-form-container">
        
        <!-- Mobile Header -->
        <div class="mobile-form-header">
          <div ref="mobileBadge" class="mobile-form-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>FORMULÁRIO</span>
          </div>
          
          <h2 ref="mobileFormTitle" class="mobile-form-title">
            Envie sua <span class="title-highlight">Mensagem</span>
          </h2>
          
          <p ref="mobileFormSubtitle" class="mobile-form-subtitle">
            Preencha o formulário e entraremos em contato em breve.
          </p>
        </div>

        <!-- Mobile Form -->
        <div ref="mobileFormWrapper" class="mobile-form-wrapper">
          <form @submit.prevent="submitForm" class="mobile-contact-form">
            
            <!-- Nome -->
            <div class="mobile-form-group">
              <label for="mobile-nome" class="mobile-form-label">Nome Completo *</label>
              <input 
                type="text" 
                id="mobile-nome" 
                name="user_name"
                v-model="form.name"
                required
                class="mobile-form-input"
                placeholder="Seu nome completo"
              />
            </div>

            <!-- Email -->
            <div class="mobile-form-group">
              <label for="mobile-email" class="mobile-form-label">E-mail *</label>
              <input 
                type="email" 
                id="mobile-email" 
                name="user_email"
                v-model="form.email"
                required
                class="mobile-form-input"
                placeholder="seu@email.com"
              />
            </div>

            <!-- Telefone -->
            <div class="mobile-form-group">
              <label for="mobile-telefone" class="mobile-form-label">Telefone</label>
              <input 
                type="tel" 
                id="mobile-telefone" 
                name="user_phone"
                v-model="form.phone"
                class="mobile-form-input"
                placeholder="(00) 00000-0000"
              />
            </div>

            <!-- Assunto -->
            <div class="mobile-form-group">
              <label for="mobile-assunto" class="mobile-form-label">Assunto *</label>
              <select 
                id="mobile-assunto" 
                name="subject"
                v-model="form.subject"
                required
                class="mobile-form-select"
              >
                <option value="">Selecione um assunto</option>
                <option value="estrategia-digital">Estratégia Digital</option>
                <option value="automacao">Automação Inteligente</option>
                <option value="analise-dados">Análise de Dados</option>
                <option value="consultoria">Consultoria Personalizada</option>
                <option value="outros">Outros</option>
              </select>
            </div>

            <!-- Mensagem -->
            <div class="mobile-form-group">
              <label for="mobile-mensagem" class="mobile-form-label">Mensagem *</label>
              <textarea 
                id="mobile-mensagem" 
                name="message"
                v-model="form.message"
                required
                rows="4"
                class="mobile-form-textarea"
                placeholder="Descreva seu projeto ou necessidade..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="mobile-form-submit">
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="mobile-submit-btn"
                :class="{ 'submitting': isSubmitting }"
              >
                <span v-if="!isSubmitting" class="submit-text">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Enviar Mensagem
                </span>
                <span v-else class="submit-loading">
                  <div class="loading-spinner"></div>
                  Enviando...
                </span>
              </button>
            </div>

          </form>
        </div>

        <!-- Success/Error Messages -->
        <div v-if="showMessage" class="mobile-form-message" :class="messageType">
          <div class="message-icon">
            <svg v-if="messageType === 'success'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22,4 12,14.01 9,11.01"></polyline>
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          </div>
          <p>{{ messageText }}</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import emailjs from '@emailjs/browser'

// Template Refs
const mobileBadge = ref(null)
const mobileFormTitle = ref(null)
const mobileFormSubtitle = ref(null)
const mobileFormWrapper = ref(null)

// Form Data
const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

// Form State
const isSubmitting = ref(false)
const showMessage = ref(false)
const messageType = ref('')
const messageText = ref('')

// Submit Form
const submitForm = async (e) => {
  isSubmitting.value = true
  
  try {
    await emailjs.sendForm(
      'YOUR_SERVICE_ID', // Configure with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Configure with your EmailJS template ID
      e.target,
      'YOUR_PUBLIC_KEY' // Configure with your EmailJS public key
    )
    
    showSuccessMessage()
    resetForm()
  } catch (error) {
    console.error('EmailJS error:', error)
    showErrorMessage()
  } finally {
    isSubmitting.value = false
  }
}

const showSuccessMessage = () => {
  messageType.value = 'success'
  messageText.value = 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
  showMessage.value = true
  setTimeout(() => {
    showMessage.value = false
  }, 5000)
}

const showErrorMessage = () => {
  messageType.value = 'error'
  messageText.value = 'Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.'
  showMessage.value = true
  setTimeout(() => {
    showMessage.value = false
  }, 5000)
}

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
}

onMounted(() => {
  // Mobile form animation
  const tl = gsap.timeline({ 
    defaults: { ease: "power2.out", duration: 0.6 }
  });

  tl.from(mobileBadge.value, { y: -20, opacity: 0 })
    .from(mobileFormTitle.value, { y: 25, opacity: 0 }, "-=0.3")
    .from(mobileFormSubtitle.value, { y: 20, opacity: 0 }, "-=0.3")
    .from(mobileFormWrapper.value, { y: 30, opacity: 0 }, "-=0.2");
});
</script>

<style scoped>
.mobile-form-section {
  position: relative;
  background: linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%);
  color: white;
  padding: 3rem 1rem;
  overflow: hidden;
}

.mobile-form-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.mobile-form-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.mobile-form-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.form-shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.shape-1 {
  width: 60px;
  height: 60px;
  top: 15%;
  right: 10%;
  animation: floatShape 8s ease-in-out infinite;
}

.shape-2 {
  width: 40px;
  height: 40px;
  bottom: 25%;
  left: 10%;
  animation: floatShape 6s ease-in-out infinite reverse;
}

@keyframes floatShape {
  0%, 100% { transform: translateY(0px); opacity: 0.1; }
  50% { transform: translateY(-15px); opacity: 0.2; }
}

.mobile-form-content {
  position: relative;
  z-index: 3;
}

.mobile-form-container {
  max-width: 400px;
  margin: 0 auto;
}

.mobile-form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.mobile-form-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: #f97316;
  border-radius: 20px;
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  backdrop-filter: blur(10px);
}

.mobile-form-title {
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.75rem;
}

.title-highlight {
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.mobile-form-subtitle {
  font-size: 0.9rem;
  line-height: 1.4;
  opacity: 0.9;
  max-width: 280px;
  margin: 0 auto;
}

.mobile-form-wrapper {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
}

.mobile-contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.mobile-form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-form-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.mobile-form-input,
.mobile-form-select,
.mobile-form-textarea {
  width: 100%;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-size: 0.9rem;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.mobile-form-input::placeholder,
.mobile-form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.mobile-form-input:focus,
.mobile-form-select:focus,
.mobile-form-textarea:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.15);
}

.mobile-form-textarea {
  resize: vertical;
  min-height: 80px;
}

.mobile-form-submit {
  margin-top: 0.5rem;
}

.mobile-submit-btn {
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.mobile-submit-btn:not(:disabled):hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
}

.mobile-submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.mobile-form-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  font-weight: 500;
}

.mobile-form-message.success {
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #86efac;
}

.mobile-form-message.error {
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #fca5a5;
}

.message-icon {
  flex-shrink: 0;
}

/* Extra small screens */
@media (max-width: 375px) {
  .mobile-form-section { padding: 2.5rem 0.75rem; }
  .mobile-form-title { font-size: 1.6rem; }
  .mobile-form-wrapper { padding: 1.25rem; }
  .mobile-contact-form { gap: 1rem; }
}

@media (max-width: 320px) {
  .mobile-form-title { font-size: 1.4rem; }
  .mobile-form-input, .mobile-form-select, .mobile-form-textarea { padding: 0.6rem; font-size: 0.85rem; }
  .mobile-submit-btn { padding: 0.85rem; font-size: 0.85rem; }
}
</style>