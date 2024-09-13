<template>
    <div>
      <h1>Página Principal del Catálogo de Jazz</h1>
  
      <!-- Listado de Artistas -->
      <h2>Artistas de Jazz</h2>
      <ul>
        <li v-for="artist in artists" :key="artist.id">
          <nuxt-link :to="`/artists/${artist.id}`">{{ artist.name }}</nuxt-link>
        </li>
      </ul>
  
      <!-- Listado de Álbumes -->
      <h2>Álbumes de Jazz</h2>
      <ul>
        <li v-for="album in albums" :key="album.id">
          <nuxt-link :to="`/albums/${album.id}`">{{ album.title }}</nuxt-link>
        </li>
      </ul>
  
      <!-- Listado de Discográficas -->
      <h2>Discográficas de Jazz</h2>
      <ul>
        <li v-for="label in labels" :key="label.id">
          <nuxt-link :to="`/label_records/${label.id}`">{{ label.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ $content }) {
      // Obtener la lista de artistas, álbumes y discográficas
      const artists = await $content('artists').fetch();
      const albums = await $content('albums').fetch();
      const labels = await $content('label_records').fetch();
  
      return { artists, albums, labels };
    }
  }
  </script>
  