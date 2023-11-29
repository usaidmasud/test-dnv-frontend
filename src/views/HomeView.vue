<script setup></script>

<template>
  <main class="font-nunito w-full">
    <h5 class="font-bold text-xl">Selamat Datang</h5>
    <Button :label="Hello"></Button>
    <!-- <h5 class="font-black text-xl">Data UMKM</h5> -->
    <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <CardUmkm v-for="item in this.umkms" :key="item.id" :data="item"></CardUmkm>
    </div> -->
  </main>
</template>

<script>
import axios from 'axios'
import Button from '../components/Button.vue'
export default {
  name: 'home-view',
  data() {
    return {
      umkms: []
    }
  },
  components: {
    Button
  },
  mounted() {
    this.getUmkm()
  },
  methods: {
    async getUmkm() {
      await axios
        .get('http://localhost:8000/api/public/umkm')
        .then((res) => (this.umkms = res.data.data))
    }
  }
}
</script>
