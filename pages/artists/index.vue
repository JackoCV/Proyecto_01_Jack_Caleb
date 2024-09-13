<template>
    <div>
      <h1>Artistas de Jazz</h1>
      <ul>
        <li v-for="artist in artists" :key="artist.id">
          <!-- Asegurarse de que esté usando el 'id' del artista -->
          <nuxt-link :to="`/artists/${artist.id}`">{{ artist.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ $content }) {
      const artists = await $content('artists').fetch();
      return { artists };
    }
  }
  </script>
  