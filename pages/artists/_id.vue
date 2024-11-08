<template>
  <div class="min-h-screen flex flex-col">
    <HeaderView />

    <main class="flex-grow container mx-auto px-4 py-6">
      <div v-if="artist">
        <div class="flex flex-col md:flex-row items-center md:items-start">
          <div class="w-full md:w-1/3">
            <img
              :src="artist.image"
              :alt="`Imagen de ${artist.name}`"
              class="rounded-lg shadow-lg object-cover w-full h-64 md:h-auto"
            />
          </div>
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
            <p v-if="artist.label_records && artist.label_records.length" class="mt-4">
              <strong>Sellos Discográficos:</strong>
              <ul class="list-disc pl-5">
                <li v-for="(label, index) in label_records" :key="index">
                  <nuxt-link :to="`/label_records/${label.id}`" class="text-blue-500 hover:underline">
                    {{ label.name }} ({{ label.location }})
                  </nuxt-link>
                </li>
              </ul>
            </p>
            <p v-else class="text-gray-600 mt-4">No hay sellos discográficos disponibles.</p>
          </div>
        </div>

        <div class="mt-8">
          <h2 class="text-2xl font-semibold mb-4">Álbumes</h2>
          <div v-if="artistAlbums && artistAlbums.length">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div v-for="album in artistAlbums" :key="album.id">
                <AlbumCard :album="album" />
                <!-- Botón de compra para el álbum -->
                <button
                  class="snipcart-add-item mt-2 bg-blue-500 text-white py-2 px-4 rounded shadow"
                  :data-item-id="album.id"
                  :data-item-price="album.price"
                  :data-item-description="album.description"
                  :data-item-image="album.image"
                  :data-item-name="album.title"
                >
                  Comprar Álbum
                </button>
              </div>
            </div>
          </div>
          <p v-else class="text-gray-600">No hay álbumes disponibles.</p>
        </div>

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

        <div class="mt-8">
          <utterances-comments />
        </div>
      </div>
      <div v-else>
        <p class="text-center text-gray-600">Artista no encontrado.</p>
      </div>
    </main>

    <FooterView />
  </div>
</template>

<script>
import HeaderView from '@/components/global/HeaderView.vue';
import FooterView from '@/components/global/FooterView.vue';
import AlbumCard from '@/components/global/AlbumCard.vue';
import SongCard from '@/components/global/SongCard.vue';
import UtterancesComments from '@/components/global/UtterancesComments.vue';

export default {
  components: {
    HeaderView,
    FooterView,
    AlbumCard,
    SongCard,
    UtterancesComments, 
  },
  async asyncData({ $content, params }) {
    const artistId = parseInt(params.id);

    const artistData = await $content('artists')
      .where({ id: artistId })
      .fetch();

    if (!artistData || artistData.length === 0) {
      return { artist: null, artistAlbums: [], artistSongs: [], label_records: [] };
    }

    const artist = artistData[0];

    const allAlbums = await $content('albums').fetch();
    const artistAlbums = allAlbums.filter((album) =>
      artist.albums.includes(album.id)
    );

    let artistSongs = [];
    artistAlbums.forEach((album) => {
      artistSongs = artistSongs.concat(album.songs);
    });
    artistSongs = [...new Set(artistSongs)];

    const allRecords = await $content('label_records').fetch();
    const artistRecords = allRecords.filter((record) =>
      artist.label_records.includes(record.id)
    );

    return { artist, artistAlbums, artistSongs, label_records: artistRecords };
  },
};
</script>
