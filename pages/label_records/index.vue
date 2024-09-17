<template>
  <div class="min-h-screen flex flex-col">
    <HeaderView />

    <main class="flex-grow container mx-auto px-4 py-6">
      <h1 class="text-3xl font-bold mb-6 text-center">Discográficas de Jazz</h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <LabelCard v-for="label in labels" :key="label.id" :label="label" />
      </div>

      <!-- Sección de artistas -->
      <div class="mt-8">
        <h2 class="text-2xl font-semibold mb-4">Artistas</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ArtistCard v-for="artist in labelArtists" :key="artist.id" :artist="artist" />
        </div>
      </div>
    </main>

    <FooterView />
  </div>
</template>

<script>
import HeaderView from '@/components/global/HeaderView.vue';
import FooterView from '@/components/global/FooterView.vue';
import LabelCard from '@/components/global/LabelCard.vue';
import ArtistCard from '@/components/global/ArtistCard.vue'; // Componente para mostrar artistas

export default {
  components: {
    HeaderView,
    FooterView,
    LabelCard,
    ArtistCard, // Incluye el componente ArtistCard
  },
  async asyncData({ $content }) {
    const labels = await $content('label_records').fetch();
    const artists = await $content('artists').fetch();

    // Filtra artistas que estén relacionados con alguna discográfica
    const labelArtists = artists.filter(artist => artist.label);

    return { labels, labelArtists };
  },
};
</script>
