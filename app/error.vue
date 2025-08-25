<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4">
    <div class="text-center text-white max-w-2xl">
      <!-- Aika Image -->
      <div class="mb-8">
        <img 
          src="/Imagem/Mascote/aika-01.webp" 
          alt="Aika - Página não encontrada" 
          class="mx-auto w-48 h-48 rounded-full border-4 border-white/20 shadow-2xl animate-pulse"
        >
      </div>

      <!-- Error Code -->
      <div class="mb-6">
        <h1 class="text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          {{ error.statusCode || '404' }}
        </h1>
      </div>

      <!-- Error Message -->
      <div class="mb-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ getErrorTitle() }}
        </h2>
        <p class="text-xl text-gray-300 leading-relaxed">
          {{ getErrorMessage() }}
        </p>
      </div>

      <!-- Aika's Analysis -->
      <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
        <div class="flex items-center justify-center mb-4">
          <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
          <span class="text-sm font-semibold text-gray-300">Análise da Aika</span>
        </div>
        <p class="text-gray-200 italic">
          "{{ getAikaAnalysis() }}"
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink 
          to="/" 
          class="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <div class="flex items-center justify-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            Voltar ao Início
          </div>
        </NuxtLink>

        <button 
          @click="goBack" 
          class="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/30"
        >
          <div class="flex items-center justify-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Página Anterior
          </div>
        </button>
      </div>

      <!-- Helpful Links -->
      <div class="mt-12 pt-8 border-t border-white/20">
        <p class="text-gray-400 mb-4">Páginas que podem interessar:</p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink 
            to="/sobre" 
            class="text-purple-300 hover:text-purple-100 transition-colors duration-200 hover:underline"
          >
            Sobre Aika
          </NuxtLink>
          <NuxtLink 
            to="/projetos" 
            class="text-blue-300 hover:text-blue-100 transition-colors duration-200 hover:underline"
          >
            Projetos
          </NuxtLink>
          <NuxtLink 
            to="/contato" 
            class="text-indigo-300 hover:text-indigo-100 transition-colors duration-200 hover:underline"
          >
            Contato
          </NuxtLink>
          <NuxtLink 
            to="/sobre/chat" 
            class="text-pink-300 hover:text-pink-100 transition-colors duration-200 hover:underline"
          >
            Chat com Aika
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['error'])

// SEO metadata
useHead({
  title: 'Página não encontrada - Aika Nakamura',
  meta: [
    { 
      name: 'description', 
      content: 'A página que você procura não foi encontrada. Volte ao início ou explore outras seções do portfólio da Aika.' 
    },
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ]
})

const goBack = () => {
  if (process.client && window.history.length > 1) {
    window.history.back()
  } else {
    navigateTo('/')
  }
}

const getErrorTitle = () => {
  const statusCode = props.error?.statusCode || 404
  
  const titles = {
    400: 'Solicitação Inválida',
    401: 'Acesso Não Autorizado', 
    403: 'Acesso Negado',
    404: 'Página Não Encontrada',
    408: 'Tempo Limite Excedido',
    500: 'Erro Interno do Servidor',
    502: 'Gateway Inválido',
    503: 'Serviço Indisponível',
    504: 'Timeout do Gateway'
  }
  
  return titles[statusCode] || 'Erro Inesperado'
}

const getErrorMessage = () => {
  const statusCode = props.error?.statusCode || 404
  
  const messages = {
    400: 'A solicitação não pôde ser processada devido a dados inválidos.',
    401: 'Você precisa estar autenticado para acessar este recurso.',
    403: 'Você não tem permissão para acessar este recurso.',
    404: 'A página que você está procurando não existe ou foi movida para outro local.',
    408: 'A solicitação demorou muito tempo para ser processada.',
    500: 'Ocorreu um erro interno no servidor. Nossa equipe foi notificada.',
    502: 'Problema de comunicação entre os servidores.',
    503: 'O serviço está temporariamente indisponível. Tente novamente em alguns minutos.',
    504: 'O servidor demorou muito tempo para responder.'
  }
  
  return messages[statusCode] || 'Algo inesperado aconteceu. Nossa equipe técnica foi notificada.'
}

const getAikaAnalysis = () => {
  const statusCode = props.error?.statusCode || 404
  
  const analyses = [
    'Processamento completo. A URL solicitada não consta em minha base de dados. Sugiro navegação alternativa.',
    'Análise de rota concluída. O caminho especificado não corresponde a nenhum recurso mapeado em meu sistema.',
    'Scan do diretório finalizado. O endereço requisitado não foi localizado na estrutura atual do site.',
    'Verificação de endpoints realizada. A página solicitada não existe em minha arquitetura de dados.',
    'Diagnóstico de navegação processado. Recomendo utilizar os links disponíveis para prosseguir.',
    'Mapeamento de rotas analisado. O recurso buscado não está disponível no momento. Executando redirecionamento sugerido.',
  ]
  
  // Use status code to pick a consistent analysis, but add some variety
  const index = (statusCode + Date.now()) % analyses.length
  return analyses[index]
}
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>