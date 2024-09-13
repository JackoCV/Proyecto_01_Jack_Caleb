<template>
  <div v-if="artist">
    <h1>{{ artist.name }}</h1>
    <p><strong>Nacionalidad:</strong> {{ artist.nationality }}</p>
    <p><strong>Instrumento:</strong> {{ artist.instrument }}</p>
    <p><strong>Género:</strong> {{ artist.genre }}</p>
    <img :src="artist.image" :alt="`Imagen de ${artist.name}`">

    <h2>Álbumes</h2>
    <ul v-if="artistAlbums && artistAlbums.length">
      <li v-for="album in artistAlbums" :key="album.id">
        <nuxt-link :to="`/albums/${album.id}`">{{ album.title }}</nuxt-link>
      </li>
    </ul>
    <p v-else>No hay álbumes disponibles.</p>
  </div>
  <div v-else>
    <p>Artista no encontrado.</p>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const artistId = parseInt(params.id);
    
    // Buscar el artista basado en el id
    const artistData = await $content('artists').where({ id: artistId }).fetch();

    // Si no encuentra un artista, devolvemos null
    if (!artistData || artistData.length === 0) {
      return { artist: null, artistAlbums: [] };
    }

    const artist = artistData[0];

    // Buscar los álbumes asociados al artista
    const allAlbums = await $content('albums').fetch();
    const artistAlbums = allAlbums.filter(album => artist.albums.includes(album.id));

    return { artist, artistAlbums };
  }
}
</script>
