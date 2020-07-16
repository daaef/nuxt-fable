
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      { rel: 'stylesheet', type: 'text/css', href: '/combined.css' }
    ],
    script: [
      { type: 'text/javascript', defer: true, src: '/js/config.js' },
      { type: 'text/javascript', defer: true, src: '/plugins/global/plugins.bundle.js' },
      { type: 'text/javascript', defer: true, src: '/plugins/custom/prismjs/prismjs.bundle.js' },
      { type: 'text/javascript', defer: true, src: '/js/scripts.bundle.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  // css: [
  //   'iview/dist/styles/iview.css'
  // ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/iview',
    {
      ssr: false,
      src: '~/plugins/overload.js'
    },
    {
      src: '~/plugins/vuex-persist',
      mode: 'client'
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  router: {
    linkActiveClass: 'active'
  }
}
