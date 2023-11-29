<template>
  <div class="flex gap-6 mb-6">
    <div class="w-2/6">
      <div class="">
        <img
          :src="'http://localhost:8000/storage/' + product?.photos[0]?.name"
          alt=""
          class="h-60"
        />
      </div>
    </div>
    <div class="w-4/6">
      <h5 class="font-bold text-xl">{{ product?.name }}</h5>
      <div class="grid grid-cols-3 divide-x-2 divide-gray-400">
        <div class="">Rating</div>
        <div class="">
          <span class="text-sm">488 Penilaian</span>
        </div>
        <div class="">
          <span class="text-sm">1.1Rb Terjual</span>
        </div>
      </div>
      <p class="text-sm my-4 max-w-sm leading-relaxed">{{ product?.description }}</p>
      <div class="my-4">
        <h5 class="font-semibold font-inter text-xl text-danger-main">
          {{ filters.formatMoney(product?.price) }}
        </h5>
      </div>
      <div class="flex justify-between gap-2">
        <button
          class="px-4 py-2 text-sm font-inter border border-primary-main rounded-lg w-full inline-flex items-center gap-1 hover:bg-primary-main duration-300 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          Masukkan Keranjang
        </button>
        <button
          class="px-4 py-2 text-sm font-inter border border-primary-main rounded-lg w-full bg-primary-main hover:bg-primary-hover duration-300 text-white"
        >
          Beli Sekarang
        </button>
      </div>
    </div>
  </div>
  <ProductSection :products="products">
    <div class="flex justify-between mb-6">
      <h2 class="text-xl font-inter font-semibold">Produk Terkait</h2>
      <div class="">
        <button
          @click="this.$router.replace('/product')"
          class="text-xs font-inter bg-slate-500 px-2 text-white py-1 rounded-full hover:bg-slate-600 hover:text-white duration-300"
        >
          See all
        </button>
      </div>
    </div>
  </ProductSection>
</template>

<script>
import {
  getProductPublicServiceById,
  getProductPublicService
} from '../utils/libs/services/product.public.service'
import ProductSection from '../components/ProductSection.vue'

export default {
  name: 'home-product-detail',
  data() {
    return {
      product: null,
      products: []
    }
  },
  components: {
    ProductSection
  },
  mounted() {
    this.fetchProductDetail(this.$route.params.id)
    this.fetchAllProduct()
  },
  updated() {
    this.fetchProductDetail(this.$route.params.id)
  },
  methods: {
    async fetchProductDetail(id) {
      const response = await getProductPublicServiceById(id)
      this.product = response.data.data
    },
    async fetchAllProduct(id) {
      const response = await getProductPublicService(id)
      this.products = response.data.data
    }
  }
}
</script>

<style></style>
