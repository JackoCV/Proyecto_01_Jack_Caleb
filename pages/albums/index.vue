<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <HeaderView />

    <!-- Contenido principal -->
    <main class="flex-grow container mx-auto px-4 py-6">
      <h1 class="text-3xl font-bold mb-6 text-center">Álbumes de Jazz</h1>

      <!-- Listado de Álbumes -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <AlbumCard v-for="album in albums" :key="album.id" :album="album" />
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
  async asyncData({ $content }) {
    const albums = await $content('albums').fetch();
    return { albums };
  },
};
</script>
