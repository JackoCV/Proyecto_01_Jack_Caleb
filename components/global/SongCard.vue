<template>
    <div class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      <div class="flex items-center">
        <div class="w-10 h-10 bg-blue-500 text-white flex-shrink-0 rounded-full flex items-center justify-center mr-4">
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M9 4.804V13a2 2 0 11-2-2V5.204l7-1.75V11a2 2 0 11-2-2V3l-3 .75z"
            />
          </svg>
        </div>
        <div>
          <h3 class="text-lg font-semibold">{{ song }}</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SongCard',
    props: {
      song: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  