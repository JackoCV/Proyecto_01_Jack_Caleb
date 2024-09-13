<template>
  <div>
    <h1>Discográficas de Jazz</h1>
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
    const labels = await $content('label_records').fetch();
    return { labels };
  }
}
</script>
