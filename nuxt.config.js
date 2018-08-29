module.exports = {
  build: {
    extractCSS: true
  },
  css: [
    '@/assets/scss/base.scss'
  ],
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:type', content: 'website' },
      { property:'og:image', name: 'twitter:image', content: 'img/preview-card.png'},
      { name: 'twitter:card', content: 'summary_large_image'}
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=PT+Mono|PT+Sans' },
      { rel: 'shortcut icon', href: 'img/icon-32px.png' }
    ]
  }
};
