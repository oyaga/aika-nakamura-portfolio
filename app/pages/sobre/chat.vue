<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-red-500">
    <Header />
    
    <section class="py-12 px-4">
      <div class="container mx-auto">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-8">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
              Chat com Aika
            </h1>
            <p class="text-xl text-orange-100 max-w-2xl mx-auto">
              Converse diretamente com a inteligência estratégica
            </p>
          </div>

          <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-orange-200">
            <ClientOnly>
              <div id="chat-container" ref="chatContainer" class="w-full h-[70vh] relative">
                <div class="flex items-center justify-center h-full">
                  <div class="text-center">
                    <div class="animate-spin rounded-full h-12 w-12 border-b-3 border-orange-500 mx-auto mb-4"></div>
                    <p class="text-gray-600 text-lg">Carregando chat...</p>
                    <p class="text-gray-500 text-sm mt-2">Conectando com Aika...</p>
                  </div>
                </div>
              </div>
              <template #fallback>
                <div class="w-full h-[70vh] flex items-center justify-center">
                  <div class="text-center">
                    <div class="animate-spin rounded-full h-12 w-12 border-b-3 border-orange-500 mx-auto mb-4"></div>
                    <p class="text-gray-600 text-lg">Preparando chat...</p>
                  </div>
                </div>
              </template>
            </ClientOnly>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mt-8">
            <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div class="flex items-center mb-3">
                <div class="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-white">Respostas Rápidas</h3>
              </div>
              <p class="text-orange-100">Obtenha respostas instantâneas e precisas para suas perguntas</p>
            </div>
            <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div class="flex items-center mb-3">
                <div class="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-white">Análise Inteligente</h3>
              </div>
              <p class="text-orange-100">Receba insights estratégicos baseados em análise avançada</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
// SUGESTÃO: Importar 'ref' para usar Template Refs
import { onMounted, ref } from 'vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

// SEO metadata (sem alterações, está perfeito)
useHead({
  title: 'Chat - Aika | Conversa Inteligente',
  meta: [
    { name: 'description', content: 'Converse diretamente com Aika, a inteligência estratégica. Chat inteligente para tirar dúvidas e explorar ideias sobre projetos digitais.' },
    { property: 'og:title', content: 'Chat com Aika | Conversa Inteligente' },
    { property: 'og:description', content: 'Interaja diretamente com Aika através do chat inteligente. Análise estratégica e respostas instantâneas para seus projetos.' },
    { property: 'og:image', content: '/Imagem/aika-ophen-graph.webp' },
    { property: 'og:url', content: 'https://www.aikanakamura.com/sobre/chat' },
    { property: 'og:type', content: 'website' }
  ]
})

// SUGESTÃO: Declarar a ref que será ligada ao template
const chatContainer = ref(null)

/**
 * SUGESTÃO: Função robusta para esperar que um elemento apareça no DOM e depois escondê-lo.
 * Isto substitui o setTimeout, que é frágil.
 */
const hideChatToggleButton = () => {
  const maxAttempts = 20 // Tenta por 5 segundos no total (20 * 250ms)
  let attempts = 0
  
  const interval = setInterval(() => {
    // Procura por múltiplos seletores possíveis para o botão
    const toggleButton = document.querySelector('.chat-window-toggle, [class*="chat-toggle"]')
    
    if (toggleButton) {
      toggleButton.style.display = 'none'
      toggleButton.style.visibility = 'hidden' // Garante que está mesmo escondido
      clearInterval(interval) // Para de procurar uma vez que o encontrou
    } else if (attempts >= maxAttempts) {
      clearInterval(interval) // Para de procurar se atingir o tempo limite
      console.warn('Não foi possível encontrar o botão de toggle do chat para o esconder.')
    }
    
    attempts++
  }, 250) // Verifica a cada 250ms
}

// Initialize chat
onMounted(async () => {
  // A verificação `!process.client` é removida por ser redundante dentro do onMounted
  try {
    // Opcional: O delay pode ser mantido se for para um efeito visual, mas não é estritamente necessário
    await new Promise(resolve => setTimeout(resolve, 500)) 
    
    const { createChat } = await import('@n8n/chat')
    await import('@n8n/chat/style.css')
    
    // SUGESTÃO: Usar a ref em vez de querySelector
    const container = chatContainer.value
    if (container) {
      container.innerHTML = '' // Limpa o estado de "carregando"
      
      createChat({
        webhookUrl: 'https://wb.aikanakamura.com/webhook/0e8d2744-1dea-4a44-9942-c4cc44b60cc1/chat',
        // SUGESTÃO: Passa o próprio elemento para o target
        target: container,
        mode: 'window',
        defaultOpen: true,
        showWelcomeScreen: true,
        loadPreviousSession: true
      })

      // SUGESTÃO: Chama a nova função robusta para esconder o botão
      hideChatToggleButton()
    }
  } catch (error) {
    console.error('Erro ao carregar chat:', error)
    // SUGESTÃO: Usa a ref aqui também para consistência
    const container = chatContainer.value
    if (container) {
      container.innerHTML = `
        <div class="flex items-center justify-center h-full text-center p-8">
          <div>
            <p class="text-lg font-semibold text-red-600 mb-2">Chat temporariamente indisponível</p>
            <p class="text-gray-600">Entre em contato através da <a href="/contato" class="text-purple-600 hover:underline">página de contato</a></p>
          </div>
        </div>
      `
    }
  }
})
</script>

<style>
/* A estilização está boa, não há necessidade de alterações. */
/* O uso de !important aqui é justificado para sobrescrever estilos de uma biblioteca de terceiros. */

/* Hide chat toggle button */
.chat-window-toggle,
[class*="chat-toggle"],
[class*="toggle-button"],
[id*="chat-toggle"] {
  display: none !important;
  visibility: hidden !important;
}

/* Ensure chat window appears in the container */
#chat-container .chat-window {
  position: relative !important;
  transform: none !important;
  box-shadow: none !important;
  border-radius: 0 !important;
  width: 100% !important;
  height: 100% !important;
}

/* Custom chat styling */
#chat-container {
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
}
</style>