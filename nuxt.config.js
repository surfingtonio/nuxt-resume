export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Marc's Resume",
    meta: [
      { charset: "utf-8" },
      { name: "referrer", content: "no-referrer" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Marc Danting's resume created with Nuxt.js and Typescript."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build"
  ],

  router: {
    base: "/resume/"
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      "nuxt-fontawesome",
      {
        component: "fa",
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["faEnvelope", "faPhoneAlt", "faPrint", "faMapMarkerAlt"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["faLinkedin"]
          }
        ]
      }
    ]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isDev, isClient }) {
      if (!isDev) {
        config.output.publicPath = "./_nuxt/";
      }
      return config;
    }
  }
};
