<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <HeaderView />

    <!-- Contenido principal -->
    <main class="flex-grow container mx-auto px-4 py-6">
      <h1 class="text-3xl font-bold mb-6 text-center">Catálogo Mejor  Música Jazz</h1>

      <!-- Componente de Pestañas -->
      <Tabs :tabs="[{ name: 'Artistas' }, { name: 'Álbumes' }, { name: 'Discográficas' }]">
        <!-- Contenido de la pestaña "Artistas" -->
        <template #tab-0>
          <section>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <ArtistCard v-for="artist in artists" :key="artist.id" :artist="artist" />
            </div>
          </section>
        </template>

        <!-- Contenido de la pestaña "Álbumes" -->
        <template #tab-1>
          <section>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <AlbumCard v-for="album in albums" :key="album.id" :album="album" />
            </div>
          </section>
        </template>

        <!-- Contenido de la pestaña "Discográficas" -->
        <template #tab-2>
          <section>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <LabelCard v-for="label in labels" :key="label.id" :label="label" />
            </div>
          </section>
        </template>
      </Tabs>
    </main>

    <!-- Footer -->
    <FooterView />
  </div>
</template>

<script>
import HeaderView from '@/components/global/HeaderView.vue';
import FooterView from '@/components/global/FooterView.vue';
import AlbumCard from '@/components/global/AlbumCard.vue';
import ArtistCard from '@/components/global/ArtistCard.vue';
import LabelCard from '@/components/global/LabelCard.vue';
import Tabs from '@/components/global/Tabs.vue';

export default {
  components: {
    HeaderView,
    FooterView,
    AlbumCard,
    ArtistCard,
    LabelCard,
    Tabs,
  },
  async asyncData({ $content }) {
    // Obtener la lista de artistas, álbumes y discográficas
    const artists = await $content('artists').fetch();
    const albums = await $content('albums').fetch();
    const labels = await $content('label_records').fetch();

    return { artists, albums, labels };
  },
};
</script>
