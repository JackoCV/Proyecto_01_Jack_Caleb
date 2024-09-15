<template>
    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img :src="artist.image" :alt="artist.name" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">{{ artist.name }}</h3>
        <p class="text-gray-700 mb-1"><strong>Fecha de nacimiento:</strong> {{ artist.birthDate }}</p>
        <p class="text-gray-700 mb-1"><strong>Nacionalidad:</strong> {{ artist.nationality }}</p>
        <p class="text-gray-700 mb-1"><strong>Instrumento:</strong> {{ artist.instrument }}</p>
        <p class="text-gray-700 mb-1"><strong>Género:</strong> {{ artist.genre }}</p>
        <nuxt-link :to="`/artists/${artist.id}`" class="text-blue-500 hover:underline mt-2 inline-block">Ver detalles</nuxt-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ArtistCard',
    props: {
      artist: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  