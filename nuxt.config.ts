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
    }
  },
  modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss', 'nuxt-icon', 'nuxt-gtag', '@nuxtjs/sitemap'],
  gtag: {
    initialConsent: false
  },
})
