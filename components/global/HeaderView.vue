<template>
  <div class="mt-[15px]">
    <button @click="goHome" class="w-full bg-blue-500 text-white py-2 px-4 rounded">
      TOP MÚSICA JAZZ
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      window.location.href = '/';
    }
  }
}
</script>
