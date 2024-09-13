<template>
    <div>
      <h1>Álbumes de Jazz</h1>
      <ul>
        <li v-for="album in albums" :key="album.id">
          <nuxt-link :to="`/albums/${album.id}`">{{ album.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ $content }) {
      const albums = await $content('albums').fetch();
      return { albums };
    }
  }
  </script>
  