<template>
  <section 
    id="contact" 
    ref="contactSection"
    class="min-h-screen bg-gradient-to-br from-orange-500 to-orange-600 text-white flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden"
  >
    <!-- Background decoration elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-orange-400 opacity-20 blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-orange-300 opacity-20 blur-3xl animate-pulse"></div>
    </div>
    
    <div class="relative z-10 max-w-6xl w-full">
      <!-- Section header -->
      <div 
        ref="headerElement"
        class="text-center mb-16"
      >
        <h2 class="text-3xl md:text-5xl font-bold mb-4 font-inter">
          Vamos Conversar
        </h2>
        <div class="w-24 h-1 bg-white mx-auto rounded-full"></div>
        <p class="mt-6 text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Estou pronto para transformar suas ideias em realidade digital. Entre em contato e vamos criar algo incrível juntos.
        </p>
      </div>
      
      <!-- Contact methods grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <!-- WhatsApp -->
        <a 
          ref="whatsappElement"
          href="https://wa.me/5519993369603" 
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:bg-opacity-20 border border-white border-opacity-20"
          aria-label="Contato via WhatsApp"
        >
          <div class="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">WhatsApp</h3>
          <p class="text-center opacity-80">19 99336-9603</p>
        </a>
        
        <!-- Email -->
        <a 
          ref="emailElement"
          href="mailto:felipe.kenji@hotmail.com" 
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:bg-opacity-20 border border-white border-opacity-20"
          aria-label="Contato via Email"
        >
          <div class="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
             <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">Email</h3>
          <p class="text-center opacity-80">felipe.kenji@hotmail.com</p>
        </a>
        
        <!-- Social Media - LinkedIn -->
        <a 
          ref="linkedinElement"
          href="https://www.linkedin.com/in/felipe-nakamura-dsg/" 
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:bg-opacity-20 border border-white border-opacity-20"
          aria-label="LinkedIn"
        >
          <div class="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">LinkedIn</h3>
          <p class="text-center opacity-80">/felipenakamura</p>
        </a>
        
        <!-- Social Media - GitHub -->
        <a 
          ref="githubElement"
          href="https://github.com/oyaga/" 
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:bg-opacity-20 border border-white border-opacity-20"
          aria-label="GitHub"
        >
          <div class="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">GitHub</h3>
          <p class="text-center opacity-80">/oyaga</p>
        </a>
      </div>
      
      <!-- Call to action -->
      <div 
        ref="infoElement"
        class="text-center mt-12"
      >
        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Pronto para começar seu próximo projeto? Entre em contato comigo para discutirmos como posso ajudar a transformar suas ideias em realidade.
        </p>
        <a 
          href="/contato" 
          class="inline-block bg-white text-orange-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-orange-100 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Entrar em Contato
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Template refs
const contactSection = ref(null)
const headerElement = ref(null)
const whatsappElement = ref(null)
const emailElement = ref(null)
const linkedinElement = ref(null)
const githubElement = ref(null)
const infoElement = ref(null)

// Animation on mount
onMounted(() => {
  // Initial state for animations
  gsap.set([headerElement.value, whatsappElement.value, emailElement.value, linkedinElement.value, githubElement.value, infoElement.value], {
    opacity: 0,
    y: 30
  })

  // Create timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: contactSection.value,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  })

  // Animate elements in sequence
  tl.to(headerElement.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out"
  })
  .to(whatsappElement.value, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out"
  }, "-=0.4")
  .to(emailElement.value, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out"
  }, "-=0.5")
  .to(linkedinElement.value, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out"
  }, "-=0.5")
  .to(githubElement.value, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out"
  }, "-=0.5")
  .to(infoElement.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.3")
})
</script>

<style scoped>
.contact-card {
  transform: translateY(30px);
}

.contact-card:hover {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
}
</style>
