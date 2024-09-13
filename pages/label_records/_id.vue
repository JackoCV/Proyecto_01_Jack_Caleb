<template>
  <div>
    <h1>{{ label.name }}</h1>
    <p><strong>Ubicación:</strong> {{ label.location }}</p>
    <p><strong>Fundación:</strong> {{ label.founded }}</p>
    <img :src="label.image" :alt="`Logo de ${label.name}`">

    <h2>Álbumes publicados</h2>
    <ul>
      <li v-for="album in labelAlbums" :key="album.id">
        <nuxt-link :to="`/albums/${album.id}`">{{ album.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    // Buscar la discográfica según el id del archivo JSON
    const label = await $content('label_records').where({ id: parseInt(params.id) }).fetch();

    // Buscar los álbumes asociados a esta discográfica
    const allAlbums = await $content('albums').fetch();
    const labelAlbums = allAlbums.filter(album => label[0].albums.includes(album.id));

    return { label: label[0], labelAlbums };
  }
}
</script>
