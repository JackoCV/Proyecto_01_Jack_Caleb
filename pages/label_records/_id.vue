<template>
  <div class="min-h-screen flex flex-col">
    <HeaderView />

    <main class="flex-grow container mx-auto px-4 py-6">
      <div v-if="label">
        <div class="flex flex-col md:flex-row items-center md:items-start">
          <div class="w-full md:w-1/3">
            <img
              :src="label.image"
              :alt="`Logo de ${label.name}`"
              class="rounded-lg shadow-lg object-cover w-full h-64 md:h-auto"
            />
          </div>
          <div class="w-full md:w-2/3 md:pl-8 mt-6 md:mt-0">
            <h1 class="text-4xl font-bold mb-4">{{ label.name }}</h1>
            <p class="text-gray-700 mb-2">
              <strong>Ubicación:</strong> {{ label.location }}
            </p>
            <p class="text-gray-700 mb-2">
              <strong>Fundación:</strong> {{ label.founded }}
            </p>
          </div>
        </div>

        <div class="mt-8">
          <h2 class="text-2xl font-semibold mb-4">Álbumes publicados</h2>
          <div v-if="labelAlbums && labelAlbums.length">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div v-for="album in labelAlbums" :key="album.id">
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
          <h2 class="text-2xl font-semibold mb-4">Artistas de la discográfica</h2>
          <div v-if="labelArtists && labelArtists.length">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <ArtistCard
                v-for="artist in labelArtists"
                :key="artist.id"
                :artist="artist"
              />
            </div>
          </div>
          <p v-else class="text-gray-600">No hay artistas disponibles.</p>
        </div>

        <!-- Agregar comentarios de Utterances -->
        <div class="mt-8">
          <utterances-comments />
        </div>
      </div>
      <div v-else>
        <p class="text-center text-gray-600">Discográfica no encontrada.</p>
      </div>
    </main>

    <FooterView />
  </div>
</template>

<script>
import HeaderView from '@/components/global/HeaderView.vue';
import FooterView from '@/components/global/FooterView.vue';
import AlbumCard from '@/components/global/AlbumCard.vue';
import ArtistCard from '@/components/global/ArtistCard.vue';
import UtterancesComments from '@/components/global/UtterancesComments.vue';

export default {
  components: {
    HeaderView,
    FooterView,
    AlbumCard,
    ArtistCard,
    UtterancesComments // Registramos UtterancesComments
  },
  async asyncData({ $content, params }) {
    const labelData = await $content('label_records')
      .where({ id: parseInt(params.id) })
      .fetch();

    if (!labelData || labelData.length === 0) {
      return { label: null, labelAlbums: [], labelArtists: [] };
    }

    const label = labelData[0];

    const allAlbums = await $content('albums').fetch();
    const labelAlbums = allAlbums.filter((album) =>
      label.albums.includes(album.id)
    );

    const allArtists = await $content('artists').fetch();
    const labelArtists = allArtists.filter((artist) =>
      label.artists && label.artists.includes(artist.id)
    );

    return { label, labelAlbums, labelArtists };
  }
};
</script>
