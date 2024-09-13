<template>
  <div v-if="album && artist">
    <h1>{{ album.title }}</h1>
    <p><strong>Año de lanzamiento:</strong> {{ album.release_year }}</p>
    <ul>
      <li v-for="song in album.songs" :key="song">{{ song }}</li>
    </ul>
    <img :src="album.image" :alt="`Portada de ${album.title}`">
    
    <!-- Aquí está el enlace al artista, usando el nombre en lugar del id -->
    <p><strong>Artista:</strong> 
      <nuxt-link :to="`/artists/${artist.id}`">{{ album.artist }}</nuxt-link>
    </p>
  </div>
  <div v-else>
    <p>Álbum o artista no encontrado.</p>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    // Buscar el álbum según el id
    const albumData = await $content('albums').where({ id: parseInt(params.id) }).fetch();

    // Si no encuentra el álbum, devolvemos null
    if (!albumData || albumData.length === 0) {
      return { album: null, artist: null };
    }

    const album = albumData[0];

    // Buscar al artista por el nombre que está en el campo `artist` del álbum
    const artistData = await $content('artists').where({ name: album.artist }).fetch();
    const artist = artistData.length > 0 ? artistData[0] : null;

    return { album, artist };
  }
}
</script>
