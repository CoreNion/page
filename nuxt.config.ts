// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true
  },
  runtimeConfig: {
    public: {
      googleSiteVerification: '',
    }
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag', '@dargmuesli/nuxt-cookie-control', '@nuxtjs/sitemap'],
  gtag: {
    initialConsent: false
  },
  cookieControl: {
    barPosition: 'bottom-right',
    locales: ['en', 'ja'],
    localeTexts: {
      ja: {
        bannerTitle: '解析データの収集について',
        bannerDescription: '当サイトでは、使用状況のデータの収集のためにCookieなどを使用することがあります。このデータは匿名で収集されており、個人を特定するものではありません。データの収集に同意される場合は、「同意」ボタンを押してください。',
        acceptAll: '同意',
        decline: '拒否',
        manageCookies: 'データの管理',
      }
    },
    cookies: {
      necessary: [],
      optional: [
        {
          name: 'Google Analytics',
          id: 'ga',
          description: {
            en: 'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.',
            ja: 'Google Analytics は Google が提供するウェブ解析サービスで、ウェブサイトのトラフィックを追跡・レポートします。',
          },
          links: {
            '/privacy.html': 'Privacy Policy',
          }
        }
      ]
    }
  },
})
