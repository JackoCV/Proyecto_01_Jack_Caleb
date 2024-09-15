<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <HeaderView />

    <!-- Contenido principal -->
    <main class="flex-grow container mx-auto px-4 py-6">
      <h1 class="text-3xl font-bold mb-6 text-center">Discográficas de Jazz</h1>

      <!-- Listado de Discográficas -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <LabelCard v-for="label in labels" :key="label.id" :label="label" />
      </div>
    </main>

    <!-- Footer -->
    <FooterView />
  </div>
</template>

<script>
import HeaderView from '@/components/global/HeaderView.vue';
import FooterView from '@/components/global/FooterView.vue';
import LabelCard from '@/components/global/LabelCard.vue';

export default {
  components: {
    HeaderView,
    FooterView,
    LabelCard,
  },
  async asyncData({ $content }) {
    const labels = await $content('label_records').fetch();
    return { labels };
  },
};
</script>
