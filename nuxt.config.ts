// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/Frontend-Techincal-Nuxt/',
    buildAssetsDir: 'assets',
  },
  devServer: {
    port: 4000,
  },
  css: [
    '~/assets/icons/fontawesome/css/all.min.css',
    '~/assets/scss/main.scss',
  ],
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  $development: {
    //
  },
  modules: [
    'dayjs-nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
  ],
  dayjs: {
    locales: ['en'],
    defaultLocale: ['en', {
      relativeTime: {
        future: "%s",
        past: "%s Ago",
        s: 'a Few Secondses',
        m: "a Minute",
        mm: "%d Minuteses",
        h: "an Hour",
        hh: "%d Hourses",
        d: "a Day",
        dd: "%d Days Left",
        M: "a Month",
        MM: "%d monthseses",
        y: "a Year",
        yy: "%d Yearseses"
      }
    }],
  },
  elementPlus: {
    // 
  },
  devtools: { enabled: true }
})
