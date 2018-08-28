module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'bbs-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'BBS using Nuxt.js' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {},
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'root',
        path: '/',
        component: resolve(__dirname, 'pages/articles/index.vue')
      });
    }
  },
  plugins: ['~plugins/date-filter.js'],
  modules: [['@nuxtjs/dotenv', { filename: '.env' }], '@nuxtjs/toast'],
  toast: {
    position: 'top-center',
    duration: 3000
  }
};
