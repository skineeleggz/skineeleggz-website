import pkg from './package'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  // target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s | SkineeLeggz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'keywords', content: 'skinny, skinee, skinne, skinney, leg, legs, legz, leggs, leggz, skineeleggz, skinnylegs, pandemic, 2020, 2021, covid, covid-19, health, mental, physical, motivation, creative, creativity, youtube, cabin fever, virus, spokes, jokes, funny, anecdotes, sights, sounds, music' },
    ],
    link: [
      { 
        rel: 'icon', 
        type: 'image/x-icon', 
        href: '/favicon.ico'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
      {
        name: 'msapplication-TileColor',
        content: '#da532c',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/index.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/main.js',
    '~/plugins/gtag.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/date-fns',
    '@nuxtjs/fontawesome',
    '@nuxtjs/pwa',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: '~/assets/scss/style-resources.scss',
  },

  fontawesome: {
    component: 'FaIcon',
    suffix: false,
    icons: {
      solid: ['faBars'],
      brands: ['faTwitter', 'faFacebookF', 'faYoutube', 'faGithub'],
    }
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
