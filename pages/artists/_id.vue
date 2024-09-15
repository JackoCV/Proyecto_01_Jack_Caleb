<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <HeaderView />

    <!-- Contenido principal -->
    <main class="flex-grow container mx-auto px-4 py-6">
      <div v-if="artist">
        <!-- Información del Artista -->
        <div class="flex flex-col md:flex-row items-center md:items-start">
          <!-- Imagen del Artista -->
          <div class="w-full md:w-1/3">
            <img
              :src="artist.image"
              :alt="`Imagen de ${artist.name}`"
              class="rounded-lg shadow-lg object-cover w-full h-64 md:h-auto"
            />
          </div>
          <!-- Detalles del Artista -->
          <div class="w-full md:w-2/3 md:pl-8 mt-6 md:mt-0">
            <h1 class="text-4xl font-bold mb-4">{{ artist.name }}</h1>
            <p class="text-gray-700 mb-2">
              <strong>Nacionalidad:</strong> {{ artist.nationality }}
            </p>
            <p class="text-gray-700 mb-2">
              <strong>Instrumento:</strong> {{ artist.instrument }}
            </p>
            <p class="text-gray-700 mb-2">
              <strong>Género:</strong> {{ artist.genre }}
            </p>
          </div>
        </div>

        <!-- Listado de Álbumes -->
        <div class="mt-8">
          <h2 class="text-2xl font-semibold mb-4">Álbumes</h2>
          <div v-if="artistAlbums && artistAlbums.length">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <AlbumCard
                v-for="album in artistAlbums"
                :key="album.id"
                :album="album"
              />
            </div>
          </div>
          <p v-else class="text-gray-600">No hay álbumes disponibles.</p>
        </div>

        <!-- Listado de Canciones -->
        <div class="mt-8">
          <h2 class="text-2xl font-semibold mb-4">Canciones</h2>
          <div v-if="artistSongs && artistSongs.length">
            <div class="space-y-4">
              <SongCard
                v-for="(song, index) in artistSongs"
                :key="index"
                :song="song"
              />
            </div>
          </div>
          <p v-else class="text-gray-600">No hay canciones disponibles.</p>
        </div>
      </div>
      <div v-else>
        <p class="text-center text-gray-600">Artista no encontrado.</p>
      </div>
    </main>

    <!-- Footer -->
    <FooterView />
  </div>
</template>

<script>
import HeaderView from '@/components/global/HeaderView.vue';
import FooterView from '@/components/global/FooterView.vue';
import AlbumCard from '@/components/global/AlbumCard.vue';
import SongCard from '@/components/global/SongCard.vue';

export default {
  components: {
    HeaderView,
    FooterView,
    AlbumCard,
    SongCard,
  },
  async asyncData({ $content, params }) {
    const artistId = parseInt(params.id);

    // Buscar el artista basado en el id
    const artistData = await $content('artists')
      .where({ id: artistId })
      .fetch();

    // Si no encuentra un artista, devolvemos null
    if (!artistData || artistData.length === 0) {
      return { artist: null, artistAlbums: [], artistSongs: [] };
    }

    const artist = artistData[0];

    // Buscar los álbumes asociados al artista
    const allAlbums = await $content('albums').fetch();
    const artistAlbums = allAlbums.filter((album) =>
      artist.albums.includes(album.id)
    );

    // Obtener todas las canciones del artista
    let artistSongs = [];
    artistAlbums.forEach((album) => {
      artistSongs = artistSongs.concat(album.songs);
    });

    // Eliminar duplicados si hay canciones repetidas
    artistSongs = [...new Set(artistSongs)];

    return { artist, artistAlbums, artistSongs };
  },
};
</script>
