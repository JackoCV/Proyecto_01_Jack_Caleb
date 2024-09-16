export default {
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content');

      const artists = await $content('artists').fetch();
      const albums = await $content('albums').fetch();
      const labels = await $content('label_records').fetch();

      const artistRoutes = artists.map(artist => `/artists/${artist._path.split('/').pop()}`);
      const albumRoutes = albums.map(album => `/albums/${album._path.split('/').pop()}`);
      const labelRoutes = labels.map(label => `/label_records/${label._path.split('/').pop()}`);

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
}
