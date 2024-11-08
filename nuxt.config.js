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

      console.log('Artists:', artists);
      console.log('Albums:', albums);
      console.log('Labels:', labels);

      const artistRoutes = artists.map(artist => {
        if (!artist.id) {
          console.warn(`Missing id for artist:`, artist);
          return null; 
        }
        return `/artists/${artist.id}`;
      }).filter(Boolean); 

      const albumRoutes = albums.map(album => {
        if (!album.id) {
          console.warn(`Missing id for album:`, album);
          return null; 
        }
        return `/albums/${album.id}`;
      }).filter(Boolean); 

      const labelRoutes = labels.map(label => {
        if (!label.id) {
          console.warn(`Missing id for label:`, label);
          return null; 
        }
        return `/label_records/${label.id}`;
      }).filter(Boolean); 

      console.log('Artist Routes:', artistRoutes);
      console.log('Album Routes:', albumRoutes);
      console.log('Label Routes:', labelRoutes);

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
}
