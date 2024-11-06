export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,    
    },
  ],
  css: [
    '~/assets/css/main.css',
    'animate.css/animate.min.css'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Aykhan Dadashov',
      meta: [
        { name: 'description', content: 'Portflio website of Aykhan Dadashov' }
      ],
    },
  }
})
