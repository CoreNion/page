// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    typeCheck: true
  },

  app: {
    "baseURL": process.env.BASE_URL || "/",
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  vue: {
    compilerOptions: {
      isCustomElement: tag => tag === 'ms-store-badge'
    }
  },

  runtimeConfig: {
    public: {
      googleSiteVerification: '',
      mailAdress: "hoge@example.com", 
    }
  },

  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-gtag',
    '@nuxtjs/sitemap',
    "@nuxt/icon"
  ],

  gtag: {
    enabled: false
  },

  compatibilityDate: '2024-07-23',
})