<template>
  <div class="flex gap-6 mb-6">
    <div class="w-2/6">
      <div class="">
        <img
          :src="'http://localhost:8000/storage/' + imageActiveLink"
          alt=""
          class="h-60 object-cover border border-gray-300 rounded-lg shadow-lg"
        />
        <div class="mt-6 flex gap-2 flex-wrap">
          <div class="" v-for="(photo, index) in product?.photos" :key="index">
            <img
              @click="handleActiveImage(photo.name)"
              :src="'http://localhost:8000/storage/' + photo.name"
              alt=""
              class="w-16 h-16 border border-gray-300 rounded-lg p-2 cursor-pointer shadow-lg"
            />
          </div>
        </div>
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
      <p class="text-base my-4 max-w-sm leading-relaxed">{{ product?.description }}</p>

      <div class="my-4">
        <div class="flex mb-4">
          <a
            href="https://www.google.com/maps?q=-8.59026927279089, 116.24853979429908"
            target="_blank"
            class="text-sm font-inter hover:text-danger-main duration-300 inline-flex gap-1 py-1 px-2 border border-gray-300 rounded-full  hover:border-danger-main"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            Buka map</a
          >
        </div>
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
    <template #footer>
      <div class="flex justify-center my-6">
        <Pagination
          :currentPage="meta.page"
          :totalPages="meta.totalPage"
          @page-change="handlePageChange"
        />
      </div>
    </template>
  </ProductSection>
</template>

<script>
import {
  getProductPublicServiceById,
  getProductPublicService
} from '../utils/libs/services/product.public.service'
import ProductSection from '../components/ProductSection.vue'
import Pagination from '../components/Pagination.vue'

export default {
  name: 'home-product-detail',
  data() {
    return {
      imageActiveLink: '',
      meta: {
        page: 1,
        per_page: 3,
        totalPage: 0,
        total: 0,
        search: ''
      },
      product: null,
      products: []
    }
  },
  components: {
    ProductSection,
    Pagination
  },
  mounted() {
    this.fetchProductDetail(this.$route.params.id)
    this.getProduct(this.meta)
  },
  methods: {
    async fetchProductDetail(id) {
      const response = await getProductPublicServiceById(id)
      this.product = response.data.data
      this.imageActiveLink = this.product?.photos[0]?.name
    },
    async getProduct(params) {
      const response = await getProductPublicService(params)
      this.products = response.data.data
      this.meta.total = response.data.meta.total
      this.meta.totalPage = response.data.meta.last_page
    },
    handlePageChange(page) {
      // Handle page change logic (e.g., fetch data for the new page)
      this.meta.page = page
      this.getProduct(this.meta)
      console.log('meta', this.meta)
    },
    handleActiveImage(val) {
      this.imageActiveLink = val
      console.log(val)
    }
  }
}
</script>

<style></style>
