<script setup></script>

<template>
  <main class="font-nunito w-full">
    <!-- search produk -->
    <section class=""></section>
    <!-- ./search produk -->

    <!-- section umkm -->
    <section class="">
      <div class="mb-6 text-center">
        <h5 class="font-semibold font-inter text-xl">Daftar UMKM</h5>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="" v-for="(umkm, index) in umkms" :key="index">
          <div
            class="bg-white rounded-xl h-60 shadow-lg p-6 flex flex-col items-center overflow-hidden bg-cover object-cover relative"
          >
            <div class="w-16 h-16 bg-slate-100 p-1 shadow-lg rounded-full">
              <img :src="'http://localhost:8000/storage/' + umkm.photos[0].name" alt="" class="" />
            </div>
            <div class="text-center mt-4">
              <h5 class="font-bold font-inter text-base">{{ umkm.name }}</h5>
              <p class="font-normal mt-0 text-sm font-nunito">{{ umkm.description }}</p>
            </div>
            <div class="absolute bottom-4">
              <button
                class="px-4 py-1.5 bg-info-main text-white rounded-xl w-full block text-sm hover:bg-info-hover duration-300"
              >
                Lihat Produk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ./section umkm -->

    <!-- section produk -->
    <section class="py-6">
      <ProductSection :products="products">
        <div class="flex justify-between mb-6">
          <h2 class="text-xl font-inter font-semibold">Catalog</h2>
          <div class="">
            <button
              @click="this.$router.push('/product')"
              class="text-xs font-inter bg-slate-500 px-2 text-white py-1 rounded-full hover:bg-slate-600 hover:text-white duration-300"
            >
              See all
            </button>
          </div>
        </div>
      </ProductSection>
    </section>
    <!-- ./section produk -->
  </main>
</template>

<script>
import ProductSection from '../components/ProductSection.vue'
import { getProductPublicService } from '../utils/libs/services/product.public.service'
import { getUmkmPublicService } from '../utils/libs/services/umkm.public.service'
export default {
  name: 'home-view',
  data() {
    return {
      umkms: [],
      products: []
    }
  },
  components: { ProductSection },
  mounted() {
    this.getUmkm()
    this.getProduct()
  },
  methods: {
    async getUmkm() {
      const response = await getUmkmPublicService()
      this.umkms = response.data.data
    },
    async getProduct() {
      const response = await getProductPublicService()
      this.products = response.data.data
    }
  }
}
</script>
