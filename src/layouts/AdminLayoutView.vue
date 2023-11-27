<script setup>
import { RouterView } from 'vue-router'
</script>
<template>
  <div class="flex min-h-screen">
    <div class="w-[190px] bg-dark-main p-6 text-gray-100">
      sidebar
    </div>
    <main class="w-[calc(100%-190px)] p-6 text-gray-700">
      <RouterView />
    </main>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>
