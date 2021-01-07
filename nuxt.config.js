export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Marc's Resume",
    meta: [
      { charset: 'utf-8' },
      { name: 'referrer', content: 'no-referrer' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Marc Danting's resume created with Nuxt.js and Typescript.",
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'apple-touch-icon.png',
      },
      { rel: 'icon', type: 'image/png', href: 'favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', href: 'favicon-16x16.png' },
      { rel: 'manifest', href: 'site.webmanifest' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  router: {
    base: '/resume/',
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: [
              'faEnvelope',
              'faPhoneAlt',
              'faPrint',
              'faMapMarkerAlt',
              'faFilePdf',
            ],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['faLinkedin'],
          },
        ],
      },
    ],
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isDev, isClient }) {
      if (!isDev) {
        config.output.publicPath = './_nuxt/';
      }
      return config;
    },
  },
};
