<template>
    <div>
      <!-- Encabezados de las pestañas -->
      <div class="flex border-b border-gray-200">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = index"
          :class="tabClass(index)"
          class="py-2 px-4 -mb-px text-center focus:outline-none"
        >
          {{ tab.name }}
        </button>
      </div>
  
      <!-- Contenido de las pestañas con transición -->
        <div class="mt-4">
            <transition name="fade" mode="out-in">
                <div :key="activeTab">
                <slot :name="`tab-${activeTab}`"></slot>
                </div>
            </transition>
        </div>
    </div>
  </template>
  
  <script>
  export default {
  name: 'Tabs',
  props: {
    tabs: {
      type: Array,
      default: () => [
        { name: 'Artistas' },
        { name: 'Álbumes' },
        { name: 'Discográficas' },
      ],
    },
  },
  data() {
    return {
      activeTab: 0,
    };
  },
  methods: {
    tabClass(index) {
      return this.activeTab === index
        ? 'border-b-2 border-blue-500 text-blue-500'
        : 'text-gray-600 hover:text-blue-500';
    },
  },
};
  </script>
  
  <style scoped>
  /* Puedes añadir estilos adicionales aquí si lo deseas */
  </style>
  