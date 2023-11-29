<script setup>
import { RouterView } from 'vue-router'
</script>
<template>
  <div class="w-full flex justify-center bg-slate-600">
    <div class="max-w-3xl w-full min-h-screen bg-slate-100">
      <GuestHeader />
      <main class="px-10 py-6 font-nunito text-gray-700">
        <RouterView />
      </main>
    </div>
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
