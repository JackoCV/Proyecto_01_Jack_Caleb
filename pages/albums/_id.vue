<template>
  <div class="min-h-screen flex flex-col">
    <HeaderView />

    <main class="flex-grow container mx-auto px-4 py-6">
      <div v-if="album && artist">
        <div class="flex flex-col md:flex-row items-center md:items-start">
          <div class="w-full md:w-1/3">
            <img
              :src="album.image"
              :alt="`Portada de ${album.title}`"
              class="rounded-lg shadow-lg object-cover w-full h-64 md:h-auto"
            />
          </div>
          <div class="w-full md:w-2/3 md:pl-8 mt-6 md:mt-0">
            <h1 class="text-4xl font-bold mb-4">{{ album.title }}</h1>
            <p class="text-gray-700 mb-2">
              <strong>Año de lanzamiento:</strong> {{ album.release_year }}
            </p>
            <p class="text-gray-700 mb-2">
              <strong>Artista:</strong>
              <nuxt-link :to="`/artists/${artist.id}`" class="text-blue-500 hover:underline">
                {{ album.artist }}
              </nuxt-link>
            </p>
            <h2 class="text-2xl font-semibold mt-6 mb-4">Canciones</h2>
            <div class="space-y-4">
              <SongCard
                v-for="(song, index) in album.songs"
                :key="index"
                :song="song"
              />
            </div>
          </div>
        </div>

        <div class="mt-8">
          <utterances-comments />
        </div>
      </div>
      <div v-else>
        <p class="text-center text-gray-600">Álbum o artista no encontrado.</p>
      </div>
    </main>

    <FooterView />
  </div>
</template>

<script>
import HeaderView from '@/components/global/HeaderView.vue';
import FooterView from '@/components/global/FooterView.vue';
import SongCard from '@/components/global/SongCard.vue';
import UtterancesComments from '@/components/global/UtterancesComments.vue';

export default {
  components: {
    HeaderView,
    FooterView,
    SongCard,
    UtterancesComments, 
  },
  async asyncData({ $content, params }) {
    const albumData = await $content('albums')
      .where({ id: parseInt(params.id) })
      .fetch();

    if (!albumData || albumData.length === 0) {
      return { album: null, artist: null };
    }

    const album = albumData[0];

    const artistData = await $content('artists')
      .where({ name: album.artist })
      .fetch();
    const artist = artistData.length > 0 ? artistData[0] : null;

    return { album, artist };
  },
};
</script>
