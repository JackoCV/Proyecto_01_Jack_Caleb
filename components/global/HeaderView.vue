<template>
  <div class="mt-[15px] flex justify-between items-center">
    <button @click="goHome" class="bg-blue-500 text-white py-2 px-4 rounded">
      TOP MÚSICA JAZZ
    </button>
    <button class="snipcart-checkout bg-green-500 text-white py-2 px-4 rounded flex items-center">
      <span class="snipcart-items-count mr-2">0</span> items in 🛒
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
