<template>
    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img :src="album.image" :alt="album.title" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">{{ album.title }}</h3>
        <p class="text-gray-700 mb-1"><strong>Artista:</strong> {{ album.artist }}</p>
        <p class="text-gray-700 mb-1"><strong>Año de lanzamiento:</strong> {{ album.release_year }}</p>
        <nuxt-link :to="`/albums/${album.id}`" class="text-blue-500 hover:underline mt-2 inline-block">Ver detalles</nuxt-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AlbumCard',
    props: {
      album: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  