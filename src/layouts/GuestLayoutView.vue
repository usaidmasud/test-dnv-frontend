<script setup>
import { RouterView } from 'vue-router'
</script>
<template>
  <div>
    <GuestHeader />
    <main class="p-6 text-gray-700">
      <RouterView />
    </main>
  </div>
</template>

<script>
import GuestHeader from '../components/GuestHeader.vue'
export default {
  components: {
    GuestHeader
  }
}
</script>
