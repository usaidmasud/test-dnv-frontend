<script setup>
import GuestHeader from './components/GuestHeader.vue'

import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<script>
export default {
  components: {
    GuestHeader
  }
}
</script>
<style>
.active {
  @apply bg-dark-main text-white;
}
</style>
