export default {
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  plugins: [
    '~/plugins/vue-script2.js'
  ],
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content');

      const artists = await $content('artists').fetch();
      const albums = await $content('albums').fetch();
      const labels = await $content('label_records').fetch();

      const artistRoutes = artists.map(artist => `/artists/${artist.id}`);
      const albumRoutes = albums.map(album => `/albums/${album.id}`);
      const labelRoutes = labels.map(label => `/label_records/${label.id}`);

      return [...artistRoutes, ...albumRoutes, ...labelRoutes];
    }
  },
  components: [
    '~/components',
    {
      path: '~/components/global/',
      global: true,
    },
  ],
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Meta description' }
      ],
      link: [
        { rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Raleway:400,300,600' },
        { rel: 'stylesheet', href: 'css/normalize.css' },
        { rel: 'stylesheet', href: 'css/skeleton.css' },
        { rel: 'icon', type: 'image/png', href: 'images/favicon.png' },
        {
          rel: 'stylesheet',
          href: 'https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.css'
        }
      ],
      script: [
        {
          src: 'https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.js',
          async: true,
          defer: true,
          'data-api-key': 'NDcyNDAzZDItMjZkZi00MWYzLWFhYTEtZGFhOTllYjgyNWMxNjM4NjY2MzI1NTMxNDE0NTIx',
          id: 'snipcart'
        }
      ]
    }
  }
};
