const pkg = require('./package')
const api = 'http://localhost:90/api';

module.exports = {
  mode: 'spa',
  env: {
    apiUrl: process.env.BASE_URL || api
  },
  /*
  ** Headers of the page
  */
  head: {
    title: "PT. BAT",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { href: "/css/bootstrap.min.css", rel: "stylesheet", type: "text/css" },
      { href: "/css/metisMenu.min.css", rel: "stylesheet", type: "text/css" },
      { href: "/css/app.css", rel: "stylesheet", type: "text/css" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: "blue",
    height: "3px"
  },

  /*
  ** Global CSS
  */
  css: [
    "element-ui/lib/theme-chalk/index.css"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [ "~/plugins/elementui" ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    "@nuxtjs/font-awesome"
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // baseURL: "http://127.0.0.1:90/api",
    baseURL: api,
    redirectError: {
      401: "/login"
    },
    credentials: false
    // requestInterceptor: config => {
    //   config.baseURL = `http://${window.location.hostname}:90/api`;
    //   return config;
    // }
  },

  render: {
    resourceHints: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    analyze: true,
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
