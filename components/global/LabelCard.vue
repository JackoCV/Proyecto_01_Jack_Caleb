<template>
    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img :src="label.image" :alt="label.name" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">{{ label.name }}</h3>
        <p class="text-gray-700 mb-1"><strong>Ubicación:</strong> {{ label.location }}</p>
        <p class="text-gray-700 mb-1"><strong>Fundada en:</strong> {{ label.founded }}</p>
        <nuxt-link :to="`/label_records/${label.id}`" class="text-blue-500 hover:underline mt-2 inline-block">Ver detalles</nuxt-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LabelCard',
    props: {
      label: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  