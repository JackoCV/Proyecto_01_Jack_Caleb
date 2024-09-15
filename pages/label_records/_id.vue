<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <HeaderView />

    <!-- Contenido principal -->
    <main class="flex-grow container mx-auto px-4 py-6">
      <div v-if="label">
        <!-- Información de la Discográfica -->
        <div class="flex flex-col md:flex-row items-center md:items-start">
          <!-- Imagen de la Discográfica -->
          <div class="w-full md:w-1/3">
            <img
              :src="label.image"
              :alt="`Logo de ${label.name}`"
              class="rounded-lg shadow-lg object-cover w-full h-64 md:h-auto"
            />
          </div>
          <!-- Detalles de la Discográfica -->
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

        <!-- Listado de Álbumes -->
        <div class="mt-8">
          <h2 class="text-2xl font-semibold mb-4">Álbumes publicados</h2>
          <div v-if="labelAlbums && labelAlbums.length">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              <AlbumCard
                v-for="album in labelAlbums"
                :key="album.id"
                :album="album"
              />
            </div>
          </div>
          <p v-else class="text-gray-600">No hay álbumes disponibles.</p>
        </div>
      </div>
      <div v-else>
        <p class="text-center text-gray-600">Discográfica no encontrada.</p>
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

export default {
  components: {
    HeaderView,
    FooterView,
    AlbumCard,
  },
  async asyncData({ $content, params }) {
    // Buscar la discográfica según el id del archivo JSON
    const labelData = await $content('label_records')
      .where({ id: parseInt(params.id) })
      .fetch();

    // Si no encuentra la discográfica, devolvemos null
    if (!labelData || labelData.length === 0) {
      return { label: null, labelAlbums: [] };
    }

    const label = labelData[0];

    // Buscar los álbumes asociados a esta discográfica
    const allAlbums = await $content('albums').fetch();
    const labelAlbums = allAlbums.filter((album) =>
      label.albums.includes(album.id)
    );

    return { label, labelAlbums };
  },
};
</script>
