<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
    <div class="container mx-auto px-4 py-16">
      <NuxtLink 
        to="/" 
        class="inline-flex items-center text-orange-500 hover:text-orange-400 mb-8 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        Voltar para o início
      </NuxtLink>
      
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold mb-8 text-orange-500">Política de Privacidade</h1>
        
        <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl border border-gray-700">
          <p class="text-gray-300 mb-6">
            Esta Política de Privacidade descreve como a Aika Nakamura coleta, usa e protege suas informações pessoais quando você visita nosso site.
          </p>
          
          <div class="space-y-8">
            <section>
              <h2 class="text-xl font-semibold mb-4 text-orange-400">Informações que Coletamos</h2>
              <ul class="list-disc pl-6 space-y-2 text-gray-300">
                <li>Informações fornecidas voluntariamente por você (nome, e-mail, telefone)</li>
                <li>Dados de navegação (endereço IP, tipo de navegador, páginas visitadas)</li>
                <li>Informações de cookies e tecnologias similares</li>
              </ul>
            </section>
            
            <section>
              <h2 class="text-xl font-semibold mb-4 text-orange-400">Como Usamos suas Informações</h2>
              <ul class="list-disc pl-6 space-y-2 text-gray-300">
                <li>Para fornecer e melhorar nossos serviços</li>
                <li>Para comunicar sobre projetos e atualizações</li>
                <li>Para responder a suas solicitações e perguntas</li>
                <li>Para análise e melhorias do site</li>
              </ul>
            </section>
            
            <section>
              <h2 class="text-xl font-semibold mb-4 text-orange-400">Compartilhamento de Informações</h2>
              <p class="text-gray-300 mb-4">
                Não vendemos, trocamos ou alugamos suas informações pessoais para terceiros. Podemos compartilhar informações apenas nas seguintes circunstâncias:
              </p>
              <ul class="list-disc pl-6 space-y-2 text-gray-300">
                <li>Com seu consentimento</li>
                <li>Para cumprir obrigações legais</li>
                <li>Com prestadores de serviço que nos auxiliam na operação do site</li>
              </ul>
            </section>
            
            <section>
              <h2 class="text-xl font-semibold mb-4 text-orange-400">Segurança</h2>
              <p class="text-gray-300">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>
            
            <section>
              <h2 class="text-xl font-semibold mb-4 text-orange-400">Seus Direitos</h2>
              <p class="text-gray-300 mb-4">
                Você tem direito a:
              </p>
              <ul class="list-disc pl-6 space-y-2 text-gray-300">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir dados imprecisos</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar seu consentimento</li>
              </ul>
            </section>
            
            <section>
              <h2 class="text-xl font-semibold mb-4 text-orange-400">Alterações nesta Política</h2>
              <p class="text-gray-300">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre alterações significativas publicando a nova política em nosso site.
              </p>
            </section>
            
            <section>
              <h2 class="text-xl font-semibold mb-4 text-orange-400">Contato</h2>
              <p class="text-gray-300">
                Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através do e-mail: 
                <a href="mailto:felipe.kenji@hotmail.com" class="text-orange-400 hover:text-orange-300 underline">felipe.kenji@hotmail.com</a>
              </p>
            </section>
          </div>
          
          <div class="mt-10 pt-6 border-t border-gray-700 text-sm text-gray-400">
            <p>Última atualização: {{ new Date().toLocaleDateString('pt-BR') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Política de Privacidade - Aika Nakamura',
  meta: [
    { name: 'description', content: 'Política de privacidade do site Aika Nakamura' },
    {
      property: 'og:title',
      content: 'Política de Privacidade - Aika Nakamura'
    },
    {
      property: 'og:description',
      content: 'Política de privacidade do site Aika Nakamura'
    },
    {
      property: 'og:image',
      content: '/Imagem/aika-ophen-graph.webp'
    },
    {
      property: 'og:url',
      content: 'https://www.aikanakamura.com/privacidade'
    },
    {
      property: 'og:type',
      content: 'article'
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Política de Privacidade - Aika Nakamura'
    },
    {
      name: 'twitter:description',
      content: 'Política de privacidade do site Aika Nakamura'
    },
    {
      name: 'twitter:image',
      content: '/Imagem/aika-ophen-graph.webp'
    }
  ]
})
</script>