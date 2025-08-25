// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap', '@nuxtjs/device', '@nuxtjs/seo'],
  
  // Configuração do servidor de desenvolvimento
  devServer: {
    port: 3000
  },
  
  // SEO and Sitemap configuration
  site: {
    url: 'https://www.aikanakamura.com',
    name: 'Aika Nakamura - Assistente Digital',
    description: 'Portfolio de Aika Nakamura, especialista em estratégias digitais avançadas, automação inteligente e desenvolvimento web.',
    defaultLocale: 'pt-BR'
  },

  runtimeConfig: {
    public: {
      gtagId: 'G-QX1Z0K2SDW' // Substitua pelo seu ID do Google Analytics
    }
  },
  
  // Production optimizations
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/sitemap.xml']
    },
    // Browser caching configuration
    routeRules: {
      // Static assets - cache for 1 year
      '/images/**': { headers: { 'cache-control': 'max-age=31536000' } },
      '/icons/**': { headers: { 'cache-control': 'max-age=31536000' } },
      '/Imagem/**': { headers: { 'cache-control': 'max-age=31536000' } },
      '/_nuxt/**': { headers: { 'cache-control': 'max-age=31536000' } },
      
      // Fonts - cache for 1 year
      '/fonts/**': { headers: { 'cache-control': 'max-age=31536000' } },
      
      // HTML pages - cache for 1 hour with revalidation
      '/': { headers: { 'cache-control': 'max-age=3600, must-revalidate' } },
      '/sobre': { headers: { 'cache-control': 'max-age=3600, must-revalidate' } },
      '/sobre/chat': { headers: { 'cache-control': 'max-age=3600, must-revalidate' } },
      '/projetos': { headers: { 'cache-control': 'max-age=3600, must-revalidate' } },
      '/contato': { headers: { 'cache-control': 'max-age=3600, must-revalidate' } },
      
      // Static pages - cache for 24 hours
      '/privacidade': { headers: { 'cache-control': 'max-age=86400' } },
      '/termos': { headers: { 'cache-control': 'max-age=86400' } },
      
      // Sitemap and robots - cache for 24 hours
      '/sitemap.xml': { headers: { 'cache-control': 'max-age=86400' } },
      '/robots.txt': { headers: { 'cache-control': 'max-age=86400' } }
    }
  },
  
  // Enable component islands for better performance
  experimental: {
    componentIslands: true
  },
  
  // SSR enabled for SEO
  ssr: true,
  
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        // Open Graph
        { property: 'og:title', content: 'Aika Nakamura - Assistente Digital' },
        { property: 'og:description', content: 'Portfolio de Aika Nakamura, especialista em estratégias digitais avançadas, automação inteligente e desenvolvimento web.' },
        { property: 'og:image', content: '/Imagem/aika-ophen-graph.webp' },
        { property: 'og:url', content: 'https://www.aikanakamura.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'pt_BR' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Aika Nakamura - Assistente Digital' },
        { name: 'twitter:description', content: 'Portfolio de Aika Nakamura, especialista em estratégias digitais avançadas, automação inteligente e desenvolvimento web.' },
        { name: 'twitter:image', content: '/Imagem/aika-ophen-graph.webp' }
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
        }
      ],
      script: [
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-QX1Z0K2SDW'
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QX1Z0K2SDW');
          `
        }
      ]
    }
  },
  
  // Production optimizations
  vite: {
    build: {
      minify: 'esbuild',
      cssMinify: true
    }
  }
})