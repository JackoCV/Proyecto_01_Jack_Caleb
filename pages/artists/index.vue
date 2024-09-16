<template>
  <div class="min-h-screen flex flex-col">
    <HeaderView />

    <main class="flex-grow container mx-auto px-4 py-6">
      <h1 class="text-3xl font-bold mb-6 text-center">Artistas de Jazz</h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ArtistCard v-for="artist in artists" :key="artist.id" :artist="artist" />
      </div>
    </main>

    <FooterView />
  </div>
</template>

<script>
import HeaderView from '@/components/global/HeaderView.vue';
import FooterView from '@/components/global/FooterView.vue';
import ArtistCard from '@/components/global/ArtistCard.vue';

export default {
  components: {
    HeaderView,
    FooterView,
    ArtistCard,
  },
  async asyncData({ $content }) {
    const artists = await $content('artists').fetch();
    return { artists };
  },
};
</script>
