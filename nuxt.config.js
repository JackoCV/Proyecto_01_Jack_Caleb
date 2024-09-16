export default {
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content');

      // Fetch the content data
      const artists = await $content('artists').fetch();
      const albums = await $content('albums').fetch();
      const labels = await $content('label_records').fetch();

      // Log the fetched data for debugging
      console.log('Artists:', artists);
      console.log('Albums:', albums);
      console.log('Labels:', labels);

      // Generate routes based on file names and ids
      const artistRoutes = artists.map(artist => {
        if (!artist.id) {
          console.warn(`Missing id for artist:`, artist);
          return null; // Skip if id is missing
        }
        return `/artists/${artist.id}`;
      }).filter(Boolean); // Remove null values

      const albumRoutes = albums.map(album => {
        if (!album.id) {
          console.warn(`Missing id for album:`, album);
          return null; // Skip if id is missing
        }
        return `/albums/${album.id}`;
      }).filter(Boolean); // Remove null values

      const labelRoutes = labels.map(label => {
        if (!label.id) {
          console.warn(`Missing id for label:`, label);
          return null; // Skip if id is missing
        }
        return `/label_records/${label.id}`;
      }).filter(Boolean); // Remove null values

      // Log the generated routes for debugging
      console.log('Artist Routes:', artistRoutes);
      console.log('Album Routes:', albumRoutes);
      console.log('Label Routes:', labelRoutes);

      // Return all routes
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
